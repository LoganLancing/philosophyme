import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhilosophersClient from '@/components/PhilosophersClient';

export const metadata: Metadata = {
  title: 'All Philosophers',
  description:
    'Browse 108 philosophers across six eras of Western philosophy. Search by name, era, branch, or school of thought.',
};

export default function PhilosophersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <PhilosophersClient />
      </main>
      <Footer />
    </>
  );
}
