import Link from 'next/link';
import { BookOpen, ExternalLink, Coffee } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="mt-20"
      style={{
        borderTop: '1px solid rgba(192,161,114,0.12)',
        background: 'rgba(13,11,8,0.95)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen size={18} style={{ color: '#c0a172' }} />
              <span
                className="text-lg font-bold"
                style={{ color: '#c0a172', fontFamily: "var(--font-playfair), serif" }}
              >
                PhilosophyMe
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#78909c' }}>
              2,600 years of human thought, made accessible.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#c0a172' }}>
              Explore
            </h4>
            <div className="space-y-2">
              <Link href="/philosophers/" className="block text-sm" style={{ color: '#b0a090' }}>
                Philosophers
              </Link>
              <Link href="/eras/" className="block text-sm" style={{ color: '#b0a090' }}>
                Eras
              </Link>
              <Link href="/branches/" className="block text-sm" style={{ color: '#b0a090' }}>
                Branches & Schools
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#c0a172' }}>
              Resources
            </h4>
            <div className="space-y-2">
              <Link href="/guides/" className="block text-sm" style={{ color: '#b0a090' }}>
                Companion Guides
              </Link>
              <Link href="/community/" className="block text-sm" style={{ color: '#b0a090' }}>
                Community
              </Link>
              <a
                href="https://lancing1.gumroad.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm"
                style={{ color: '#b0a090' }}
              >
                Gumroad Store <ExternalLink size={11} style={{ opacity: 0.5 }} />
              </a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#c0a172' }}>
              Support
            </h4>
            <div className="space-y-2">
              <a
                href="https://buymeacoffee.com/philosophyme"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm"
                style={{ color: '#b0a090' }}
              >
                <Coffee size={14} style={{ color: '#c0a172' }} /> Buy Me a Coffee
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(192,161,114,0.08)' }}
        >
          <p className="text-xs" style={{ color: '#78909c' }}>
            &copy; {new Date().getFullYear()} PhilosophyMe. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: '#78909c' }}>
            An independent educational project.
          </p>
        </div>
      </div>
    </footer>
  );
}
