import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhilosopherCard from '@/components/PhilosopherCard';
import FreeChapterCard from '@/components/FreeChapterCard';
import GuideCard from '@/components/GuideCard';
import { schools, schoolSlug } from '@/data/schools';
import { schoolDetails } from '@/data/schoolDetails';
import { getPhilosophersBySchool } from '@/data/philosophers';
import { ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
  return schools.map((s) => ({ school: schoolSlug(s.id) }));
}

function getSchoolFromSlug(slug: string) {
  return schools.find((s) => schoolSlug(s.id) === slug);
}

export function generateMetadata({ params }: { params: { school: string } }): Metadata {
  const school = getSchoolFromSlug(params.school);
  if (!school) return { title: 'School Not Found' };

  const title = `${school.name} — Philosophy, Origins & Key Thinkers`;
  const definition = schoolDetails[school.id]?.definition;
  const description = definition
    ? `${definition} Key ideas, origins and thinkers, explained in plain language.`
    : `${school.brief} Learn about the origins, core ideas, and key philosophers of ${school.name.toLowerCase()}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://philosophyme.co/schools/${params.school}/`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://philosophyme.co/schools/${params.school}/`,
    },
  };
}

export default function SchoolPage({ params }: { params: { school: string } }) {
  const school = getSchoolFromSlug(params.school);
  if (!school) notFound();

  const schoolPhilosophers = getPhilosophersBySchool(school.id).sort((a, b) => a.birth - b.birth);
  const detail = schoolDetails[school.id];
  const url = `https://philosophyme.co/schools/${params.school}/`;

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://philosophyme.co/' },
      { '@type': 'ListItem', position: 2, name: 'Schools of Philosophy', item: 'https://philosophyme.co/schools/' },
      { '@type': 'ListItem', position: 3, name: school.name, item: url },
    ],
  };

  const faqLd = detail?.faq?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: detail.faq.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      }
    : null;

  const sectionHeading = 'text-lg font-semibold mb-2';
  const bodyText = { color: '#b0a090', fontFamily: 'var(--font-crimson), serif', lineHeight: 1.75 };

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}

        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6">
          <Link href="/schools/" className="inline-flex items-center gap-1.5 text-sm link-hover" style={{ color: '#78909c', textDecoration: 'none' }}>
            <ArrowLeft size={14} /> All Schools
          </Link>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-8 anim-fi">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}>
            {school.name}
          </h1>
          <p className="text-lg italic mb-4" style={{ color: '#c0a172' }}>{school.brief}</p>
          {detail?.definition && (
            <p className="text-base leading-relaxed" style={{ color: '#d8ccb8', fontFamily: 'var(--font-crimson), serif', lineHeight: 1.75 }}>
              {detail.definition}
            </p>
          )}
        </div>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12 anim-fiu">
          <div className="rounded-2xl p-6 sm:p-8 space-y-6" style={{ background: 'rgba(26,21,16,0.6)', border: '1px solid rgba(192,161,114,0.1)' }}>
            <div>
              <h2 className="text-lg font-semibold mb-2" style={{ color: '#f4f4f4' }}>Overview</h2>
              <p className="text-base leading-relaxed" style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif", lineHeight: 1.75 }}>
                {school.synopsis}
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2" style={{ color: '#f4f4f4' }}>Origins</h2>
              <p className="text-base leading-relaxed" style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif", lineHeight: 1.75 }}>
                {school.origin}
              </p>
            </div>
            {detail?.keyIdeas && (
              <div>
                <h2 className={sectionHeading} style={{ color: '#f4f4f4' }}>Key Ideas</h2>
                <div className="space-y-4">
                  {detail.keyIdeas.map((idea) => (
                    <div key={idea.title}>
                      <h3 className="text-base font-semibold mb-1" style={{ color: '#c0a172', fontFamily: 'var(--font-playfair), serif' }}>{idea.title}</h3>
                      <p className="text-base leading-relaxed" style={bodyText}>{idea.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {detail?.keyTexts && (
              <div>
                <h2 className={sectionHeading} style={{ color: '#f4f4f4' }}>Key Texts</h2>
                <ul className="list-disc pl-5 space-y-1">
                  {detail.keyTexts.map((t) => (
                    <li key={t} className="text-base" style={bodyText}>{t}</li>
                  ))}
                </ul>
              </div>
            )}
            {detail?.today && (
              <div>
                <h2 className={sectionHeading} style={{ color: '#f4f4f4' }}>{school.name} Today</h2>
                <p className="text-base leading-relaxed" style={bodyText}>{detail.today}</p>
              </div>
            )}
          </div>
        </section>

        {/* Free chapter offer between the overview and the thinkers */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-12">
          <FreeChapterCard location="school" />
        </div>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}>
            Key Thinkers ({schoolPhilosophers.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {schoolPhilosophers.map((p) => (
              <PhilosopherCard key={p.id} philosopher={p} />
            ))}
          </div>
        </section>

        {detail?.faq && (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#f4f4f4', fontFamily: 'var(--font-playfair), serif' }}>
              Questions About {school.name}
            </h2>
            <div className="space-y-5">
              {detail.faq.map((f) => (
                <div key={f.question}>
                  <h3 className="text-base font-semibold mb-1" style={{ color: '#f4f4f4' }}>{f.question}</h3>
                  <p className="text-base leading-relaxed" style={bodyText}>{f.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
          <GuideCard location="school-bottom" />
        </div>
      </main>
      <Footer />
    </>
  );
}
