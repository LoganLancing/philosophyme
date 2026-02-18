import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhilosopherCard from '@/components/PhilosopherCard';
import { schools } from '@/data/schools';
import { getPhilosophersBySchool } from '@/data/philosophers';
import { ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
  return schools.map((s) => ({ school: s.id.toLowerCase().replace(/\s+/g, '-') }));
}

function getSchoolFromSlug(slug: string) {
  return schools.find((s) => s.id.toLowerCase().replace(/\s+/g, '-') === slug);
}

export function generateMetadata({ params }: { params: { school: string } }): Metadata {
  const school = getSchoolFromSlug(params.school);
  if (!school) return { title: 'School Not Found' };
  return {
    title: `${school.name} — School of Thought`,
    description: school.brief,
  };
}

export default function SchoolPage({ params }: { params: { school: string } }) {
  const school = getSchoolFromSlug(params.school);
  if (!school) notFound();

  const schoolPhilosophers = getPhilosophersBySchool(school.id).sort((a, b) => a.birth - b.birth);

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
          <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}>
            {school.name}
          </h1>
          <p className="text-lg italic mb-4" style={{ color: '#c0a172' }}>{school.brief}</p>
        </div>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
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
          </div>
        </section>

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
      </main>
      <Footer />
    </>
  );
}
