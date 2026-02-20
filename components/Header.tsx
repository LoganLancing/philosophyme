'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, BookOpen, Brain, Clock, Compass, ShoppingBag, Users, Coffee } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home', icon: BookOpen },
  { href: '/eras/', label: 'Eras', icon: Clock },
  { href: '/branches/', label: 'Branches', icon: Compass },
  { href: '/philosophers/', label: 'Philosophers', icon: Brain },
  { href: '/guides/', label: 'Guides', icon: ShoppingBag },
  { href: '/community/', label: 'Community', icon: Users },
  { href: '/#support', label: 'Support', icon: Coffee },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(15,12,8,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(192,161,114,0.1)' : '1px solid transparent',
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
            {navLinks.map((link) => {
              const isActive = link.href === '/' ? pathname === '/' : link.href === '/#support' ? false : pathname.startsWith(link.href.replace(/\/$/, ''));
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                  style={{
                    color: isActive ? '#c0a172' : '#b0a090',
                    background: isActive ? 'rgba(192,161,114,0.1)' : 'transparent',
                    fontFamily: "var(--font-crimson), serif",
                    fontSize: '0.95rem',
                  }}
                  onMouseEnter={(e) => { if (!isActive) { (e.currentTarget as HTMLElement).style.color = '#c0a172'; (e.currentTarget as HTMLElement).style.background = 'rgba(192,161,114,0.08)'; }}}
                  onMouseLeave={(e) => { if (!isActive) { (e.currentTarget as HTMLElement).style.color = '#b0a090'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ background: 'rgba(192,161,114,0.1)', color: '#c0a172' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 anim-fi" style={{ borderTop: '1px solid rgba(192,161,114,0.1)' }}>
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = link.href === '/' ? pathname === '/' : link.href === '/#support' ? false : pathname.startsWith(link.href.replace(/\/$/, ''));
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors duration-200"
                  style={{
                    color: isActive ? '#c0a172' : '#b0a090',
                    background: isActive ? 'rgba(192,161,114,0.08)' : 'transparent',
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  <Icon size={18} style={{ color: isActive ? '#c0a172' : '#78909c' }} />
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
