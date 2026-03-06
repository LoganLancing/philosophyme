import type { EraId } from '@/data/types';

const eraSymbols: Record<EraId, { symbol: string; color: string }> = {
  Ancient:          { symbol: 'Φ',  color: '#8B6914' },
  Medieval:         { symbol: '✝',  color: '#6B4226' },
  Renaissance:      { symbol: '✵',  color: '#8B4513' },
  "Early Modern":   { symbol: '⚙', color: '#2C3E6B' },
  Enlightenment:    { symbol: '☆',  color: '#2E5A4C' },
  "19th Century":   { symbol: '◆',  color: '#4A2545' },
  Contemporary:     { symbol: '✦',  color: '#1a5276' },
};

export default function EraDecoration({ era }: { era: EraId }) {
  const { symbol, color } = eraSymbols[era] || eraSymbols.Ancient;

  return (
    <div className="flex justify-center my-8">
      <div className="flex items-center gap-4">
        <div
          className="h-px flex-1"
          style={{ width: '60px', background: `linear-gradient(90deg, transparent, ${color}40)` }}
        />
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center"
          style={{
            border: `1.5px solid ${color}35`,
            background: `${color}08`,
          }}
        >
          <span
            style={{
              fontSize: '24px',
              color,
              fontFamily: 'var(--font-playfair), serif',
              lineHeight: 1,
            }}
          >
            {symbol}
          </span>
        </div>
        <div
          className="h-px flex-1"
          style={{ width: '60px', background: `linear-gradient(90deg, ${color}40, transparent)` }}
        />
      </div>
    </div>
  );
}
