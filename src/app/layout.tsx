import './globals.css';

import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';

const montserrat = Urbanist({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'C Flat Run',
  description: 'Pitt’s Sex-C-est A Cappella Group',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
    >
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
