import type { Metadata } from 'next';
import Script from 'next/script';
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
    default: 'PhilosophyMe — 108 Philosophers Explained Simply | Free',
    template: '%s | PhilosophyMe',
  },
  description:
    'Explore 108 philosopher profiles across 2,600 years of Western thought — written in clear language for first-time readers. Free forever, no paywalls. Start exploring today.',
  keywords: [
    'philosophy', 'philosophers', 'philosophy explained simply',
    'learn philosophy free', 'philosopher profiles', 'philosophy for beginners',
    'Plato', 'Aristotle', 'Kant', 'Nietzsche', 'Marcus Aurelius', 'Seneca',
    'Stoicism', 'ethics', 'metaphysics', 'epistemology',
    'history of philosophy', 'philosophy 101', 'philosophy study guide',
    'intro to philosophy', 'western philosophy overview',
  ],
  authors: [{ name: 'PhilosophyMe' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://philosophyme.co',
    siteName: 'PhilosophyMe',
    title: 'PhilosophyMe — 108 Philosophers Explained Simply | Free',
    description:
      'Explore 108 philosopher profiles across 2,600 years of Western thought — in clear language for first-time readers. Free forever.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'PhilosophyMe — 108 Philosophers Explained Simply' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PhilosophyMe — 108 Philosophers Explained Simply | Free',
    description:
      'Explore 108 philosopher profiles across 2,600 years of Western thought — in clear language for first-time readers. Free forever.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://philosophyme.co',
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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-N7Y21FJKEW"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-N7Y21FJKEW');
        `}
      </Script>
      <body className="min-h-screen antialiased" style={{ backgroundColor: '#0d0b08' }}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
