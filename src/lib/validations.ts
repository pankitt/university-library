import { z } from 'zod';

export const signUpSchema = z.object({
  fullName: z.string().min(3, { message: 'Full name must be at least 3 characters.' }),
  email: z.email('Email is invalid.'),
  universityId: z.coerce.number(),
  universityCard: z.string().nonempty('University ID Card is required'),
  password: z.string().min(8, { message: 'Password must be at least 8 characters.' })
});

export const signInSchema = z.object({
  email: z.email('Email is invalid.'),
  password: z.string().min(8, { message: 'Password must be at least 8 characters.' })
});
