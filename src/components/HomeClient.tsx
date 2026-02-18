'use client';

import { useState } from 'react';
import { Download } from 'lucide-react';

const KIT_FORM_ID = '9098753';

export default function HomeClient() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<null | 'sending' | 'sent' | 'error'>(null);

  const submit = async () => {
    if (!email.includes('@') || status === 'sending') return;
    setStatus('sending');
    try {
      const res = await fetch(`https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email_address: email }),
      });
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
      <section className="py-12 px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm" style={{ color: '#c0a172' }}>
            ✓ You&apos;re in! Check your inbox for a free chapter from the Ancient Philosophy Guide.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 px-6">
      <div className="max-w-xl mx-auto text-center">
        <Download size={20} style={{ color: '#c0a172' }} className="mx-auto mb-3" />
        <p
          className="text-base font-semibold mb-1"
          style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}
        >
          Not ready to buy? Try a free chapter first.
        </p>
        <p className="text-sm mb-4" style={{ color: '#78909c' }}>
          Get a sample chapter from the Ancient Philosophy Guide — see what&apos;s inside before you commit.
        </p>
        <div className="flex justify-center gap-2">
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && submit()}
            className="px-4 py-2.5 rounded-lg text-sm flex-1 max-w-xs"
            style={{
              background: 'rgba(192,161,114,0.06)',
              border: '1px solid rgba(192,161,114,0.2)',
              color: '#f4f4f4',
              outline: 'none',
            }}
          />
          <button
            onClick={submit}
            className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-opacity"
            style={{
              background: 'linear-gradient(135deg, #c0a172, #8B6914)',
              color: '#0f0c08',
              border: 'none',
              cursor: status === 'sending' ? 'wait' : 'pointer',
              opacity: status === 'sending' ? 0.7 : 1,
            }}
          >
            {status === 'sending' ? 'Sending...' : 'Send Me the Chapter'}
          </button>
        </div>
        {status === 'error' && (
          <p className="text-sm mt-2" style={{ color: '#c07272' }}>
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  );
}
