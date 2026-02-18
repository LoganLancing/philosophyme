'use client';

import { useState } from 'react';
import { Lightbulb, GraduationCap, ChevronDown } from 'lucide-react';
import type { Argument } from '@/data/types';

interface Props {
  arguments: Argument[];
}

export default function PhilosopherPageClient({ arguments: args }: Props) {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setExpanded((prev) => ({ ...prev, [i]: !prev[i] }));

  const hasAnyExpanded = args.some((a) => a.expanded);

  return (
    <section>
      <h2 className="text-lg font-semibold mb-1 flex items-center gap-2" style={{ color: '#f4f4f4' }}>
        <Lightbulb size={18} style={{ color: '#c0a172' }} /> Key Arguments
      </h2>
      {hasAnyExpanded && (
        <p className="text-xs mb-3" style={{ color: '#78909c' }}>
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
  );
}
