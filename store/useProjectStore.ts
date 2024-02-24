import { create } from 'zustand';
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
  toggleVisible: () => void;
  updateActive: (idx: number) => void;
}

const INITIAL_STATE: State = {
  visible: false,
  activeIdx: 0,
  project: projects[0],
  markdown: 'loading project info...',
};

export const useProjectStore = create<State & Actions>((set, get) => ({
  visible: INITIAL_STATE.visible,
  activeIdx: INITIAL_STATE.activeIdx,
  project: INITIAL_STATE.project,
  markdown: INITIAL_STATE.markdown,
  toggleVisible: () => {
    set({ visible: !get().visible });
  },
  updateActive: async idx => {
    try {
      const path = projects[idx].path;
      const mdPath = '/markdowns/' + path + '.md';
      const doc = await fetch(mdPath);
      const text = await doc.text();
      set({ activeIdx: idx, project: projects[idx], markdown: text });
    } catch (e) {
      console.log(getErrorMessage(e));
    }
  },
}));
