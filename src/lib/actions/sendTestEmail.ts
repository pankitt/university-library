'use server';

import { sendEmail } from '@/lib/workflow';

export async function sendTestEmail() {
  await sendEmail({
    email: 'delfa07@gmail.com',
    subject: 'Hello!',
    message: '<p>Hello! This is tested letter QStash + Resend.</p>'
  });
}
