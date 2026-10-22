import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhilosopherCard from '@/components/PhilosopherCard';
import EssayTableOfContents from '@/components/EssayTableOfContents';
import EssayPullQuote from '@/components/EssayPullQuote';
import EraDecoration from '@/components/EraDecoration';
import FreeChapterCard from '@/components/FreeChapterCard';
import EmailCapture from '@/components/EmailCapture';
import GuideCard from '@/components/GuideCard';
import { eras } from '@/data/eras';
import { eraEssays } from '@/data/eraEssays';
import { getPhilosophersByEra } from '@/data/philosophers';
import type { EraId } from '@/data/types';
import { ArrowLeft } from 'lucide-react';

const eraSlugMap: Record<string, EraId> = {
  ancient: 'Ancient',
  medieval: 'Medieval',
  renaissance: 'Renaissance',
  'early-modern': 'Early Modern',
  enlightenment: 'Enlightenment',
  '19th-century': '19th Century',
  contemporary: 'Contemporary',
};

// Answer-first openers: the first sentence says plainly what the era is, so search
// results and AI answers can quote it on its own. Also used for the meta description.
const eraIntros: Record<EraId, string> = {
  Ancient:
    'Ancient philosophy is Western philosophy from about 600 BCE to 500 CE, the period that runs from the first Greek thinkers to the late Roman schools. It begins with the Pre-Socratics asking what the world is made of, grows through Socrates, Plato and Aristotle, then turns toward daily life in schools like Stoicism and Epicureanism.',
  Medieval:
    'Medieval philosophy is Western philosophy from about 400 to 1500 CE, when Christian, Islamic and Jewish thinkers worked out how Greek philosophy fits with religious faith. They asked how faith and reason fit together and wrote serious arguments about God, free will, natural law and existence.',
  Renaissance:
    'Renaissance philosophy is Western philosophy from about 1400 to 1600 CE, when humanists recovered classical learning and put new focus on human life, politics, language and observation. Thinkers like Machiavelli, Erasmus and Montaigne challenged old authority and paid closer attention to the world in front of them.',
  'Early Modern':
    'Early modern philosophy is Western philosophy from about 1600 to 1750 CE, the period that grew up alongside the scientific revolution. Descartes asked what we can know with certainty, and Hobbes, Spinoza, Leibniz and Locke each built new systems for thinking about knowledge, politics, mind and nature.',
  Enlightenment:
    'Enlightenment philosophy is Western philosophy from about 1685 to 1815 CE, when thinkers like Hume, Voltaire, Rousseau and Kant applied reason to politics, religion, ethics and society. They argued about liberty, rights, toleration, government and the reach of human reason.',
  '19th Century':
    'Nineteenth-century philosophy is Western philosophy from about 1800 to 1900, a century that pushed back against easy faith in reason and progress. Hegel, Marx, Kierkegaard, Nietzsche and the pragmatists raised harder questions about history, truth, value and meaning.',
  Contemporary:
    'Contemporary philosophy is Western philosophy from about 1900 to the present day. It is wide-ranging and often specialized, taking in analytic philosophy, phenomenology, existentialism, feminism, postmodernism, applied ethics and more.',
};

// Search titles: lead with the name people search for, keep it short enough to show in full.
const eraTitles: Partial<Record<EraId, string>> = {
  Contemporary: 'Contemporary Philosophy: Key Ideas and Thinkers Since 1900',
};

// What each era's chapter of the Companion Guide adds (themes from the study plan on /guides/).
const eraChapterBlurbs: Record<EraId, string> = {
  Ancient: 'A reading path through the era, primary texts to start with, and journal prompts on virtue, justice and the good life. Part of the full guide: seven eras in one volume.',
  Medieval: 'A reading path through the era, primary texts to start with, and journal prompts on faith, reason and the nature of existence. Part of the full guide: seven eras in one volume.',
  Renaissance: 'A reading path through the era, primary texts to start with, and journal prompts on power, humanism and the individual. Part of the full guide: seven eras in one volume.',
  'Early Modern': 'A reading path through the era, primary texts to start with, and journal prompts on doubt, knowledge and the mind-body problem. Part of the full guide: seven eras in one volume.',
  Enlightenment: 'A reading path through the era, primary texts to start with, and journal prompts on knowledge, reason and human rights. Part of the full guide: seven eras in one volume.',
  '19th Century': 'A reading path through the era, primary texts to start with, and journal prompts on ideology, crisis and the search for meaning. Part of the full guide: seven eras in one volume.',
  Contemporary: 'A reading path through the era, primary texts to start with, and journal prompts on freedom, justice and the limits of knowledge. Part of the full guide: seven eras in one volume.',
};

function firstSentence(text: string): string {
  return text.split(/(?<=\.)\s/)[0];
}

export function generateStaticParams() {
  return Object.keys(eraSlugMap).map((era) => ({ era }));
}

// Dynamic metadata for SEO — optimized for era-related search queries
export function generateMetadata({ params }: { params: { era: string } }): Metadata {
  const eraId = eraSlugMap[params.era];
  const era = eras.find((e) => e.id === eraId);
  if (!era) return { title: 'Era Not Found' };

  const count = getPhilosophersByEra(era.id).length;
  const title = eraTitles[era.id] ?? `${era.name}: Key Ideas and Thinkers`;
  const description = `${firstSentence(eraIntros[era.id])} ${count} philosophers explained in plain language.`;

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
    twitter: {
      card: 'summary_large_image',
      title,
      description,
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

  // SEO-enriched intro summaries for eras with search traction
  const eraSeoIntros: Record<string, string> = {
    Medieval: 'Medieval philosophy spans roughly 500 to 1500 CE and represents one of the richest periods in the history of Western thought. Far from the "Dark Ages" stereotype, medieval philosophers — including Augustine, Avicenna, Thomas Aquinas, Averroes, Maimonides, and William of Ockham — produced sophisticated arguments about the existence of God, the problem of evil, free will, natural law, and the relationship between faith and reason. This era bridges ancient Greek philosophy and the modern period, preserving and extending the work of Plato and Aristotle through Christian, Islamic, and Jewish traditions.',
  };
  const seoIntro = eraSeoIntros[eraId];

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
            {eraIntros[eraId]}
          </p>
        </div>

        {/* SEO-enriched intro for eras with search traction */}
        {seoIntro && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-6">
            <p className="text-base leading-relaxed" style={{ color: '#9a8b7a', fontFamily: "var(--font-crimson), serif", lineHeight: 1.75 }}>
              {seoIntro}
            </p>
          </div>
        )}

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
                      {i === 0 && (
                        <FreeChapterCard
                          className="mt-8"
                          location="era"
                          heading={eraId === 'Ancient' ? 'Read this era’s chapter, free' : `Go deeper into ${era.name}`}
                          body={
                            eraId === 'Ancient'
                              ? 'Chapter 1 of the Companion Guide tells the Ancient era’s story as one connected narrative. Get it free, plus a printable 14-week study plan.'
                              : `The Companion Guide gives ${era.name} its own chapter. Start with Chapter 1 (Ancient Philosophy) free, plus a printable 14-week study plan.`
                          }
                        />
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
          <GuideCard
            location="era-bottom"
            accent={era.color}
            eyebrow={`The ${era.name} chapter`}
            blurb={eraChapterBlurbs[eraId]}
          />
        </section>

        {/* Free chapter by email (downloads appear as soon as they sign up) */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12" data-track-location="era-bottom">
            <EmailCapture variant="era" location="era-bottom" />
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
