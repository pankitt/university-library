import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';
import { IBMPlexSans, BebasNeue } from '@/app/fonts';
import { auth } from '@/auth';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

export const metadata: Metadata = {
  title: 'BookWise',
  description: 'BookWise is a book borrowing management solution.'
};

const RootLayout = async ({
  children
}: Readonly<{
  children: ReactNode;
}>) => {
  const session = await auth();

  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body className={`${IBMPlexSans.className} ${BebasNeue.variable} antialiased dark`}>
          {children}

          <Toaster richColors />
        </body>
      </SessionProvider>
    </html>
  );
};

export default RootLayout;
