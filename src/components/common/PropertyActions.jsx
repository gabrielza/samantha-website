import { useState } from 'react';
import { whatsappLink, whatsappPropertyMessage } from '../../lib/contactLinks';
import ScheduleViewingModal from './ScheduleViewingModal';

/**
 * Row of buttons (WhatsApp + Schedule a viewing) for use on property cards
 * and detail pages. Each button stops event propagation so it can sit safely
 * inside a parent <a> or <Link>.
 *
 * @param {{
 *   property: { title?: string, price?: string, suburb?: string, href?: string },
 *   variant?: 'compact' | 'full',
 * }} props
 */
export default function PropertyActions({ property = {}, variant = 'compact' }) {
  const [scheduleOpen, setScheduleOpen] = useState(false);

  const stop = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const onWhatsApp = (e) => {
    stop(e);
    const url = whatsappLink(whatsappPropertyMessage(property));
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const onSchedule = (e) => {
    stop(e);
    setScheduleOpen(true);
  };

  const compact = variant === 'compact';
  const baseBtn =
    'inline-flex items-center justify-center gap-1.5 rounded-lg font-semibold transition-colors';
  const sizeBtn = compact ? 'px-2.5 py-1.5 text-[11px]' : 'px-4 py-2.5 text-[13px]';

  return (
    <>
      <div
        className={`flex gap-2 ${compact ? 'mt-3' : 'mt-4'}`}
        onClick={stop}
        onMouseDown={stop}
      >
        <button
          type="button"
          onClick={onWhatsApp}
          aria-label="Ask about this property on WhatsApp"
          className={`${baseBtn} ${sizeBtn} flex-1 bg-green-600 text-white hover:bg-green-700`}
        >
          <svg
            className={compact ? 'h-3.5 w-3.5' : 'h-4 w-4'}
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.591-.838-6.313-2.236l-.44-.362-3.2 1.073 1.073-3.2-.362-.44A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
          </svg>
          WhatsApp
        </button>
        <button
          type="button"
          onClick={onSchedule}
          aria-label="Schedule a viewing for this property"
          className={`${baseBtn} ${sizeBtn} flex-1 bg-teal-800 text-white hover:bg-teal-700`}
        >
          <svg
            className={compact ? 'h-3.5 w-3.5' : 'h-4 w-4'}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
            />
          </svg>
          {compact ? 'Viewing' : 'Schedule viewing'}
        </button>
      </div>

      <ScheduleViewingModal
        open={scheduleOpen}
        onClose={() => setScheduleOpen(false)}
        property={property}
      />
    </>
  );
}
