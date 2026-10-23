import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhilosopherAvatar from '@/components/PhilosopherAvatar';
import PhilosopherPageClient from '@/components/PhilosopherPageClient';
import { philosophers, getPhilosopherBySlug } from '@/data/philosophers';
import { eras, eraGradients } from '@/data/eras';
import { hasSchoolPage, schoolSlug } from '@/data/schools';
import { philosopherSummaries } from '@/data/summaries';
import type { EraId } from '@/data/types';
import PhilosopherCard from '@/components/PhilosopherCard';
import FreeChapterCard from '@/components/FreeChapterCard';
import GuideCard from '@/components/GuideCard';
import { BookOpen, Globe, Library, Quote as QuoteIcon, ArrowLeft, Users } from 'lucide-react';

// Generate static params for all 108 philosophers
export function generateStaticParams() {
  return philosophers.map((p) => ({ slug: p.id }));
}

// Dynamic metadata for SEO — optimized for long-tail search CTR
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getPhilosopherBySlug(params.slug);
  if (!p) return { title: 'Philosopher Not Found' };

  const title = `${p.name} — Key Ideas, Philosophy & Legacy Explained`;
  const description = `Who was ${p.name}? Discover ${p.name}'s core philosophy, major works, and key arguments — explained in plain language. Free, in-depth profile on PhilosophyMe.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://philosophyme.co/philosophers/${p.id}/`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://philosophyme.co/philosophers/${p.id}/`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

function formatYear(y: number): string {
  if (y === 0) return 'Present';
  return y < 0 ? `${Math.abs(y)} BCE` : `${y} CE`;
}

// Dates as they read inside a sentence: "470–399 BCE", "4 BCE – 65 CE", "1724–1804", "born 1946".
function lifeSpan(birth: number, death: number): string {
  if (death === 0) return `born ${birth < 0 ? `${Math.abs(birth)} BCE` : birth}`;
  if (birth < 0 && death < 0) return `${Math.abs(birth)}–${Math.abs(death)} BCE`;
  if (birth < 0) return `${Math.abs(birth)} BCE – ${death} CE`;
  if (birth < 1000) return `${birth}–${death} CE`;
  return `${birth}–${death}`;
}

