'use client';

import * as React from 'react';
import { ThemeProvider } from '@material-tailwind/react';
import AppBar from '@/components/AppBar';
import AboveTheFold from '@/components/AboveTheFold';
import Divider from '@/components/ui/Divider';
import About from '@/components/About';
import Resume from '@/components/Resume';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

type KeyAndComponent = [key: string, component: () => React.JSX.Element];

const sections: KeyAndComponent[] = [
  ['HOME', AboveTheFold],
  ['ABOUT', About],
  ['RESUME', Resume],
  ['PROJECTS', Projects],
  ['CONTACT', Contact],
];

export default function App() {
  return (
    <ThemeProvider>
      <main className='w-full p-4 lg:p-8 flex flex-col items-center overflow-auto'>
        {/* AppBar requires an array of section keys only */}
        <AppBar sections={sections.map(([key]) => key)} />
        {sections.map(([id, Component], idx) => (
          <div
            id={id}
            key={`${id}_${idx}`}
            className='flex flex-col items-center w-full'
          >
            {idx > 0 ? <Divider /> : ''}
            <Component />
          </div>
        ))}
      </main>
    </ThemeProvider>
  );
}
