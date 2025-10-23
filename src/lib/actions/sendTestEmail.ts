'use server';

import { workflowClient } from '@/lib/workflow';
import config from '@/lib/config';

export async function sendTestEmail() {
  await workflowClient.trigger({
    url: `${config.env.prodApiEndpoint}/api/workflows/send-email`,
    body: {
      from: 'JS Mastery <onboarding@resend.dev>',
      to: 'delfa07@gmail.com',
      subject: 'Hello!',
      html: '<p>Hello! This is triggered workflow via Upstash.</p>',
      text: 'Hello! This is triggered workflow via Upstash.'
    }
  });
}
