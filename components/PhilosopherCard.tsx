import Link from 'next/link';
import PhilosopherAvatar from './PhilosopherAvatar';
import { eras } from '@/data/eras';
import type { Philosopher } from '@/data/types';

// Only the fields a card shows. Pages pass whole philosopher objects, but
// typing the card this narrowly lets the index page send just these fields
// to the browser instead of every profile in full.
export type CardPhilosopher = Pick<
  Philosopher,
  'id' | 'name' | 'birth' | 'death' | 'era' | 'branch' | 'thesis' | 'initials' | 'accent'
>;

export function toCardPhilosopher(p: Philosopher): CardPhilosopher {
  return {
    id: p.id,
    name: p.name,
    birth: p.birth,
    death: p.death,
    era: p.era,
    branch: p.branch,
    thesis: p.thesis,
    initials: p.initials,
    accent: p.accent,
  };
}

interface Props {
  philosopher: CardPhilosopher;
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
      className="philosopher-card group block rounded-2xl p-5"
      style={{
        background: 'rgba(26,21,16,0.6)',
        border: '1px solid rgba(192,161,114,0.1)',
        borderLeft: `3px solid ${eraColor}`,
        textDecoration: 'none',
        ['--era-color' as string]: eraColor,
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
          <p className="text-sm mb-2" style={{ color: '#8fa3b0' }}>
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
