import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailCapture from '@/components/EmailCapture';
import { guides } from '@/data/guides';
import { eras } from '@/data/eras';
import { BookOpen, ShoppingBag, ExternalLink, Sparkles, Download, Library } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Companion Study Guides',
  description: 'PhilosophyMe Companion Guides — structured study guides for each era of Western philosophy, plus a Thought Experiments collection. Perfect for self-study or alongside a Philosophy 101 course.',
};

export default function GuidesPage() {
  const eraGuides = guides.filter((g) => g.era);
  const teGuide = guides.find((g) => g.id === 'thought-experiments');
  const collection = guides.find((g) => g.id === 'complete-collection');

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-10">
        {/* Header */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span
              className="text-xs tracking-widest uppercase mb-4 block"
              style={{ color: '#78909c', fontFamily: "var(--font-crimson), serif", letterSpacing: '0.2em' }}
            >
              Start Here
            </span>
            <h1
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{ color: '#c0a172', fontFamily: "var(--font-playfair), serif" }}
            >
              Companion Guides
            </h1>
            <p
              className="text-lg leading-relaxed max-w-2xl mx-auto"
              style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif" }}
            >
              Philosophy spans 2,600 years, hundreds of thinkers, and questions that branch in every direction.
              It&apos;s easy to feel lost before you&apos;ve even started. The companion guides cut through the noise
              — each one walks you through the era&apos;s biggest questions, the philosophers who wrestled with them,
              and the exact texts to read first. Timeline, glossary, specific editions, and journal prompts included.
              A clear path from &ldquo;where do I begin?&rdquo; to thinking for yourself.
            </p>
            <p
              className="text-sm mt-4 tracking-wide"
              style={{ color: '#78909c', fontFamily: "var(--font-crimson), serif", letterSpacing: '0.03em' }}
            >
              120+ pages · 25 philosophers · 25 thought experiments · 6 structured reading plans · Built for self-directed learners, homeschool families &amp; college students
            </p>
          </div>

          {/* Pricing badge */}
          <div className="text-center mb-10">
            <div
              className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3 rounded-full"
              style={{ background: 'rgba(192,161,114,0.08)', border: '1px solid rgba(192,161,114,0.2)' }}
            >
              <ShoppingBag size={18} style={{ color: '#c0a172' }} />
              <span
                className="text-lg font-bold"
                style={{ color: '#c0a172', fontFamily: "var(--font-playfair), serif" }}
              >
                $4.99
              </span>
              <span className="text-sm" style={{ color: '#78909c' }}>per guide</span>
              <span className="mx-2" style={{ color: 'rgba(192,161,114,0.3)' }}>|</span>
              <span className="text-sm font-semibold" style={{ color: '#c0a172' }}>All 7 for $19.99</span>
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{ background: 'rgba(192,161,114,0.15)', color: '#c0a172' }}
              >
                Save 43%
              </span>
            </div>
          </div>

          {/* Email capture */}
          <div className="max-w-lg mx-auto mb-12">
            <EmailCapture variant="guides" />
          </div>

          {/* Guide cards grid */}
          <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {/* Era Guide Cards */}
            {eraGuides.map((g) => {
              const era = eras.find((e) => e.id === g.era);
              const color = era?.color || '#c0a172';
              const insideItems = [
                `A structured reading plan — ${g.pages} pages, start to finish`,
                'Timeline, key lineages, and a 15-term glossary you can print',
                'Specific edition and translation recommendations for every primary text',
                '6 journal prompts to develop your own philosophical positions',
              ];
              return (
                <div
                  key={g.id}
                  className="rounded-2xl overflow-hidden transition-all duration-300 guide-card-hover"
                  style={{
                    background: 'rgba(26,21,16,0.6)',
                    border: `1px solid ${color}50`,
                  }}
                >
                  {/* Top accent bar */}
                  <div style={{ height: '3px', background: `linear-gradient(90deg, ${color}, ${color}60)` }} />

                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p
                          className="text-xs uppercase tracking-widest mb-1"
                          style={{ color, letterSpacing: '0.15em', fontFamily: "var(--font-crimson), serif" }}
                        >
                          Your Reading Path
                        </p>
                        <h3
                          className="text-xl font-bold"
                          style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}
                        >
                          {g.title}
                        </h3>
                        <p
                          className="text-base italic mt-1"
                          style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif" }}
                        >
                          {g.subtitle}
                        </p>
                      </div>
                      <span
                        className="text-xs px-2 py-1 rounded-lg flex-shrink-0"
                        style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}
                      >
                        {g.period}
                      </span>
                    </div>

                    {/* Featured thinkers */}
                    <p
                      className="text-base mb-3"
                      style={{ color: '#78909c', fontFamily: "var(--font-crimson), serif" }}
                    >
                      {g.thinkers}
                    </p>

                    {/* Metadata row */}
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-1 mb-4">
                      <span className="text-base flex items-center gap-1.5 whitespace-nowrap" style={{ color: '#78909c' }}>
                        <BookOpen size={14} /> {g.pages} pages
                      </span>
                      <span className="text-base flex items-center gap-1.5 whitespace-nowrap" style={{ color: '#78909c' }}>
                        <Download size={14} /> PDF
                      </span>
                      <span className="text-base flex items-center gap-1.5 whitespace-nowrap" style={{ color: '#78909c' }}>
                        <Library size={14} /> Reading list included
                      </span>
                    </div>

                    {/* What's inside */}
                    <div
                      className="text-base mb-4 space-y-1.5"
                      style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif", lineHeight: 1.55 }}
                    >
                      {insideItems.map((item, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <div
                            className="w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: color }}
                          />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href={g.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-base font-semibold transition-all duration-200"
                      style={{
                        background: `linear-gradient(135deg, ${color}, ${color}cc)`,
                        color: '#fff',
                        textDecoration: 'none',
                      }}
                    >
                      <ShoppingBag size={15} /> Buy Now — $4.99
                      <ExternalLink size={12} style={{ opacity: 0.6 }} />
                    </a>
                  </div>
                </div>
              );
            })}

            {/* Thought Experiments Card */}
            {teGuide && (
              <div
                className="rounded-2xl overflow-hidden transition-all duration-300 guide-card-hover"
                style={{
                  background: 'rgba(26,21,16,0.6)',
                  border: '1px solid rgba(192,161,114,0.35)',
                }}
              >
                <div style={{ height: '3px', background: 'linear-gradient(90deg, #c0a172, #8B6914)' }} />

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p
                        className="text-xs uppercase tracking-widest mb-1"
                        style={{ color: '#c0a172', letterSpacing: '0.15em', fontFamily: "var(--font-crimson), serif" }}
                      >
                        Think for Yourself
                      </p>
                      <h3
                        className="text-xl font-bold"
                        style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}
                      >
                        {teGuide.title}
                      </h3>
                      <p
                        className="text-base italic mt-1"
                        style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif" }}
                      >
                        {teGuide.subtitle}
                      </p>
                    </div>
                    <span
                      className="text-xs px-2 py-1 rounded-lg flex-shrink-0"
                      style={{
                        background: 'rgba(192,161,114,0.12)',
                        color: '#c0a172',
                        border: '1px solid rgba(192,161,114,0.25)',
                      }}
                    >
                      All Eras
                    </span>
                  </div>

                  <p
                    className="text-base mb-3"
                    style={{ color: '#78909c', fontFamily: "var(--font-crimson), serif" }}
                  >
                    {teGuide.thinkers}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-1 mb-4">
                    <span className="text-base flex items-center gap-1.5 whitespace-nowrap" style={{ color: '#78909c' }}>
                      <BookOpen size={14} /> {teGuide.pages} pages
                    </span>
                    <span className="text-base flex items-center gap-1.5 whitespace-nowrap" style={{ color: '#78909c' }}>
                      <Download size={14} /> PDF
                    </span>
                    <span className="text-base flex items-center gap-1.5 whitespace-nowrap" style={{ color: '#78909c' }}>
                      <Sparkles size={14} /> 25 experiments
                    </span>
                  </div>

                  <div
                    className="text-base mb-4 space-y-1.5"
                    style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif", lineHeight: 1.55 }}
                  >
                    {[
                      '25 thought experiments — each with the scenario, major responses, and a YOUR TURN prompt',
                      "Covers 2,600 years of philosophy from Plato's Cave to the Simulation Argument",
                      'Living Questions connecting each experiment to issues you face today',
                      'Glossary, reading list with specific editions, and journal prompts',
                    ].map((item, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <div
                          className="w-1 h-1 rounded-full flex-shrink-0"
                          style={{ background: '#c0a172' }}
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={teGuide.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-base font-semibold transition-all duration-200"
                    style={{
                      background: 'linear-gradient(135deg, #c0a172, #8B6914)',
                      color: '#fff',
                      textDecoration: 'none',
                    }}
                  >
                    <ShoppingBag size={15} /> Buy Now — $4.99
                    <ExternalLink size={12} style={{ opacity: 0.6 }} />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Bundle callout */}
          {collection && (
            <div
              className="mt-8 rounded-2xl p-8 text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(192,161,114,0.06), rgba(139,105,20,0.06))',
                border: '1px solid rgba(192,161,114,0.15)',
              }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Sparkles size={24} style={{ color: '#c0a172' }} />
                <h4
                  className="text-2xl font-bold"
                  style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}
                >
                  Complete Collection
                </h4>
                <Sparkles size={24} style={{ color: '#c0a172' }} />
              </div>
              <p
                className="text-base mb-5 max-w-lg mx-auto leading-relaxed"
                style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif" }}
              >
                All seven guides in one volume — six era reading plans plus 25 thought experiments.
                Start anywhere, or read straight through for{' '}
                <b style={{ color: '#c0a172' }}>$19.99</b> (save 43%).
                The complete Philosophy 101 reading plan.
              </p>
              <a
                href={collection.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg, #c0a172, #8B6914)',
                  color: '#fff',
                  textDecoration: 'none',
                }}
              >
                <ShoppingBag size={16} /> Buy All 7 Guides — $19.99
                <ExternalLink size={13} style={{ opacity: 0.6 }} />
              </a>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
