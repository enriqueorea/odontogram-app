import { create } from "zustand";

export interface UiStore {
  isSidebarOpen: boolean;
  isCapturing: boolean;
  toggleCapturing: () => void;
  toggleSidebar: () => void;
}

export const useUiStore = create<UiStore>((set) => ({
  isSidebarOpen: false,
  isCapturing: false,
  toggleCapturing: () => set((state) => ({ isCapturing: !state.isCapturing })),
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));
