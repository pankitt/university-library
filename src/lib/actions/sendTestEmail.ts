'use server';

import config from '@/lib/config';

export async function sendTestEmail() {
  try {
    const res = await fetch(`${config.env.prodApiEndpoint}/api/workflows/send-email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'JS Mastery <onboarding@resend.dev>',
        to: 'delfa07@gmail.com',
        subject: 'Hello!',
        html: '<p>Hello! This is triggered directly (prod).</p>',
        text: 'Hello! This is test Email.'
      })
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
      return { ok: false, error: data.error || 'Unknown error' };
    }

    return { ok: true };
  } catch (error: any) {
    return { ok: false, error: error.message };
  }
}
