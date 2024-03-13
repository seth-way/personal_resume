import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';

import data from '@/public/resumeData.json';

const { name } = data.main;

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `${name} - Resume`,
  description: `${name}'s virtual resume. Written in TypeScript on the NextJS React framework.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
