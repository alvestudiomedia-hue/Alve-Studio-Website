import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import {
  processContactSubmission,
  type ContactEmailSender,
} from '@/lib/contact/contact-email';

export const runtime = 'nodejs';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FROM_PATTERN = /^(?:[^<>]+\s*)?<([^\s<>@]+@[^\s<>@]+\.[^\s<>@]+)>$|^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getEmailConfiguration() {
  const resendApiKey = process.env.RESEND_API_KEY;
  const adminEmail = process.env.ADMIN_EMAIL;
  const emailFrom = process.env.EMAIL_FROM;
  const clientPortalUrl = process.env.CLIENT_PORTAL_URL || 'https://alvestudioagency.com';

  if (!resendApiKey || !adminEmail || !emailFrom) {
    throw new Error('Required contact email environment variables are missing.');
  }

  if (!EMAIL_PATTERN.test(adminEmail) || !FROM_PATTERN.test(emailFrom)) {
    throw new Error('Contact email environment variables are malformed.');
  }

  return { resendApiKey, adminEmail, emailFrom, clientPortalUrl };
}

function createTicketId(): string {
  const date = new Date().toISOString().slice(0, 10).replaceAll('-', '');
  const suffix = crypto.randomUUID().slice(0, 8).toUpperCase();
  return `ALV-${date}-${suffix}`;
}

export async function POST(request: Request) {
  console.log('Contact form submission received');

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid request body' },
      { status: 400 },
    );
  }

  let config: ReturnType<typeof getEmailConfiguration>;
  try {
    config = getEmailConfiguration();
  } catch (error) {
    console.error('Contact email configuration failed:', {
      message: error instanceof Error ? error.message : 'Unknown configuration error',
    });
    return NextResponse.json(
      { success: false, message: 'Unable to send email' },
      { status: 500 },
    );
  }

  const resend = new Resend(config.resendApiKey);
  const sendEmail: ContactEmailSender = async (email) => {
    console.log('Attempting to send contact email');
    return resend.emails.send(email);
  };

  const ticketId = createTicketId();
  const result = await processContactSubmission(body, config, sendEmail, ticketId);

  if (!result.success) {
    if (result.providerError) {
      console.error('Contact email failed:', result.providerError);
    }
    return NextResponse.json(
      {
        success: false,
        message: result.message,
        ...(result.fieldErrors ? { fieldErrors: result.fieldErrors } : {}),
      },
      { status: result.status },
    );
  }

  console.log('Contact emails sent successfully:', {
    emailId: result.emailId,
    ticketId: result.ticketId,
  });
  return NextResponse.json({
    success: true,
    message: 'Email sent successfully',
    emailId: result.emailId,
    ticketId: result.ticketId,
  });
}
