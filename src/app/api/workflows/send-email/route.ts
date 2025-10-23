import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import config from '@/lib/config';

const resend = new Resend(config.env.resendToken);

type EmailPayload = {
  from: string;
  to: string;
  subject: string;
  html: string;
};

export async function POST(req: Request) {
  try {
    const body: EmailPayload = await req.json();

    if (!body.from || !body.to || !body.subject || !body.html) {
      return NextResponse.json(
        { error: 'Missing required fields: from, to, subject, or html' },
        { status: 400 }
      );
    }

    const result = await resend.emails.send(body);
    return NextResponse.json({ success: true, result }, { status: 200 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
