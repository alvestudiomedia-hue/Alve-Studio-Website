export type QuoteConfirmationSubmission = {
  fullName: string;
  packageName: string;
};

function escapeHtml(value: string): string {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;',
      })[character]!,
  );
}

export function renderQuoteConfirmationEmail(
  submission: QuoteConfirmationSubmission,
  ticketId: string,
  clientPortalUrl: string,
): { html: string; text: string } {
  const safeName = escapeHtml(submission.fullName);
  const safePackageName = escapeHtml(submission.packageName);
  const safeTicketId = escapeHtml(ticketId);
  const safePortalUrl = escapeHtml(clientPortalUrl);

  return {
    html: `<!doctype html>
<html lang="en">
  <body style="margin:0;background:#f6f2fa;font-family:Arial,sans-serif;color:#21182b">
    <div style="max-width:640px;margin:0 auto;padding:32px 16px">
      <div style="background:#ffffff;border:1px solid #e8dff0;border-radius:12px;overflow:hidden">
        <div style="background:#3f2157;padding:24px 28px;color:#ffffff">
          <div style="font-size:12px;letter-spacing:1.4px;text-transform:uppercase;opacity:.8">Alve Studio</div>
          <h1 style="font-size:24px;line-height:1.3;margin:8px 0 0">We received your request</h1>
        </div>
        <div style="padding:28px;font-size:15px;line-height:1.6">
          <p>Hi ${safeName},</p>
          <p>Thanks for reaching out to Alve Studio! We have received your quote request for <strong>${safePackageName}</strong> and logged it under ticket number <strong>#${safeTicketId}</strong>.</p>
          <p style="margin-bottom:8px"><strong>What to expect:</strong></p>
          <p style="margin:0 0 8px">Our team is reviewing the details of your request.</p>
          <p style="margin:0 0 16px">A team member will update you within 4 to 12 hours.</p>
          <p>If you need to add details, context, or attachments to this request in the meantime, simply reply directly to this email or visit our website at <a href="${safePortalUrl}" style="color:#6f3f8f">${safePortalUrl}</a>.</p>
          <p>Best regards,<br />Alve Studio Team</p>
        </div>
      </div>
    </div>
  </body>
</html>`,
    text: `Alve Studio

We received your request

Hi ${submission.fullName},

Thanks for reaching out to Alve Studio! We have received your quote request for ${submission.packageName} and logged it under ticket number #${ticketId}.

What to expect:
Our team is reviewing the details of your request.
A team member will update you within 4 to 12 hours.

If you need to add details, context, or attachments to this request in the meantime, simply reply directly to this email or visit our website at ${clientPortalUrl}.

Best regards,
Alve Studio Team`,
  };
}
