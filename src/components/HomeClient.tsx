'use client';

import { useState } from 'react';
import { Quote, ExternalLink, Download } from 'lucide-react';

const KIT_FORM_ID = '9098753';

interface Props {
  quote: { text: string; author: string };
}

export default function HomeClient({ quote }: Props) {
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

  const shareQuote = () => {
    const shareText = `"${quote.text}" — ${quote.author}\n\nvia philosophyme.co`;
    if (navigator.share) {
      navigator.share({ text: shareText }).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareText).catch(() => {});
    }
  };

  return (
    <>
      {/* QUOTE OF THE DAY + EMAIL CAPTURE */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(15,12,8,0.0) 0%, rgba(192,161,114,0.03) 50%, rgba(15,12,8,0.0) 100%)',
          }}
        />
        <div className="max-w-3xl mx-auto relative z-10">
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(26,21,16,0.6)',
              border: '1px solid rgba(192,161,114,0.15)',
            }}
          >
            {/* Quote card */}
            <div className="p-10 text-center relative">
              <div className="absolute top-6 left-8 opacity-10">
                <Quote size={48} style={{ color: '#c0a172' }} />
              </div>
              <p
                className="text-xs tracking-widest uppercase mb-6"
                style={{
                  color: '#78909c',
                  fontFamily: "var(--font-crimson), serif",
                  letterSpacing: '0.2em',
                }}
              >
                Philosophy Quote of the Day
              </p>
              <p
                className="text-2xl italic leading-relaxed mb-4 max-w-xl mx-auto"
                style={{
                  color: '#d3b9a3',
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: '1.55rem',
                  lineHeight: 1.65,
                }}
              >
                &ldquo;{quote.text}&rdquo;
              </p>
              <p
                className="text-sm mb-6"
                style={{
                  color: '#c0a172',
                  fontFamily: "var(--font-crimson), serif",
                }}
              >
                — {quote.author}
              </p>
              <button
                onClick={shareQuote}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs transition-all duration-200"
                style={{
                  background: 'rgba(192,161,114,0.08)',
                  border: '1px solid rgba(192,161,114,0.15)',
                  color: '#c0a172',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(192,161,114,0.15)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(192,161,114,0.08)';
                }}
              >
                <ExternalLink size={11} /> Share this quote
              </button>
            </div>

            {/* Email capture inside the card */}
            <div
              className="px-8 py-6 text-center"
              style={{ borderTop: '1px solid rgba(192,161,114,0.1)' }}
            >
              {status === 'sent' ? (
                <p className="text-sm py-1" style={{ color: '#c0a172' }}>
                  âœ“ You&apos;re in! Check your inbox for a free chapter from the Ancient Philosophy Guide.
                </p>
              ) : (
                <>
                  <p className="text-sm mb-3" style={{ color: '#78909c' }}>
                    Not ready to buy?{' '}
                    <span style={{ color: '#b0a090' }}>Get a free sample chapter</span> from the
                    Ancient Guide.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-2 max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && submit()}
                      className="px-4 py-2 rounded-lg text-sm flex-1"
                      style={{
                        background: 'rgba(192,161,114,0.06)',
                        border: '1px solid rgba(192,161,114,0.2)',
                        color: '#f4f4f4',
                        outline: 'none',
                      }}
                    />
                    <button
                      onClick={submit}
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
                    <p className="text-sm mt-2" style={{ color: '#c07272' }}>
                      Something went wrong. Please try again.
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA — email capture (guides variant) */}
      <section className="py-12 px-6">
        <div className="max-w-xl mx-auto text-center">
          {status === 'sent' ? (
            <p className="text-sm" style={{ color: '#c0a172' }}>
              âœ“ You&apos;re in! Check your inbox for a free chapter from the Ancient Philosophy
              Guide.
            </p>
          ) : (
            <>
              <Download size={20} style={{ color: '#c0a172' }} className="mx-auto mb-3" />
              <p
                className="text-base font-semibold mb-1"
                style={{ color: '#f4f4f4', fontFamily: 'var(--font-playfair), serif' }}
              >
                Not ready to buy? Try a free chapter first.
              </p>
              <p className="text-sm mb-4" style={{ color: '#78909c' }}>
                Get a sample chapter from the Ancient Philosophy Guide — see what&apos;s inside
                before you commit.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-2">
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
            </>
          )}
        </div>
      </section>
    </>
  );
}
