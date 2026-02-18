import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { eras } from '@/data/eras';
import { philosophers } from '@/data/philosophers';
import { dailyQuotes } from '@/data/quotes';
import { BookOpen, Brain, Clock, Compass, ArrowUp, Sparkles, GraduationCap, ShoppingBag } from 'lucide-react';
import HomeClient from '@/components/HomeClient';

export default function HomePage() {
  // Pick a quote deterministically based on the day
  const dayIndex = Math.floor(Date.now() / 86400000) % dailyQuotes.length;
  const quote = dailyQuotes[dayIndex];

  const stats = [
    { label: 'Philosophers', value: philosophers.length.toString() },
    { label: 'Years of Thought', value: '2,600' },
    { label: 'Eras', value: '6' },
    { label: 'Schools', value: '21' },
  ];

  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background effects */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at 30% 20%, rgba(192,161,114,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(44,62,80,0.15) 0%, transparent 60%)',
            }}
          />
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <div className="mb-8">
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs tracking-widest uppercase"
                style={{
                  color: '#c0a172',
                  background: 'rgba(192,161,114,0.1)',
                  border: '1px solid rgba(192,161,114,0.2)',
                  fontFamily: "var(--font-crimson), serif",
                  letterSpacing: '0.2em',
                }}
              >
                Explore · Learn · Think
              </span>
            </div>
            <h1
              className="mb-6"
              style={{
                fontSize: 'clamp(2.8rem, 8vw, 4.5rem)',
                fontWeight: 700,
                lineHeight: 1.05,
                fontFamily: "var(--font-playfair), serif",
                background: 'linear-gradient(90deg, #c0a172, #e8d5b5, #c0a172)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Philosophy
              <br />
              For Everyone
            </h1>
            <p
              className="text-xl mb-10"
              style={{
                color: '#78909c',
                maxWidth: '600px',
                margin: '0 auto 2.5rem',
                lineHeight: 1.7,
                fontFamily: "var(--font-crimson), serif",
              }}
            >
              Journey through 2,600 years of humanity&apos;s greatest ideas.
              <br />
              From ancient Athens to the modern world.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/philosophers/"
                className="px-8 py-3.5 rounded-xl text-base font-semibold transition-all duration-300 inline-block"
                style={{
                  background: 'linear-gradient(135deg, #c0a172, #8B6914)',
                  color: '#0f0c08',
                  fontFamily: "var(--font-crimson), serif",
                  textDecoration: 'none',
                }}
              >
                Meet the Philosophers
              </Link>
              <Link
                href="/eras/"
                className="px-8 py-3.5 rounded-xl text-base font-semibold transition-all duration-300 inline-block"
                style={{
                  background: 'rgba(192,161,114,0.1)',
                  color: '#c0a172',
                  border: '1px solid rgba(192,161,114,0.3)',
                  fontFamily: "var(--font-crimson), serif",
                  textDecoration: 'none',
                }}
              >
                Explore the Eras
              </Link>
            </div>
          </div>
        </section>

        {/* DAILY QUOTE */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="gold-line mb-8" style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(192,161,114,0.4), transparent)' }} />
            <blockquote
              className="text-2xl sm:text-3xl italic mb-4"
              style={{
                color: '#c0a172',
                fontFamily: "var(--font-cormorant), serif",
                lineHeight: 1.5,
              }}
            >
              &ldquo;{quote.text}&rdquo;
            </blockquote>
            <p className="text-sm" style={{ color: '#78909c' }}>
              — {quote.author}
            </p>
            <div className="gold-line mt-8" style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(192,161,114,0.4), transparent)' }} />
          </div>
        </section>

        {/* STATS */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div
                  className="text-3xl sm:text-4xl font-bold mb-1"
                  style={{ color: '#c0a172', fontFamily: "var(--font-playfair), serif" }}
                >
                  {s.value}
                </div>
                <div className="text-sm" style={{ color: '#78909c' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ERA TIMELINE */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className="text-3xl sm:text-4xl font-bold mb-3"
                style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}
              >
                Six Eras of Philosophy
              </h2>
              <p className="text-base" style={{ color: '#78909c' }}>
                Each era asked different questions and arrived at different answers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eras.map((era) => {
                const count = philosophers.filter((p) => p.era === era.id).length;
                return (
                  <Link
                    key={era.id}
                    href={`/eras/${era.id.toLowerCase()}/`}
                    className="group block rounded-2xl p-6 transition-all duration-300"
                    style={{
                      background: 'rgba(26,21,16,0.6)',
                      border: '1px solid rgba(192,161,114,0.1)',
                      textDecoration: 'none',
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ background: era.color }}
                      />
                      <h3
                        className="text-lg font-bold"
                        style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}
                      >
                        {era.name}
                      </h3>
                    </div>
                    <p className="text-sm mb-2" style={{ color: era.color }}>
                      {era.period} · {count} philosophers
                    </p>
                    <p
                      className="text-base leading-relaxed line-clamp-3"
                      style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif" }}
                    >
                      {era.desc}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHY PHILOSOPHY — Quick value prop */}
        <section className="py-20 px-6" style={{ background: 'rgba(192,161,114,0.03)' }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className="text-3xl sm:text-4xl font-bold mb-3"
                style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}
              >
                Why Philosophy?
              </h2>
              <p className="text-base max-w-2xl mx-auto" style={{ color: '#78909c' }}>
                Philosophy isn&apos;t abstract theorizing — it&apos;s the foundation of every argument you&apos;ll ever make about what matters and why.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Brain,
                  title: 'Sharpen Your Thinking',
                  desc: 'Philosophy teaches you to recognize bad arguments, question assumptions, and think through complex problems with precision.',
                },
                {
                  icon: Compass,
                  title: 'Navigate Big Questions',
                  desc: 'What is justice? What makes a life good? These aren\'t abstract exercises — they\'re the questions behind every political debate, ethical dilemma, and personal decision.',
                },
                {
                  icon: GraduationCap,
                  title: 'Understand the World',
                  desc: 'Democracy, human rights, scientific method, free speech — every institution you live under was built on philosophical arguments.',
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl p-6"
                    style={{
                      background: 'rgba(26,21,16,0.6)',
                      border: '1px solid rgba(192,161,114,0.1)',
                    }}
                  >
                    <Icon size={24} style={{ color: '#c0a172' }} className="mb-4" />
                    <h3
                      className="text-lg font-bold mb-2"
                      style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA — Guides */}
        <section className="py-20 px-6">
          <div
            className="max-w-3xl mx-auto text-center rounded-2xl p-10"
            style={{
              background: 'linear-gradient(135deg, rgba(192,161,114,0.08) 0%, rgba(192,161,114,0.02) 100%)',
              border: '1px solid rgba(192,161,114,0.15)',
            }}
          >
            <ShoppingBag size={28} style={{ color: '#c0a172' }} className="mx-auto mb-4" />
            <h2
              className="text-2xl sm:text-3xl font-bold mb-3"
              style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}
            >
              Go Deeper with Companion Guides
            </h2>
            <p className="text-base mb-6 max-w-xl mx-auto" style={{ color: '#b0a090' }}>
              Structured study guides for each era — with reading lists, key terms, journal prompts, and historical context. Perfect for self-study or alongside a Philosophy 101 course.
            </p>
            <Link
              href="/guides/"
              className="inline-block px-8 py-3.5 rounded-xl text-base font-semibold transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #c0a172, #8B6914)',
                color: '#0f0c08',
                fontFamily: "var(--font-crimson), serif",
                textDecoration: 'none',
              }}
            >
              Browse the Guides
            </Link>
          </div>
        </section>

        {/* Email capture — client component */}
        <HomeClient />
      </main>
      <Footer />
    </>
  );
}
