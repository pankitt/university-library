import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import config from '@/lib/config';

const resend = new Resend(config.env.resendToken);

type EmailPayload = {
  from: string;
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  cc?: string[];
  bcc?: string[];
  replyTo?: string[];
};

export async function POST(req: Request) {
  const body: EmailPayload = await req.json();

  const { from, to, subject, html, text = '', cc, bcc, replyTo } = body;

  if (!from || !to || !subject || !html) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    const result = await resend.emails.send({
      from,
      to,
      subject,
      html,
      text,
      cc,
      bcc,
      replyTo
    });

    return NextResponse.json({ success: true, result }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
