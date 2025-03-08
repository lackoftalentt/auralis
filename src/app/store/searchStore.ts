import { create } from 'zustand'

interface ISearchStore {
    value: string
    debouncedValue: string
    setValue: (value: string) => void
    setDebouncedValue: (debouncedValue: string) => void
}

export const useSearchStore = create<ISearchStore>(set => ({
    value: '',
    debouncedValue: '',
    setValue: value => set({ value }),
    setDebouncedValue: debouncedValue => set({ debouncedValue })
}))
