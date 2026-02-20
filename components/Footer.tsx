import Link from 'next/link';
import { BookOpen, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="py-12 px-6"
      style={{
        borderTop: '1px solid rgba(192,161,114,0.1)',
        background: 'rgba(15,12,8,0.6)',
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2.5 mb-3"
              style={{ textDecoration: 'none' }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(192,161,114,0.15), rgba(192,161,114,0.05))',
                  border: '1px solid rgba(192,161,114,0.25)',
                }}
              >
                <BookOpen size={16} style={{ color: '#c0a172' }} />
              </div>
              <span
                className="text-lg font-bold"
                style={{
                  color: '#c0a172',
                  fontFamily: "var(--font-playfair), serif",
                }}
              >
                PhilosophyMe
              </span>
            </Link>
            <p
              className="text-sm max-w-xs"
              style={{ color: '#78909c', lineHeight: 1.6 }}
            >
              Making philosophy accessible — from first-time explorers to
              lifelong students of thought.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div>
              <p
                className="text-xs uppercase tracking-widest mb-3"
                style={{ color: '#78909c', letterSpacing: '0.15em' }}
              >
                Explore
              </p>
              <div className="flex flex-col gap-2">
                {[
                  { label: 'Philosophers', href: '/philosophers/' },
                  { label: 'Eras', href: '/eras/' },
                  { label: 'Branches', href: '/branches/' },
                  { label: 'Guides', href: '/guides/' },
                  { label: 'Community', href: '/community/' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm transition-colors duration-200 link-hover"
                    style={{ color: '#b0a090', textDecoration: 'none' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p
                className="text-xs uppercase tracking-widest mb-3"
                style={{ color: '#78909c', letterSpacing: '0.15em' }}
              >
                Connect
              </p>
              <div className="flex flex-col gap-2">
                {[
                  {
                    label: 'Gumroad',
                    href: 'https://lancing1.gumroad.com/',
                  },
                  {
                    label: 'Buy Me a Coffee',
                    href: 'https://buymeacoffee.com/loganlancing',
                  },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm flex items-center gap-1 transition-colors duration-200 link-hover"
                    style={{ color: '#b0a090', textDecoration: 'none' }}
                  >
                    {link.label}{' '}
                    <ExternalLink size={10} style={{ opacity: 0.5 }} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 text-center"
          style={{ borderTop: '1px solid rgba(192,161,114,0.08)' }}
        >
          <p className="text-sm" style={{ color: '#78909c' }}>
            Created by Logan Lancing · © 2026 PhilosophyMe
          </p>
        </div>
      </div>
    </footer>
  );
}
