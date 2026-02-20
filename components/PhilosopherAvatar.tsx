import type { Philosopher, EraId } from '@/data/types';
import { eraGradients } from '@/data/eras';

interface Props {
  philosopher: Philosopher;
  size?: number;
}

export default function PhilosopherAvatar({ philosopher, size = 56 }: Props) {
  const [c1, c2] = eraGradients[philosopher.era] || ['#c0a172', '#8B6914'];
  const fs = size < 50 ? 14 : size < 80 ? 18 : 28;

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size > 60 ? 16 : 12,
        flexShrink: 0,
        background: `linear-gradient(135deg, ${c1}30 0%, ${c2}15 100%)`,
        border: `1.5px solid ${c1}50`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.06,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23${c1.slice(1)}' fill-opacity='1'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <span
        style={{
          fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
          fontWeight: 700,
          fontSize: fs,
          color: c1,
          letterSpacing: '0.05em',
          position: 'relative',
          zIndex: 1,
          lineHeight: 1,
        }}
      >
        {philosopher.initials}
      </span>
    </div>
  );
}
