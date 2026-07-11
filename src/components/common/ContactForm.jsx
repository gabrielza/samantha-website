import { useState } from 'react';
import contact from '../../data/contact';

export default function ContactForm({ formName = 'contact', propertyTitle = '', className = '' }) {
  const [submitted, setSubmitted] = useState(false);
  const [busy, setBusy] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (busy) return;
    const form = e.target;
    const data = new FormData(form);
    setBusy(true);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      });
      setSubmitted(true);
    } catch {
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent('Website Inquiry')}&body=${encodeURIComponent(`Name: ${data.get('name')}\nPhone: ${data.get('phone')}\nMessage: ${data.get('message')}`)}`;
    } finally {
      setBusy(false);
    }
  };

  if (submitted) {
    return (
      <div className={`rounded-2xl bg-green-50 p-8 text-center ${className}`}>
        <svg className="mx-auto h-12 w-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="mt-4 text-xl font-semibold text-teal-800">Message Sent</h3>
        <p className="mt-2 text-sm text-gray-600">
          Thank you for reaching out. Samantha will respond within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      name={formName}
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className={className}
    >
      <input type="hidden" name="form-name" value={formName} />
      <p className="hidden">
        <label>
          Don't fill this out: <input name="bot-field" />
        </label>
      </p>

      {propertyTitle && <input type="hidden" name="property" value={propertyTitle} />}

      <div className="space-y-4">
        <div>
          <label htmlFor={`${formName}-name`} className="block text-sm font-medium text-teal-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id={`${formName}-name`}
            name="name"
            required
            autoComplete="name"
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-[14px] outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor={`${formName}-email`} className="block text-sm font-medium text-teal-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id={`${formName}-email`}
            name="email"
            required
            autoComplete="email"
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor={`${formName}-phone`} className="block text-sm font-medium text-teal-700 mb-1">
            Contact Number
          </label>
          <input
            type="tel"
            id={`${formName}-phone`}
            name="phone"
            autoComplete="tel"
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
            placeholder="+27 00 000 0000"
          />
        </div>

        <div>
          <label htmlFor={`${formName}-message`} className="block text-sm font-medium text-teal-700 mb-1">
            Message
          </label>
          <textarea
            id={`${formName}-message`}
            name="message"
            rows={4}
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all resize-none"
            placeholder="How can Samantha help you?"
          />
        </div>

        <button
          type="submit"
          disabled={busy}
          className="w-full rounded-lg bg-teal-800 px-6 py-2.5 text-[14px] font-semibold text-white hover:bg-teal-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
        >
          {busy ? 'Sending…' : 'Send Message'}
        </button>
      </div>
    </form>
  );
}
