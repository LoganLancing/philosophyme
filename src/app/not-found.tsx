import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1
            className="text-6xl font-bold mb-4"
            style={{ color: '#c0a172', fontFamily: "var(--font-playfair), serif" }}
          >
            404
          </h1>
          <p className="text-xl mb-2" style={{ color: '#f4f4f4' }}>
            Page not found
          </p>
          <p className="text-base mb-8" style={{ color: '#78909c' }}>
            The philosopher you&apos;re looking for may have moved on to a different realm of inquiry.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-xl text-sm font-semibold"
            style={{
              background: 'linear-gradient(135deg, #c0a172, #8B6914)',
              color: '#0f0c08',
              textDecoration: 'none',
            }}
          >
            Return Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
