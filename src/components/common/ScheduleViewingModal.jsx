import { useEffect } from 'react';
import { calComLink } from '../../lib/contactLinks';

/**
 * Modal that embeds Cal.com inline for booking a viewing.
 * Falls back to opening Cal.com in a new tab if the embed cannot load.
 */
export default function ScheduleViewingModal({ open, onClose, property }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const notes = property?.title
    ? `Viewing request for: ${property.title}${property.price ? ` (${property.price})` : ''}${property.href ? `\n${property.href}` : ''}`
    : '';
  const url = calComLink({ notes });

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Schedule a viewing"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-3"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl h-[85vh] max-h-[820px] overflow-hidden rounded-2xl bg-white shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3 border-b border-slate-200 px-5 py-4">
          <div>
            <h3 className="text-lg font-semibold text-teal-900">Schedule a viewing</h3>
            {property?.title && (
              <p className="mt-0.5 text-[13px] text-slate-600 line-clamp-1">
                {property.title}
                {property.price ? ` — ${property.price}` : ''}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Embed */}
        <div className="flex-1 bg-slate-50">
          {url ? (
            <iframe
              title="Cal.com booking"
              src={url}
              className="h-full w-full border-0"
              allow="camera; microphone; fullscreen; clipboard-read; clipboard-write"
            />
          ) : (
            <div className="flex h-full items-center justify-center p-8 text-center text-sm text-slate-600">
              Booking link not configured. Please contact Samantha directly.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-3 border-t border-slate-200 bg-white px-5 py-3 text-[12px] text-slate-500">
          <span>Powered by Cal.com</span>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gold-500 hover:text-gold-600"
            >
              Open in new tab &rarr;
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
