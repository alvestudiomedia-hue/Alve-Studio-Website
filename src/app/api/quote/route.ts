import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value.replace(
    /[&<>'"]/g,
    (char) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;',
      })[char]!,
  );
}

function createTicketId(): string {
  const date = new Date().toISOString().slice(0, 10).replaceAll('-', '');
  const suffix = crypto.randomUUID().slice(0, 6).toUpperCase();
  return `ALV-QTE-${date}-${suffix}`;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid request body' },
      { status: 400 },
    );
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json(
      { success: false, message: 'Form submission data is missing.' },
      { status: 400 },
    );
  }

  const values = body as Record<string, unknown>;
  const fullName = typeof values.fullName === 'string' ? values.fullName.trim() : '';
  const email = typeof values.email === 'string' ? values.email.trim() : '';
  const whatsappNumber = typeof values.whatsappNumber === 'string' ? values.whatsappNumber.trim() : '';
  const budgetRange = typeof values.budgetRange === 'string' ? values.budgetRange.trim() : '';
  const packageName = typeof values.packageName === 'string' ? values.packageName.trim() : '';
  const categoryTitle = typeof values.categoryTitle === 'string' ? values.categoryTitle.trim() : '';
  const projectNotes = typeof values.projectNotes === 'string' ? values.projectNotes.trim() : '';

  const errors: Record<string, string> = {};

  if (!fullName) {
    errors.fullName = 'Full name is required.';
  } else if (fullName.length > 120) {
    errors.fullName = 'Full name must be 120 characters or fewer.';
  }

  if (!email) {
    errors.email = 'Email address is required.';
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  const phoneDigits = whatsappNumber.replace(/\D/g, '');
  if (!whatsappNumber) {
    errors.whatsappNumber = 'WhatsApp number is required.';
  } else if (phoneDigits.length < 7 || phoneDigits.length > 20) {
    errors.whatsappNumber = 'Please enter a valid WhatsApp number (at least 7 digits).';
  }

  if (!packageName) {
    errors.packageName = 'Please select a product or package.';
  }

  if (!budgetRange) {
    errors.budgetRange = 'Please select a budget range.';
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { success: false, message: 'Please correct the highlighted fields.', fieldErrors: errors },
      { status: 400 },
    );
  }

  const ticketId = createTicketId();
  const resendApiKey = process.env.RESEND_API_KEY;
  const adminEmail = process.env.ADMIN_EMAIL || 'hello@alvestudioagency.com';
  const emailFrom = process.env.EMAIL_FROM || 'Alve Studio <hello@alvestudioagency.com>';

  // If Resend is configured, send the notification email
  if (resendApiKey) {
    try {
      const resend = new Resend(resendApiKey);

      const htmlContent = `<!doctype html>
<html lang="en">
  <body style="margin:0;background:#f6f2fa;font-family:Arial,sans-serif;color:#21182b">
    <div style="max-width:620px;margin:0 auto;padding:32px 16px">
      <div style="background:#ffffff;border:1px solid #e8dff0;border-radius:12px;overflow:hidden">
        <div style="background:#3f2157;padding:24px 28px;color:#ffffff">
          <div style="font-size:12px;letter-spacing:1.4px;text-transform:uppercase;opacity:.8">Alve Studio · Quote Inquiry</div>
          <h1 style="font-size:24px;line-height:1.3;margin:8px 0 0">New Quote Request</h1>
          <div style="margin-top:10px;font-size:15px;font-weight:600">Ticket #${escapeHtml(ticketId)}</div>
        </div>
        <div style="padding:28px">
          <h2 style="font-size:16px;margin:0 0 12px;color:#6f3f8f">Package Requested</h2>
          <div style="padding:14px;background:#f8f5fb;border-left:4px solid #6f3f8f;border-radius:6px;font-size:15px;font-weight:bold;margin-bottom:20px">
            ${escapeHtml(packageName)} ${categoryTitle ? `(${escapeHtml(categoryTitle)})` : ''}
          </div>

          <h2 style="font-size:16px;margin:0 0 12px;color:#6f3f8f">Client Details</h2>
          <table role="presentation" style="width:100%;border-collapse:collapse;font-size:14px">
            <tr>
              <td style="padding:8px 12px 8px 0;color:#6b6475;width:140px">Name:</td>
              <td style="padding:8px 0;font-weight:600">${escapeHtml(fullName)}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px 8px 0;color:#6b6475">Email:</td>
              <td style="padding:8px 0;font-weight:600"><a href="mailto:${escapeHtml(email)}" style="color:#6f3f8f">${escapeHtml(email)}</a></td>
            </tr>
            <tr>
              <td style="padding:8px 12px 8px 0;color:#6b6475">WhatsApp:</td>
              <td style="padding:8px 0;font-weight:600"><a href="https://wa.me/${phoneDigits}" style="color:#25D366;font-weight:bold">${escapeHtml(whatsappNumber)}</a></td>
            </tr>
            <tr>
              <td style="padding:8px 12px 8px 0;color:#6b6475">Budget:</td>
              <td style="padding:8px 0;font-weight:600">${escapeHtml(budgetRange)}</td>
            </tr>
          </table>

          ${
            projectNotes
              ? `<h2 style="font-size:16px;margin:24px 0 10px;color:#6f3f8f">Project Notes</h2>
                 <div style="padding:16px;background:#f8f5fb;border-radius:8px;white-space:pre-wrap;font-size:14px;line-height:1.6">${escapeHtml(
                   projectNotes,
                 )}</div>`
              : ''
          }
        </div>
      </div>
    </div>
  </body>
</html>`;

      await resend.emails.send({
        from: emailFrom,
        to: [adminEmail],
        replyTo: email,
        subject: `New Quote Request: ${packageName} — ${fullName} (#${ticketId})`,
        html: htmlContent,
      });
    } catch (emailError) {
      console.error('Failed to send quote notification email via Resend:', emailError);
      // We still return success to the user with their ticket ID so they aren't blocked
    }
  } else {
    console.log('Quote submission received in dev mode (RESEND_API_KEY not configured):', {
      ticketId,
      fullName,
      email,
      whatsappNumber,
      budgetRange,
      packageName,
      categoryTitle,
    });
  }

  return NextResponse.json({
    success: true,
    message: 'Your quote request has been received. Our team will contact you shortly.',
    ticketId,
    client: {
      fullName,
      packageName,
      whatsappNumber,
      budgetRange,
    },
  });
}
