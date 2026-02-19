import type { Metadata } from 'next';
import { Playfair_Display, Crimson_Pro, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const crimson = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-crimson',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://philosophyme.co'),
  title: {
    default: 'PhilosophyMe — 2,600 Years of Human Thought',
    template: '%s | PhilosophyMe',
  },
  description:
    'Explore 108 philosophers across six eras of Western philosophy. Interactive profiles, era essays, schools of thought, and companion study guides.',
  keywords: [
    'philosophy', 'philosophers', 'philosophy education', 'Plato', 'Aristotle',
    'Kant', 'Nietzsche', 'ethics', 'metaphysics', 'epistemology',
    'history of philosophy', 'philosophy 101', 'study guide',
  ],
  authors: [{ name: 'PhilosophyMe' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://philosophyme.co',
    siteName: 'PhilosophyMe',
    title: 'PhilosophyMe — 2,600 Years of Human Thought',
    description:
      'Explore 108 philosophers across six eras of Western philosophy.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'PhilosophyMe' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PhilosophyMe — 2,600 Years of Human Thought',
    description:
      'Explore 108 philosophers across six eras of Western philosophy.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

import ScrollToTop from '@/components/ScrollToTop';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${crimson.variable} ${cormorant.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="min-h-screen antialiased" style={{ backgroundColor: '#0d0b08' }}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
