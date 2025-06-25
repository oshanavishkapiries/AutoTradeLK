import { create } from 'zustand';

type ViewMode = 'grid' | 'list';

interface BrowseState {
  viewMode: ViewMode;
  showFilters: boolean;
  sortOption: string;
  setViewMode: (mode: ViewMode) => void;
  setShowFilters: (value: boolean) => void;
  setSortOption: (option: string) => void;
}

export const useBrowseStore = create<BrowseState>((set) => ({
  viewMode: 'grid',
  showFilters: false,
  sortOption: 'latest',
  setViewMode: (mode) => set({ viewMode: mode }),
  setShowFilters: (value) => set({ showFilters: value }),
  setSortOption: (option) => set({ sortOption: option }),
}));
