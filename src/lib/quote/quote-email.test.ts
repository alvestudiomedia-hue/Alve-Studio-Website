import assert from 'node:assert/strict';
import test from 'node:test';

import { renderQuoteConfirmationEmail } from './quote-email';

test('renders a quote acknowledgement for the customer in HTML and plain text', () => {
  const email = renderQuoteConfirmationEmail(
    {
      fullName: 'Ibrahim Kolawole',
      packageName: 'Business Website',
    },
    'ALV-QTE-20260928-3C12BA',
    'https://alvestudioagency.com/',
  );

  for (const content of [email.html, email.text]) {
    assert.match(content, /Ibrahim Kolawole/);
    assert.match(content, /ALV-QTE-20260928-3C12BA/);
    assert.match(content, /We received your request/i);
    assert.match(content, /Business Website/);
    assert.match(content, /4 to 12 hours/);
    assert.match(content, /https:\/\/alvestudioagency\.com\//);
    assert.match(content, /Alve Studio Team/);
  }
});

test('escapes customer-controlled values in the HTML version', () => {
  const email = renderQuoteConfirmationEmail(
    {
      fullName: '<script>alert("name")</script>',
      packageName: '<strong>Package</strong>',
    },
    '<ticket>',
    'https://example.com/?a=1&b=2',
  );

  assert.doesNotMatch(email.html, /<script>/);
  assert.doesNotMatch(email.html, /<strong>Package<\/strong>/);
  assert.match(email.html, /&lt;script&gt;/);
  assert.match(email.html, /&lt;strong&gt;Package&lt;\/strong&gt;/);
  assert.match(email.html, /#&lt;ticket&gt;/);
  assert.match(email.html, /a=1&amp;b=2/);
});
