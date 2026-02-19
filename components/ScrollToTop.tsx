'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center z-30 transition-all duration-300 anim-fi"
      style={{
        background: 'rgba(192,161,114,0.2)',
        border: '1px solid rgba(192,161,114,0.3)',
        color: '#c0a172',
        backdropFilter: 'blur(10px)',
      }}
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}
