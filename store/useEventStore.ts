'use client';

import { create } from 'zustand';

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

export const useEventStore = create<State & Actions>(set => ({
  scrollingActive: false,
  scrolledToTop: true,
  mouseOverAppbar: false,
  setScrollActive: () => set(() => ({ scrollingActive: true })),
  setScrollInactive: () => set(() => ({ scrollingActive: false })),
  setScrollTop: atTop => set(() => ({ scrolledToTop: atTop })),
  setMouseOverAppbar: overAppbar =>
    set(() => ({ mouseOverAppbar: overAppbar })),
}));
