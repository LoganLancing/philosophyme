import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FreeChapterCard from '@/components/FreeChapterCard';
import GuideCard from '@/components/GuideCard';
import { getSchool, schoolSlug } from '@/data/schools';
import { schoolDetails } from '@/data/schoolDetails';

const INTRO =
  'A school of philosophy is a tradition of thinkers who share a set of answers to philosophy\'s big questions, along with a way of arriving at them. There is no official count of schools. This page covers 21 of the most influential in the Western tradition, from Plato\'s Academy to postmodernism.';

export const metadata: Metadata = {
  title: 'Schools of Philosophy: 21 Major Schools of Thought Explained',
  description:
    'A school of philosophy is a tradition of thinkers who share answers to the big questions. Explore 21 major schools, from Platonism and Stoicism to Existentialism and Pragmatism.',
  alternates: { canonical: 'https://philosophyme.co/schools/' },
  openGraph: {
    title: 'Schools of Philosophy: 21 Major Schools of Thought Explained',
    description: 'Twenty-one major schools of philosophy, explained in plain language, in the order they emerged.',
    type: 'website',
    url: 'https://philosophyme.co/schools/',
  },
};

// Roughly the order each school emerged.
const periods: { label: string; ids: string[] }[] = [
  { label: 'Ancient', ids: ['Platonism', 'Aristotelianism', 'Skepticism', 'Epicureanism', 'Stoicism'] },
  { label: 'Medieval and Renaissance', ids: ['Scholasticism', 'Humanism'] },
  {
    label: '17th and 18th centuries',
    ids: ['Rationalism', 'Empiricism', 'Social Contract', 'Classical Liberalism', 'Idealism', 'Utilitarianism', 'Conservatism'],
  },
  { label: '19th century', ids: ['Marxism', 'Existentialism', 'Pragmatism'] },
  { label: '20th century', ids: ['Phenomenology', 'Analytic Philosophy', 'Objectivism', 'Postmodernism'] },
];

const faq = [
  {
    question: 'What are the main schools of philosophy?',
    answer:
      'There is no official list, but the most influential schools in the Western tradition include Platonism, Aristotelianism, Stoicism, Epicureanism and Skepticism in the ancient world; Scholasticism in the Middle Ages; Rationalism and Empiricism in the 17th and 18th centuries; and Idealism, Utilitarianism, Existentialism, Pragmatism, Phenomenology and Analytic Philosophy in the last two centuries.',
  },
  {
    question: 'How many schools of philosophy are there?',
    answer:
      'There is no fixed number. Schools split, merge and fade, and many of their names were given by historians after the fact. This site covers 21 of the most influential schools in the Western tradition, and each one links to the philosophers who shaped it.',
  },
  {
    question: 'What are the 5 major schools of philosophy?',
    answer:
      'There is no single agreed list of five. Lists like this often come from education courses, which commonly name idealism, realism, pragmatism and existentialism, sometimes adding others such as perennialism or progressivism. Historians of philosophy are more likely to point to the five great schools of the ancient world: Platonism, Aristotelianism, Stoicism, Epicureanism and Skepticism.',
  },
  {
    question: 'What is the difference between a branch and a school of philosophy?',
    answer:
      'A branch is a field of questions, such as ethics, epistemology or metaphysics. A school is a tradition that gives its own answers to those questions, usually across several branches at once. The Stoics, for example, divided their philosophy into logic, physics and ethics, and had distinctive views in each.',
  },
];

export default function SchoolsPage() {
  const ordered = periods.flatMap((p) => p.ids);

  const itemListLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Schools of Philosophy',
    itemListElement: ordered.map((id, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: getSchool(id)?.name ?? id,
      url: `https://philosophyme.co/schools/${schoolSlug(id)}/`,
    })),
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://philosophyme.co/' },
      { '@type': 'ListItem', position: 2, name: 'Schools of Philosophy', item: 'https://philosophyme.co/schools/' },
    ],
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <>
      <Header />
      <main className="min-h-screen max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-10">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#c0a172', fontFamily: 'var(--font-playfair), serif' }}>
            Schools of Philosophy
          </h1>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#b0a090', fontFamily: 'var(--font-crimson), serif' }}>
            {INTRO}
          </p>
          <p className="text-sm mt-4" style={{ color: '#8fa3b0' }}>
            Looking for fields of study like ethics or logic instead?{' '}
            <Link href="/branches/" className="link-hover" style={{ color: '#c0a172' }}>
              See the branches of philosophy
            </Link>
            .
          </p>
        </div>

        {periods.map((period) => (
          <section key={period.label} className="mb-12">
            <h2 className="text-2xl font-bold mb-5" style={{ color: '#f4f4f4', fontFamily: 'var(--font-playfair), serif' }}>
              {period.label}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {period.ids.map((id) => {
                const s = getSchool(id);
                if (!s) return null;
                return (
                  <Link
                    key={id}
                    href={`/schools/${schoolSlug(id)}/`}
                    className="block rounded-xl p-5 transition-all duration-300 card-hover"
                    style={{ background: 'rgba(26,21,16,0.6)', border: '1px solid rgba(192,161,114,0.1)', textDecoration: 'none' }}
                  >
                    <h3 className="text-base font-bold mb-1" style={{ color: '#c0a172', fontFamily: 'var(--font-playfair), serif' }}>
                      {s.name}
                    </h3>
                    <p className="text-base leading-relaxed" style={{ color: '#b0a090', fontFamily: 'var(--font-crimson), serif' }}>
                      {schoolDetails[id]?.definition ?? s.brief}
                    </p>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}

        <FreeChapterCard className="max-w-3xl mx-auto mb-16" location="schools-index" />

        <section className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#f4f4f4', fontFamily: 'var(--font-playfair), serif' }}>
            Common Questions
          </h2>
          <div className="space-y-5">
            {faq.map((f) => (
              <div key={f.question}>
                <h3 className="text-base font-semibold mb-1" style={{ color: '#f4f4f4' }}>{f.question}</h3>
                <p className="text-base leading-relaxed" style={{ color: '#b0a090', fontFamily: 'var(--font-crimson), serif', lineHeight: 1.75 }}>
                  {f.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <GuideCard
          className="max-w-3xl mx-auto"
          location="schools-index-bottom"
          eyebrow="Follow the schools in order"
          blurb="The Companion Guide tells philosophy's story era by era, so you can see each school arise from the arguments that came before it."
        />
      </main>
      <Footer />
    </>
  );
}
