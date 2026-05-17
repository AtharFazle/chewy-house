import './globals.css';

export const metadata = {
  title: 'The Chewy House – Premium Chewy Cookies',
  description: 'Crafted with love, baked to perfection — every bite, a luxury. Order premium chewy cookies via WhatsApp, Shopee, dan GrabFood. Handcrafted cookies terbaik.',
  keywords: ['chewy cookies', 'premium cookies', 'the chewy house', 'cookies jakarta', 'kue premium', 'chewy house cookies', 'order cookies online'],
  authors: [{ name: 'The Chewy House' }],
  creator: 'The Chewy House',
  metadataBase: new URL('https://thechewyhouse.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/logo-background.png',
  },
  openGraph: {
    title: 'The Chewy House – Premium Chewy Cookies',
    description: 'Crafted with love, baked to perfection — every bite, a luxury. Order premium chewy cookies sekarang!',
    url: 'https://thechewyhouse.com',
    siteName: 'The Chewy House',
    images: [
      {
        url: '/cake.webp',
        width: 1200,
        height: 630,
        alt: 'Premium chewy cookies by The Chewy House',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Chewy House – Premium Chewy Cookies',
    description: 'Crafted with love, baked to perfection — every bite, a luxury.',
    images: ['/cake.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    name: 'The Chewy House',
    description: 'Premium handcrafted chewy cookies, baked to perfection.',
    url: 'https://thechewyhouse.com',
    image: 'https://thechewyhouse.com/cake.webp',
    telephone: '+6281772389280',
    priceRange: '$$',
    servesCuisine: 'Bakery',
    sameAs: [
      'https://www.instagram.com/thechewyhouse/',
      'https://spf.shopee.co.id/70GWJsQT28',
    ],
  };

  return (
    <html lang="id">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@200;300;400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
