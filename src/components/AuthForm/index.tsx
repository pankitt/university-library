'use client';

import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { DefaultValues, SubmitHandler, useForm, FieldValues, Path } from 'react-hook-form';
import { z } from 'zod';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { FIELD_NAMES, FIELD_TYPES } from '@/constants';
import ImageUpload from '@/components/ImageUpload';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

interface Props<T extends FieldValues> {
  schema: z.ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
  type: 'SIGN_IN' | 'SIGN_UP';
}

const AuthForm = <T extends FieldValues>({ type, schema, defaultValues, onSubmit }: Props<T>) => {
  const router = useRouter();
  const isSignIn = type === 'SIGN_IN';

  const form = useForm<T>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(schema as z.ZodType<T, any, any>),
    defaultValues: defaultValues as DefaultValues<T>
  });

  const handleSubmit: SubmitHandler<T> = async (data: T) => {
    const result = await onSubmit(data);

    if (result.success) {
      toast.success(isSignIn ? 'Signed in successfully!' : 'Account created successfully!');

      router.push('/');
    } else {
      toast.error(
        `${isSignIn ? 'Failed to sign in.' : 'Failed to create account.'} ${result.error ?? 'An unknown error occurred.'}`
      );
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="tex-2xl font-semibold text-white">
        {isSignIn ? 'Welcome back to BookWise' : 'Create you library account'}
      </h1>
      <p className="text-neutral-100">
        {isSignIn
          ? 'Log in to your existing account using your email address.'
          : 'Create an account to get started with BookWise.'}
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 w-full">
          {Object.keys(defaultValues).map((field) => (
            <FormField
              key={field}
              control={form.control}
              name={field as Path<T>}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">
                    {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}
                  </FormLabel>
                  <FormControl>
                    {field.name === 'universityCard' ? (
                      <ImageUpload onFileChange={field.onChange} />
                    ) : (
                      <Input
                        className="form-input"
                        required
                        placeholder=""
                        type={FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]}
                        {...field}
                      />
                    )}
                  </FormControl>
                  {/*<FormDescription>
                    This is your public display name.
                  </FormDescription>*/}
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button type="submit" className="form-btn">
            {isSignIn ? 'Sign In' : 'Create Account'}
          </Button>
        </form>
      </Form>

      <p className="text-center text-sm font-medium">
        {isSignIn ? "Don't have an account?" : 'Already have an account? '}
        <Link
          href={isSignIn ? '/sign-up' : '/sign-in'}
          className="underline font-bold text-primary"
        >
          {isSignIn ? 'Sign Up' : 'Sign In'}
        </Link>
      </p>
    </div>
  );
};
export default AuthForm;
