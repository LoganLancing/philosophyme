'use client';

import { useState } from 'react';
import { Quote, Copy } from 'lucide-react';

interface Props {
  quote: { text: string; author: string };
}

export default function HomeClient({ quote }: Props) {
  const [copyLabel, setCopyLabel] = useState('Copy Quote');

  const copyQuote = () => {
    const text = `"${quote.text}" — ${quote.author}\n\nPhilosophyME www.philosophyme.co`;
    navigator.clipboard.writeText(text).then(() => {
      setCopyLabel('Copied!');
      setTimeout(() => setCopyLabel('Copy Quote'), 2000);
    });
  };

  return (
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
              onClick={copyQuote}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs transition-all duration-200"
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
              <Copy size={13} /> {copyLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
