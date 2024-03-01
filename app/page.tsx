'use client';

import React, { useRef, useState, useEffect } from 'react';
import { ThemeProvider } from '@material-tailwind/react';
import AppBar from '@/components/AppBar';
import AboveTheFold from '@/components/AboveTheFold';
import Divider from '@/components/ui/Divider';
import About from '@/components/About';
import Resume from '@/components/Resume';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { useEventStore } from '@/store/useEventStore';
import { unstable_batchedUpdates } from 'react-dom';
import { useDebouncedCallback } from 'use-debounce';
import { throttle } from '@/lib/utils';

type KeyAndComponent = [key: string, component: () => React.JSX.Element];

const sections: KeyAndComponent[] = [
  ['HOME', AboveTheFold],
  ['ABOUT', About],
  ['RESUME', Resume],
  ['PROJECTS', Projects],
  ['CONTACT', Contact],
];

export default function App() {
  const scrolledToTop = useEventStore(state => state.scrolledToTop);
  const setScrollActive = useEventStore(state => state.setScrollActive);
  const setScrollInactive = useEventStore(state => state.setScrollInactive);
  const setScrollTop = useEventStore(state => state.setScrollTop);
  const setMouseOverAppbar = useEventStore(state => state.setMouseOverAppbar);

  type TimeoutState = NodeJS.Timeout | null;

  let timeoutRef = useRef<TimeoutState>(null);

  const handleScroll = useDebouncedCallback(
    () => {
      setScrollActive();
    },
    300,
    { leading: true }
  );

  const handleEndScroll = useDebouncedCallback(
    ({ current }) => {
      clearTimeout(current);

      const windowAtTop = window.scrollY === 0;
      if (windowAtTop !== scrolledToTop) setScrollTop(windowAtTop);

      const id = setTimeout(() => {
        setScrollInactive();
        timeoutRef.current = null;
      }, 500);

      timeoutRef.current = id;
    },
    500,
    { leading: true }
  );

  const handleMouseMove = (e: MouseEvent) => {
    // stabilizes child component updates
    unstable_batchedUpdates(
      throttle(() => {
        e.preventDefault();
        if (typeof e.clientY === 'number') {
          const mouseOverAppbar = useEventStore.getState().mouseOverAppbar;
          let overAppbar = e.clientY < 80;
          if (mouseOverAppbar !== overAppbar) setMouseOverAppbar(overAppbar);
        }
      })
    );
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    document.addEventListener('scrollend', () => handleEndScroll(timeoutRef));
    document.addEventListener('touchmove', handleScroll);
    document.addEventListener('touchend', () => handleEndScroll(timeoutRef));
    document.addEventListener('mousemove', (e: MouseEvent) =>
      handleMouseMove(e)
    );
    return () => {
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scrollend', () =>
        handleEndScroll(timeoutRef)
      );
      document.removeEventListener('touchmove', handleScroll);
      document.removeEventListener('touchend', () =>
        handleEndScroll(timeoutRef)
      );
      document.removeEventListener('mousemove', (e: MouseEvent) =>
        handleMouseMove(e)
      );
    };
  }, []);

  return (
    <ThemeProvider>
      <main
        className='relative w-full px-4 lg:px-8 flex flex-col items-center overflow-auto'
        onScroll={handleScroll}
      >
        {/* AppBar requires an array of section keys only */}
        <AppBar sections={sections.map(([key]) => key)} />
        {sections.map(([id, Component], idx) => (
          <div
            id={id}
            key={`${id}_${idx}`}
            className='relative flex flex-col items-center w-full'
          >
            {idx > 0 ? <Divider /> : ''}
            <Component />
          </div>
        ))}
      </main>
    </ThemeProvider>
  );
}
