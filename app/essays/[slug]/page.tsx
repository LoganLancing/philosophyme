import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GuideCard from '@/components/GuideCard';
import { getEssays, getEssayById } from '@/lib/essays';
import { imaginedNotice } from '@/lib/essayTypes';
import { ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
  return getEssays().map((e) => ({ slug: e.id }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const essay = getEssayById(params.slug);
  if (!essay) return { title: 'Essay Not Found' };

  const title = essay.kind === 'imagined' ? `${essay.title} | In the Voice of ${essay.philosopherName}` : essay.title;
  const url = `https://philosophyme.co/essays/${essay.id}/`;
  return {
    title,
    description: essay.excerpt,
    alternates: { canonical: url },
    openGraph: { title, description: essay.excerpt, type: 'article', url },
  };
}

export default function EssayPage({ params }: { params: { slug: string } }) {
  const essay = getEssayById(params.slug);
  if (!essay) notFound();

  const url = `https://philosophyme.co/essays/${essay.id}/`;
  // Imagined essays are credited to PhilosophyMe, never to the philosopher.
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: essay.title,
    description: essay.excerpt,
    url,
    ...(essay.date.length === 10 ? { datePublished: essay.date } : {}),
    author:
      essay.kind === 'imagined'
        ? { '@type': 'Organization', name: 'PhilosophyMe', url: 'https://philosophyme.co/' }
        : { '@type': 'Person', name: essay.byline },
    ...(essay.kind === 'imagined' && essay.philosopher
      ? { about: { '@type': 'Person', name: essay.philosopherName, url: `https://philosophyme.co/philosophers/${essay.philosopher}/` } }
      : {}),
  };

  const bodyText = { color: '#b0a090', fontFamily: 'var(--font-crimson), serif', fontSize: '1.05rem', lineHeight: 1.85 };

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-6">
          <Link href="/community/#essays" className="inline-flex items-center gap-1.5 text-sm link-hover" style={{ color: '#78909c', textDecoration: 'none' }}>
            <ArrowLeft size={14} /> All Essays
          </Link>
        </div>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 pt-6 pb-12 anim-fi">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#f4f4f4', fontFamily: 'var(--font-playfair), serif' }}>
            {essay.title}
          </h1>
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            {essay.kind === 'imagined' && essay.philosopher ? (
              <Link href={`/philosophers/${essay.philosopher}/`} className="text-sm link-hover" style={{ color: '#c0a172', fontFamily: 'var(--font-crimson), serif' }}>
                {essay.byline}
              </Link>
            ) : (
              <span className="text-sm" style={{ color: '#c0a172', fontFamily: 'var(--font-crimson), serif' }}>{essay.byline}</span>
            )}
            <span style={{ color: '#5a5040' }}>{'·'}</span>
            <span className="text-sm" style={{ color: '#8fa3b0', fontFamily: 'var(--font-crimson), serif' }}>{essay.displayDate}</span>
          </div>
          {essay.bylineNote && (
            <p className="text-xs mb-8" style={{ color: '#8fa3b0' }}>{essay.bylineNote}</p>
          )}

          {essay.kind === 'imagined' && essay.philosopherName && (
            <p className="text-sm italic rounded-xl p-4 mb-10" style={{ color: '#b0a090', background: 'rgba(192,161,114,0.05)', border: '1px solid rgba(192,161,114,0.12)', fontFamily: 'var(--font-crimson), serif' }}>
              {imaginedNotice(essay.philosopherName)}
            </p>
          )}

          {essay.sections.map((sec, si) => (
            <section key={si} className="mb-8">
              {sec.heading && (
                <h2 className="text-xl font-bold mb-4 pt-2" style={{ color: '#c0a172', fontFamily: 'var(--font-playfair), serif' }}>{sec.heading}</h2>
              )}
              {sec.text.split('\n\n').map((para, pi) => (
                <p key={pi} className="mb-4" style={bodyText}>{para}</p>
              ))}
            </section>
          ))}

          <div className="mt-10 pt-6" style={{ borderTop: '1px solid rgba(192,161,114,0.08)' }}>
            {essay.kind === 'imagined' && essay.philosopher ? (
              <p className="text-sm" style={{ color: '#b0a090', fontFamily: 'var(--font-crimson), serif' }}>
                Read what {essay.philosopherName} actually argued on the{' '}
                <Link href={`/philosophers/${essay.philosopher}/`} className="link-hover" style={{ color: '#c0a172' }}>full profile</Link>.
              </p>
            ) : (
              <p className="text-xs italic" style={{ color: '#78909c', fontFamily: 'var(--font-crimson), serif' }}>
                The views expressed in guest essays are those of the author and do not necessarily reflect the views of PhilosophyMe.
              </p>
            )}
          </div>
        </article>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
          <GuideCard location="essay" />
        </div>
      </main>
      <Footer />
    </>
  );
}
