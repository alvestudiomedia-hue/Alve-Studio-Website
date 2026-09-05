import {
  getBudgetLabel,
  getBudgetOptions,
} from './budget-options';

export type ContactSubmission = {
  fullName: string;
  company: string;
  requiredService: string;
  projectDetails: string;
  workEmail: string;
  phoneNumber: string;
  projectBudget: string;
  privacyPolicy: true;
  preferredDates: string[];
};

export type ContactEmailRequest = {
  from: string;
  to: string[];
  replyTo?: string;
  subject: string;
  html: string;
  text: string;
};

type ProviderError = {
  message: string;
  name?: string;
  statusCode?: number;
};

export type ContactEmailSender = (
  email: ContactEmailRequest,
) => Promise<{
  data: { id?: string } | null;
  error: unknown | null;
}>;

type ContactEmailConfig = {
  adminEmail: string;
  emailFrom: string;
  clientPortalUrl: string;
};

type SubmissionResult =
  | { success: true; emailId: string; ticketId: string }
  | {
      success: false;
      status: 400 | 500;
      message: string;
      fieldErrors?: Record<string, string>;
      providerError?: ProviderError;
    };

const SERVICE_LABELS: Record<string, string> = {
  'web-development': 'Web Development',
  'field-marketing': 'Field Marketing',
  'project-delivery': 'Project Delivery',
  'growth-marketing': 'Growth & Marketing',
  'qa-testing': 'QA & Testing',
  'creative-services': 'Creative Services',
};

const ALLOWED_FIELDS = new Set([
  'fullName',
  'company',
  'requiredService',
  'projectDetails',
  'workEmail',
  'phoneNumber',
  'projectBudget',
  'privacyPolicy',
  'preferredDates',
]);

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ISO_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

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

function readString(
  input: Record<string, unknown>,
  field: string,
  label: string,
  maximumLength: number,
  errors: Record<string, string>,
  required: boolean,
): string {
  const value = input[field];

  if (typeof value !== 'string') {
    if (required || value !== undefined) {
      errors[field] = `${label} must be text.`;
    }
    return '';
  }

  const trimmed = value.trim();
  if (required && !trimmed) {
    errors[field] = `${label} is required.`;
  } else if (trimmed.length > maximumLength) {
    errors[field] = `${label} must be ${maximumLength} characters or fewer.`;
  }

  return trimmed;
}

function isRealIsoDate(value: string): boolean {
  if (!ISO_DATE_PATTERN.test(value)) return false;
  const date = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(date.valueOf()) && date.toISOString().startsWith(value);
}

export function validateContactSubmission(
  input: unknown,
):
  | { success: true; data: ContactSubmission }
  | { success: false; fieldErrors: Record<string, string> } {
  if (!input || typeof input !== 'object' || Array.isArray(input)) {
    return { success: false, fieldErrors: { form: 'A valid form submission is required.' } };
  }

  const values = input as Record<string, unknown>;
  const fieldErrors: Record<string, string> = {};

  const unknownFields = Object.keys(values).filter((field) => !ALLOWED_FIELDS.has(field));
  if (unknownFields.length > 0) {
    fieldErrors.form = `Unsupported form field${unknownFields.length === 1 ? '' : 's'}: ${unknownFields.join(', ')}.`;
  }

  const fullName = readString(values, 'fullName', 'Full name', 120, fieldErrors, true);
  const company = readString(values, 'company', 'Company', 160, fieldErrors, false);
  const requiredService = readString(
    values,
    'requiredService',
    'Required service',
    60,
    fieldErrors,
    true,
  );
  const projectDetails = readString(
    values,
    'projectDetails',
    'Project details',
    5_000,
    fieldErrors,
    false,
  );
  const workEmail = readString(values, 'workEmail', 'Work email', 254, fieldErrors, true);
  const phoneNumber = readString(
    values,
    'phoneNumber',
    'Phone number',
    40,
    fieldErrors,
    true,
  );
  const projectBudget = readString(
    values,
    'projectBudget',
    'Project budget',
    40,
    fieldErrors,
    true,
  );

  if (workEmail && !EMAIL_PATTERN.test(workEmail)) {
    fieldErrors.workEmail = 'Enter a valid email address.';
  }

  const phoneDigits = phoneNumber.replace(/\D/g, '');
  if (phoneNumber && (phoneDigits.length < 7 || phoneDigits.length > 20)) {
    fieldErrors.phoneNumber = 'Enter a valid phone number.';
  }

  if (requiredService && !SERVICE_LABELS[requiredService]) {
    fieldErrors.requiredService = 'Select a valid service.';
  }

  if (
    projectBudget &&
    requiredService &&
    SERVICE_LABELS[requiredService] &&
    !getBudgetOptions(requiredService).some((option) => option.value === projectBudget)
  ) {
    fieldErrors.projectBudget = 'Select a valid budget range.';
  }

  if (values.privacyPolicy !== true) {
    fieldErrors.privacyPolicy = 'You must agree to the Privacy Policy.';
  }

  let preferredDates: string[] = [];
  if (
    !Array.isArray(values.preferredDates) ||
    values.preferredDates.some((date) => typeof date !== 'string')
  ) {
    fieldErrors.preferredDates = 'Preferred dates must be a list of dates.';
  } else {
    preferredDates = values.preferredDates.map((date) => date.trim());
    if (preferredDates.length < 1 || preferredDates.length > 3) {
      fieldErrors.preferredDates = 'Select between 1 and 3 preferred dates.';
    } else if (
      preferredDates.some((date) => !isRealIsoDate(date)) ||
      new Set(preferredDates).size !== preferredDates.length
    ) {
      fieldErrors.preferredDates = 'Select valid, non-duplicate preferred dates.';
    }
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { success: false, fieldErrors };
  }

  return {
    success: true,
    data: {
      fullName,
      company,
      requiredService,
      projectDetails,
      workEmail,
      phoneNumber,
      projectBudget,
      privacyPolicy: true,
      preferredDates,
    },
  };
}

