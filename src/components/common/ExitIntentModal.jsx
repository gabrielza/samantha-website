import { useEffect, useRef, useState } from 'react';

const STORAGE_KEY = 'sb_exit_intent_v1';
const COOLDOWN_DAYS = 14;
const MIN_DWELL_MS = 8_000; // don't show until visitor has been around a bit

const ENC = (data) =>
  Object.entries(data)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');

function readState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function writeState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* ignore */
  }
}

function shouldSkip() {
  const s = readState();
  if (s.subscribed) return true;
  if (s.dismissedAt) {
    const ageDays = (Date.now() - s.dismissedAt) / (1000 * 60 * 60 * 24);
    if (ageDays < COOLDOWN_DAYS) return true;
  }
  return false;
}

export default function ExitIntentModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const armedRef = useRef(false);
  const mountedAtRef = useRef(Date.now());

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    if (shouldSkip()) return undefined;

    let armTimer;
    const arm = () => {
      armedRef.current = true;
    };
    armTimer = window.setTimeout(arm, MIN_DWELL_MS);

    const trigger = () => {
      if (!armedRef.current) return;
      if (shouldSkip()) return;
      setOpen(true);
    };

    // Desktop: cursor exits via the top of the viewport
    const onMouseOut = (e) => {
      if (e.clientY <= 0 && !e.relatedTarget) trigger();
    };

    // Mobile: tab visibility change after some dwell
    const onVisibility = () => {
      if (document.visibilityState === 'hidden' && Date.now() - mountedAtRef.current > 30_000) {
        trigger();
      }
    };

    document.addEventListener('mouseout', onMouseOut);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      window.clearTimeout(armTimer);
      document.removeEventListener('mouseout', onMouseOut);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && handleClose();
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const handleClose = () => {
    setOpen(false);
    writeState({ ...readState(), dismissedAt: Date.now() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setBusy(true);
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: ENC({
          'form-name': 'listings-alerts',
          email,
          source: 'exit-intent',
          page: typeof window !== 'undefined' ? window.location.pathname : '',
          'bot-field': '',
        }),
      });
      if (!res.ok) throw new Error('Network');
      writeState({ subscribed: true, subscribedAt: Date.now() });
      setSubmitted(true);
    } catch {
      // Fallback: open mailto so the lead isn't lost
      window.location.href = `mailto:samanthab@just.property?subject=${encodeURIComponent('Subscribe me to weekly listings')}&body=${encodeURIComponent(`Email: ${email}`)}`;
      writeState({ subscribed: true, subscribedAt: Date.now() });
      setSubmitted(true);
    } finally {
      setBusy(false);
    }
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close"
          className="absolute right-3 top-3 rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Accent header */}
        <div className="bg-gradient-to-br from-teal-800 to-teal-900 px-6 py-7 text-white">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-400">
            Before you go
          </p>
          <h3 id="exit-intent-title" className="mt-2 text-2xl font-bold leading-tight">
            Get this week's new Atlantic Seaboard listings
          </h3>
          <p className="mt-2 text-[13px] text-teal-100">
            A short, weekly round-up of fresh stock from Clifton, Camps Bay, Bantry Bay,
            Sea Point and Fresnaye — straight to your inbox.
          </p>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          {submitted ? (
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-teal-900">You're on the list</h4>
              <p className="mt-1 text-[13px] text-slate-600">
                Look out for our next dispatch — usually Sunday evenings.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="mt-5 inline-flex items-center justify-center rounded-lg bg-teal-800 px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-teal-700 transition-colors"
              >
                Continue browsing
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              name="listings-alerts"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="listings-alerts" />
              <input type="hidden" name="source" value="exit-intent" />
              <p className="hidden">
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>

              <label htmlFor="exit-intent-email" className="block text-[12px] font-medium text-slate-700">
                Email address
              </label>
              <input
                id="exit-intent-email"
                type="email"
                name="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-[14px] focus:border-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-700/20"
              />
              {error && <p className="mt-2 text-[12px] text-red-600">{error}</p>}

              <button
                type="submit"
                disabled={busy}
                className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-gold-500 px-5 py-2.5 text-[13px] font-semibold text-teal-900 hover:bg-gold-400 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
              >
                {busy ? 'Subscribing…' : 'Send me weekly listings'}
              </button>

              <p className="mt-3 text-center text-[11px] text-slate-500">
                No spam. Unsubscribe anytime. POPIA-compliant.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
