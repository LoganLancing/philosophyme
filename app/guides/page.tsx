import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailCapture from '@/components/EmailCapture';
import { guides } from '@/data/guides';
import { eras } from '@/data/eras';
import { BookOpen, ShoppingBag, ExternalLink, Sparkles, Download, Library, Calendar, Globe, Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Companion Guide',
  description: 'The PhilosophyMe Companion Guide covers seven eras of Western philosophy, plus a Thought Experiments collection. Perfect for self-study or alongside a Philosophy 101 course.',
};

const studyPlan = [
  {
    weeks: '1 – 2',
    era: 'Ancient',
    eraTitle: 'Ancient Philosophy',
    branch: 'Ethics',
    branchSlug: 'ethics',
    eraSlug: 'ancient',
    color: '#8B6914',
    weekOne: [
      'Read the Ancient chapter in the Companion Guide',
      'Explore the Ancient era page and philosopher profiles on the site',
      'Complete the chapter\u2019s journal prompts on virtue, justice, and the good life',
    ],
    weekTwo: [
      'Read a short primary text (start with Plato\u2019s Apology)',
      'Read the Ethics branch essay on the site',
      'Work through the Ring of Gyges and Trolley Problem in the Thought Experiments guide',
    ],
  },
  {
    weeks: '3 – 4',
    era: 'Medieval',
    eraTitle: 'Medieval Philosophy',
    branch: 'Metaphysics',
    branchSlug: 'metaphysics',
    eraSlug: 'medieval',
    color: '#6B4226',
    weekOne: [
      'Read the Medieval chapter in the Companion Guide',
      'Explore the Medieval era page and philosopher profiles on the site',
      'Complete the chapter\u2019s journal prompts on faith, reason, and the nature of existence',
    ],
    weekTwo: [
      'Read a short primary text (start with Anselm\u2019s Proslogion, chapters 2\u20134)',
      'Read the Metaphysics branch essay on the site',
      'Work through the Ship of Theseus in the Thought Experiments guide',
    ],
  },
  {
    weeks: '5 – 6',
    era: 'Renaissance',
    eraTitle: 'Renaissance Philosophy',
    branch: 'Political Philosophy',
    branchSlug: 'political-philosophy',
    eraSlug: 'renaissance',
    color: '#8B4513',
    weekOne: [
      'Read the Renaissance chapter in the Companion Guide',
      'Explore the Renaissance era page and philosopher profiles on the site',
      'Complete the chapter\u2019s journal prompts on power, humanism, and the individual',
    ],
    weekTwo: [
      'Read a short primary text (start with Machiavelli\u2019s The Prince, chapters 15\u201318)',
      'Read the Political Philosophy branch essay on the site',
      'Work through the Veil of Ignorance in the Thought Experiments guide',
    ],
  },
  {
    weeks: '7 – 8',
    era: 'Early Modern',
    eraTitle: 'Early Modern Philosophy',
    branch: 'Epistemology',
    branchSlug: 'epistemology',
    eraSlug: 'early-modern',
    color: '#2C3E6B',
    weekOne: [
      'Read the Early Modern chapter in the Companion Guide',
      'Explore the Early Modern era page and philosopher profiles on the site',
      'Complete the chapter\u2019s journal prompts on doubt, knowledge, and the mind-body problem',
    ],
    weekTwo: [
      'Read a short primary text (start with Descartes\u2019 Meditations I\u2013II)',
      'Read the Epistemology branch essay on the site',
      'Work through Plato\u2019s Cave and the Brain in a Vat in the Thought Experiments guide',
    ],
  },
  {
    weeks: '9 – 10',
    era: 'Enlightenment',
    eraTitle: 'Enlightenment Philosophy',
    branch: 'Political Philosophy',
    branchSlug: 'political-philosophy',
    eraSlug: 'enlightenment',
    color: '#2E5A4C',
    weekOne: [
      'Read the Enlightenment chapter in the Companion Guide',
      'Explore the Enlightenment era page and philosopher profiles on the site',
      'Complete the chapter\u2019s journal prompts on knowledge, reason, and human rights',
    ],
    weekTwo: [
      'Read a short primary text (start with Kant\u2019s Groundwork, Section I)',
      'Read the Political Philosophy branch essay on the site',
      'Work through the Social Contract and State of Nature in the Thought Experiments guide',
    ],
  },
  {
    weeks: '11 – 12',
    era: '19th Century',
    eraTitle: '19th-Century Philosophy',
    branch: 'Logic',
    branchSlug: 'logic',
    eraSlug: '19th-century',
    color: '#4A2545',
    weekOne: [
      'Read the 19th Century chapter in the Companion Guide',
      'Explore the 19th Century era page and philosopher profiles on the site',
      'Complete the chapter\u2019s journal prompts on ideology, crisis, and the search for meaning',
    ],
    weekTwo: [
      'Read a short primary text (start with Nietzsche\u2019s On the Genealogy of Morals, First Essay)',
      'Read the Logic branch essay on the site \u2014 especially Anatomy of an Argument and Validity, Soundness, and Strength',
      'Work through the Chinese Room in the Thought Experiments guide',
    ],
  },
  {
    weeks: '13 – 14',
    era: 'Contemporary',
    eraTitle: 'Contemporary Philosophy',
    branch: 'Aesthetics',
    branchSlug: 'aesthetics',
    eraSlug: 'contemporary',
    color: '#1a5276',
    weekOne: [
      'Read the Contemporary chapter in the Companion Guide',
      'Explore the Contemporary era page and philosopher profiles on the site',
      'Complete the chapter\u2019s journal prompts on freedom, justice, and the limits of knowledge',
    ],
    weekTwo: [
      'Read a short primary text (start with Sartre\u2019s Existentialism Is a Humanism)',
      'Read the Aesthetics branch essay on the site',
      'Work through the Experience Machine and Mary\u2019s Room in the Thought Experiments guide',
    ],
  },
];