function detailRow(label: string, value: string): string {
  return `<tr>
    <td style="padding:8px 16px 8px 0;color:#6b6475;font-size:14px;vertical-align:top;width:145px">${escapeHtml(label)}</td>
    <td style="padding:8px 0;color:#21182b;font-size:14px;font-weight:600;vertical-align:top">${escapeHtml(value || 'Not provided')}</td>
  </tr>`;
}

export function renderContactEmail(
  submission: ContactSubmission,
  ticketId: string,
): { html: string; text: string } {
  const service = `${SERVICE_LABELS[submission.requiredService]} (${submission.requiredService})`;
  const budget = `${getBudgetLabel(submission.projectBudget) ?? submission.projectBudget} (${submission.projectBudget})`;
  const dates = submission.preferredDates.length
    ? submission.preferredDates.join(', ')
    : 'Not provided';
  const details = submission.projectDetails || 'Not provided';
  const safeTicketId = escapeHtml(ticketId);

  const html = `<!doctype html>
<html lang="en">
  <body style="margin:0;background:#f6f2fa;font-family:Arial,sans-serif;color:#21182b">
    <div style="max-width:640px;margin:0 auto;padding:32px 16px">
      <div style="background:#ffffff;border:1px solid #e8dff0;border-radius:12px;overflow:hidden">
        <div style="background:#3f2157;padding:24px 28px;color:#ffffff">
          <div style="font-size:12px;letter-spacing:1.4px;text-transform:uppercase;opacity:.8">Alve Studio website</div>
          <h1 style="font-size:24px;line-height:1.3;margin:8px 0 0">New Contact Form Submission</h1>
          <div style="margin-top:12px;font-size:16px;font-weight:600">Ticket #${safeTicketId}</div>
        </div>
        <div style="padding:28px">
          <h2 style="font-size:17px;margin:0 0 12px">Customer information</h2>
          <table role="presentation" style="width:100%;border-collapse:collapse">
            ${detailRow('Ticket number', ticketId)}
            ${detailRow('Name', submission.fullName)}
            ${detailRow('Email', submission.workEmail)}
            ${detailRow('Phone', submission.phoneNumber)}
            ${detailRow('Company', submission.company)}
          </table>

          <hr style="border:0;border-top:1px solid #e8dff0;margin:24px 0" />
          <h2 style="font-size:17px;margin:0 0 12px">Project information</h2>
          <table role="presentation" style="width:100%;border-collapse:collapse">
            ${detailRow('Required service', service)}
            ${detailRow('Project budget', budget)}
            ${detailRow('Preferred dates', dates)}
          </table>

          <h2 style="font-size:17px;margin:24px 0 10px">Project details</h2>
          <div style="padding:16px;background:#f8f5fb;border-radius:8px;white-space:pre-wrap;font-size:14px;line-height:1.6">${escapeHtml(details)}</div>
        </div>
      </div>
    </div>
  </body>
</html>`;

  const text = `New Contact Form Submission
Ticket number: #${ticketId}

Customer information
Name: ${submission.fullName}
Email: ${submission.workEmail}
Phone: ${submission.phoneNumber}
Company: ${submission.company || 'Not provided'}

Project information
Required service: ${service}
Project budget: ${budget}
Preferred dates: ${dates}

Project details
${details}`;

  return { html, text };
}

