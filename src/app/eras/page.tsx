import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { eras } from '@/data/eras';
import { philosophers } from '@/data/philosophers';

export const metadata: Metadata = {
  title: 'Eras of Philosophy',
  description: 'Explore six eras of Western philosophy — from the Ancient Greeks to contemporary thinkers. Each era asked different questions and arrived at different answers.',
};

export default function ErasPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-10">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}>
            Six Eras of Philosophy
          </h1>
          <p className="text-base max-w-2xl mx-auto" style={{ color: '#78909c' }}>
            2,600 years of human thought, organized by the intellectual revolutions that shaped each period.
          </p>
        </div>
        <div className="space-y-6">
          {eras.map((era) => {
            const count = philosophers.filter((p) => p.era === era.id).length;
            return (
              <Link
                key={era.id}
                href={`/eras/${era.id.toLowerCase()}/`}
                className="block rounded-2xl p-6 sm:p-8 transition-all duration-300 card-hover"
                style={{ background: 'rgba(26,21,16,0.6)', border: '1px solid rgba(192,161,114,0.1)', textDecoration: 'none' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-4 h-4 rounded-full" style={{ background: era.color }} />
                  <h2 className="text-xl sm:text-2xl font-bold" style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}>
                    {era.name}
                  </h2>
                  <span className="text-sm ml-auto" style={{ color: era.color }}>{era.period}</span>
                </div>
                <p className="text-base leading-relaxed mb-3" style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif" }}>
                  {era.desc}
                </p>
                <p className="text-sm" style={{ color: '#78909c' }}>
                  {count} philosophers · {era.key}
                </p>
              </Link>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
