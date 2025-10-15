'use server';

import { eq } from 'drizzle-orm';
import { hash } from 'bcryptjs';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import ratelimit from '@/lib/ratelimit';
import { db } from '@/database/drizzle';
import { users } from '@/database/schema';
import { signIn } from '@/auth';

export const signInWithCredentials = async (
  params: Pick<AuthCredentials, 'email' | 'password'>
) => {
  const { email, password } = params;

  const ip = (await headers()).get('x-forwarded-for') || '127.0.0.1';
  const { success } = await ratelimit.limit(ip);

  if (!success) return redirect('/too-fast');

  try {
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false
    });

    if (result?.error) {
      return { success: false, error: result.error };
    }

    return { success: true };
  } catch (error) {
    console.error('Sig-in error:', error);
    return { success: false, error: 'Sig-in error' };
  }

  // if (!user) {
  //   throw new Error('Invalid email or password');
  // }
};

export const signUp = async (params: AuthCredentials) => {
  // If formData is used
  // const fullName = formData.get('fullName')?.toString();
  // const email = formData.get('email')?.toString();
  // const universityId = formData.get('universityId')?.toString();
  // const password = formData.get('password')?.toString();
  // const universityCard = formData.get('universityCard')?.toString();
  //
  // if (!fullName || !email || !universityId || !password || !universityCard) {
  //   throw new Error('All fields are required');
  // }
  const { fullName, email, universityId, password, universityCard } = params;

  const ip = (await headers()).get('x-forwarded-for') || '127.0.0.1';
  const { success } = await ratelimit.limit(ip);

  if (!success) return redirect('/too-fast');

  // Check if user already exists
  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1)
    .then((res) => res[0]);

  if (existingUser) {
    // throw new Error('User with this email already exists');
    return { success: false, error: 'User with this email already exists' };
  }

  // Hash the password before storing it
  const hashedPassword = await hash(password, 10);

  try {
    // Insert new user into the database
    await db.insert(users).values({
      fullName,
      email,
      universityId,
      password: hashedPassword,
      universityCard
    });

    await signInWithCredentials({ email, password });

    return { success: true };
  } catch (error) {
    console.error('Sign-up error:', error);
    return { success: false, error: 'Sign-up error' };
  }
};
