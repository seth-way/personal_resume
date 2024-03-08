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

// @apply shadow-[inset_0_0_0px_1000px_hsl(var(--background))]
//::-webkit-autofill,
//::-webkit-autofill-* {
//  @apply !shadow-[inset_0_0_0px_1000px_rgb(9,9,11)];
//}
