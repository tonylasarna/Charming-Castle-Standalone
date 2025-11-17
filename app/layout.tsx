import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { playfairDisplay, inter } from '../lib/fonts';

export const metadata: Metadata = {
  title: 'Charming Castle | Elegant Event Décor in Toronto',
  description: 'Premium balloon art, backdrops, rentals and AI-powered planning in Forest Hill, Toronto.',
  metadataBase: new URL('https://charming-castle.example.com'),
  openGraph: {
    title: 'Charming Castle | Elegant Event Décor in Toronto',
    description: 'Premium balloon art, backdrops, rentals and AI-powered planning in Forest Hill, Toronto.',
    url: 'https://charming-castle.example.com',
    siteName: 'Charming Castle',
    locale: 'en_CA',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body className="font-body bg-rose-50 text-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
