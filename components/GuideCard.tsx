import Link from 'next/link';
import { BookOpen, ShoppingBag, ExternalLink, ArrowRight } from 'lucide-react';
import { guides } from '@/data/guides';

const companion = guides.find((g) => g.id === 'complete-collection')!;

const DEFAULT_BLURB = 'Seven eras of philosophy in one volume, with reading lists, key terms and journal prompts.';

interface Props {
  // Where the card sits; SiteAnalytics sends it with the gumroad_click event.
  location: string;
  // Accent for the top bar and the buy button (an era colour, usually).
  accent?: string;
  eyebrow?: string;
  blurb?: string;
  className?: string;
}

// The paid offer, used the same way on every page: "Buy" goes straight to Gumroad
// (tracked), "See what's inside" goes to the Guides page for anyone not ready yet.
export default function GuideCard({
  location,
  accent = '#c0a172',
  eyebrow = 'Your Reading Path',
  blurb = DEFAULT_BLURB,
  className = '',
}: Props) {
  return (
    <div
      data-track-location={location}
      className={`rounded-xl overflow-hidden ${className}`}
      style={{ background: 'rgba(192,161,114,0.04)', border: '1px solid rgba(192,161,114,0.12)' }}
    >
      <div style={{ height: 2, background: `linear-gradient(90deg, ${accent}, ${accent}40)` }} />
      <div className="p-5 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(192,161,114,0.1)', border: '1px solid rgba(192,161,114,0.15)' }}
          >
            <BookOpen size={20} style={{ color: '#c0a172' }} />
          </div>
          <div className="flex-1 min-w-0">
            <p
              className="text-xs uppercase tracking-widest mb-1"
              style={{ color: '#78909c', letterSpacing: '0.12em', fontFamily: 'var(--font-crimson), serif' }}
            >
              {eyebrow}
            </p>
            <p className="text-sm font-semibold" style={{ color: '#f4f4f4', fontFamily: 'var(--font-playfair), serif' }}>
              {companion.title} · {companion.price}
            </p>
            <p className="text-sm mt-0.5" style={{ color: '#b0a090', fontFamily: 'var(--font-crimson), serif' }}>
              {blurb}
            </p>
          </div>
        </div>
        <div className="flex sm:flex-col items-center sm:items-end gap-3 flex-shrink-0">
          <a
            href={companion.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold"
            style={{ background: `linear-gradient(135deg, ${accent}, ${accent}cc)`, color: '#fff', textDecoration: 'none' }}
          >
            <ShoppingBag size={13} /> Buy the Guide
            <ExternalLink size={11} style={{ opacity: 0.6 }} />
          </a>
          <Link
            href="/guides/"
            className="inline-flex items-center gap-1 text-xs font-semibold link-hover"
            style={{ color: '#c0a172', textDecoration: 'none' }}
          >
            See what&apos;s inside <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </div>
  );
}
