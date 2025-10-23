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
  const body: EmailPayload = await req.json();

  if (!body.from || !body.to || !body.subject || !body.html) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    const result = await resend.emails.send(body);
    return NextResponse.json({ success: true, result }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
