import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FreeChapterCard from '@/components/FreeChapterCard';
import GuideCard from '@/components/GuideCard';
import { getPhilosopherBySlug } from '@/data/philosophers';
import { studyPlan } from '@/data/studyPlan';

const TITLE = 'How to Start Learning Philosophy: A Beginner’s Path';
const DESCRIPTION =
  'Where to start with philosophy: begin with a question you care about, meet eight major thinkers, read one short classic, then follow the eras in order with a free 14-week study plan.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: 'https://philosophyme.co/start/' },
  openGraph: { title: TITLE, description: DESCRIPTION, type: 'article', url: 'https://philosophyme.co/start/' },
};

// A first question, and the branch that studies it.
const questions = [
  { q: 'How should I live? What makes something right or wrong?', branch: 'Ethics', slug: 'ethics' },
  { q: 'What can I actually know? Can I trust my senses?', branch: 'Epistemology', slug: 'epistemology' },
  { q: 'Do I have free will? Is the mind more than the brain?', branch: 'Metaphysics', slug: 'metaphysics' },
  { q: 'What makes a government legitimate? How free should people be?', branch: 'Political Philosophy', slug: 'political-philosophy' },
  { q: 'How do I tell a good argument from a bad one?', branch: 'Logic', slug: 'logic' },
  { q: 'What is art? Is beauty only a matter of taste?', branch: 'Aesthetics', slug: 'aesthetics' },
];

// Eight thinkers whose ideas the rest of philosophy keeps answering.
const firstThinkers = [
  { id: 'socrates', why: 'Questioned everything and showed what it means to follow an argument.' },
  { id: 'plato', why: 'Wrote the dialogues that set the agenda for everything after.' },
  { id: 'aristotle', why: 'Built a system for ethics, logic, politics and science.' },
  { id: 'marcus-aurelius', why: 'Shows Stoicism as a way of living, in a short private notebook.' },
  { id: 'rene-descartes', why: 'Asked what we can know for certain, and started modern philosophy.' },
  { id: 'david-hume', why: 'Tested every claim against experience, and found reason’s limits.' },
  { id: 'immanuel-kant', why: 'Tried to settle what reason can know and what morality demands.' },
  { id: 'friedrich-nietzsche', why: 'Challenged where our values come from, and what follows if they fall.' },
];

// Short classics a beginner can finish in an evening or two.
const firstBooks = [
  { title: 'The Apology', author: 'Plato', note: 'Socrates on trial, defending the examined life.' },
  { title: 'Meditations', author: 'Marcus Aurelius', note: 'Short entries you can read in any order.' },
  { title: 'Meditations on First Philosophy (I and II)', author: 'René Descartes', note: 'The search for one thing that cannot be doubted.' },
  { title: 'On Liberty', author: 'John Stuart Mill', note: 'The classic argument for free speech and individual freedom.' },
];

const faq = [
  {
    question: 'Where should a beginner start with philosophy?',
    answer:
      'Start with a question you already care about, such as how to live or what you can know. Then meet a few major thinkers who answered it, read one short classic like Plato’s Apology, and follow the story forward era by era so each idea makes sense against what came before.',
  },
  {
    question: 'Can I learn philosophy on my own?',
    answer:
      'Yes. The major texts are widely available, and many of the most important are short. What self-study lacks is structure, so it helps to follow a plan that tells you what to read in what order and gives you questions to write about as you go.',
  },
  {
    question: 'Should I read philosophy in chronological order?',
    answer:
      'It helps. Philosophers spend most of their time answering the people who came before them, so Descartes makes more sense after the medieval thinkers he rejected, and Kant makes more sense after Hume. You do not have to read every era, but following the order keeps the conversation clear.',
  },
  {
    question: 'What should I read first?',
    answer:
      'Plato’s Apology is the most common first text. It is short, it reads like a courtroom drama, and it shows Socrates explaining why a life without questioning is not worth living. Marcus Aurelius’s Meditations is another easy start.',
  },
  {
    question: 'How long does it take to learn the basics of philosophy?',
    answer:
      'A focused reader can get a solid overview of the whole Western tradition in a few months. The free PhilosophyMe study plan covers all seven eras in 14 weeks, with two weeks per era and one branch of philosophy paired with each.',
  },
];

// "Read a short primary text (start with Plato's Apology)" -> "Plato's Apology"
function firstText(lines: string[]): string | null {
  const line = lines.find((l) => l.includes('start with'));
  const m = line?.match(/start with (.+)\)$/);
  return m ? m[1] : null;
}

