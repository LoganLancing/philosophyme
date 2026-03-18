import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CommunityClient from '@/components/CommunityClient';

export const metadata: Metadata = {
  title: 'Community',
  description: 'Join the PhilosophyMe community. Submit essays, share feedback, and help improve the site.',
  alternates: { canonical: 'https://philosophyme.co/community/' },
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
              Philosophy has always been a conversation. This page gives you a place to join in. Submit an essay, share feedback, or suggest ways to improve the site.
            </p>
          </div>
          <CommunityClient />
        </div>
      </main>
      <Footer />
    </>
  );
}
