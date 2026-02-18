'use client';

import Link from 'next/link';
import PhilosopherAvatar from './PhilosopherAvatar';
import { eras } from '@/data/eras';
import type { Philosopher } from '@/data/types';

interface Props {
  philosopher: Philosopher;
}

function formatYear(y: number): string {
  if (y === 0) return 'Present';
  return y < 0 ? `${Math.abs(y)} BCE` : `${y} CE`;
}

export default function PhilosopherCard({ philosopher }: Props) {
  const eraColor = eras.find((e) => e.id === philosopher.era)?.color || '#c0a172';

  return (
    <Link
      href={`/philosophers/${philosopher.id}/`}
      className="group block rounded-2xl p-5 transition-all duration-300"
      style={{
        background: 'rgba(26,21,16,0.6)',
        border: '1px solid rgba(192,161,114,0.1)',
        textDecoration: 'none',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.border = `1px solid ${eraColor}50`;
        el.style.transform = 'translateY(-3px)';
        el.style.boxShadow = '0 12px 40px rgba(0,0,0,0.3)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.border = '1px solid rgba(192,161,114,0.1)';
        el.style.transform = 'translateY(0)';
        el.style.boxShadow = 'none';
      }}
    >
      <div className="flex items-start gap-4">
        <PhilosopherAvatar philosopher={philosopher} size={56} />
        <div className="flex-1 min-w-0">
          <h3
            className="text-lg font-bold truncate"
            style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}
          >
            {philosopher.name}
          </h3>
          <p className="text-sm mb-2" style={{ color: '#78909c' }}>
            {formatYear(philosopher.birth)} – {formatYear(philosopher.death)}
          </p>
          <p
            className="text-base leading-relaxed line-clamp-2"
            style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif" }}
          >
            {philosopher.thesis}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5 mt-3">
        <span
          className="px-2 py-0.5 rounded text-xs"
          style={{ background: `${eraColor}20`, color: eraColor }}
        >
          {philosopher.era}
        </span>
        {philosopher.branch.slice(0, 2).map((b) => (
          <span
            key={b}
            className="px-2 py-0.5 rounded text-xs"
            style={{ background: 'rgba(120,144,156,0.12)', color: '#78909c' }}
          >
            {b}
          </span>
        ))}
      </div>
    </Link>
  );
}
