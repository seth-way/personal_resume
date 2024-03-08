'use client';

import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import { Project } from '@/lib/types';
import { getErrorMessage } from '@/lib/utils';

import data from '@/public/resumeData.json';
const { projects } = data.portfolio;

interface State {
  visible: boolean;
  activeIdx: number;
  project: Project;
  markdown: string;
}

interface Actions {
  setVisible: (status: boolean) => void;
  updateActive: (idx: number) => void;
}

const INITIAL_STATE: State = {
  visible: false,
  activeIdx: 0,
  project: projects[0],
  markdown: 'loading project info...',
};

const useProjectStore = create(
  combine<State, Actions>(
    {
      visible: INITIAL_STATE.visible,
      activeIdx: INITIAL_STATE.activeIdx,
      project: INITIAL_STATE.project,
      markdown: INITIAL_STATE.markdown,
    },
    (set, get) => ({
      setVisible: (status: boolean) => {
        set(state => ({ ...state, visible: status }));
      },
      updateActive: async (idx: number) => {
        try {
          const path = projects[idx].path;
          const mdPath = '/markdowns/' + path + '.md';
          const doc = await fetch(mdPath);
          set({
            activeIdx: idx,
            project: projects[idx],
            markdown: await doc.text(),
          });
        } catch (e) {
          console.log(getErrorMessage(e));
          set({ ...get() });
        }
      },
    })
  )
);

export type ProjectState = State & Actions;

export default useProjectStore;
