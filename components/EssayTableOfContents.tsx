'use client';
import { useState, useEffect, useCallback } from 'react';

interface Props {
  sections: { heading: string }[];
}

export default function EssayTableOfContents({ sections }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const headings = document.querySelectorAll('[data-essay-section]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-essay-section'));
            setActiveIndex(index);
          }
        });
      },
      { rootMargin: '-96px 0px -60% 0px' }
    );
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, index: number) => {
    e.preventDefault();
    const target = document.getElementById(`essay-section-${index}`);
    if (target) {
      const headerOffset = 96; // matches pt-24 (6rem = 96px)
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - headerOffset, behavior: 'smooth' });
    }
  }, []);

  return (
    <nav className="hidden lg:block sticky top-24" style={{ maxHeight: 'calc(100vh - 8rem)', overflowY: 'auto' }}>
      <p className="text-base uppercase tracking-widest mb-3" style={{ color: '#78909c', letterSpacing: '0.15em', fontFamily: 'var(--font-crimson), serif' }}>
        Contents
      </p>
      <div className="space-y-2">
        {sections.map((s, i) => (
          <a
            key={i}
            href={`#essay-section-${i}`}
            onClick={(e) => handleClick(e, i)}
            className="block leading-snug transition-colors duration-200"
            style={{
              fontSize: '17px',
              color: i === activeIndex ? '#c0a172' : '#78909c',
              fontFamily: 'var(--font-crimson), serif',
              textDecoration: 'none',
              paddingLeft: i === activeIndex ? '12px' : '0',
              borderLeft: i === activeIndex ? '2px solid #c0a172' : '2px solid transparent',
              transition: 'all 0.2s ease',
            }}
          >
            {s.heading}
          </a>
        ))}
      </div>
    </nav>
  );
}
