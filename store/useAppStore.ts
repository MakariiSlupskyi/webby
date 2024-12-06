import { create } from 'zustand';
import { App } from '@/types/app';

interface AppStore {
  app: App
  curService: number
  chooseService: (id: number) => void
  load: (id: number) => void
  save: () => void
}

export const useAppStore = create<AppStore>((set) => ({
  app: {
    name: 'Test',
    services: [
      {
        type: 'front',
        name: 'mobile app',
        content: {
          pages: [
            {
              title: 'Home',
              ui: {}
            },
            {
              title: 'Post',
              ui: {}
            }
          ]
        }
      },
      {
        type: 'database',
        name: 'database',
        content: {
          api: {

          },
          tables: []
        }
      }
    ],
    designSystem: {
      colors: 0,
      style: 0
    },
  },
  curService: -1,
  chooseService: (id: number) => set({ curService: id }),
  load: (id: number) => { },
  save: () => { },
}));
