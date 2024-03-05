'use client';

import create from 'zustand';
import { combine } from 'zustand/middleware';

interface State {
  width: number;
  height: number;
}

interface Actions {
  setWidth: (newWidth: number) => void;
  setHeight: (newHeight: number) => void;
}

const useWindowStore = create(
  combine({ width: 1200, height: 800 }, set => ({
    setWidth: (newWidth: number) => set(() => ({ width: newWidth })),
    setHeight: (newHeight: number) => set(() => ({ height: newHeight })),
  }))
);

export type WindowState = State & Actions;

export default useWindowStore;
