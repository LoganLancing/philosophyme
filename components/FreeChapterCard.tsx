import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import EmailCapture from './EmailCapture';

const DEFAULT_BODY =
  'Get Chapter 1 of the Companion Guide (Ancient Philosophy) and a printable 14-week study plan. Enter your email and both are yours right away.';

interface Props {
  // Where the card sits; sent with the GA4 events.
  location: string;
  heading?: string;
  body?: string;
  className?: string;
}

// Mid-page offer: the free chapter and study plan for an email, plus a quiet link to the full guide.
export default function FreeChapterCard({
  location,
  heading = 'Start the story of philosophy, free',
  body = DEFAULT_BODY,
  className = '',
}: Props) {
  return (
    <aside
      data-track-location={location}
      className={`rounded-2xl p-6 sm:p-7 ${className}`}
      style={{
        background: 'rgba(26,21,16,0.75)',
        border: '1px solid rgba(192,161,114,0.2)',
        borderTop: '3px solid #c0a172',
      }}
    >
      <p
        className="text-xs uppercase mb-2"
        style={{ color: '#c0a172', letterSpacing: '0.15em', fontFamily: 'var(--font-crimson), serif' }}
      >
        Free chapter
      </p>
      <h2
        className="text-xl font-bold mb-2"
        style={{ color: '#f4f4f4', fontFamily: 'var(--font-playfair), serif' }}
      >
        {heading}
      </h2>
      <p
        className="text-base leading-relaxed mb-4"
        style={{ color: '#b0a090', fontFamily: 'var(--font-crimson), serif' }}
      >
        {body}
      </p>
      <EmailCapture variant="card" location={location} />
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 mt-4 text-sm">
        <span style={{ color: '#78909c' }}>No spam. Unsubscribe anytime.</span>
        <Link
          href="/guides/"
          className="inline-flex items-center gap-1 font-semibold link-hover"
          style={{ color: '#c0a172', textDecoration: 'none' }}
        >
          See the full Companion Guide · $19.99 <ArrowRight size={13} />
        </Link>
      </div>
    </aside>
  );
}
