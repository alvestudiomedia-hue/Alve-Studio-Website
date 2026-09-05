// import assert from 'node:assert/strict';
// import test from 'node:test';

// import {
//   processContactSubmission,
//   type ContactEmailRequest,
//   type ContactEmailSender,
// } from './contact-email';
// import { submitContactForm } from './submit-contact';

// const validSubmission = {
//   fullName: 'Ada Lovelace',
//   company: 'Analytical Engines Ltd',
//   requiredService: 'web-development',
//   projectDetails: 'Build a reliable launch website.',
//   workEmail: 'ada@example.com',
//   phoneNumber: '+234 801 234 5678',
//   projectBudget: '25k-50k',
//   privacyPolicy: true,
//   preferredDates: ['2026-09-15', '2026-09-22'],
// };

// const config = {
//   adminEmail: 'admin@example.com',
//   emailFrom: 'Alve Studio <hello@alve.example>',
// };

// test('sends every submitted field to the admin and returns the Resend ID', async () => {
//   let sentEmail: ContactEmailRequest | undefined;
//   const sendEmail: ContactEmailSender = async (email) => {
//     sentEmail = email;
//     return { data: { id: 'email_123' }, error: null };
//   };

//   const result = await processContactSubmission(validSubmission, config, sendEmail);

//   assert.deepEqual(result, { success: true, emailId: 'email_123' });
//   assert.ok(sentEmail);
//   assert.equal(sentEmail.from, config.emailFrom);
//   assert.deepEqual(sentEmail.to, [config.adminEmail]);
//   assert.equal(sentEmail.replyTo, validSubmission.workEmail);

//   for (const value of [
//     validSubmission.fullName,
//     validSubmission.company,
//     validSubmission.requiredService,
//     validSubmission.projectDetails,
//     validSubmission.workEmail,
//     validSubmission.phoneNumber,
//     validSubmission.projectBudget,
//     ...validSubmission.preferredDates,
//   ]) {
//     assert.match(sentEmail.html, new RegExp(value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
//     assert.match(sentEmail.text, new RegExp(value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
//   }
// });

// test('does not send invalid submissions', async () => {
//   let sendCount = 0;
//   const sendEmail: ContactEmailSender = async () => {
//     sendCount += 1;
//     return { data: { id: 'should_not_send' }, error: null };
//   };

//   const result = await processContactSubmission(
//     { ...validSubmission, workEmail: 'not-an-email' },
//     config,
//     sendEmail,
//   );

//   assert.equal(result.success, false);
//   assert.equal(result.status, 400);
//   assert.equal(sendCount, 0);
// });

// test('requires the form\'s one-to-three preferred dates', async () => {
//   let sendCount = 0;
//   const sendEmail: ContactEmailSender = async () => {
//     sendCount += 1;
//     return { data: { id: 'should_not_send' }, error: null };
//   };

//   const result = await processContactSubmission(
//     { ...validSubmission, preferredDates: [] },
//     config,
//     sendEmail,
//   );

//   assert.equal(result.success, false);
//   assert.equal(result.status, 400);
//   assert.equal(sendCount, 0);
// });

// test('treats a Resend error as a failed submission', async () => {
//   const sendEmail: ContactEmailSender = async () => ({
//     data: null,
//     error: { message: 'Provider rejected the request', name: 'validation_error' },
//   });

//   const result = await processContactSubmission(validSubmission, config, sendEmail);

//   assert.deepEqual(result, {
//     success: false,
//     status: 500,
//     message: 'Unable to send email',
//     providerError: {
//       message: 'Provider rejected the request',
//       name: 'validation_error',
//       statusCode: undefined,
//     },
//   });
// });

// test('treats a missing Resend email ID as a failed submission', async () => {
//   const sendEmail: ContactEmailSender = async () => ({ data: {}, error: null });

//   const result = await processContactSubmission(validSubmission, config, sendEmail);

//   assert.deepEqual(result, {
//     success: false,
//     status: 500,
//     message: 'Unable to send email',
//     providerError: {
//       message: 'Resend did not return an email ID.',
//       name: 'missing_email_id',
//     },
//   });
// });

// test('escapes visitor-controlled HTML in the email template', async () => {
//   let sentEmail: ContactEmailRequest | undefined;
//   const sendEmail: ContactEmailSender = async (email) => {
//     sentEmail = email;
//     return { data: { id: 'email_safe' }, error: null };
//   };

//   await processContactSubmission(
//     { ...validSubmission, projectDetails: '<script>alert("x")</script>' },
//     config,
//     sendEmail,
//   );

//   assert.ok(sentEmail);
//   assert.doesNotMatch(sentEmail.html, /<script>/);
//   assert.match(sentEmail.html, /&lt;script&gt;/);
// });

// test('the browser client posts JSON to the contact API and accepts a provider ID', async () => {
//   let requestedUrl: string | URL | Request | undefined;
//   let requestedInit: RequestInit | undefined;
//   const fetcher: typeof fetch = async (url, init) => {
//     requestedUrl = url;
//     requestedInit = init;
//     return Response.json({
//       success: true,
//       message: 'Email sent successfully',
//       emailId: 'email_browser_123',
//     });
//   };

//   const result = await submitContactForm(validSubmission, fetcher);

//   assert.equal(requestedUrl, '/api/contact');
//   assert.equal(requestedInit?.method, 'POST');
//   assert.deepEqual(requestedInit?.headers, { 'Content-Type': 'application/json' });
//   assert.deepEqual(JSON.parse(String(requestedInit?.body)), validSubmission);
//   assert.equal(result.emailId, 'email_browser_123');
// });

// test('the browser client rejects an HTTP success that lacks application success', async () => {
//   const fetcher: typeof fetch = async () =>
//     Response.json({ success: false, message: 'Unable to send email' });

//   await assert.rejects(
//     submitContactForm(validSubmission, fetcher),
//     /Unable to send email/,
//   );
// });

// test('the browser client rejects success without a Resend email ID', async () => {
//   const fetcher: typeof fetch = async () =>
//     Response.json({ success: true, message: 'Email sent successfully' });

//   await assert.rejects(submitContactForm(validSubmission, fetcher), /Email sent successfully/);
// });
