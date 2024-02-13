import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';

const { name } = require('@/public/resumeData.json').main;

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `${name} - Resume`,
  description: `${name}'s virtual resume. Written in TypeScript on the NextJS React framework.`,
};

<script async src='node_modules/@material-tailwind/html/scripts/ripple.js' />;

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
