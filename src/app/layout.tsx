import './globals.css';

import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: 'variable',
});

export const metadata: Metadata = {
  title: 'C Flat Run',
  description: 'Pitt’s Sex-C-est A Cappella Group',
  icons: {
    icon: 'uploads/c-flat-logo-final.webp',
    shortcut: 'uploads/c-flat-logo-final.webp',
    apple: 'uploads/c-flat-logo-final.webp',
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
      <body className={`${jakarta.className} antialiased`}>{children}</body>
    </html>
  );
}
