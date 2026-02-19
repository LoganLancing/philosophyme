import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CommunityClient from '@/components/CommunityClient';

export const metadata: Metadata = {
  title: 'Community',
  description: 'Join the PhilosophyMe community — submit philosophical essays, share feedback, and help shape the future of philosophy education.',
};

export default function CommunityPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-10">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}>
            Community
          </h1>
          <p className="text-base max-w-2xl mx-auto" style={{ color: '#78909c' }}>
            PhilosophyMe is built by and for people who care about philosophical ideas. Share your thinking.
          </p>
        </div>
        <CommunityClient />
      </main>
      <Footer />
    </>
  );
}
