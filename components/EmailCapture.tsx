'use client';

import { useState } from 'react';
import { Download } from 'lucide-react';

const KIT_FORM_ID = '9098753';

interface Props {
  variant?: 'guides' | 'era' | 'footer';
}

export default function EmailCapture({ variant = 'guides' }: Props) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<null | 'sending' | 'sent' | 'error'>(null);

  const submit = async () => {
    if (!email.includes('@') || status === 'sending') return;
    setStatus('sending');
    try {
      const res = await fetch(
        `https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email_address: email }),
        }
      );
      if (res.ok) {
        setStatus('sent');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className={`text-center ${variant === 'footer' ? 'py-3' : 'py-4'}`}>
        <p className="text-sm" style={{ color: '#c0a172' }}>
          ✓ You&apos;re in! Check your inbox for a free chapter from the Ancient
          Philosophy Guide.
        </p>
      </div>
    );
  }

  const isCompact = variant === 'era' || variant === 'footer';

  return (
    <div className={isCompact ? '' : 'mt-6 mb-8'}>
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
            Not ready to buy? Try a free chapter first.
          </p>
          <p className="text-sm mt-1" style={{ color: '#78909c' }}>
            Get a sample chapter from the Ancient Philosophy Guide — see
            what&apos;s inside before you commit.
          </p>
        </div>
      )}
      {variant === 'era' && (
        <p
          className="text-center text-sm mb-3 mt-4"
          style={{ color: '#78909c' }}
        >
          Not ready to buy?{' '}
          <span style={{ color: '#b0a090' }}>Get a free sample chapter</span>{' '}
          from the Ancient Guide.
        </p>
      )}
      {variant === 'footer' && (
        <p className="text-sm mb-3" style={{ color: '#b0a090' }}>
          Get a free chapter from the Ancient Philosophy Guide:
        </p>
      )}
      <div className="flex flex-col sm:flex-row justify-center gap-2">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && submit()}
          className="px-4 py-2 rounded-lg text-sm outline-none flex-1"
          style={{
            background: 'rgba(192,161,114,0.06)',
            border: '1px solid rgba(192,161,114,0.2)',
            color: '#f4f4f4',
            maxWidth: isCompact ? '220px' : '280px',
          }}
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
      {status === 'error' && (
        <p
          className="text-center text-sm mt-2"
          style={{ color: '#c07272' }}
        >
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}
