import NextAuth, { User } from 'next-auth';
import {
  // and,
  eq
} from 'drizzle-orm';
import { compare } from 'bcryptjs';
import CredentialProvider from 'next-auth/providers/credentials';
import { db } from '@/database/drizzle';
import { users } from '@/database/schema';

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: 'jwt' },
  providers: [
    CredentialProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) return null;

        // const { email, password } = credentials as {
        //   email: string;
        //   password: string;
        // };

        const user = await db
          .select()
          .from(users)
          // .where(
          //   and(
          //     eq(users.email, credentials.email.toString()),
          //     eq(users.password, credentials.password.toString())
          //   )
          // )
          .where(eq(users.email, credentials.email.toString()))
          .limit(1)
          .then((res) => res[0]);

        if (!user) return null;

        const isPasswordValid = await compare(credentials.password.toString(), user.password);
        if (!isPasswordValid) return null;

        return {
          id: user.id.toString(),
          name: user.fullName,
          email: user.email,
          role: user.role
        } as User;
      }
    })
  ],
  pages: { signIn: '/sign-in' },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
      }
      return session;
    }
  }
});
