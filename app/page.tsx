import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { eras } from '@/data/eras';
import { philosophers } from '@/data/philosophers';
import { branches } from '@/data/branches';
import { dailyQuotes } from '@/data/quotes';
import {
  BookOpen, Clock, Compass, Users, PenLine, Lightbulb,
  Sparkles, Layers, Coffee, ExternalLink, GraduationCap, Download,
} from 'lucide-react';
import HomeClient from '@/components/HomeClient';
import ScrollReveal from '@/components/ScrollReveal';
import SectionOrnament from '@/components/SectionOrnament';

export default function HomePage() {
  const dayIndex = Math.floor(Date.now() / 86400000) % dailyQuotes.length;
  const quote = dailyQuotes[dayIndex];

  const howToCards = [
    { icon: Clock, title: 'Eras', desc: "Read through seven major eras of philosophy, from the Pre-Socratics to the present.", href: '/eras/' },
    { icon: Compass, title: 'Branches & Schools', desc: 'Learn the main branches of philosophy, like ethics and logic, along with major schools of thought like Stoicism and Existentialism.', href: '/branches/' },
    { icon: Users, title: '108 Philosophers', desc: 'Browse 108 philosophers, their main ideas, key works, and place in history. Search, filter, and compare.', href: '/philosophers/' },
    { icon: BookOpen, title: 'Companion Guide', desc: 'The PhilosophyMe Companion Guide gives you The Story of Western Thought, suggested readings, and journal prompts. A guide through 2,600 years of philosophy for self-study, homeschool, college, or clubs.', href: '/guides/' },
    { icon: PenLine, title: 'Essays & Community', desc: 'Read essays, send feedback, or submit your own writing for the site.', href: '/community/' },
    { icon: Lightbulb, title: 'Why Philosophy?', desc: 'Still not sure why philosophy matters? Start here and see how three major thinkers answered that question.', href: '#why' },
  ];

  const coffeeTiers = [
    { amount: '$5', label: 'A Coffee', marker: 'I', desc: 'Thanks for reading!' },
    { amount: '$10', label: 'Two Coffees', marker: 'II', desc: "You're wonderful." },
    { amount: '$25', label: 'Coffee for a Week', marker: 'III', desc: 'Helping me create more.' },
  ];

  const bottomStats = [
    { num: philosophers.length, label: 'Philosophers', icon: Users },
    { num: eras.length, label: 'Historical Eras', icon: Clock },
    { num: branches.length, label: 'Branches', icon: Layers },
    { num: '2,600+', label: 'Years of Thought', icon: Sparkles },
  ];

  // Organization JSON-LD
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PhilosophyMe',
    url: 'https://philosophyme.co',
    description: 'Study 108 philosophers across seven eras of Western philosophy. Read clear profiles, era essays, schools of thought, and companion study guides.',
    publisher: {
      '@type': 'Organization',
      name: 'PhilosophyMe',
      url: 'https://philosophyme.co',
      logo: { '@type': 'ImageObject', url: 'https://philosophyme.co/og-image.png' },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <Header />
      <main>
        {/* ========== 1. HERO ========== */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
          {/* School of Athens background */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(/images/hero-school-of-athens.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center 30%',
              backgroundRepeat: 'no-repeat',
            }}
          />

          {/* Dark cinematic overlay — vignette + top/bottom fade */}
          <div
            className="absolute inset-0"
            style={{
              background: [
                'linear-gradient(to bottom, rgba(15,12,8,0.93) 0%, rgba(15,12,8,0.72) 30%, rgba(15,12,8,0.60) 50%, rgba(15,12,8,0.75) 70%, rgba(15,12,8,0.96) 100%)',
                'radial-gradient(ellipse 80% 70% at 50% 45%, rgba(15,12,8,0.15) 20%, rgba(15,12,8,0.55) 100%)',
              ].join(', '),
            }}
          />

          {/* Subtle grain texture */}
          <div className="hero-grain" />


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
                  How to Use PhilosophyMe
                </h2>
                <p
                  className="text-base leading-relaxed max-w-2xl mx-auto"
                  style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif", lineHeight: 1.75 }}
                >
                  PhilosophyMe is a free introduction to the history of philosophy. You do not need to start at the beginning. Pick a topic, a thinker, or an era and follow your interest.
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
                  Why It Matters
                </span>
                <h2
                  className="text-3xl sm:text-4xl font-bold mb-6"
                  style={{ color: '#c0a172', fontFamily: "var(--font-playfair), serif" }}
                >
                  Why Study Philosophy?
                </h2>
                <p
                  className="text-lg leading-relaxed max-w-2xl mx-auto"
                  style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif" }}
                >
                  Philosophy asks the questions people keep coming back to. How should we live? What is true? What is fair? What makes a good life? Here are three thinkers who show why those questions still matter.
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
                    Philosophy starts with asking better questions
                  </h3>
                  <p style={{ fontFamily: "var(--font-crimson), serif", fontSize: '1rem', color: '#b0a090', lineHeight: 1.75, maxWidth: '600px' }}>
                    Socrates spent his life asking people to explain what they believed. He wanted reasons, not slogans. That habit still sits at the heart of philosophy. Before you decide what is true, good, or just, you have to ask what you mean and why you believe it.
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
                    Philosophy is meant to shape daily life
                  </h3>
                  <p style={{ fontFamily: "var(--font-crimson), serif", fontSize: '1rem', color: '#b0a090', lineHeight: 1.75, maxWidth: '600px' }}>
                    Marcus Aurelius ruled an empire, yet he wrote private notes to help himself live with discipline, patience, and honesty. Those notes became Meditations. They remind us that philosophy is not only about reading difficult books. It is also about how you carry yourself when life gets hard.
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
                    Ideas do not stay on the page
                  </h3>
                  <p style={{ fontFamily: "var(--font-crimson), serif", fontSize: '1rem', color: '#b0a090', lineHeight: 1.75, maxWidth: '600px' }}>
                    Locke argued for natural rights, limited government, and the consent of the governed. Those ideas shaped modern politics in lasting ways, including the language of the American founding. Philosophy does not stay in classrooms. It shapes laws, institutions, and the way people talk about freedom.
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
                  Philosophy is careful thinking about the questions that matter most.
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
                  PhilosophyMe helps first-time readers, homeschool students, college students, and lifelong learners study philosophy in clear, simple language.
                </p>
                <div className="max-w-md mx-auto mb-6">
                  <p className="text-sm mb-3" style={{ color: '#b0a090' }}>
                    Get a free chapter from the Companion Guide:
                  </p>
                  <a
                    href="/downloads/PhilosophyMe_Free_Chapter.pdf"
                    download
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
                    style={{
                      background: 'linear-gradient(135deg, #c0a172, #8B6914)',
                      color: '#fff',
                      textDecoration: 'none',
                    }}
                  >
                    <Download size={14} /> Download Free Chapter
                  </a>
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