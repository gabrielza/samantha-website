import contact from '../data/contact';

/**
 * Build a WhatsApp click-to-chat URL with a custom message.
 * @param {string} message - Plain-text message (will be URL-encoded).
 */
export function whatsappLink(message) {
  const text = (message || contact.whatsappMessage || '').trim();
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;
}

/**
 * Build a WhatsApp message prefilled with a specific property's context.
 * @param {{ title?: string, price?: string, suburb?: string, href?: string }} property
 */
export function whatsappPropertyMessage(property = {}) {
  const lines = [
    `Hi Samantha, I'm interested in this property from your website:`,
    '',
  ];
  if (property.title) lines.push(`• ${property.title}`);
  if (property.price) lines.push(`• ${property.price}`);
  if (property.suburb) lines.push(`• ${property.suburb}`);
  if (property.href) lines.push(`• ${property.href}`);
  lines.push('', 'Could you share more details and arrange a viewing?');
  return lines.join('\n');
}

/**
 * Cal.com booking URL with optional prefill.
 * Cal.com supports ?name=&email=&notes= query parameters on any event link.
 * @param {{ notes?: string, name?: string, email?: string }} prefill
 */
export function calComLink(prefill = {}) {
  const base = contact.calComUrl;
  if (!base) return null;
  const params = new URLSearchParams();
  if (prefill.name) params.set('name', prefill.name);
  if (prefill.email) params.set('email', prefill.email);
  if (prefill.notes) params.set('notes', prefill.notes);
  const qs = params.toString();
  return qs ? `${base}?${qs}` : base;
}

/**
 * Build prefilled "viewing" notes string from a property.
 */
export function viewingNotes(property = {}) {
  const parts = [];
  if (property.title) parts.push(property.title);
  if (property.price) parts.push(`(${property.price})`);
  if (property.suburb) parts.push(`— ${property.suburb}`);
  const headline = parts.join(' ');
  return headline
    ? `Viewing request for: ${headline}${property.href ? `\n${property.href}` : ''}`
    : 'General viewing / consultation request.';
}
