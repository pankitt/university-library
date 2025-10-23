import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import config from '@/lib/config';

const resend = new Resend(config.env.resendToken);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { from, to, subject, html, text, cc, bcc, replyTo } = body;

    if (!from || !to || !subject || !html) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: from, to, subject, html' },
        { status: 400 }
      );
    }

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

    if (!result?.data?.id) {
      return NextResponse.json(
        { success: false, error: result?.error || 'Resend failed' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, result: result.data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