export default function GuidesPage() {
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
                Companion Guide
              </h1>
              <p
                className="text-lg leading-relaxed max-w-2xl mx-auto"
                style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif" }}
              >
                Philosophy spans 2,600 years, hundreds of thinkers, and questions that branch in every direction.
                It&apos;s easy to feel lost before you&apos;ve even started. The Companion Guide walks you through
                all seven eras &mdash; the biggest questions, the philosophers who wrestled with them,
                and the exact texts to read first. Timeline, glossary, specific editions, and journal prompts included.
                A clear path from &ldquo;where do I begin?&rdquo; to thinking for yourself.
              </p>
              <p
                className="text-sm mt-4 tracking-wide"
                style={{ color: '#78909c', fontFamily: "var(--font-crimson), serif", letterSpacing: '0.03em' }}
              >
                {collection?.pages}+ pages · 108 philosophers · 25 thought experiments · 7 structured reading plans · Built for self-directed learners, homeschool families &amp; college students
              </p>
            </div>

          {/* Study plan callout */}
          <div className="text-center mb-10">
            <a
              href="#study-plan"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full transition-all duration-200"
              style={{
                background: 'rgba(192,161,114,0.06)',
                border: '1px solid rgba(192,161,114,0.15)',
                color: '#c0a172',
                textDecoration: 'none',
                fontSize: '16px',
                fontFamily: 'var(--font-crimson), serif',
              }}
            >
              <Calendar size={15} style={{ opacity: 0.8 }} />
              <span>Check out our FREE <strong>14-Week Study Plan</strong> to accompany the Companion Guide below!</span>
              <span style={{ opacity: 0.5 }}>↓</span>
            </a>
          </div>

          {/* Companion Guide — Hero Product */}
          {collection && (
              <div className="mb-8 rounded-2xl p-[2px]" style={{ background: 'linear-gradient(135deg, #c0a172, #8B6914, #c0a172)' }}>
                <div className="rounded-2xl px-8 py-10 sm:px-12 sm:py-12" style={{ background: '#0d0b08' }}>

                {/* Title */}
                <div className="text-center mb-6">
                  <h4
                    className="text-3xl sm:text-4xl font-bold mb-3"
                    style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}
                  >
                    The Companion Guide
                  </h4>
                  <p
                    className="text-lg italic"
                    style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif" }}
                  >
                    A structured path through 2,600 years of Western philosophy
                  </p>
                </div>

                {/* Era dots */}
                <div className="flex items-center justify-center gap-2.5 mb-8">
                  {eras.map((era) => (
                    <div
                      key={era.id}
                      className="w-3 h-3 rounded-full"
                      style={{ background: era.color }}
                      title={era.name}
                    />
                  ))}
                </div>

                {/* Value description */}
                <p
                  className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed text-center"
                  style={{ color: '#c8b8a0', fontFamily: "var(--font-crimson), serif" }}
                >
                  Most introductions to philosophy give you a list of names and dates.
                  This one gives you a reading plan. Seven era chapters walk you through the biggest
                  questions each period wrestled with, the thinkers who shaped the conversation,
                  and the exact primary texts to read first &mdash; with specific editions, translations,
                  and page numbers so you always know where to start.
                </p>

                {/* Stats bar */}
                <div
                  className="rounded-xl p-4 mb-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
                  style={{ background: 'rgba(192,161,114,0.06)', border: '1px solid rgba(192,161,114,0.12)' }}
                >
                  <span className="text-base" style={{ color: '#c0a172', fontFamily: "var(--font-crimson), serif" }}>
                    <b>{collection.pages}</b> pages
                  </span>
                  <span className="text-base" style={{ color: '#c0a172', fontFamily: "var(--font-crimson), serif" }}>
                    <b>7</b> eras
                  </span>
                  <span className="text-base" style={{ color: '#c0a172', fontFamily: "var(--font-crimson), serif" }}>
                    <b>31</b> deep dives
                  </span>
                  <span className="text-base" style={{ color: '#c0a172', fontFamily: "var(--font-crimson), serif" }}>
                    <b>25</b> thought experiments
                  </span>
                  <span className="text-base" style={{ color: '#c0a172', fontFamily: "var(--font-crimson), serif" }}>
                    <b>61</b> journal prompts
                  </span>
                </div>

                {/* Two-column features */}
                <div
                  className="grid sm:grid-cols-2 gap-x-10 gap-y-4 mb-8 max-w-2xl mx-auto"
                  style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif" }}
                >
                  {[
                    { label: 'Structured reading plans', detail: 'Each era chapter builds from context to key ideas to primary texts, so you never feel lost' },
                    { label: 'Timelines and lineages', detail: 'See how thinkers, schools, and ideas connect across centuries at a glance' },
                    { label: 'Start Reading Tonight boxes', detail: 'Specific edition, translation, and entry-point recommendations for every primary text' },
                    { label: 'Journal prompts', detail: 'Open-ended questions that help you develop your own philosophical positions, not just memorize others\u2019' },
                    { label: 'Glossary for each era', detail: 'Key terms defined in plain language so the vocabulary never gets in the way' },
                    { label: '25 thought experiments included', detail: 'From the Trolley Problem to the Veil of Ignorance \u2014 scenario, major responses, and a YOUR TURN prompt' },
                  ].map((item, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[10px]"
                        style={{ background: '#c0a172' }}
                      />
                      <div>
                        <span className="text-[17px] font-semibold" style={{ color: '#e8ddd0' }}>{item.label}</span>
                        <p className="text-[15px] mt-0.5 leading-snug" style={{ color: '#9a8e80' }}>{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Audience line */}
                <p
                  className="text-base text-center mb-8 italic"
                  style={{ color: '#8a7e70', fontFamily: "var(--font-crimson), serif" }}
                >
                  Built for self-directed learners, homeschool families, book clubs, and anyone taking a Philosophy 101 course.
                </p>

                {/* CTA */}
                <div className="text-center">
                  <a
                    href={collection.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-10 py-3.5 rounded-xl text-base font-semibold transition-all duration-200"
                    style={{
                      background: 'linear-gradient(135deg, #c0a172, #8B6914)',
                      color: '#fff',
                      textDecoration: 'none',
                    }}
                  >
                    <ShoppingBag size={18} /> Get the Companion Guide &mdash; $19.99
                    <ExternalLink size={14} style={{ opacity: 0.6 }} />
                  </a>
                </div>
                </div>
              </div>
          )}

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

                <div className="p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center lg:gap-10">
                  {/* Left content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p
                          className="text-xs uppercase tracking-widest mb-1"
                          style={{ color: '#c0a172', letterSpacing: '0.15em', fontFamily: "var(--font-crimson), serif" }}
                        >
                          Think for Yourself
                        </p>
                        <h3
                          className="text-xl sm:text-2xl font-bold"
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
                    </div>

                    <p
                      className="text-base mb-3"
                      style={{ color: '#8fa3b0', fontFamily: "var(--font-crimson), serif" }}
                    >
                      {teGuide.thinkers}
                    </p>

                    <div className="flex flex-wrap items-center gap-x-5 gap-y-1 mb-4">
                      <span className="text-base flex items-center gap-1.5 whitespace-nowrap" style={{ color: '#8fa3b0' }}>
                        <BookOpen size={14} /> {teGuide.pages} pages
                      </span>
                      <span className="text-base flex items-center gap-1.5 whitespace-nowrap" style={{ color: '#8fa3b0' }}>
                        <Download size={14} /> PDF
                      </span>
                      <span className="text-base flex items-center gap-1.5 whitespace-nowrap" style={{ color: '#8fa3b0' }}>
                        <Sparkles size={14} /> 25 experiments
                      </span>
                    </div>

                    <p className="text-sm" style={{ color: '#78909c', fontFamily: "var(--font-crimson), serif" }}>
                      Included free with the Companion Guide, or available as a standalone purchase.
                    </p>
                  </div>

                  {/* Right content */}
                  <div className="lg:w-[360px] lg:flex-shrink-0">
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
                        <div key={j} className="flex items-start gap-2">
                          <div
                            className="w-1 h-1 rounded-full flex-shrink-0 mt-[9px]"
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
                      <ShoppingBag size={15} /> Buy Standalone — $4.99
                      <ExternalLink size={12} style={{ opacity: 0.6 }} />
                    </a>
                  </div>
                </div>
              </div>
          )}

          {/* ============================================ */}
          {/* 14-WEEK STUDY PLAN                          */}
          {/* ============================================ */}
          <div id="study-plan" className="mt-16" style={{ scrollMarginTop: '6rem' }}>
            <div className="max-w-5xl mx-auto">
              {/* Section divider */}
              <div className="gold-line mb-16" />

              {/* Section header */}
              <div className="text-center mb-12">
                <span
                  className="text-xs tracking-widest uppercase mb-4 block"
                  style={{ color: '#78909c', fontFamily: "var(--font-crimson), serif", letterSpacing: '0.2em' }}
                >
                  Your Roadmap
                </span>
                <h2
                  className="text-3xl sm:text-4xl font-bold mb-5"
                  style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}
                >
                  14-Week Study Plan
                </h2>
                <p
                  className="text-lg leading-relaxed max-w-2xl mx-auto"
                  style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif" }}
                >
                  A structured path through the Companion Guide, the site, and the primary texts &mdash; two weeks per era, one branch of philosophy per block, thought experiments woven throughout. Not a rigid schedule. Go at your own pace, skip what doesn&apos;t interest you, and spend extra time where it does.
                </p>
                <a
                  href="/downloads/PhilosophyMe_14_Week_Study_Plan.pdf"
                  download
                  className="inline-flex items-center gap-2 mt-5 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
                  style={{
                    background: 'rgba(192,161,114,0.08)',
                    border: '1px solid rgba(192,161,114,0.2)',
                    color: '#c0a172',
                    textDecoration: 'none',
                  }}
                >
                  <Download size={15} /> Download Printable PDF
                </a>
              </div>

              {/* Quick overview bar */}
              <div
                className="rounded-xl p-4 mb-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
                style={{ background: 'rgba(26,21,16,0.6)', border: '1px solid rgba(192,161,114,0.1)' }}
              >
                <span className="text-sm flex items-center gap-2" style={{ color: '#8fa3b0' }}>
                  <Calendar size={14} style={{ color: '#c0a172' }} /> 14 weeks · 7 blocks
                </span>
                <span className="text-sm flex items-center gap-2" style={{ color: '#8fa3b0' }}>
                  <BookOpen size={14} style={{ color: '#c0a172' }} /> Companion Guide
                </span>
                <span className="text-sm flex items-center gap-2" style={{ color: '#8fa3b0' }}>
                  <Globe size={14} style={{ color: '#c0a172' }} /> 7 era essays on the site
                </span>
                <span className="text-sm flex items-center gap-2" style={{ color: '#8fa3b0' }}>
                  <Lightbulb size={14} style={{ color: '#c0a172' }} /> 10+ thought experiments
                </span>
              </div>

              {/* Study plan blocks */}
              <div className="space-y-5">
                {studyPlan.map((block, i) => (
                  <div
                    key={i}
                    className="rounded-2xl overflow-hidden"
                    style={{
                      background: 'rgba(26,21,16,0.6)',
                      border: `1px solid ${block.color}40`,
                    }}
                  >
                    {/* Accent bar */}
                    <div style={{ height: '3px', background: `linear-gradient(90deg, ${block.color}, ${block.color}60)` }} />

                    <div className="p-6 sm:p-8">
                      {/* Block header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <span
                              className="text-xs font-semibold px-2.5 py-1 rounded-lg"
                              style={{ background: `${block.color}20`, color: block.color, border: `1px solid ${block.color}35` }}
                            >
                              Weeks {block.weeks}
                            </span>
                          </div>
                          <h3
                            className="text-xl font-bold"
                            style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}
                          >
                            {block.eraTitle}
                            <span style={{ color: '#78909c', fontWeight: 400 }}> + </span>
                            <span style={{ color: block.color }}>{block.branch}</span>
                          </h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <Link
                            href={`/eras/${block.eraSlug}/`}
                            className="text-xs px-3 py-1.5 rounded-lg link-hover"
                            style={{ color: '#8fa3b0', border: '1px solid rgba(192,161,114,0.15)', textDecoration: 'none' }}
                          >
                            {block.era} era →
                          </Link>
                          <Link
                            href={`/branches/${block.branchSlug}/`}
                            className="text-xs px-3 py-1.5 rounded-lg link-hover"
                            style={{ color: '#8fa3b0', border: '1px solid rgba(192,161,114,0.15)', textDecoration: 'none' }}
                          >
                            {block.branch} →
                          </Link>
                        </div>
                      </div>

                      {/* Two-week grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Week 1 */}
                        <div
                          className="rounded-xl p-5"
                          style={{ background: 'rgba(13,11,8,0.5)', border: '1px solid rgba(192,161,114,0.08)' }}
                        >
                          <p
                            className="text-xs uppercase tracking-widest mb-3"
                            style={{ color: block.color, letterSpacing: '0.15em', fontFamily: "var(--font-crimson), serif" }}
                          >
                            Week {block.weeks.split(' – ')[0]} · Read &amp; Explore
                          </p>
                          <div
                            className="space-y-2.5"
                            style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif", fontSize: '16px', lineHeight: 1.55 }}
                          >
                            {block.weekOne.map((item, j) => (
                              <div key={j} className="flex items-start gap-2.5">
                                <div
                                  className="w-1 h-1 rounded-full flex-shrink-0 mt-[9px]"
                                  style={{ background: block.color }}
                                />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Week 2 */}
                        <div
                          className="rounded-xl p-5"
                          style={{ background: 'rgba(13,11,8,0.5)', border: '1px solid rgba(192,161,114,0.08)' }}
                        >
                          <p
                            className="text-xs uppercase tracking-widest mb-3"
                            style={{ color: block.color, letterSpacing: '0.15em', fontFamily: "var(--font-crimson), serif" }}
                          >
                            Week {block.weeks.split(' – ')[1]} · Go Deeper
                          </p>
                          <div
                            className="space-y-2.5"
                            style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif", fontSize: '16px', lineHeight: 1.55 }}
                          >
                            {block.weekTwo.map((item, j) => (
                              <div key={j} className="flex items-start gap-2.5">
                                <div
                                  className="w-1 h-1 rounded-full flex-shrink-0 mt-[9px]"
                                  style={{ background: block.color }}
                                />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Post-plan CTA */}
              {collection && (
                <div
                  className="mt-8 rounded-xl p-6 text-center"
                  style={{ background: 'rgba(192,161,114,0.04)', border: '1px solid rgba(192,161,114,0.12)' }}
                >
                  <p
                    className="text-base mb-4 max-w-lg mx-auto"
                    style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif" }}
                  >
                    The study plan works best with the Companion Guide &mdash; seven era chapters plus 25 thought experiments in one volume.
                  </p>
                  <a
                    href={collection.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 btn-hover"
                    style={{
                      background: 'linear-gradient(135deg, #c0a172, #8B6914)',
                      color: '#fff',
                      textDecoration: 'none',
                    }}
                  >
                    <ShoppingBag size={15} /> Get the Companion Guide — $19.99
                    <ExternalLink size={12} style={{ opacity: 0.6 }} />
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Email capture — free chapter CTA */}
          <div className="max-w-2xl mx-auto mt-12">
            <div
              className="rounded-2xl p-6 sm:p-8 text-center"
              style={{
                background: 'rgba(26,21,16,0.6)',
                border: '1px solid rgba(192,161,114,0.2)',
                borderTop: '3px solid #c0a172',
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: 'rgba(192,161,114,0.1)', border: '1px solid rgba(192,161,114,0.2)' }}
              >
                <Download size={22} style={{ color: '#c0a172' }} />
              </div>
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}
              >
                Not ready to buy? Try a free chapter first.
              </h3>
              <p className="text-base mb-5 max-w-md mx-auto" style={{ color: '#8fa3b0', fontFamily: "var(--font-crimson), serif" }}>
                Get a free chapter from the Companion Guide — see what&apos;s inside before you commit.
              </p>
              <EmailCapture variant="guides-inline" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
