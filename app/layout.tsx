import { Inter } from 'next/font/google';
import '@/app/globals.css';

import data from '@/public/resumeData.json';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { main } = data;
  const { name } = main;
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta name='title' content={`${name} - Resume`} />
        <meta
          name='description'
          content={`${name}'s virtual resume. Written in TypeScript on the NextJS React framework.`}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
