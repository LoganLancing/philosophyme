import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhilosopherCard from '@/components/PhilosopherCard';
import { eras } from '@/data/eras';
import { eraEssays } from '@/data/eraEssays';
import { getPhilosophersByEra } from '@/data/philosophers';
import { getGuideByEra } from '@/data/guides';
import type { EraId } from '@/data/types';
import { ArrowLeft, BookOpen, ShoppingBag, ExternalLink } from 'lucide-react';
import EmailCapture from '@/components/EmailCapture';

const eraSlugMap: Record<string, EraId> = {
  ancient: 'Ancient',
  medieval: 'Medieval',
  renaissance: 'Renaissance',
  enlightenment: 'Enlightenment',
  modern: 'Modern',
  contemporary: 'Contemporary',
};

export function generateStaticParams() {
  return Object.keys(eraSlugMap).map((era) => ({ era }));
}

export function generateMetadata({ params }: { params: { era: string } }): Metadata {
  const eraId = eraSlugMap[params.era];
  const era = eras.find((e) => e.id === eraId);
  if (!era) return { title: 'Era Not Found' };

  return {
    title: `${era.name} (${era.period})`,
    description: `${era.desc} Explore ${getPhilosophersByEra(era.id).length} philosophers of the ${era.id} era.`,
  };
}

export default function EraPage({ params }: { params: { era: string } }) {
  const eraId = eraSlugMap[params.era];
  if (!eraId) notFound();

  const era = eras.find((e) => e.id === eraId);
  if (!era) notFound();

  const essay = eraEssays[eraId];
  const eraPhilosophers = getPhilosophersByEra(eraId).sort((a, b) => a.birth - b.birth);
  const guide = getGuideByEra(eraId);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6">
          <Link href="/eras/" className="inline-flex items-center gap-1.5 text-sm" style={{ color: '#78909c', textDecoration: 'none' }}>
            <ArrowLeft size={14} /> All Eras
          </Link>
        </div>

        {/* Era Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-4 h-4 rounded-full" style={{ background: era.color }} />
            <span className="text-sm" style={{ color: era.color }}>{era.period}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}>
            {era.name}
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif" }}>
            {era.desc}
          </p>
        </div>

        {/* Era Essay */}
        {essay && (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
            <div className="rounded-2xl p-6 sm:p-8" style={{ background: 'rgba(26,21,16,0.6)', border: '1px solid rgba(192,161,114,0.1)' }}>
              <h2 className="text-xl sm:text-2xl font-bold mb-6" style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}>
                {essay.title}
              </h2>
              <div className="space-y-8">
                {essay.sections.map((section, i) => (
                  <div key={i}>
                    <h3 className="text-lg font-semibold mb-3" style={{ color: '#c0a172', fontFamily: "var(--font-playfair), serif" }}>
                      {section.heading}
                    </h3>
                    <div className="space-y-4">
                      {section.text.split('\n\n').map((para, pi) => (
                        <p key={pi} className="text-base leading-relaxed" style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif", lineHeight: 1.75 }}>
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Guide CTA */}
        {guide && (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
            <a
              href={guide.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl p-5 transition-all duration-300 guide-card-hover"
              style={{ background: 'rgba(192,161,114,0.04)', border: '1px solid rgba(192,161,114,0.12)', textDecoration: 'none' }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(192,161,114,0.1)', border: '1px solid rgba(192,161,114,0.15)' }}>
                  <BookOpen size={20} style={{ color: '#c0a172' }} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold" style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}>
                    {era.id} Philosophy Companion Guide
                  </p>
                  <p className="text-sm mt-0.5" style={{ color: '#b0a090' }}>
                    Reading lists, key terms, journal prompts · {guide.pages} pg · {guide.price}
                  </p>
                </div>
                <div className="flex-shrink-0 hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold"
                  style={{ background: `linear-gradient(135deg, ${era.color}, ${era.color}cc)`, color: '#fff' }}>
                  <ShoppingBag size={13} /> View Guide <ExternalLink size={11} style={{ opacity: 0.6 }} />
                </div>
              </div>
            </a>
          </section>
        )}

        {/* Email capture */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <EmailCapture variant="era" />
        </section>

        {/* Philosophers in this era */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}>
            Philosophers of the {era.id} Era ({eraPhilosophers.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {eraPhilosophers.map((p) => (
              <PhilosopherCard key={p.id} philosopher={p} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
