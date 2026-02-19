import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { eras } from '@/data/eras';
import { philosophers } from '@/data/philosophers';
import { branches } from '@/data/branches';
import { dailyQuotes } from '@/data/quotes';
import {
  BookOpen, Brain, Clock, Compass, GraduationCap, ShoppingBag,
  Users, PenLine, Lightbulb, Scale, Eye, Heart, Quote,
  Coffee, ExternalLink, Sparkles, Layers, MessageSquare,
} from 'lucide-react';
import HomeClient from '@/components/HomeClient';

export default function HomePage() {
  const dayIndex = Math.floor(Date.now() / 86400000) % dailyQuotes.length;
  const quote = dailyQuotes[dayIndex];

  const stats = [
    { label: 'Philosophers', value: philosophers.length.toString() },
    { label: 'Years of Thought', value: '2,600' },
    { label: 'Eras', value: '6' },
    { label: 'Schools', value: '21' },
  ];

  const howToCards = [
    { icon: Clock, title: 'Eras', desc: "Walk through philosophy's six ages — from the Pre-Socratics to the present — with in-depth essays on each period.", href: '/eras/' },
    { icon: Compass, title: 'Branches & Schools', desc: 'Explore the major fields (Ethics, Epistemology, Logic…) and movements (Stoicism, Existentialism, Pragmatism…).', href: '/branches/' },
    { icon: Users, title: '108 Philosophers', desc: 'Browse every thinker with their key arguments, major works, and historical context. Search, filter, and compare.', href: '/philosophers/' },
    { icon: BookOpen, title: 'Companion Guides', desc: 'Deep-dive PDF guides for each era — designed for self-study, book clubs, or alongside a university course.', href: '/guides/' },
    { icon: PenLine, title: 'Essays & Community', desc: 'Read guest essays on philosophical topics, submit your own writing, or send feedback and suggestions.', href: '/community/' },
    { icon: Lightbulb, title: 'Why Philosophy?', desc: "Not sure where to start? Begin here — a short case for why philosophical thinking matters in everyday life.", href: '#why' },
  ];

  const whyCards = [
    { icon: Brain, title: 'Think Clearly', desc: 'Learn to analyze arguments, spot logical fallacies, and reason through complex problems. Philosophy trains the mind like nothing else.' },
    { icon: Scale, title: 'Make Better Decisions', desc: 'Ethics gives you frameworks for navigating moral dilemmas — at work, in relationships, and in civic life.' },
    { icon: Eye, title: 'Understand Perspectives', desc: 'Every philosopher built a framework for understanding reality, morality, and human purpose. Studying those frameworks reveals how people arrive at fundamentally different views of the world and their place in it.' },
    { icon: Lightbulb, title: 'Question Assumptions', desc: 'The most powerful ideas are often the ones we never think to question. Philosophy teaches you to examine your deepest beliefs.' },
    { icon: Heart, title: 'Find Meaning', desc: "From Stoicism to Existentialism, philosophy offers time-tested approaches to life's biggest questions about purpose and fulfillment." },
    { icon: Users, title: 'Engage as a Citizen', desc: 'Political philosophy and ethics form the foundation of democratic discourse. Informed citizens think philosophically.' },
  ];

  const coffeeTiers = [
    { amount: '$5', label: 'A Coffee', icon: '☕', desc: 'Thanks for reading!' },
    { amount: '$10', label: 'Two Coffees', icon: '☕☕', desc: "You're wonderful." },
    { amount: '$25', label: 'Coffee for a Week', icon: '📚', desc: 'Helping me create more.' },
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
        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Grain texture */}
          <div className="hero-grain" />
          {/* Radial gradient background */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at 30% 20%, rgba(192,161,114,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(44,62,80,0.15) 0%, transparent 60%)',
            }}
          />
          {/* Floating orbs */}
          <div
            className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(192,161,114,0.15) 0%, transparent 70%)',
              animation: 'float 8s ease-in-out infinite',
              filter: 'blur(40px)',
            }}
          />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-15"
            style={{
              background: 'radial-gradient(circle, rgba(44,62,80,0.2) 0%, transparent 70%)',
              animation: 'float 10s ease-in-out infinite 2s',
              filter: 'blur(50px)',
            }}
          />

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <div className="mb-8 anim-fi" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
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
                color: '#78909c',
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
            <div
              className="flex flex-wrap items-center justify-center gap-4 anim-fiu"
              style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
            >
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
                Explore {philosophers.length} Philosophers
              </Link>
              <Link
                href="#why"
                className="px-8 py-3.5 rounded-xl text-base font-semibold transition-all duration-300 inline-block"
                style={{
                  background: 'transparent',
                  color: '#c0a172',
                  border: '1px solid rgba(192,161,114,0.3)',
                  fontFamily: "var(--font-crimson), serif",
                  textDecoration: 'none',
                }}
              >
                Why Philosophy?
              </Link>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6"><div className="gold-line" /></div>

        {/* STATS BAR */}
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

        <div className="max-w-5xl mx-auto px-6"><div className="gold-line" /></div>

        {/* HOW TO EXPLORE */}
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
              {howToCards.map((item) => {
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
                      <div className="mt-0.5 shrink-0">
                        <Icon size={26} style={{ color: '#c0a172' }} />
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

        {/* Quote + Email capture (client) */}
        <HomeClient quote={quote} />

        <div className="max-w-5xl mx-auto px-6"><div className="gold-line" /></div>

        {/* WHY PHILOSOPHY MATTERS */}
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
                Philosophy isn&apos;t dusty textbooks and ivory towers. It&apos;s the operating system for clear thinking — and it upgrades every part of your life.
              </p>
            </div>
            <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {whyCards.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl p-6 transition-all duration-300 card-hover-subtle"
                    style={{
                      background: 'rgba(26,21,16,0.5)',
                      border: '1px solid rgba(192,161,114,0.08)',
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: 'rgba(192,161,114,0.1)' }}
                    >
                      <Icon size={24} style={{ color: '#c0a172' }} />
                    </div>
                    <h3
                      className="text-lg font-bold mb-2"
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
                );
              })}
            </div>
            {/* Socrates quote */}
            <div
              className="mt-16 text-center rounded-2xl p-10"
              style={{
                background: 'linear-gradient(135deg, rgba(192,161,114,0.06) 0%, rgba(44,62,80,0.06) 100%)',
                border: '1px solid rgba(192,161,114,0.1)',
              }}
            >
              <Quote size={28} style={{ color: '#c0a172', margin: '0 auto 16px', opacity: 0.5 }} />
              <p
                className="text-2xl italic leading-relaxed mb-4"
                style={{ color: '#d3b9a3', fontFamily: "var(--font-cormorant), serif" }}
              >
                &ldquo;The unexamined life is not worth living.&rdquo;
              </p>
              <p style={{ color: '#78909c', fontFamily: "var(--font-crimson), serif" }}>
                — Socrates, at his trial in 399 BCE
              </p>
            </div>
          </div>
        </section>

        {/* OUR APPROACH */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(26,21,16,0.7), rgba(26,21,16,0.5))',
                border: '1px solid rgba(192,161,114,0.18)',
              }}
            >
              {/* Top accent — all 6 era colors */}
              <div
                style={{
                  height: '3px',
                  background:
                    'linear-gradient(90deg, #8B6914 0%, #8B6914 16.6%, #6B4226 16.6%, #6B4226 33.2%, #8B4513 33.2%, #8B4513 49.8%, #2E5A4C 49.8%, #2E5A4C 66.4%, #4A2545 66.4%, #4A2545 83%, #1a5276 83%, #1a5276 100%)',
                }}
              />
              <div className="p-10">
                <div className="text-center mb-8">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: 'rgba(192,161,114,0.08)', border: '1px solid rgba(192,161,114,0.2)' }}
                  >
                    <Scale size={22} style={{ color: '#c0a172' }} />
                  </div>
                  <h2
                    className="text-2xl font-bold mb-2"
                    style={{ color: '#c0a172', fontFamily: "var(--font-playfair), serif" }}
                  >
                    Our Approach
                  </h2>
                  <p
                    className="text-sm italic"
                    style={{ color: '#78909c', fontFamily: "var(--font-crimson), serif" }}
                  >
                    Philosophy for everyone — not philosophy for a side
                  </p>
                </div>

                <div
                  className="space-y-4"
                  style={{ fontFamily: "var(--font-crimson), serif", fontSize: '1.05rem', lineHeight: '1.85', color: '#b0a090' }}
                >
                  <p>
                    PhilosophyMe presents philosophy the way a good university classroom does: as fairly and honestly as possible. Every philosopher on this site — whether you find them inspiring or infuriating — is covered on their own terms, with their strongest arguments given a fair hearing.
                  </p>
                  <p>
                    The founder of this site has deep personal convictions about many of these thinkers and movements. Those convictions are deliberately kept out of the site&apos;s content. This is not a place that tells you what to think. It&apos;s a place that gives you the tools to think for yourself — and trusts you to do it.
                  </p>
                  <p>
                    If you have strong reactions to what you read here, <em>good</em>. That means the philosophy is working. Here&apos;s what to do with those reactions:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <Link
                    href="/community/"
                    className="rounded-xl p-5 text-left transition-all duration-200 block card-hover-subtle"
                    style={{
                      background: 'rgba(192,161,114,0.04)',
                      border: '1px solid rgba(192,161,114,0.1)',
                      textDecoration: 'none',
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare size={16} style={{ color: '#c0a172' }} />
                      <span
                        className="font-semibold"
                        style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif", fontSize: '1.125rem' }}
                      >
                        Leave Feedback
                      </span>
                    </div>
                    <p
                      className="leading-relaxed"
                      style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif", fontSize: '1.05rem', lineHeight: 1.65 }}
                    >
                      See something that could be more accurate or more fair? Tell us. Suggestions and corrections make the site better for everyone.
                    </p>
                  </Link>
                  <Link
                    href="/community/"
                    className="rounded-xl p-5 text-left transition-all duration-200 block card-hover-subtle"
                    style={{
                      background: 'rgba(192,161,114,0.04)',
                      border: '1px solid rgba(192,161,114,0.1)',
                      textDecoration: 'none',
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <PenLine size={16} style={{ color: '#c0a172' }} />
                      <span
                        className="font-semibold"
                        style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif", fontSize: '1.125rem' }}
                      >
                        Submit a Guest Essay
                      </span>
                    </div>
                    <p
                      className="leading-relaxed"
                      style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif", fontSize: '1.05rem', lineHeight: 1.65 }}
                    >
                      Have a perspective, argument, or critique you want to make? Guest essays are where opinions, debate, and original thinking belong.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6"><div className="gold-line" /></div>

        {/* A BRIEF HISTORY OF PHILOSOPHY */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span
                className="text-xs tracking-widest uppercase mb-4 block"
                style={{ color: '#78909c', fontFamily: "var(--font-crimson), serif", letterSpacing: '0.2em' }}
              >
                Through The Ages
              </span>
              <h2
                className="text-3xl sm:text-4xl font-bold mb-3"
                style={{ color: '#c0a172', fontFamily: "var(--font-playfair), serif" }}
              >
                A Brief History of Philosophy
              </h2>
              <p
                className="text-lg leading-relaxed max-w-2xl mx-auto"
                style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif" }}
              >
                2,600 years of humanity&apos;s most profound ideas, from the shores of ancient Greece to the lecture halls of today.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eras.map((era) => {
                const count = philosophers.filter((p) => p.era === era.id).length;
                return (
                  <Link
                    key={era.id}
                    href={`/eras/${era.id.toLowerCase()}/`}
                    className="group block rounded-2xl p-6 transition-all duration-300 card-hover"
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

        <div className="max-w-5xl mx-auto px-6"><div className="gold-line" /></div>

        {/* SUPPORT PHILOSOPHYME */}
        <section id="support" className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Coffee size={36} style={{ color: '#c0a172', margin: '0 auto 16px', opacity: 0.8 }} />
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

            {/* Coffee options */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {coffeeTiers.map((opt) => (
                <a
                  key={opt.amount}
                  href="https://buymeacoffee.com/loganlancing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl p-5 transition-all duration-300 cursor-pointer card-hover"
                  style={{
                    background: 'rgba(26,21,16,0.5)',
                    border: '1px solid rgba(192,161,114,0.1)',
                    minWidth: '160px',
                    textDecoration: 'none',
                  }}
                >
                  <span className="text-2xl block mb-2">{opt.icon}</span>
                  <span
                    className="text-xl font-bold block mb-1"
                    style={{ color: '#c0a172', fontFamily: "var(--font-playfair), serif" }}
                  >
                    {opt.amount}
                  </span>
                  <span className="text-base font-semibold block mb-1" style={{ color: '#f4f4f4' }}>
                    {opt.label}
                  </span>
                  <span className="text-sm block" style={{ color: '#78909c' }}>
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

        <div className="max-w-5xl mx-auto px-6"><div className="gold-line" /></div>

        {/* BOTTOM STATS + ABOUT THE FOUNDER */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {bottomStats.map((s) => {
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

            {/* ABOUT THE FOUNDER */}
            <div
              className="mt-16 rounded-2xl overflow-hidden"
              style={{ background: 'rgba(26,21,16,0.5)', border: '1px solid rgba(192,161,114,0.12)' }}
            >
              <div
                className="p-1.5"
                style={{ background: 'linear-gradient(90deg, rgba(192,161,114,0.12), rgba(192,161,114,0.04))' }}
              >
                <div className="flex items-center gap-2 px-4 py-2">
                  <Users size={15} style={{ color: '#c0a172' }} />
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: '#c0a172', fontFamily: "var(--font-crimson), serif", letterSpacing: '0.15em' }}
                  >
                    About the Founder
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-wrap gap-8 items-start">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(192,161,114,0.2), rgba(192,161,114,0.06))',
                    color: '#c0a172',
                    fontFamily: "var(--font-playfair), serif",
                    border: '2px solid rgba(192,161,114,0.15)',
                  }}
                >
                  LL
                </div>
                <div className="flex-1" style={{ minWidth: '260px' }}>
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}
                  >
                    Logan Lancing
                  </h3>
                  <p
                    className="text-sm mb-4"
                    style={{ color: '#c0a172', fontFamily: "var(--font-crimson), serif" }}
                  >
                    Author · Speaker · Founder
                  </p>
                  <p
                    className="mb-4"
                    style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif", fontSize: '1.02rem', lineHeight: 1.8 }}
                  >
                    Logan Lancing is the best-selling author of{' '}
                    <em style={{ color: '#d3b9a3' }}>The Queering of the American Child</em> and{' '}
                    <em style={{ color: '#d3b9a3' }}>The Woke Warpath: How Marxists Use Race and Gender To Break America</em>.
                    He is a public speaker who travels the country working with parents and organizations to expose what is happening in education.
                    He has appeared on the <em>Jordan B. Peterson Podcast</em>, <em>American Thought Leaders</em>, and other national programs.
                  </p>
                  <p
                    className="mb-5"
                    style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif", fontSize: '1.02rem', lineHeight: 1.8 }}
                  >
                    Logan is the founder of{' '}
                    <a
                      href="https://itsnotinschools.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#c0a172', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                    >
                      itsnotinschools.com
                    </a>{' '}
                    and PhilosophyMe — two projects dedicated to education, transparency, and making philosophy accessible to everyone.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: 'itsnotinschools.com', href: 'https://itsnotinschools.com' },
                      { label: 'Buy Me a Coffee', href: 'https://buymeacoffee.com/loganlancing' },
                    ].map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-all duration-200"
                        style={{
                          background: 'rgba(192,161,114,0.06)',
                          border: '1px solid rgba(192,161,114,0.1)',
                          color: '#c0a172',
                          textDecoration: 'none',
                        }}
                      >
                        <ExternalLink size={11} /> {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* BUILT FOR CURIOUS MINDS */}
            <div
              className="mt-12 text-center rounded-2xl p-10"
              style={{
                background: 'linear-gradient(135deg, rgba(192,161,114,0.06) 0%, rgba(44,62,80,0.06) 100%)',
                border: '1px solid rgba(192,161,114,0.1)',
              }}
            >
              <GraduationCap size={32} style={{ color: '#c0a172', margin: '0 auto 16px', opacity: 0.7 }} />
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
