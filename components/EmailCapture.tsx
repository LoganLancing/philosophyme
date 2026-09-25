'use client';

import { useState } from 'react';
import { Download } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

// Signups go to our own Netlify function (netlify/functions/subscribe.mjs), which adds them
// to the Sender.net list without exposing the API token.
const SUBSCRIBE_URL = '/api/subscribe';

// Handed over the moment someone signs up, so nobody waits on an email to get them.
const FREE_DOWNLOADS = [
  { label: 'Free Chapter (PDF)', href: '/downloads/PhilosophyMe_Free_Chapter.pdf' },
  { label: '14-Week Study Plan (PDF)', href: '/downloads/PhilosophyMe_14_Week_Study_Plan.pdf' },
];

interface Props {
  variant?: 'guides' | 'guides-inline' | 'era' | 'footer' | 'card';
  // Where this form sits on the site; sent with the GA4 events.
  location?: string;
}

type Status = null | 'sending' | 'sent' | 'error' | 'invalid';

function DownloadLinks({ compact }: { compact: boolean }) {
  return (
    <div className={`flex flex-col sm:flex-row justify-center gap-2 ${compact ? 'mt-2' : 'mt-3'}`}>
      {FREE_DOWNLOADS.map((d) => (
        <a
          key={d.href}
          href={d.href}
          download
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold"
          style={{
            background: 'linear-gradient(135deg, #c0a172, #8B6914)',
            color: '#fff',
            textDecoration: 'none',
          }}
        >
          <Download size={14} /> {d.label}
        </a>
      ))}
    </div>
  );
}

export default function EmailCapture({ variant = 'guides', location = variant }: Props) {
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState(''); // honeypot: hidden from people, bots fill it
  const [status, setStatus] = useState<Status>(null);

  const submit = async () => {
    const address = email.trim();
    if (status === 'sending') return;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(address)) {
      setStatus('invalid');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(SUBSCRIBE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email: address, website }),
      });
      const data = await res.json().catch(() => null);
      if (res.ok && data?.status === 'success') {
        setStatus('sent');
        setEmail('');
        trackEvent('email_signup', { signup_location: location });
      } else {
        setStatus('error');
        trackEvent('email_signup_error', { signup_location: location });
      }
    } catch {
      setStatus('error');
      trackEvent('email_signup_error', { signup_location: location });
    }
  };

  const isCompact = variant === 'era' || variant === 'footer' || variant === 'guides-inline';

  if (status === 'sent') {
    return (
      <div className={`text-center ${isCompact ? 'py-2' : 'py-3'}`}>
        <p className="text-sm" style={{ color: '#c0a172' }}>
          ✓ You&apos;re in! Here are your free downloads:
        </p>
        <DownloadLinks compact={isCompact} />
      </div>
    );
  }

  return (
    <div className={isCompact || variant === 'card' ? '' : 'mt-6 mb-8'}>
      {variant === 'guides' && (
        <div className="text-center mb-4">
          <Download
            size={20}
            style={{ color: '#c0a172' }}
            className="mx-auto mb-3"
          />
          <p
            className="text-base font-semibold"
            style={{
              color: '#f4f4f4',
              fontFamily: 'var(--font-playfair), serif',
            }}
          >
            Not ready to buy? Read a free chapter first.
          </p>
          <p className="text-sm mt-1" style={{ color: '#8fa3b0' }}>
            Get a free chapter from the Companion Guide and see what is inside.
          </p>
        </div>
      )}
      {variant === 'era' && (
        <p
          className="text-center text-sm mb-3 mt-4"
          style={{ color: '#8fa3b0' }}
        >
          Not ready to buy?{' '}
          <span style={{ color: '#b0a090' }}>Get a free sample chapter</span>{' '}
          from the Companion Guide.
        </p>
      )}
      {variant === 'footer' && (
        <p className="text-sm mb-3" style={{ color: '#b0a090' }}>
          Get a free chapter from the Companion Guide:
        </p>
      )}
      <div className={`flex flex-col sm:flex-row gap-2 ${variant === 'card' || variant === 'footer' ? '' : 'justify-center'}`}>
        <input
          type="email"
          placeholder="Your email"
          aria-label="Your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === 'invalid' || status === 'error') setStatus(null);
          }}
          onKeyDown={(e) => e.key === 'Enter' && submit()}
          className="px-4 py-2 rounded-lg text-sm outline-none flex-1"
          style={{
            background: 'rgba(192,161,114,0.06)',
            border: '1px solid rgba(192,161,114,0.2)',
            color: '#f4f4f4',
            maxWidth: variant === 'card' ? '320px' : isCompact ? '220px' : '280px',
          }}
        />
        {/* Honeypot: off-screen, skipped by keyboards and screen readers. */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, opacity: 0 }}
        />
        <button
          onClick={submit}
          disabled={status === 'sending'}
          className="px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
          style={{
            background:
              status === 'sending'
                ? '#6a5f52'
                : 'linear-gradient(135deg, #c0a172, #8B6914)',
            color: '#fff',
            border: 'none',
            cursor: status === 'sending' ? 'wait' : 'pointer',
            opacity: status === 'sending' ? 0.7 : 1,
          }}
        >
          {status === 'sending' ? 'Sending...' : 'Send Me the Chapter'}
        </button>
      </div>
      {status === 'invalid' && (
        <p className="text-sm mt-2" style={{ color: '#c07272' }}>
          Please enter a valid email address.
        </p>
      )}
      {status === 'error' && (
        <div className="text-center mt-2">
          <p className="text-sm" style={{ color: '#c07272' }}>
            We couldn&apos;t sign you up just now. Here are your downloads anyway:
          </p>
          <DownloadLinks compact={isCompact} />
        </div>
      )}
    </div>
  );
}
