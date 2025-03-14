import { create } from 'zustand'
import { Track } from '../types/deezer'

interface PlayerState {
    trackList: Track[]
    queue: Track[]
    currentTrack: Track | null
    currentIndex: number
    duration: number
    currentTime: number
    isPlaying: boolean
    isShuffled: boolean
    repeatMode: 'off' | 'one' | 'all'
    progress: number
    setTrack: (track: Track) => void
    togglePlay: () => void
    nextTrack: () => void
    prevTrack: () => void
    toggleShuffle: () => void
    toggleRepeat: () => void
    setCurrentIndex: (index: number) => void
    setCurrentTime: (time: number) => void
    setDuration: (time: number) => void
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
    trackList: [],
    queue: [],
    currentTrack: null,
    currentIndex: 0,
    isPlaying: false,
    isShuffled: false,
    progress: 0,
    duration: 0,
    currentTime: 0,
    repeatMode: 'off',
    setCurrentIndex: (index: number) => set({ currentIndex: index }),
    setTrack: track => set({ currentTrack: track, isPlaying: true }),
    togglePlay: () => set(state => ({ isPlaying: !state.isPlaying })),
    nextTrack: () => {
        const { queue, currentIndex, repeatMode } = get()
        let newIndex = currentIndex + 1

        if (newIndex >= queue.length) {
            if (repeatMode === 'all') {
                newIndex = 0
            } else {
                return
            }
        }
        set({ currentIndex: newIndex })
    },
    prevTrack: () => {
        set(state => ({
            currentIndex: state.currentIndex > 0 ? state.currentIndex - 1 : 0
        }))
    },
    toggleShuffle: () => {
        set(state => {
            if (!state.isShuffled) {
                const shuffledQueue = [...state.trackList].sort(
                    () => Math.random() - 0.5
                )
                return { isShuffled: true, queue: shuffledQueue }
            } else {
                return { isShuffled: false, queue: [...state.trackList] }
            }
        })
    },
    toggleRepeat: () => {
        set(state => ({
            repeatMode:
                state.repeatMode === 'off'
                    ? 'one'
                    : state.repeatMode === 'one'
                    ? 'all'
                    : 'off'
        }))
    },
    setCurrentTime: time => set({ currentTime: time }),
    setDuration: time => set({ duration: time })
}))
