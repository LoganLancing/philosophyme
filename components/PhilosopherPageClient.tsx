'use client';

import { useState } from 'react';
import { Lightbulb, GraduationCap, ChevronDown, HelpCircle } from 'lucide-react';
import type { Argument, Faq } from '@/data/types';

interface Props {
  arguments: Argument[];
  faq: Faq[];
}

export default function PhilosopherPageClient({ arguments: args, faq }: Props) {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setExpanded((prev) => ({ ...prev, [i]: !prev[i] }));

  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({});
  const toggleFaq = (i: number) => setFaqOpen((prev) => ({ ...prev, [i]: !prev[i] }));

  const hasAnyExpanded = args.some((a) => a.expanded);

  return (
    <>
    <section>
      <h2 className="text-lg font-semibold mb-1 flex items-center gap-2" style={{ color: '#f4f4f4' }}>
        <Lightbulb size={18} style={{ color: '#c0a172' }} /> Key Arguments
      </h2>
      {hasAnyExpanded && (
        <p className="text-xs mb-3" style={{ color: '#8fa3b0' }}>
          Click &ldquo;Philosophy 101&rdquo; to read the full exploration of each argument.
        </p>
      )}
      <div className="space-y-4">
        {args.map((arg, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden"
            style={{
              background: 'rgba(192,161,114,0.05)',
              border: '1px solid rgba(192,161,114,0.08)',
            }}
          >
            <div className="p-5">
              <h3 className="font-semibold mb-2" style={{ color: '#c0a172' }}>
                {arg.title}
              </h3>
              <p
                className="text-base leading-relaxed mb-2"
                style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif", lineHeight: 1.65 }}
              >
                {arg.desc}
              </p>
              <p
                className="text-base italic mb-3 leading-relaxed"
                style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif", lineHeight: 1.65 }}
              >
                Why it matters: {arg.importance}
              </p>
              {arg.expanded && (
                <button
                  onClick={() => toggle(i)}
                  className="mt-3 flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200"
                  style={{
                    background: expanded[i] ? 'rgba(192,161,114,0.15)' : 'rgba(192,161,114,0.08)',
                    color: '#c0a172',
                    border: '1px solid rgba(192,161,114,0.2)',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(192,161,114,0.2)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = expanded[i] ? 'rgba(192,161,114,0.15)' : 'rgba(192,161,114,0.08)'; }}
                >
                  <GraduationCap size={14} />{' '}
                  {expanded[i] ? 'Collapse' : 'Philosophy 101: Read the Full Exploration'}
                  <ChevronDown
                    size={14}
                    style={{
                      transition: 'transform 0.3s',
                      transform: expanded[i] ? 'rotate(180deg)' : 'rotate(0)',
                    }}
                  />
                </button>
              )}
            </div>
            {arg.expanded && expanded[i] && (
              <div
                className="px-5 pb-5 anim-fi"
                style={{ borderTop: '1px solid rgba(192,161,114,0.08)' }}
              >
                <div className="pt-4">
                  {arg.expanded.split('\n\n').map((para, pi) => (
                    <p
                      key={pi}
                      className="text-base leading-relaxed mb-3"
                      style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif" }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>

      {/* FAQ Accordion */}
      {faq.length > 0 && (
        <section className="anim-fiu">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: '#f4f4f4' }}>
            <HelpCircle size={18} style={{ color: '#c0a172' }} /> Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {faq.map((f, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden"
                style={{
                  background: 'rgba(192,161,114,0.05)',
                  border: '1px solid rgba(192,161,114,0.08)',
                }}
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full text-left p-4 flex items-center justify-between gap-3 transition-all duration-200"
                  style={{ background: faqOpen[i] ? 'rgba(192,161,114,0.08)' : 'transparent' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(192,161,114,0.1)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = faqOpen[i] ? 'rgba(192,161,114,0.08)' : 'transparent'; }}
                >
                  <h3 className="font-semibold" style={{ color: '#c0a172', fontSize: '1rem' }}>
                    {f.question}
                  </h3>
                  <ChevronDown
                    size={16}
                    style={{
                      color: '#c0a172',
                      flexShrink: 0,
                      transition: 'transform 0.3s',
                      transform: faqOpen[i] ? 'rotate(180deg)' : 'rotate(0)',
                    }}
                  />
                </button>
                {faqOpen[i] && (
                  <div className="px-4 pb-4 anim-fi">
                    <p
                      className="leading-relaxed"
                      style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif", fontSize: '1.05rem', lineHeight: 1.8 }}
                    >
                      {f.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
