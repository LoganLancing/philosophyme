import type { Metadata } from 'next';
import { gumroadLink } from '@/lib/gumroad';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailCapture from '@/components/EmailCapture';
import { guides } from '@/data/guides';
import { eras } from '@/data/eras';
import { studyPlan } from '@/data/studyPlan';
import { BookOpen, ShoppingBag, ExternalLink, Sparkles, Download, Library, Calendar, Globe, Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Philosophy Study Guide: The PhilosophyMe Companion Guide',
  description: 'A 142-page philosophy study guide covering seven eras of Western philosophy, with 25 thought experiments, reading lists and journal prompts. Free Chapter 1 and 14-week study plan.',
  alternates: { canonical: 'https://philosophyme.co/guides/' },
};


export default function GuidesPage() {
  const teGuide = guides.find((g) => g.id === 'thought-experiments');
  const collection = guides.find((g) => g.id === 'complete-collection');

  // Product JSON-LD for Companion Guide
  const productJsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'The PhilosophyMe Companion Guide',
      description: collection?.description,
      image: 'https://philosophyme.co/og-image.png',
      brand: {
        '@type': 'Brand',
        name: 'PhilosophyMe',
      },
      offers: {
        '@type': 'Offer',
        price: '19.99',
        priceCurrency: 'USD',
        url: collection?.url,
        availability: 'https://schema.org/InStock',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: "Thought Experiments: Philosophy's Great What-Ifs",
      description: teGuide?.description,
      image: 'https://philosophyme.co/og-image.png',
      brand: {
        '@type': 'Brand',
        name: 'PhilosophyMe',
      },
      offers: {
        '@type': 'Offer',
        price: '4.99',
        priceCurrency: 'USD',
        url: teGuide?.url,
        availability: 'https://schema.org/InStock',
      },
    },
  ];

  return (
    <>
      {productJsonLd.map((ld, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      ))}
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
                Philosophy covers 2,600 years, hundreds of thinkers, and a long list of hard questions. It is easy to lose the thread. The Companion Guide gives you a clear way in. It walks through all seven eras, points you to major thinkers, and shows you what to read first. It also includes timelines, glossaries, journal prompts, and suggested editions.
              </p>
              <p
                className="text-sm mt-4 tracking-wide"
                style={{ color: '#78909c', fontFamily: "var(--font-crimson), serif", letterSpacing: '0.03em' }}
              >
                {collection?.pages} pages · 7 eras · 25 thought experiments · 42 journal prompts · Built for self-study, homeschool, and college students
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
              <span>Grab the free 14-Week Study Plan below.</span>
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
                    A clear path through 2,600 years of Western philosophy
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
                  Most introductions to philosophy give you names, dates, and short summaries. This guide gives you a reading path. Each era chapter explains the main questions of the period, introduces the key thinkers, and points you to primary texts with clear starting places.
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
                    <b>7</b> reading plans
                  </span>
                  <span className="text-base" style={{ color: '#c0a172', fontFamily: "var(--font-crimson), serif" }}>
                    <b>25</b> thought experiments
                  </span>
                  <span className="text-base" style={{ color: '#c0a172', fontFamily: "var(--font-crimson), serif" }}>
                    <b>42</b> journal prompts
                  </span>
                </div>

                {/* Two-column features */}
                <div
                  className="grid sm:grid-cols-2 gap-x-10 gap-y-4 mb-8 max-w-2xl mx-auto"
                  style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif" }}
                >
                  {[
                    { label: 'Structured reading plans', detail: 'Each chapter moves from background to ideas to primary texts.' },
                    { label: 'Timelines and lineages', detail: 'See how thinkers, schools, and ideas connect across time.' },
                    { label: 'Start Reading Tonight boxes', detail: 'Get clear edition, translation, and entry-point suggestions.' },
                    { label: 'Journal prompts', detail: 'Work out your own view instead of only memorizing someone else\u2019s.' },
                    { label: 'Glossary for each era', detail: 'Learn key terms in plain English.' },
                    { label: '25 thought experiments included', detail: 'Each one includes the scenario, major responses, and a YOUR TURN prompt.' },
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
                  Built for self-study, homeschool families, book clubs, and students taking Philosophy 101.
                </p>

                {/* CTA */}
                <div className="text-center">
                  <a
                    href={gumroadLink(collection.url, 'guides-hero')}
                    target="_blank"
                    rel="noopener"
                    data-track-location="guides-hero"
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

          {/* Look inside: real pages from Chapter 1 */}
          <section className="mb-12" aria-labelledby="look-inside">
            <h2 id="look-inside" className="text-2xl font-bold text-center mb-2" style={{ color: '#f4f4f4', fontFamily: 'var(--font-playfair), serif' }}>
              Look Inside
            </h2>
            <p className="text-base text-center max-w-2xl mx-auto mb-6" style={{ color: '#8fa3b0', fontFamily: 'var(--font-crimson), serif' }}>
              Three pages from Chapter 1. Every era chapter follows the same pattern: the question, the story, then reading recommendations, journal prompts and key terms.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { src: '/images/guide-preview-chapter-opening.webp', alt: 'Chapter 1 opening page of the PhilosophyMe Companion Guide: Ancient, The Birth of Reason', caption: 'Each chapter opens with the question its era asked' },
                { src: '/images/guide-preview-the-story.webp', alt: 'A page from The Story section of Chapter 1, covering Thales and Socrates', caption: 'The story of the era, told in plain language' },
                { src: '/images/guide-preview-reading-and-prompts.webp', alt: 'The Going Deeper page of Chapter 1 with reading recommendations and journal prompts', caption: 'Reading recommendations and journal prompts' },
              ].map((img) => (
                <figure key={img.src} className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(192,161,114,0.15)', background: '#0d0b08' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.src} alt={img.alt} width={720} height={932} loading="lazy" className="w-full h-auto block" />
                  <figcaption className="text-sm p-3" style={{ color: '#b0a090', fontFamily: 'var(--font-crimson), serif' }}>
                    {img.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="text-sm text-center mt-4" style={{ color: '#8fa3b0' }}>
              Want the whole chapter? <a href="#free-chapter" className="link-hover" style={{ color: '#c0a172' }}>Get Chapter 1 free</a>.
            </p>
          </section>

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
                        "Covers 2,600 years of philosophy, from Plato's Cave to the Simulation Argument",
                        'Living Questions that connect each experiment to life today',
                        'Glossary, reading list, and journal prompts',
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
                      href={gumroadLink(teGuide.url, 'guides-thought-experiments')}
                      target="_blank"
                      rel="noopener"
                      data-track-location="guides-thought-experiments"
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
                  This study plan moves through the Companion Guide, the site, and selected primary texts. It covers one era at a time and mixes in branch essays and thought experiments. Use it as written or adjust the pace to fit your schedule.
                </p>
                <div className="mt-5" data-track-location="guides-study-plan">
                  <p className="text-sm mb-3" style={{ color: '#8fa3b0' }}>
                    Want the printable PDF? It comes free with Chapter 1 of the Companion Guide:
                  </p>
                  <EmailCapture variant="guides-inline" location="guides-study-plan" />
                </div>
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
                    The study plan works best with the Companion Guide: seven era chapters plus 25 thought experiments in one volume.
                  </p>
                  <a
                    href={gumroadLink(collection.url, 'guides-after-study-plan')}
                    target="_blank"
                    rel="noopener"
                    data-track-location="guides-after-study-plan"
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
          <div id="free-chapter" className="max-w-2xl mx-auto mt-12" style={{ scrollMarginTop: '6rem' }}>
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
                Not ready to buy? Read a free chapter first.
              </h3>
              <p className="text-base mb-5 max-w-md mx-auto" style={{ color: '#8fa3b0', fontFamily: "var(--font-crimson), serif" }}>
                Get Chapter 1 of the Companion Guide, plus the printable 14-week study plan, and see what the full book is like.
              </p>
              <div data-track-location="guides-bottom">
                <EmailCapture variant="guides-inline" location="guides-bottom" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
