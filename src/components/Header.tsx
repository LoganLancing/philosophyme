'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, BookOpen, Brain, Clock, Compass, ShoppingBag, Users } from 'lucide-react';

const navLinks = [
  { href: '/philosophers/', label: 'Philosophers', icon: Brain },
  { href: '/eras/', label: 'Eras', icon: Clock },
  { href: '/branches/', label: 'Branches', icon: Compass },
  { href: '/guides/', label: 'Guides', icon: ShoppingBag },
  { href: '/community/', label: 'Community', icon: Users },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 backdrop-blur-md"
      style={{
        background: 'rgba(13,11,8,0.85)',
        borderBottom: '1px solid rgba(192,161,114,0.12)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            style={{ textDecoration: 'none' }}
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, rgba(192,161,114,0.15), rgba(192,161,114,0.05))',
                border: '1px solid rgba(192,161,114,0.25)',
              }}
            >
              <BookOpen size={18} style={{ color: '#c0a172' }} />
            </div>
            <span
              className="text-xl font-bold tracking-tight"
              style={{ color: '#c0a172', fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
            >
              PhilosophyMe
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                style={{ color: '#b0a090' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#c0a172'; (e.currentTarget as HTMLElement).style.background = 'rgba(192,161,114,0.08)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#b0a090'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ color: '#c0a172' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 anim-fi">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors duration-200"
                  style={{ color: '#b0a090' }}
                  onClick={() => setMobileOpen(false)}
                >
                  <Icon size={18} style={{ color: '#c0a172' }} />
                  {link.label}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
