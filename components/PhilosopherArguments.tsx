import { Lightbulb, GraduationCap, ChevronDown, HelpCircle } from 'lucide-react';
import type { Argument, Faq } from '@/data/types';

interface Props {
  arguments: Argument[];
  faq: Faq[];
}

// Key Arguments and FAQ for a philosopher profile.
//
// Each "Philosophy 101" exploration and each FAQ answer sits inside a native
// <details> element. The text is part of the page's HTML from the start, so
// search engines and AI crawlers can read it, but it stays folded until a
// reader opens it. No JavaScript is needed to open or close a section.
export default function PhilosopherArguments({ arguments: args, faq }: Props) {
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
                  <details className="fold">
                    <summary className="fold-btn mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold">
                      <GraduationCap size={14} />
                      <span className="fold-closed">Philosophy 101: Read the Full Exploration</span>
                      <span className="fold-open">Collapse</span>
                      <ChevronDown size={14} className="fold-chevron" />
                    </summary>
                    <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(192,161,114,0.08)' }}>
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
                  </details>
                )}
              </div>
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
              <details
                key={i}
                className="fold rounded-xl overflow-hidden"
                style={{
                  background: 'rgba(192,161,114,0.05)',
                  border: '1px solid rgba(192,161,114,0.08)',
                }}
              >
                <summary className="faq-q w-full text-left p-4 flex items-center justify-between gap-3">
                  <h3 className="font-semibold" style={{ color: '#c0a172', fontSize: '1rem' }}>
                    {f.question}
                  </h3>
                  <ChevronDown size={16} className="fold-chevron" style={{ color: '#c0a172', flexShrink: 0 }} />
                </summary>
                <div className="px-4 pb-4">
                  <p
                    className="leading-relaxed"
                    style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif", fontSize: '1.05rem', lineHeight: 1.8 }}
                  >
                    {f.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
