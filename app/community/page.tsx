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
      <main className="min-h-screen py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs tracking-widest uppercase mb-4 block" style={{ color: '#78909c', fontFamily: "var(--font-crimson), serif", letterSpacing: '0.2em' }}>
              Join the Conversation
            </span>
            <h1 className="text-4xl font-bold mb-6" style={{ color: '#c0a172', fontFamily: "var(--font-playfair), serif" }}>
              Community
            </h1>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif" }}>
              The site&apos;s content aims to be fair and neutral. This is where the conversation gets personal. Submit a guest essay to argue your position, or leave feedback to help us improve. Philosophy has always been a dialogue — join it.
            </p>
          </div>
          <CommunityClient />
        </div>
      </main>
      <Footer />
    </>
  );
}
