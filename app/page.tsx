'use client';
import * as React from 'react';
import { ThemeProvider } from '@material-tailwind/react';
import { useInView, InView } from 'react-intersection-observer';

import AppBar from '@/components/AppBar';
import AboveTheFold from '@/components/AboveTheFold';
import Divider from '@/components/ui/Divider';
import About from '@/components/About';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';

export default function App() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  interface iCustomProps {
    id: string;
    ref: any;
  }

  type KeyAndComponent = [key: string, component: () => React.JSX.Element];

  const sections: KeyAndComponent[] = [
    ['HOME', AboveTheFold],
    ['ABOUT', About],
    ['RESUME', Resume],
    ['CONTACT', Contact],
  ];

  // State to track current active section
  const [visibleSection, setVisibleSection] = React.useState(sections[0][0]);

  // callback called when a section is in view
  const setInView = (inView: boolean, entry: IntersectionObserverEntry) => {
    if (inView && entry && entry.target) {
      const id = entry.target.getAttribute('id');
      if (id) setVisibleSection(id);
    }
  };

  return (
    <ThemeProvider>
      <main
        className='w-full p-4 lg:p-8 flex flex-col items-center overflow-auto'
        ref={ref}
      >
        <AppBar visibleSection={visibleSection} />
        {sections.map(([key, Component], idx) => (
          <InView onChange={setInView} threshold={0.3} key={key}>
            {({ ref }) => {
              return (
                <div
                  id={key}
                  ref={ref}
                  className='w-full flex flex-col justify-center items-center'
                >
                  {idx > 0 ? <Divider /> : ''}
                  <Component />
                </div>
              );
            }}
          </InView>
        ))}
      </main>
    </ThemeProvider>
  );
}
