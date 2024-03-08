'use client';

import { create } from 'zustand';
import { combine } from 'zustand/middleware';

interface State {
  scrollingActive: boolean;
  scrolledToTop: boolean;
  mouseOverAppbar: boolean;
}

interface Actions {
  setScrollActive: () => void;
  setScrollInactive: () => void;
  setScrollTop: (atTop: boolean) => void;
  setMouseOverAppbar: (overAppbar: boolean) => void;
}

const useEventStore = create(
  combine<State, Actions>(
    { scrollingActive: false, scrolledToTop: true, mouseOverAppbar: false },
    set => ({
      setScrollActive: () => set(() => ({ scrollingActive: true })),
      setScrollInactive: () => set(() => ({ scrollingActive: false })),
      setScrollTop: (atTop: boolean) => set(() => ({ scrolledToTop: atTop })),
      setMouseOverAppbar: (overAppbar: boolean) =>
        set(() => ({ mouseOverAppbar: overAppbar })),
    })
  )
);

export type EventState = State & Actions;

export default useEventStore;
