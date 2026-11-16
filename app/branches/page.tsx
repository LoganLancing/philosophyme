import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FreeChapterCard from '@/components/FreeChapterCard';
import GuideCard from '@/components/GuideCard';
import { branches, branchNotables } from '@/data/branches';
import { branchDetails, branchFaq } from '@/data/branchDetails';
import { schools, schoolSlug } from '@/data/schools';
import { philosophers } from '@/data/philosophers';

const TITLE = 'Branches of Philosophy: The 6 Main Branches Explained';
const DESCRIPTION =
  'The six main branches of philosophy are metaphysics, epistemology, ethics, political philosophy, logic and aesthetics. What each one asks, its main areas and its key thinkers.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: 'https://philosophyme.co/branches/' },
  openGraph: { title: TITLE, description: DESCRIPTION, type: 'website', url: 'https://philosophyme.co/branches/' },
};

const branchSlug = (id: string) => id.toLowerCase().replace(/\s+/g, '-');

// Match the notable-thinker names to profiles on the site ("Rene Descartes" -> René Descartes).
const plain = (s: string) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
function profileFor(name: string) {
  return philosophers.find((p) => plain(p.name) === plain(name));
}

export default function BranchesPage() {
  const itemListLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Branches of Philosophy',
    itemListElement: branches.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.name,
      url: `https://philosophyme.co/branches/${branchSlug(b.id)}/`,
    })),
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://philosophyme.co/' },
      { '@type': 'ListItem', position: 2, name: 'Branches of Philosophy', item: 'https://philosophyme.co/branches/' },
    ],
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: branchFaq.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <>
      <Header />
      <main className="min-h-screen max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-10">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

        {/* Answer first */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#c0a172', fontFamily: "var(--font-playfair), serif" }}>
            Branches of Philosophy
          </h1>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif" }}>
            Philosophy has six main branches: <strong style={{ color: '#f4f4f4' }}>metaphysics</strong> (what exists),{' '}
            <strong style={{ color: '#f4f4f4' }}>epistemology</strong> (what we can know), <strong style={{ color: '#f4f4f4' }}>ethics</strong> (how we
            should live), <strong style={{ color: '#f4f4f4' }}>political philosophy</strong> (how society should be governed),{' '}
            <strong style={{ color: '#f4f4f4' }}>logic</strong> (how to reason well) and <strong style={{ color: '#f4f4f4' }}>aesthetics</strong> (what
            beauty and art are). Each branch is a field of questions, and the great philosophers usually worked in several at once.
          </p>
        </div>

        {/* At a glance */}
        <div className="max-w-4xl mx-auto mb-16 overflow-x-auto rounded-xl" style={{ border: '1px solid rgba(192,161,114,0.12)' }}>
          <table className="w-full text-left" style={{ fontFamily: "var(--font-crimson), serif" }}>
            <caption className="sr-only">The six branches of philosophy at a glance</caption>
            <thead>
              <tr style={{ background: 'rgba(192,161,114,0.08)' }}>
                <th scope="col" className="p-3 text-sm font-semibold" style={{ color: '#c0a172' }}>Branch</th>
                <th scope="col" className="p-3 text-sm font-semibold" style={{ color: '#c0a172' }}>Main question</th>
                <th scope="col" className="p-3 text-sm font-semibold hidden sm:table-cell" style={{ color: '#c0a172' }}>Key thinkers</th>
              </tr>
            </thead>
            <tbody>
              {branches.map((b) => (
                <tr key={b.id} style={{ borderTop: '1px solid rgba(192,161,114,0.08)' }}>
                  <th scope="row" className="p-3 text-base font-semibold" style={{ color: '#f4f4f4' }}>
                    <a href={`#${branchSlug(b.id)}`} className="link-hover" style={{ color: '#f4f4f4', textDecoration: 'none' }}>
                      {b.name}
                    </a>
                  </th>
                  <td className="p-3 text-base" style={{ color: '#b0a090' }}>{b.question}</td>
                  <td className="p-3 text-base hidden sm:table-cell" style={{ color: '#8fa3b0' }}>
                    {(branchNotables[b.id] || []).slice(0, 3).map((n) => profileFor(n)?.name ?? n).join(', ')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* The six branches */}
        <div className="max-w-4xl mx-auto space-y-6 mb-16">
          {branches.map((b) => {
            const d = branchDetails[b.id];
            const notables = branchNotables[b.id] || [];
            return (
              <section
                key={b.id}
                id={branchSlug(b.id)}
                className="rounded-2xl p-6 scroll-mt-24"
                style={{ background: 'rgba(26,21,16,0.6)', border: '1px solid rgba(192,161,114,0.1)' }}
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-2xl" style={{ color: '#c0a172' }} aria-hidden="true">{b.icon}</span>
                  <h2 className="text-2xl font-bold" style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}>
                    {b.name}
                  </h2>
                </div>
                <p className="text-lg leading-relaxed mb-4" style={{ color: '#d3c4b0', fontFamily: "var(--font-crimson), serif" }}>
                  {d?.definition ?? b.desc}
                </p>
                {d && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-4">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: '#c0a172' }}>Questions it asks</h3>
                      <ul className="space-y-1">
                        {d.questions.map((q) => (
                          <li key={q} className="text-base" style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif" }}>{q}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: '#c0a172' }}>Main areas</h3>
                      <ul className="space-y-1">
                        {d.areas.map((a) => (
                          <li key={a} className="text-base" style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif" }}>{a}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                {notables.length > 0 && (
                  <p className="text-base mb-4" style={{ color: '#8fa3b0', fontFamily: "var(--font-crimson), serif" }}>
                    <span style={{ color: '#c0a172' }}>Key thinkers: </span>
                    {notables.map((n, i) => {
                      const p = profileFor(n);
                      return (
                        <span key={n}>
                          {i > 0 && ', '}
                          {p ? (
                            <Link href={`/philosophers/${p.id}/`} className="link-hover" style={{ color: '#b0a090' }}>{p.name}</Link>
                          ) : (
                            n
                          )}
                        </span>
                      );
                    })}
                  </p>
                )}
                <Link
                  href={`/branches/${branchSlug(b.id)}/`}
                  className="inline-flex items-center gap-1 text-sm font-semibold link-hover"
                  style={{ color: '#c0a172', textDecoration: 'none' }}
                >
                  Read the full guide to {b.name.toLowerCase()} &rarr;
                </Link>
              </section>
            );
          })}
        </div>

        {/* Other branches */}
        <section className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-3" style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}>
            Other Branches You May See Listed
          </h2>
          <p className="text-base leading-relaxed" style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif", lineHeight: 1.75 }}>
            Longer lists name more branches, but most of them grew out of the six above. Philosophy of mind comes from metaphysics.
            Philosophy of science comes from epistemology. Philosophy of religion draws on both. Philosophy of language grew out of logic,
            and philosophy of law grew out of political philosophy and ethics. They are worth studying in their own right, and the
            core six are the best place to begin.
          </p>
        </section>

        {/* Common questions */}
        <section className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}>
            Common Questions
          </h2>
          <div className="space-y-5">
            {branchFaq.map((f) => (
              <div key={f.question}>
                <h3 className="text-base font-semibold mb-1" style={{ color: '#f4f4f4' }}>{f.question}</h3>
                <p className="text-base leading-relaxed" style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif", lineHeight: 1.75 }}>
                  {f.answer}
                </p>
              </div>
            ))}
          </div>
          <p className="text-base mt-5" style={{ color: '#8fa3b0', fontFamily: "var(--font-crimson), serif" }}>
            Browse by{' '}
            <Link href="/schools/" className="link-hover" style={{ color: '#c0a172' }}>school of thought</Link>,{' '}
            <Link href="/eras/" className="link-hover" style={{ color: '#c0a172' }}>era</Link> or{' '}
            <Link href="/philosophers/" className="link-hover" style={{ color: '#c0a172' }}>philosopher</Link>, or see{' '}
            <Link href="/start/" className="link-hover" style={{ color: '#c0a172' }}>where to start with philosophy</Link>.
          </p>
        </section>

        {/* Free chapter offer between Branches and Schools */}
        <FreeChapterCard
          className="max-w-3xl mx-auto mb-20"
          location="branches-index"
          heading="New to philosophy? Start here."
          body="The Companion Guide tells philosophy's story era by era. Get Chapter 1 (Ancient Philosophy) free, plus a printable 14-week study plan that also works through the branches."
        />

        <div className="max-w-5xl mx-auto"><div className="gold-line" /></div>

        {/* Schools */}
        <div className="text-center mb-12 pt-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}>
            Schools of Thought
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: '#8fa3b0' }}>
            Twenty-one philosophical traditions, each with its own way of answering the big questions.{' '}
            <Link href="/schools/" className="link-hover" style={{ color: '#c0a172' }}>
              See all schools of philosophy in order
            </Link>
            .
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {schools.map((s) => (
            <Link
              key={s.id}
              href={`/schools/${schoolSlug(s.id)}/`}
              className="block rounded-xl p-5 transition-all duration-300 card-hover"
              style={{ background: 'rgba(26,21,16,0.6)', border: '1px solid rgba(192,161,114,0.1)', textDecoration: 'none' }}
            >
              <h3 className="text-base font-bold mb-1" style={{ color: '#c0a172', fontFamily: "var(--font-playfair), serif" }}>
                {s.name}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif" }}>
                {s.brief}
              </p>
            </Link>
          ))}
        </div>

        <GuideCard
          className="max-w-3xl mx-auto mt-16"
          location="branches-index-bottom"
          eyebrow="See the branches in action"
          blurb="The Companion Guide follows these questions through seven eras, with reading lists, key terms and journal prompts for each."
        />
      </main>
      <Footer />
    </>
  );
}
