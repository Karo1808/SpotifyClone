import { create } from "zustand";

interface PlayerStore {
  urls: string[];
  activeUrl?: string;
  setUrl: (id: string) => void;
  setUrls: (ids: string[]) => void;
  reset: () => void;
}

const usePlayer = create<PlayerStore>((set) => ({
  urls: [],
  activeUrl: undefined,
  setUrl: (url: string) => set({ activeUrl: url }),
  setUrls: (urls: string[]) => set({ urls: urls }),
  reset: () => set({ urls: [], activeUrl: undefined }),
}));

export default usePlayer;
