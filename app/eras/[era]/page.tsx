import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhilosopherCard from '@/components/PhilosopherCard';
import EssayTableOfContents from '@/components/EssayTableOfContents';
import EssayPullQuote from '@/components/EssayPullQuote';
import EraDecoration from '@/components/EraDecoration';
import { eras } from '@/data/eras';
import { eraEssays } from '@/data/eraEssays';
import { getPhilosophersByEra } from '@/data/philosophers';
import type { EraId } from '@/data/types';
import { ArrowLeft, BookOpen, ShoppingBag, ExternalLink, Download } from 'lucide-react';

const eraSlugMap: Record<string, EraId> = {
  ancient: 'Ancient',
  medieval: 'Medieval',
  renaissance: 'Renaissance',
  'early-modern': 'Early Modern',
  enlightenment: 'Enlightenment',
  '19th-century': '19th Century',
  contemporary: 'Contemporary',
};

export function generateStaticParams() {
  return Object.keys(eraSlugMap).map((era) => ({ era }));
}

export function generateMetadata({ params }: { params: { era: string } }): Metadata {
  const eraId = eraSlugMap[params.era];
  const era = eras.find((e) => e.id === eraId);
  if (!era) return { title: 'Era Not Found' };

  const title = `${era.name} (${era.period}) — Key Thinkers & Ideas`;
  const description = `${era.desc} Explore ${getPhilosophersByEra(era.id).length} philosophers of the ${era.id} era.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://philosophyme.co/eras/${params.era}/`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://philosophyme.co/eras/${params.era}/`,
    },
  };
}

export default function EraPage({ params }: { params: { era: string } }) {
  const eraId = eraSlugMap[params.era];
  if (!eraId) notFound();

  const era = eras.find((e) => e.id === eraId);
  if (!era) notFound();

  const essay = eraEssays[eraId];
  const eraPhilosophers = getPhilosophersByEra(eraId).sort((a, b) => a.birth - b.birth);

  // Pull quotes for each era
  const pullQuotes: Record<string, { text: string; author: string }> = {
    Ancient: { text: 'The unexamined life is not worth living.', author: 'Socrates' },
    Medieval: { text: 'Faith seeks understanding.', author: 'Anselm of Canterbury' },
    Renaissance: { text: 'Everyone sees what you appear to be, few experience what you really are.', author: 'Niccolò Machiavelli' },
    "Early Modern": { text: 'I think, therefore I am.', author: 'René Descartes' },
    Enlightenment: { text: 'Dare to know! Have the courage to use your own understanding.', author: 'Immanuel Kant' },
    "19th Century": { text: 'God is dead, and we have killed him.', author: 'Friedrich Nietzsche' },
    Contemporary: { text: 'Existence precedes essence.', author: 'Jean-Paul Sartre' },
  };
  const pullQuote = pullQuotes[eraId];

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://philosophyme.co/' },
      { '@type': 'ListItem', position: 2, name: 'Eras', item: 'https://philosophyme.co/eras/' },
      { '@type': 'ListItem', position: 3, name: era.name, item: `https://philosophyme.co/eras/${params.era}/` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Header />
      <main className="min-h-screen pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6">
          <Link href="/eras/" className="inline-flex items-center gap-1.5 text-sm link-hover" style={{ color: '#78909c', textDecoration: 'none' }}>
            <ArrowLeft size={14} /> All Eras
          </Link>
        </div>

        {/* Era Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-8 anim-fi">
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

        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <EraDecoration era={eraId} />
        </div>

        {/* Era Essay */}
        {essay && (
          <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-12 anim-fiu">
            <div className="flex gap-8">
              {/* Sticky ToC sidebar */}
              <div className="hidden lg:block w-56 flex-shrink-0">
                <EssayTableOfContents sections={essay.sections} />
              </div>
              {/* Essay body */}
              <div className="flex-1 min-w-0 rounded-2xl p-6 sm:p-8" style={{ background: 'rgba(26,21,16,0.6)', border: '1px solid rgba(192,161,114,0.1)' }}>
                <h2 className="text-xl sm:text-2xl font-bold mb-6" style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}>
                  {essay.title}
                </h2>
                <div className="space-y-8">
                  {essay.sections.map((section, i) => (
                    <div key={i}>
                      <h3
                        id={`essay-section-${i}`}
                        data-essay-section={i}
                        className="text-lg font-semibold mb-3"
                        style={{ color: '#c0a172', fontFamily: "var(--font-playfair), serif" }}
                      >
                        {section.heading}
                      </h3>
                      <div className="space-y-4">
                        {section.text.split('\n\n').map((para, pi) => (
                          <p key={pi} className="text-base leading-relaxed" style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif", lineHeight: 1.75 }}>
                            {para}
                          </p>
                        ))}
                      </div>
                      {i === 0 && pullQuote && (
                        <EssayPullQuote text={pullQuote.text} author={pullQuote.author} />
                      )}
                      {i < essay.sections.length - 1 && (
                        <div className="gold-line mt-8" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Companion Guide CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <a
            href="https://lancing1.gumroad.com/l/the-complete-collection"
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
                  The Companion Guide
                </p>
                <p className="text-sm mt-0.5" style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif" }}>
                  Seven eras of philosophy in one volume — reading lists, key terms, journal prompts · $19.99
                </p>
              </div>
              <div className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold"
                style={{ background: `linear-gradient(135deg, ${era.color}, ${era.color}cc)`, color: '#fff' }}>
                <ShoppingBag size={13} /> View Guide <ExternalLink size={11} style={{ opacity: 0.6 }} />
              </div>
            </div>
          </a>
        </section>

        {/* Free chapter download */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
            <p
              className="text-center text-sm mb-3 mt-4"
              style={{ color: '#8fa3b0' }}
            >
              Not ready to buy?{' '}
              <a
                href="/downloads/PhilosophyMe_Free_Chapter.pdf"
                download
                className="inline-items-center gap-1 font-semibold transition-colors duration-200"
                style={{ color: '#c0a172', textDecoration: 'none' }}
              >
                <Download size={12} className="inline mr-1" style={{ verticalAlign: '-2px' }} />
                Download a free sample chapter
              </a>{' '}
              from the Companion Guide.
            </p>
          </section>

        {/* Philosophers in this era */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}>
              Philosophers of the {era.id} Era ({eraPhilosophers.length})
            </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {eraPhilosophers.map((p, i) => (
                <PhilosopherCard key={p.id} philosopher={p} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
