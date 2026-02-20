import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { branches } from '@/data/branches';
import { schools } from '@/data/schools';

export const metadata: Metadata = {
  title: 'Branches & Schools of Philosophy',
  description: 'Explore the major branches of philosophy — Metaphysics, Epistemology, Ethics, Political Philosophy, Logic, and Aesthetics — plus 21 schools of thought.',
};

export default function BranchesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-10">
        {/* Branches */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: '#c0a172', fontFamily: "var(--font-playfair), serif" }}>
            Branches of Philosophy
          </h1>
          <p className="text-base max-w-2xl mx-auto" style={{ color: '#78909c' }}>
            The six major areas of philosophical inquiry.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {branches.map((b) => (
            <Link
              key={b.id}
              href={`/branches/${b.id.toLowerCase().replace(/\s+/g, '-')}/`}
              className="block rounded-2xl p-6 transition-all duration-300 card-hover"
              style={{ background: 'rgba(26,21,16,0.6)', border: '1px solid rgba(192,161,114,0.1)', textDecoration: 'none' }}
            >
              <div className="text-2xl mb-2">{b.icon}</div>
              <h2 className="text-lg font-bold mb-1" style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}>
                {b.name}
              </h2>
              <p className="text-sm italic mb-2" style={{ color: '#c0a172' }}>{b.question}</p>
              <p className="text-base leading-relaxed" style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif" }}>
                {b.desc}
              </p>
            </Link>
          ))}
        </div>

        <div className="max-w-5xl mx-auto"><div className="gold-line" /></div>

        {/* Schools */}
        <div className="text-center mb-12 pt-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}>
            Schools of Thought
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: '#78909c' }}>
            {schools.length} philosophical traditions, each with a distinctive approach to the big questions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {schools.map((s) => (
            <Link
              key={s.id}
              href={`/schools/${s.id.toLowerCase().replace(/\s+/g, '-')}/`}
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
      </main>
      <Footer />
    </>
  );
}
