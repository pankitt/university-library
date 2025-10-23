'use server';

import { sendEmail } from '@/lib/workflow';

export async function sendTestEmail() {
  return await sendEmail({
    email: 'delfa07@gmail.com',
    subject: 'Hello!',
    message: '<p>Hello! This is a tested letter via QStash + Resend.</p>'
  });
}
