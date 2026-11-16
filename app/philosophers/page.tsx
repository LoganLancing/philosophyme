import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhilosophersClient, { type IndexPhilosopher } from '@/components/PhilosophersClient';
import { toCardPhilosopher } from '@/components/PhilosopherCard';
import { philosophers } from '@/data/philosophers';

// Built once at build time. Search covers the same fields as before:
// name, thesis, biography, works, and each argument's title and summary.
const indexPhilosophers: IndexPhilosopher[] = philosophers.map((p) => ({
  ...toCardPhilosopher(p),
  school: p.school,
  search: [p.name, p.thesis, p.bio, ...p.works, ...p.arguments.map((a) => a.title + ' ' + a.desc)]
    .join(' ')
    .toLowerCase(),
}));

export const metadata: Metadata = {
  title: 'All Philosophers',
  description:
    'Browse 108 philosophers across seven eras of Western philosophy. Search by name, era, branch, or school of thought.',
  alternates: { canonical: 'https://philosophyme.co/philosophers/' },
};

export default function PhilosophersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <PhilosophersClient philosophers={indexPhilosophers} />
      </main>
      <Footer />
    </>
  );
}
