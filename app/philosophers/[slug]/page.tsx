import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhilosopherAvatar from '@/components/PhilosopherAvatar';
import PhilosopherPageClient from '@/components/PhilosopherPageClient';
import { philosophers, getPhilosopherBySlug } from '@/data/philosophers';
import { eras, eraGradients } from '@/data/eras';
import type { EraId } from '@/data/types';
import PhilosopherCard from '@/components/PhilosopherCard';
import { BookOpen, Globe, Library, ShoppingBag, ExternalLink, ArrowLeft, Users } from 'lucide-react';

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
            {philosopher.school.map((s) => (
              <Link
                key={s}
                href={`/schools/${s.toLowerCase().replace(/\s+/g, '-')}/`}
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  background: 'rgba(120,144,156,0.12)',
                  color: '#78909c',
                  border: '1px solid rgba(120,144,156,0.18)',
                  textDecoration: 'none',
                }}
              >
                {s}
              </Link>
            ))}
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
              <a
                href="https://lancing1.gumroad.com/l/the-complete-collection"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl overflow-hidden transition-all duration-300 guide-card-hover"
                style={{
                  background: 'rgba(192,161,114,0.04)',
                  border: '1px solid rgba(192,161,114,0.12)',
                  textDecoration: 'none',
                }}
              >
                <div style={{ height: 2, background: `linear-gradient(90deg, ${c1}, ${c1}40)` }} />
                <div className="p-5 flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(192,161,114,0.1)',
                      border: '1px solid rgba(192,161,114,0.15)',
                    }}
                  >
                    <BookOpen size={20} style={{ color: '#c0a172' }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-xs uppercase tracking-widest mb-1"
                      style={{ color: '#78909c', letterSpacing: '0.12em', fontFamily: "var(--font-crimson), serif" }}
                    >
                      Your Reading Path
                    </p>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}
                    >
                      The Companion Guide
                    </p>
                    <p className="text-sm mt-0.5" style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif" }}>
                      Seven eras of philosophy in one volume — reading lists, key terms, journal prompts · $19.99
                    </p>
                  </div>
                  <div
                    className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold"
                    style={{ background: `linear-gradient(135deg, ${c1}, ${c1}cc)`, color: '#fff' }}
                  >
                    <ShoppingBag size={13} /> View Guide
                    <ExternalLink size={11} style={{ opacity: 0.6 }} />
                  </div>
                </div>
              </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
