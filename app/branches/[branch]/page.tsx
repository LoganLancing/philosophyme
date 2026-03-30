import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhilosopherCard from '@/components/PhilosopherCard';
import EssayTableOfContents from '@/components/EssayTableOfContents';
import EssayPullQuote from '@/components/EssayPullQuote';
import { branches } from '@/data/branches';
import { branchEssays } from '@/data/branchEssays';
import { getPhilosophersByBranch } from '@/data/philosophers';
import { ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
  return branches.map((b) => ({ branch: b.id.toLowerCase().replace(/\s+/g, '-') }));
}

function getBranchFromSlug(slug: string) {
  return branches.find((b) => b.id.toLowerCase().replace(/\s+/g, '-') === slug);
}

export function generateMetadata({ params }: { params: { branch: string } }): Metadata {
  const branch = getBranchFromSlug(params.branch);
  if (!branch) return { title: 'Branch Not Found' };

  const title = `${branch.name} — ${branch.question}`;
  const description = `${branch.desc} Explore philosophers who work in ${branch.name.toLowerCase()}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://philosophyme.co/branches/${params.branch}/`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://philosophyme.co/branches/${params.branch}/`,
    },
  };
}

export default function BranchPage({ params }: { params: { branch: string } }) {
  const branch = getBranchFromSlug(params.branch);
  if (!branch) notFound();

  const essay = branchEssays[branch.id];
  const branchPhilosophers = getPhilosophersByBranch(branch.id).sort((a, b) => a.birth - b.birth);

  // Pull quotes per branch
  const pullQuotes: Record<string, { text: string; author: string }> = {
    Metaphysics: { text: 'The essence of things is in the mind and not in the things themselves.', author: 'Immanuel Kant' },
    Epistemology: { text: 'I know that I know nothing.', author: 'Socrates' },
    Ethics: { text: 'Virtue is its own reward.', author: 'Baruch Spinoza' },
    'Political Philosophy': { text: 'Man is by nature a political animal.', author: 'Aristotle' },
    Logic: { text: 'The limits of my language mean the limits of my world.', author: 'Ludwig Wittgenstein' },
    Aesthetics: { text: 'Beauty is truth, truth beauty.', author: 'John Keats' },
  };
  const pullQuote = pullQuotes[branch.id];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6">
          <Link href="/branches/" className="inline-flex items-center gap-1.5 text-sm link-hover" style={{ color: '#78909c', textDecoration: 'none' }}>
            <ArrowLeft size={14} /> Branches & Schools
          </Link>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-8 anim-fi">
          <div className="text-3xl mb-3" style={{ color: '#c0a172' }}>{branch.icon}</div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}>
            {branch.name}
          </h1>
          <p className="text-lg italic mb-3" style={{ color: '#c0a172' }}>{branch.question}</p>
          <p className="text-base leading-relaxed" style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif" }}>
            {branch.desc}
          </p>
        </div>

        {essay && (
          <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-12 anim-fiu">
            <div className="flex gap-8">
              <div className="hidden lg:block w-56 flex-shrink-0">
                <EssayTableOfContents sections={essay.sections} />
              </div>
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

        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}>
              Philosophers in {branch.name} ({branchPhilosophers.length})
            </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {branchPhilosophers.map((p, i) => (
                <PhilosopherCard key={p.id} philosopher={p} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
