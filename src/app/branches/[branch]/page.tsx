import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhilosopherCard from '@/components/PhilosopherCard';
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
  return {
    title: `${branch.name} — ${branch.question}`,
    description: `${branch.desc} Explore philosophers who work in ${branch.name.toLowerCase()}.`,
  };
}

export default function BranchPage({ params }: { params: { branch: string } }) {
  const branch = getBranchFromSlug(params.branch);
  if (!branch) notFound();

  const essay = branchEssays[branch.id];
  const branchPhilosophers = getPhilosophersByBranch(branch.id).sort((a, b) => a.birth - b.birth);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6">
          <Link href="/branches/" className="inline-flex items-center gap-1.5 text-sm" style={{ color: '#78909c', textDecoration: 'none' }}>
            <ArrowLeft size={14} /> Branches & Schools
          </Link>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-8">
          <div className="text-3xl mb-3">{branch.icon}</div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}>
            {branch.name}
          </h1>
          <p className="text-lg italic mb-3" style={{ color: '#c0a172' }}>{branch.question}</p>
          <p className="text-base leading-relaxed" style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif" }}>
            {branch.desc}
          </p>
        </div>

        {essay && (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
            <div className="rounded-2xl p-6 sm:p-8" style={{ background: 'rgba(26,21,16,0.6)', border: '1px solid rgba(192,161,114,0.1)' }}>
              <h2 className="text-xl sm:text-2xl font-bold mb-1" style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}>
                {essay.title}
              </h2>
              <p className="text-sm mb-4" style={{ color: '#78909c' }}>{essay.subtitle}</p>
              <div className="space-y-4">
                {essay.body.split('\n\n').map((para, i) => (
                  <p key={i} className="text-base leading-relaxed" style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif", lineHeight: 1.75 }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}>
            Philosophers in {branch.name} ({branchPhilosophers.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {branchPhilosophers.map((p) => (
              <PhilosopherCard key={p.id} philosopher={p} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
