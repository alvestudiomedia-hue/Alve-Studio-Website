type SuccessfulContactResponse = {
  success: true;
  message: string;
  emailId: string;
};

export async function submitContactForm(
  payload: unknown,
  fetcher: typeof fetch = fetch,
): Promise<SuccessfulContactResponse> {
  const response = await fetcher('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  let result: { success?: boolean; message?: string; emailId?: string } = {};
  try {
    result = await response.json();
  } catch {
    // A non-JSON response is handled as a failed submission below.
  }

  if (!response.ok || result.success !== true || !result.emailId) {
    throw new Error(result.message || 'Failed to send message');
  }

  return {
    success: true,
    message: result.message || 'Email sent successfully',
    emailId: result.emailId,
  };
}
