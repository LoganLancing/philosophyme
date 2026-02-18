import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailCapture from '@/components/EmailCapture';
import { guides } from '@/data/guides';
import { eras } from '@/data/eras';
import { BookOpen, ShoppingBag, ExternalLink, Star, Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Companion Study Guides',
  description: 'PhilosophyMe Companion Guides — structured study guides for each era of Western philosophy, plus a Thought Experiments collection. Perfect for self-study or alongside a Philosophy 101 course.',
};

export default function GuidesPage() {
  const eraGuides = guides.filter((g) => g.era);
  const specialGuides = guides.filter((g) => !g.era);
  const collection = guides.find((g) => g.id === 'complete-collection');

  return (
    <>
      <Header />
      <main className="min-h-screen max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-10">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}>
            Companion Study Guides
          </h1>
          <p className="text-base max-w-2xl mx-auto" style={{ color: '#78909c' }}>
            Structured reading paths through each era of philosophy — with key terms, historical context, reading lists, and journal prompts.
          </p>
        </div>

        {/* Complete Collection Feature */}
        {collection && (
          <a
            href={collection.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl p-6 sm:p-8 mb-10 transition-all duration-300 guide-card-hover"
            style={{
              background: 'linear-gradient(135deg, rgba(192,161,114,0.08) 0%, rgba(192,161,114,0.02) 100%)',
              border: '1px solid rgba(192,161,114,0.2)',
              textDecoration: 'none',
            }}
          >
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(192,161,114,0.12)', border: '1px solid rgba(192,161,114,0.2)' }}>
                <Star size={28} style={{ color: '#c0a172' }} />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#c0a172', letterSpacing: '0.15em' }}>Best Value</p>
                <h2 className="text-xl sm:text-2xl font-bold mb-1" style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}>
                  {collection.title}
                </h2>
                <p className="text-base" style={{ color: '#b0a090' }}>
                  {collection.description}
                </p>
              </div>
              <div className="flex-shrink-0 text-center">
                <div className="text-2xl font-bold mb-1" style={{ color: '#c0a172' }}>{collection.price}</div>
                <div className="text-xs" style={{ color: '#78909c' }}>
                  {collection.pages} pages · Save 43%
                </div>
                <div className="mt-2 inline-flex items-center gap-1.5 px-5 py-2 rounded-lg text-sm font-semibold"
                  style={{ background: 'linear-gradient(135deg, #c0a172, #8B6914)', color: '#0f0c08' }}>
                  <ShoppingBag size={14} /> Get the Collection <ExternalLink size={11} style={{ opacity: 0.6 }} />
                </div>
              </div>
            </div>
          </a>
        )}

        {/* Era Guides Grid */}
        <h2 className="text-2xl font-bold mb-6" style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}>
          Era Guides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {eraGuides.map((g) => {
            const era = eras.find((e) => e.id === g.era);
            const color = era?.color || '#c0a172';
            return (
              <a
                key={g.id}
                href={g.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl overflow-hidden transition-all duration-300 guide-card-hover"
                style={{ background: 'rgba(26,21,16,0.6)', border: '1px solid rgba(192,161,114,0.1)', textDecoration: 'none' }}
              >
                <div style={{ height: 3, background: `linear-gradient(90deg, ${color}, ${color}60)` }} />
                <div className="p-5">
                  <h3 className="text-base font-bold mb-0.5" style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}>
                    {g.title}
                  </h3>
                  <p className="text-sm italic mb-2" style={{ color }}>{g.subtitle}</p>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: '#b0a090' }}>
                    {g.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: '#78909c' }}>{g.pages} pages</span>
                    <span className="text-sm font-semibold" style={{ color: '#c0a172' }}>{g.price}</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="max-w-5xl mx-auto"><div className="gold-line mb-8" /></div>

        {/* Thought Experiments */}
        {specialGuides.filter((g) => g.id !== 'complete-collection').map((g) => (
          <a
            key={g.id}
            href={g.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl p-6 mb-8 transition-all duration-300 guide-card-hover"
            style={{ background: 'rgba(26,21,16,0.6)', border: '1px solid rgba(192,161,114,0.1)', textDecoration: 'none' }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(192,161,114,0.1)', border: '1px solid rgba(192,161,114,0.15)' }}>
                <BookOpen size={20} style={{ color: '#c0a172' }} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-0.5" style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}>
                  {g.title}
                </h3>
                <p className="text-sm" style={{ color: '#b0a090' }}>{g.description}</p>
              </div>
              <div className="flex-shrink-0 text-right">
                <div className="text-lg font-bold" style={{ color: '#c0a172' }}>{g.price}</div>
                <div className="text-xs" style={{ color: '#78909c' }}>{g.pages} pages</div>
              </div>
            </div>
          </a>
        ))}

        {/* Email capture */}
        <div className="mt-8">
          <EmailCapture variant="guides" />
        </div>
      </main>
      <Footer />
    </>
  );
}