export default function PhilosopherPage({ params }: { params: { slug: string } }) {
  const philosopher = getPhilosopherBySlug(params.slug);
  if (!philosopher) notFound();

  const era = eras.find((e) => e.id === philosopher.era);
  const [c1] = eraGradients[philosopher.era as EraId] || ['#c0a172'];
  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: philosopher.name,
    description: philosopher.bio,
    ...(philosopher.birth > 0 ? { birthDate: philosopher.birth.toString() } : {}),
    knowsAbout: philosopher.branch,
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://philosophyme.co/' },
      { '@type': 'ListItem', position: 2, name: 'Philosophers', item: 'https://philosophyme.co/philosophers/' },
      { '@type': 'ListItem', position: 3, name: philosopher.name, item: `https://philosophyme.co/philosophers/${philosopher.id}/` },
    ],
  };

  const faqLd = philosopher.faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: philosopher.faq.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  } : null;

  const quotesLd = philosopher.quotes.length > 0 ? philosopher.quotes.map((q) => ({
    '@context': 'https://schema.org',
    '@type': 'Quotation',
    text: q.text,
    creator: {
      '@type': 'Person',
      name: philosopher.name,
    },
    ...(q.source ? { isPartOf: { '@type': 'Book', name: q.source } } : {}),
  })) : null;

  // Related philosophers: score by shared branches + schools, take top 6
  const related = philosophers
    .filter((p) => p.id !== philosopher.id)
    .map((p) => ({
      philosopher: p,
      score:
        p.branch.filter((b) => philosopher.branch.includes(b)).length +
        p.school.filter((s) => philosopher.school.includes(s)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)
    .map((r) => r.philosopher);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
        {faqLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
          />
        )}
        {quotesLd && quotesLd.map((q, i) => (
          <script
            key={`quote-ld-${i}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(q) }}
          />
        ))}

        {/* Back link */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-6">
          <Link
            href="/philosophers/"
            className="inline-flex items-center gap-1.5 text-sm link-hover"
            style={{ color: '#78909c', textDecoration: 'none' }}
          >
            <ArrowLeft size={14} /> All Philosophers
          </Link>
        </div>

        {/* Header */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-6 pb-6 anim-fi" style={{ borderBottom: '1px solid rgba(192,161,114,0.12)' }}>
          <div className="flex items-start gap-5">
            <PhilosopherAvatar philosopher={philosopher} size={80} />
            <div className="flex-1 min-w-0">
              <h1
                className="text-3xl sm:text-4xl font-bold mb-1"
                style={{ color: '#c0a172', fontFamily: "var(--font-playfair), serif" }}
              >
                {philosopher.name}
              </h1>
              <p className="text-sm mb-3" style={{ color: '#8fa3b0' }}>
                {formatYear(philosopher.birth)} – {formatYear(philosopher.death)} · {philosopher.era} Era
              </p>
              <p
                className="text-base italic leading-relaxed"
                style={{ color: '#d3b9a3' }}
              >
                &ldquo;{philosopher.thesis}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-8">
          {/* One-sentence answer: who they were and why they matter */}
          {philosopherSummaries[philosopher.id] && (
            <p
              className="leading-relaxed anim-fiu"
              style={{ color: '#d3c4b0', fontFamily: "var(--font-crimson), serif", fontSize: '1.15rem', lineHeight: 1.75 }}
            >
              <strong style={{ color: '#f4f4f4' }}>{philosopher.name}</strong> ({lifeSpan(philosopher.birth, philosopher.death)}){' '}
              {philosopherSummaries[philosopher.id]}
            </p>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 anim-fiu">
            {philosopher.branch.map((b) => (
              <Link
                key={b}
                href={`/branches/${b.toLowerCase().replace(/\s+/g, '-')}/`}
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  background: 'rgba(192,161,114,0.12)',
                  color: '#c0a172',
                  border: '1px solid rgba(192,161,114,0.18)',
                  textDecoration: 'none',
                }}
              >
                {b}
              </Link>
            ))}
            {philosopher.school.map((s) => {
              const tagStyle = {
                background: 'rgba(120,144,156,0.12)',
                color: '#78909c',
                border: '1px solid rgba(120,144,156,0.18)',
                textDecoration: 'none',
              };
              return hasSchoolPage(s) ? (
                <Link
                  key={s}
                  href={`/schools/${schoolSlug(s)}/`}
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={tagStyle}
                >
                  {s}
                </Link>
              ) : (
                <span key={s} className="px-3 py-1 rounded-full text-xs font-medium" style={tagStyle}>
                  {s}
                </span>
              );
            })}
          </div>

          {/* Biography */}
          <section className="anim-fiu">
            <h2 className="text-lg font-semibold mb-2 flex items-center gap-2" style={{ color: '#f4f4f4' }}>
              <BookOpen size={18} style={{ color: '#c0a172' }} /> Biography
            </h2>
            <p
              className="leading-relaxed"
              style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif", fontSize: '1.05rem', lineHeight: 1.8 }}
            >
              {philosopher.bio}
            </p>
          </section>

          {/* Major Works */}
            <section>
              <h2 className="text-lg font-semibold mb-2 flex items-center gap-2" style={{ color: '#f4f4f4' }}>
                <Library size={18} style={{ color: '#c0a172' }} /> Major Works
              </h2>
              <div className="flex flex-wrap gap-2">
                {philosopher.works.map((w, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg text-sm"
                    style={{
                      background: 'rgba(192,161,114,0.06)',
                      color: '#d3b9a3',
                      border: '1px solid rgba(192,161,114,0.1)',
                    }}
                  >
                    {w}
                  </span>
                ))}
              </div>
            </section>

          {/* Notable Quotes */}
          {philosopher.quotes.length > 0 && (
            <section className="anim-fiu">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: '#f4f4f4' }}>
                <QuoteIcon size={18} style={{ color: '#c0a172' }} /> Notable Quotes
              </h2>
              <div className="space-y-3">
                {philosopher.quotes.map((q, i) => (
                  <blockquote
                    key={i}
                    className="rounded-xl p-5"
                    style={{
                      background: 'rgba(192,161,114,0.05)',
                      border: '1px solid rgba(192,161,114,0.08)',
                      borderLeft: '3px solid rgba(192,161,114,0.4)',
                    }}
                  >
                    <p
                      className="italic leading-relaxed"
                      style={{ color: '#d3b9a3', fontFamily: "var(--font-crimson), serif", fontSize: '1.1rem', lineHeight: 1.7 }}
                    >
                      &ldquo;{q.text}&rdquo;
                    </p>
                    {q.source && (
                      <>
                        <div style={{ height: 1, width: 32, background: 'rgba(192,161,114,0.3)', margin: '0.75rem 0' }} />
                        <cite
                          className="text-sm not-italic"
                          style={{ color: '#8fa3b0', fontFamily: "var(--font-crimson), serif" }}
                        >
                          — {q.source}
                        </cite>
                      </>
                    )}
                  </blockquote>
                ))}
              </div>
            </section>
          )}

          {/* Free chapter offer, about a third of the way down */}
          <FreeChapterCard
            location="philosopher"
            heading={`Studying ${philosopher.name}?`}
            body={
              philosopher.era === 'Ancient'
                ? `${philosopher.name} belongs to the Ancient era, and Chapter 1 of the Companion Guide tells that era's story. Get it free, plus a printable 14-week study plan.`
                : `The Companion Guide gives ${era ? era.name : 'every era'} its own chapter. Start with Chapter 1 (Ancient Philosophy) free, plus a printable 14-week study plan.`
            }
          />

          {/* Key Arguments + FAQ — uses client component for expand/collapse */}
            <PhilosopherPageClient arguments={philosopher.arguments} faq={philosopher.faq} />

          {/* Lasting Influence */}
            <section
              className="rounded-xl p-5"
              style={{
                background: `linear-gradient(135deg, ${c1}12 0%, ${c1}04 100%)`,
                border: `1px solid ${c1}20`,
              }}
            >
              <h2 className="text-lg font-semibold mb-2 flex items-center gap-2" style={{ color: '#f4f4f4' }}>
                <Globe size={18} style={{ color: '#c0a172' }} /> Lasting Influence
              </h2>
              <p className="leading-relaxed" style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif", fontSize: '1.05rem', lineHeight: 1.8 }}>
                {philosopher.influence}
              </p>
            </section>

          {/* Related Philosophers */}
          {related.length > 0 && (
            <section className="anim-fiu">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: '#f4f4f4' }}>
                <Users size={18} style={{ color: '#c0a172' }} /> Related Philosophers
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {related.map((p) => (
                  <PhilosopherCard key={p.id} philosopher={p} />
                ))}
              </div>
            </section>
          )}

          {/* Companion Guide CTA */}
          <GuideCard
            location="philosopher-bottom"
            accent={c1}
            blurb={`${philosopher.name} appears in the ${era ? era.name : 'Companion Guide'} chapter. Seven eras in one volume, with reading lists, key terms and journal prompts.`}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