export default function StartPage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://philosophyme.co/' },
      { '@type': 'ListItem', position: 2, name: 'Start Here', item: 'https://philosophyme.co/start/' },
    ],
  };
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  };

  const h2 = { color: '#f4f4f4', fontFamily: 'var(--font-playfair), serif' };
  const body = { color: '#b0a090', fontFamily: 'var(--font-crimson), serif', lineHeight: 1.75 };
  const card = { background: 'rgba(26,21,16,0.6)', border: '1px solid rgba(192,161,114,0.1)' };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Header />
      <main className="min-h-screen max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-10">
        <div className="text-center mb-12">
          <span className="text-xs tracking-widest uppercase mb-4 block" style={{ color: '#78909c', letterSpacing: '0.2em' }}>
            Start Here
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#c0a172', fontFamily: 'var(--font-playfair), serif' }}>
            How to Start Learning Philosophy
          </h1>
          <p className="text-lg max-w-3xl mx-auto" style={body}>
            The best way to start philosophy is to pick a question you already care about, meet the handful of thinkers everyone else
            responds to, read one short classic, and then follow the story forward era by era. You do not need any background. Here is
            the path, step by step.
          </p>
        </div>

        {/* Step 1 */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-2" style={h2}>1. Start with a question you care about</h2>
          <p className="text-base mb-5" style={body}>
            Every branch of philosophy is built around a set of questions. Pick the one that pulls at you, and read that branch first.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {questions.map((x) => (
              <Link key={x.slug} href={`/branches/${x.slug}/`} className="block rounded-xl p-4 card-hover" style={{ ...card, textDecoration: 'none' }}>
                <p className="text-base italic mb-1" style={{ color: '#d3b9a3', fontFamily: 'var(--font-crimson), serif' }}>{x.q}</p>
                <p className="text-sm font-semibold" style={{ color: '#c0a172' }}>Read about {x.branch} &rarr;</p>
              </Link>
            ))}
          </div>
          <p className="text-sm mt-3" style={{ color: '#8fa3b0' }}>
            Not sure? See <Link href="/branches/" className="link-hover" style={{ color: '#c0a172' }}>all six branches of philosophy</Link> side by side.
          </p>
        </section>

        {/* Step 2 */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-2" style={h2}>2. Meet eight thinkers first</h2>
          <p className="text-base mb-5" style={body}>
            Most of Western philosophy is a running argument with a few people. Know these eight and you will recognize the moves in almost
            everything else you read.
          </p>
          <ol className="space-y-3">
            {firstThinkers.map((t, i) => {
              const p = getPhilosopherBySlug(t.id);
              if (!p) return null;
              return (
                <li key={t.id} className="rounded-xl p-4 flex gap-3" style={card}>
                  <span className="font-bold" style={{ color: '#c0a172', minWidth: 20 }}>{i + 1}.</span>
                  <span className="text-base" style={body}>
                    <Link href={`/philosophers/${p.id}/`} className="link-hover font-semibold" style={{ color: '#f4f4f4' }}>{p.name}</Link>
                    {': '}
                    {t.why}
                  </span>
                </li>
              );
            })}
          </ol>
        </section>

        {/* Step 3 */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-2" style={h2}>3. Read one short classic</h2>
          <p className="text-base mb-5" style={body}>
            Summaries help, but philosophy clicks when you read a philosopher arguing in their own words. Start short.
          </p>
          <ul className="space-y-3">
            {firstBooks.map((b) => (
              <li key={b.title} className="text-base" style={body}>
                <strong style={{ color: '#f4f4f4' }}>{b.title}</strong> by {b.author}: {b.note}
              </li>
            ))}
          </ul>
        </section>

        {/* Step 4 */}
        <section className="mb-14" id="study-plan">
          <h2 className="text-2xl font-bold mb-2" style={h2}>4. Follow the eras in order</h2>
          <p className="text-base mb-5" style={body}>
            Philosophers answer the people who came before them, so the ideas make the most sense in order. This free 14-week plan gives
            each era two weeks and pairs it with one branch of philosophy and one short primary text.
          </p>
          <div className="overflow-x-auto rounded-xl" style={{ border: '1px solid rgba(192,161,114,0.12)' }}>
            <table className="w-full text-left" style={{ fontFamily: 'var(--font-crimson), serif' }}>
              <caption className="sr-only">The 14-week philosophy study plan</caption>
              <thead>
                <tr style={{ background: 'rgba(192,161,114,0.08)' }}>
                  <th scope="col" className="p-3 text-sm font-semibold" style={{ color: '#c0a172' }}>Weeks</th>
                  <th scope="col" className="p-3 text-sm font-semibold" style={{ color: '#c0a172' }}>Era</th>
                  <th scope="col" className="p-3 text-sm font-semibold" style={{ color: '#c0a172' }}>Branch</th>
                  <th scope="col" className="p-3 text-sm font-semibold hidden sm:table-cell" style={{ color: '#c0a172' }}>First text</th>
                </tr>
              </thead>
              <tbody>
                {studyPlan.map((block) => (
                  <tr key={block.weeks} style={{ borderTop: '1px solid rgba(192,161,114,0.08)' }}>
                    <td className="p-3 text-base whitespace-nowrap" style={{ color: '#8fa3b0' }}>{block.weeks}</td>
                    <td className="p-3 text-base">
                      <Link href={`/eras/${block.eraSlug}/`} className="link-hover" style={{ color: '#f4f4f4' }}>{block.eraTitle}</Link>
                    </td>
                    <td className="p-3 text-base">
                      <Link href={`/branches/${block.branchSlug}/`} className="link-hover" style={{ color: '#b0a090' }}>{block.branch}</Link>
                    </td>
                    <td className="p-3 text-base hidden sm:table-cell" style={{ color: '#b0a090' }}>{firstText(block.weekTwo)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-3" style={{ color: '#8fa3b0' }}>
            The full week-by-week plan is on the <Link href="/guides/#study-plan" className="link-hover" style={{ color: '#c0a172' }}>Companion Guide page</Link>, and
            you can get the printable version free below.
          </p>
        </section>

        <FreeChapterCard
          className="mb-14"
          location="start"
          heading="Get the study plan and Chapter 1, free"
          body="The printable 14-week study plan and Chapter 1 of the Companion Guide (Ancient Philosophy). Enter your email and both are yours right away."
        />

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6" style={h2}>Common Questions</h2>
          <div className="space-y-5">
            {faq.map((f) => (
              <div key={f.question}>
                <h3 className="text-base font-semibold mb-1" style={{ color: '#f4f4f4' }}>{f.question}</h3>
                <p className="text-base" style={body}>{f.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <GuideCard
          location="start-bottom"
          eyebrow="Your reading path"
          blurb="The Companion Guide is the book this plan is built around: seven era chapters, 25 thought experiments, reading lists, key terms and journal prompts."
        />
      </main>
      <Footer />
    </>
  );
}
