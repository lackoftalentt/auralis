import { create } from 'zustand'

interface ISearchStore {
    globalSearchQuery: string
    trackSearchQuery: string
    debouncedSearchQuery: string

    setGlobalSearchQuery: (query: string) => void
    setTrackSearchQuery: (query: string) => void
    setDebouncedSearchQuery: (query: string) => void
}

export const useSearchStore = create<ISearchStore>(set => ({
    globalSearchQuery: '',
    trackSearchQuery: '',
    debouncedSearchQuery: '',
    setGlobalSearchQuery: query => set({ globalSearchQuery: query }),
    setTrackSearchQuery: query => set({ trackSearchQuery: query }),
    setDebouncedSearchQuery: query => set({ debouncedSearchQuery: query })
}))
