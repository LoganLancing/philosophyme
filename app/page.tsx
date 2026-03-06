import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { eras } from '@/data/eras';
import { philosophers } from '@/data/philosophers';
import { branches } from '@/data/branches';
import { dailyQuotes } from '@/data/quotes';
import {
  BookOpen, Clock, Compass, Users, PenLine, Lightbulb,
  Sparkles, Layers, Coffee, ExternalLink, GraduationCap,
} from 'lucide-react';
import HomeClient from '@/components/HomeClient';
import EmailCapture from '@/components/EmailCapture';
import ScrollReveal from '@/components/ScrollReveal';
import SectionOrnament from '@/components/SectionOrnament';

export default function HomePage() {
  const dayIndex = Math.floor(Date.now() / 86400000) % dailyQuotes.length;
  const quote = dailyQuotes[dayIndex];

  const howToCards = [
    { icon: Clock, title: 'Eras', desc: "Walk through philosophy\u2019s seven eras \u2014 from the Pre-Socratics to the present \u2014 with in-depth essays on each period.", href: '/eras/' },
    { icon: Compass, title: 'Branches & Schools', desc: 'Explore the major fields (Ethics, Epistemology, Logic\u2026) and movements (Stoicism, Existentialism, Pragmatism\u2026).', href: '/branches/' },
    { icon: Users, title: '108 Philosophers', desc: 'Browse every thinker with their key arguments, major works, and historical context. Search, filter, and compare.', href: '/philosophers/' },
    { icon: BookOpen, title: 'Companion Guide', desc: 'The PhilosophyMe Companion Guide \u2014 a structured reading plan through all seven eras, designed for self-study, book clubs, or alongside a university course.', href: '/guides/' },
    { icon: PenLine, title: 'Essays & Community', desc: 'Read guest essays on philosophical topics, submit your own writing, or send feedback and suggestions.', href: '/community/' },
    { icon: Lightbulb, title: 'Why Philosophy?', desc: 'Not sure why it matters? Three philosophers across 2,600 years make the case in their own words.', href: '#why' },
  ];

  const coffeeTiers = [
    { amount: '$5', label: 'A Coffee', marker: 'I', desc: 'Thanks for reading!' },
    { amount: '$10', label: 'Two Coffees', marker: 'II', desc: "You\u2019re wonderful." },
    { amount: '$25', label: 'Coffee for a Week', marker: 'III', desc: 'Helping me create more.' },
  ];

  const bottomStats = [
    { num: philosophers.length, label: 'Philosophers', icon: Users },
    { num: eras.length, label: 'Historical Eras', icon: Clock },
    { num: branches.length, label: 'Branches', icon: Layers },
    { num: '2,600+', label: 'Years of Thought', icon: Sparkles },
  ];

  return (
    <>
      <Header />
      <main>
        {/* ========== 1. HERO ========== */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
          <div className="hero-grain" />

          {/* Warm atmospheric light — layered gradients for depth */}
          <div
            className="absolute inset-0"
            style={{
              background: [
                'radial-gradient(ellipse 65% 50% at 42% 38%, rgba(192,161,114,0.10) 0%, transparent 70%)',
                'radial-gradient(ellipse 50% 45% at 68% 70%, rgba(165,135,90,0.06) 0%, transparent 55%)',
                'radial-gradient(ellipse 90% 30% at 48% 5%, rgba(145,115,75,0.04) 0%, transparent 60%)',
                'radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(5,3,1,0.4) 100%)',
              ].join(', '),
            }}
          />

          {/* Diffuse warm light pools — partially off-screen for organic feel */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              top: '-60px',
              left: '-40px',
              width: '600px',
              height: '600px',
              background: 'radial-gradient(circle, rgba(192,161,114,0.14) 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              bottom: '-80px',
              right: '-50px',
              width: '700px',
              height: '700px',
              background: 'radial-gradient(circle, rgba(160,130,90,0.10) 0%, transparent 65%)',
              filter: 'blur(90px)',
            }}
          />

          {/* Fine halftone dot texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(rgba(192,161,114,0.07) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
              maskImage: 'radial-gradient(ellipse 75% 65% at 50% 45%, transparent 10%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0.9) 55%, rgba(0,0,0,0.5) 78%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 45%, transparent 10%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0.9) 55%, rgba(0,0,0,0.5) 78%, transparent 100%)',
            }}
          />


          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <h1
              className="text-shimmer mb-6 anim-fiu"
              style={{
                fontSize: 'clamp(2.8rem, 8vw, 4.5rem)',
                fontWeight: 700,
                lineHeight: 1.05,
                fontFamily: "var(--font-playfair), serif",
                animationDelay: '0.4s',
                animationFillMode: 'both',
              }}
            >
              Philosophy
              <br />
              For Everyone
            </h1>
            <p
              className="text-xl mb-10 anim-fiu"
              style={{
                color: '#8fa3b0',
                maxWidth: '600px',
                margin: '0 auto 2.5rem',
                lineHeight: 1.7,
                fontFamily: "var(--font-crimson), serif",
                animationDelay: '0.6s',
                animationFillMode: 'both',
              }}
            >
              Journey through 2,600 years of humanity&apos;s greatest ideas.
              <br />
              From ancient Athens to the modern world.
            </p>
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-6 left-1/2 flex flex-col items-center gap-2" style={{ animation: 'float-centered 3s ease-in-out infinite' }}>
            <span className="text-xs tracking-widest uppercase" style={{ color: '#78909c', letterSpacing: '0.15em', fontFamily: 'var(--font-crimson), serif' }}>
              Scroll to explore
            </span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 8l6 6 6-6" stroke="#78909c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </section>

        {/* ========== 2. STATS BAR ========== */}
        <section className="py-14 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {bottomStats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                      key={s.label}
                      className="text-center p-6 rounded-2xl"
                      style={{ background: 'rgba(26,21,16,0.4)', border: '1px solid rgba(192,161,114,0.08)' }}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3"
                        style={{ background: 'rgba(192,161,114,0.1)', color: '#c0a172' }}
                      >
                        <Icon size={20} />
                      </div>
                      <p
                        className="text-3xl font-bold mb-1"
                        style={{ color: '#c0a172', fontFamily: "var(--font-playfair), serif" }}
                      >
                        {s.num}
                      </p>
                      <p className="text-sm" style={{ color: '#78909c' }}>{s.label}</p>
                    </div>
                );
              })}
            </div>
          </div>
        </section>

        <SectionOrnament className="max-w-5xl mx-auto px-6" />

        {/* ========== 3. HOW TO EXPLORE ========== */}
        <section className="py-20 px-6 relative">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
                <span
                  className="text-xs tracking-widest uppercase mb-4 block"
                  style={{ color: '#78909c', fontFamily: "var(--font-crimson), serif", letterSpacing: '0.2em' }}
                >
                  Welcome
                </span>
                <h2
                  className="text-3xl sm:text-4xl font-bold mb-5"
                  style={{ color: '#c0a172', fontFamily: "var(--font-playfair), serif" }}
                >
                  How to Explore PhilosophyMe
                </h2>
                <p
                  className="text-base leading-relaxed max-w-2xl mx-auto"
                  style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif", lineHeight: 1.75 }}
                >
                  This site is a free, self-guided introduction to 2,600 years of philosophy. You can explore it in any order — start with what interests you. Here&apos;s what&apos;s inside.
                </p>
              </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {howToCards.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Link
                      key={item.title}
                      href={item.href}
                      className="group rounded-2xl p-6 text-left transition-all duration-300 block card-hover"
                      style={{
                        background: 'rgba(26,21,16,0.5)',
                        border: '1px solid rgba(192,161,114,0.08)',
                        textDecoration: 'none',
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="mt-0.5 flex-shrink-0 flex items-center justify-center"
                          style={{
                            width: '38px',
                            height: '38px',
                            borderRadius: '10px',
                            background: 'rgba(192,161,114,0.08)',
                            border: '1px solid rgba(192,161,114,0.12)',
                          }}
                        >
                          <Icon size={18} style={{ color: '#c0a172' }} />
                        </div>
                        <div>
                          <h3
                            className="text-lg font-semibold mb-1.5"
                            style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}
                          >
                            {item.title}
                          </h3>
                          <p
                            className="text-base leading-relaxed"
                            style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif", lineHeight: 1.65 }}
                          >
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========== 4. QUOTE OF THE DAY (client) ========== */}
        <HomeClient quote={quote} />

        <SectionOrnament className="max-w-5xl mx-auto px-6" />

        {/* ========== 5. WHY PHILOSOPHY MATTERS — VERTICAL TIMELINE ========== */}
        <section id="why" className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
                <span
                  className="text-xs tracking-widest uppercase mb-4 block"
                  style={{ color: '#78909c', fontFamily: "var(--font-crimson), serif", letterSpacing: '0.2em' }}
                >
                  The Value of Thinking
                </span>
                <h2
                  className="text-3xl sm:text-4xl font-bold mb-6"
                  style={{ color: '#c0a172', fontFamily: "var(--font-playfair), serif" }}
                >
                  Why Philosophy Matters
                </h2>
                <p
                  className="text-lg leading-relaxed max-w-2xl mx-auto"
                  style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif" }}
                >
                  For 2,600 years, philosophers have made the case and lived it. Here are three of them.
                </p>
              </div>

            {/* Timeline */}
            <div className="max-w-3xl mx-auto philosophy-timeline space-y-16">
              {/* Entry 1: Socrates */}
              <ScrollReveal delay={1}>
              <div className="timeline-entry relative">
                <div className="timeline-dot" />
                <div>
                  <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#78909c', fontFamily: "var(--font-crimson), serif", marginBottom: '12px' }}>
                    Ancient Greece · 470–399 BCE
                  </p>
                  <p
                    className="italic mb-2"
                    style={{ fontFamily: "var(--font-cormorant), serif", fontSize: '1.45rem', color: '#d3b9a3', lineHeight: 1.5 }}
                  >
                    &ldquo;The unexamined life is not worth living.&rdquo;
                  </p>
                  <p style={{ fontFamily: "var(--font-crimson), serif", fontSize: '0.88rem', color: '#c0a172', marginBottom: '16px' }}>
                    — Socrates
                  </p>
                  <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: '1.15rem', fontWeight: 700, color: '#f4f4f4', marginBottom: '8px' }}>
                    Philosophy begins with a question you can&apos;t answer
                  </h3>
                  <p style={{ fontFamily: "var(--font-crimson), serif", fontSize: '1rem', color: '#b0a090', lineHeight: 1.75, maxWidth: '600px' }}>
                    Socrates spent his life asking people to justify what they claimed to know, and discovering that most couldn&apos;t. That habit of pressing for reasons, of refusing to let a confident assertion substitute for an actual argument, is what turned philosophy into a discipline. Twenty-four centuries later, it&apos;s still the skill that makes the rest of philosophy possible: figuring out what you actually believe, and whether you should.
                  </p>
                </div>
              </div>
              </ScrollReveal>

              {/* Entry 2: Marcus Aurelius */}
              <ScrollReveal delay={2}>
              <div className="timeline-entry relative">
                <div className="timeline-dot" />
                <div>
                  <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#78909c', fontFamily: "var(--font-crimson), serif", marginBottom: '12px' }}>
                    Roman Empire · 121–180 CE
                  </p>
                  <p
                    className="italic mb-2"
                    style={{ fontFamily: "var(--font-cormorant), serif", fontSize: '1.45rem', color: '#d3b9a3', lineHeight: 1.5 }}
                  >
                    &ldquo;Waste no more time arguing about what a good man should be. Be one.&rdquo;
                  </p>
                  <p style={{ fontFamily: "var(--font-crimson), serif", fontSize: '0.88rem', color: '#c0a172', marginBottom: '16px' }}>
                    — Marcus Aurelius
                  </p>
                  <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: '1.15rem', fontWeight: 700, color: '#f4f4f4', marginBottom: '8px' }}>
                    The emperor who held himself accountable
                  </h3>
                  <p style={{ fontFamily: "var(--font-crimson), serif", fontSize: '1rem', color: '#b0a090', lineHeight: 1.75, maxWidth: '600px' }}>
                    Marcus Aurelius ruled the Roman Empire, but he spent his private hours writing reminders to himself about how to live honestly and bear difficulty without complaint. The Meditations were never meant to be published. They were a personal practice: philosophy as something you do every morning, not something you read about. That tradition is as old as philosophy itself.
                  </p>
                </div>
              </div>
              </ScrollReveal>

              {/* Entry 3: John Locke */}
              <ScrollReveal delay={3}>
              <div className="timeline-entry relative">
                <div className="timeline-dot" />
                <div>
                  <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#78909c', fontFamily: "var(--font-crimson), serif", marginBottom: '12px' }}>
                    Early Modern · 1632–1704
                  </p>
                  <p
                    className="italic mb-2"
                    style={{ fontFamily: "var(--font-cormorant), serif", fontSize: '1.45rem', color: '#d3b9a3', lineHeight: 1.5 }}
                  >
                    &ldquo;All men are by nature free, equal, and independent; government derives its authority solely from the consent of the governed.&rdquo;
                  </p>
                  <p style={{ fontFamily: "var(--font-crimson), serif", fontSize: '0.88rem', color: '#c0a172', marginBottom: '16px' }}>
                    — John Locke
                  </p>
                  <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: '1.15rem', fontWeight: 700, color: '#f4f4f4', marginBottom: '8px' }}>
                    The philosophical argument behind the American founding
                  </h3>
                  <p style={{ fontFamily: "var(--font-crimson), serif", fontSize: '1rem', color: '#b0a090', lineHeight: 1.75, maxWidth: '600px' }}>
                    When Jefferson wrote that all men are endowed with unalienable rights, he was translating Locke into revolutionary prose. Natural rights, consent of the governed, the right of revolution: these were philosophical arguments, developed over decades, before they became political principles. They are the intellectual foundation of American constitutional democracy. Every time someone invokes their rights, they&apos;re speaking Locke&apos;s language.
                  </p>
                </div>
              </div>
              </ScrollReveal>
            </div>

            {/* Closer */}
              <div className="text-center mt-20 max-w-2xl mx-auto">
                <p
                  className="italic"
                  style={{ fontFamily: "var(--font-cormorant), serif", fontSize: '1.25rem', color: '#d3b9a3', lineHeight: 1.7 }}
                >
                  Philosophy isn&apos;t a subject you study from the outside. It&apos;s the practice of thinking carefully about everything that matters — and it has been for twenty-six centuries.
                </p>
              </div>
          </div>
        </section>

        <SectionOrnament className="max-w-5xl mx-auto px-6" />

        {/* ========== 6. SUPPORT PHILOSOPHYME ========== */}
        <section id="support" className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{ background: 'rgba(192,161,114,0.06)', border: '1px solid rgba(192,161,114,0.15)' }}
              >
                <Coffee size={24} style={{ color: '#c0a172' }} />
              </div>
              <h2
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{ color: '#c0a172', fontFamily: "var(--font-playfair), serif" }}
              >
                Support PhilosophyMe
              </h2>
              <p
                className="text-lg leading-relaxed mb-8 max-w-xl mx-auto"
                style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif" }}
              >
                Every philosopher profile, essay, and timeline on this site is free and always will be. If PhilosophyMe has helped you think more clearly or discover a new thinker, consider buying me a coffee to help keep the project going.
              </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {coffeeTiers.map((opt, i) => (
                <a
                    key={opt.amount}
                    href="https://buymeacoffee.com/loganlancing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl p-5 transition-all duration-300 cursor-pointer card-hover block"
                    style={{
                      background: 'rgba(26,21,16,0.5)',
                      border: '1px solid rgba(192,161,114,0.1)',
                      minWidth: '160px',
                      textDecoration: 'none',
                    }}
                  >
                    <span
                      className="block mb-2"
                      style={{ fontFamily: "var(--font-cormorant), serif", fontSize: '1.3rem', color: '#c0a172', opacity: 0.7 }}
                    >
                      {opt.marker}
                    </span>
                    <span
                      className="text-xl font-bold block mb-1"
                      style={{ color: '#c0a172', fontFamily: "var(--font-playfair), serif" }}
                    >
                      {opt.amount}
                    </span>
                    <span className="text-base font-semibold block mb-1" style={{ color: '#f4f4f4' }}>
                      {opt.label}
                    </span>
                    <span className="text-sm block" style={{ color: '#8fa3b0' }}>
                      {opt.desc}
                    </span>
                  </a>
              ))}
            </div>

            <a
              href="https://buymeacoffee.com/loganlancing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{ background: '#FFDD00', color: '#1a1510', textDecoration: 'none' }}
            >
              <Coffee size={16} /> Buy Me a Coffee
              <ExternalLink size={12} style={{ opacity: 0.5 }} />
            </a>

            <p className="text-sm mt-6" style={{ color: '#78909c' }}>
              Every contribution directly supports research, writing, and keeping PhilosophyMe free for everyone.
            </p>
          </div>
        </section>

        <SectionOrnament className="max-w-5xl mx-auto px-6" />

        {/* ========== 7. BUILT FOR CURIOUS MINDS ========== */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div
                className="text-center rounded-2xl p-10"
                style={{
                  background: 'linear-gradient(135deg, rgba(192,161,114,0.06) 0%, rgba(44,62,80,0.06) 100%)',
                  border: '1px solid rgba(192,161,114,0.1)',
                }}
              >
                <div
                  className="w-13 h-13 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ width: '52px', height: '52px', background: 'rgba(192,161,114,0.06)', border: '1px solid rgba(192,161,114,0.15)' }}
                >
                  <GraduationCap size={24} style={{ color: '#c0a172' }} />
                </div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}
                >
                  Built for Curious Minds
                </h3>
                <p
                  className="leading-relaxed max-w-xl mx-auto mb-6"
                  style={{ color: '#8a7a6a', fontFamily: "var(--font-crimson), serif" }}
                >
                  PhilosophyMe is dedicated to making philosophy accessible and engaging — from first-time explorers to lifelong students of thought.
                </p>
                <div className="max-w-md mx-auto mb-6">
                  <EmailCapture variant="footer" />
                </div>
                <p className="text-sm" style={{ color: '#78909c' }}>
                  Created by Logan Lancing · © 2026 PhilosophyMe
                </p>
              </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}