export function renderClientConfirmationEmail(
  submission: ContactSubmission,
  ticketId: string,
  clientPortalUrl: string,
): { html: string; text: string } {
  const safeName = escapeHtml(submission.fullName);
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
          <p>Thanks for reaching out to Alve Studio. We have received your submission and logged it under ticket number <strong>#${safeTicketId}</strong>.</p>
          <p><strong>What to expect:</strong><br />Our team is reviewing the details of your request.<br />A team member will update you within 4 to 12 hours.</p>
          <p><strong>Please Note:</strong> This is an automated notification from an unmonitored mailbox. Please do not reply directly to this email. You can check ticket updates anytime via your <a href="${safePortalUrl}" style="color:#6f3f8f">Client Portal</a>.</p>
          <p>Best regards,<br />Alve Studio Team</p>
        </div>
      </div>
    </div>
  </body>
</html>`,
    text: `Hi ${submission.fullName},

Thanks for reaching out to Alve Studio. We have received your submission and logged it under ticket number #${ticketId}.

What to expect:
Our team is reviewing the details of your request.
A team member will update you within 4 to 12 hours.

Please Note: This is an automated notification from an unmonitored mailbox. Please do not reply directly to this email. 

Best regards,
Alve Studio Team`,
  };
}

function normaliseProviderError(error: unknown): ProviderError {
  if (!error || typeof error !== 'object') {
    return { message: typeof error === 'string' ? error : 'Unknown email provider error.' };
  }

  const candidate = error as Record<string, unknown>;
  return {
    message:
      typeof candidate.message === 'string'
        ? candidate.message
        : 'Unknown email provider error.',
    name: typeof candidate.name === 'string' ? candidate.name : undefined,
    statusCode: typeof candidate.statusCode === 'number' ? candidate.statusCode : undefined,
  };
}

export async function processContactSubmission(
  input: unknown,
  config: ContactEmailConfig,
  sendEmail: ContactEmailSender,
  ticketId: string,
): Promise<SubmissionResult> {
  const validation = validateContactSubmission(input);
  if (!validation.success) {
    return {
      success: false,
      status: 400,
      message: 'Please correct the highlighted form fields.',
      fieldErrors: validation.fieldErrors,
    };
  }

  const submission = validation.data;
  const template = renderContactEmail(submission, ticketId);

  try {
    const { data, error } = await sendEmail({
      from: config.emailFrom,
      to: [config.adminEmail],
      replyTo: submission.workEmail,
      subject: `New Contact Form Submission #${ticketId}`,
      ...template,
    });

    if (error) {
      return {
        success: false,
        status: 500,
        message: 'Unable to send email',
        providerError: normaliseProviderError(error),
      };
    }

    if (!data?.id) {
      return {
        success: false,
        status: 500,
        message: 'Unable to send email',
        providerError: {
          message: 'Resend did not return an email ID.',
          name: 'missing_email_id',
        },
      };
    }

    const confirmation = renderClientConfirmationEmail(
      submission,
      ticketId,
      config.clientPortalUrl,
    );
    const confirmationResult = await sendEmail({
      from: config.emailFrom,
      to: [submission.workEmail],
      subject: `Alve Studio ticket #${ticketId} received`,
      ...confirmation,
    });

    if (confirmationResult.error || !confirmationResult.data?.id) {
      return {
        success: false,
        status: 500,
        message: 'Unable to send confirmation email',
        providerError: confirmationResult.error
          ? normaliseProviderError(confirmationResult.error)
          : { message: 'Confirmation email provider did not return an email ID.', name: 'missing_confirmation_email_id' },
      };
    }

    return { success: true, emailId: data.id, ticketId };
  } catch (error) {
    return {
      success: false,
      status: 500,
      message: 'Unable to send email',
      providerError: normaliseProviderError(error),
    };
  }
}
