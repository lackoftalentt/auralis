import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import {
    PlaylistsResponse,
    TracksResponse,
    ArtistsResponse,
    AlbumsResponse
} from '@/app/types/deezer'

type DeezerType = 'playlists' | 'tracks' | 'artists' | 'albums'

const responseTypes = {
    playlists: {} as PlaylistsResponse,
    tracks: {} as TracksResponse,
    artists: {} as ArtistsResponse,
    albums: {} as AlbumsResponse
}

const fetchDeezerData = async <T>(type: string): Promise<T> => {
    const res = await fetch(`/api/deezer/${type}`)
    if (!res.ok) throw new Error('Failed to fetch')
    return res.json()
}

export const useDeezerQuery = <T extends DeezerType>(type: T) => {
    return useQuery<(typeof responseTypes)[T]>({
        queryKey: ['deezer', type],
        queryFn: () => fetchDeezerData<(typeof responseTypes)[T]>(type)
    })
}

const fetchSearchResults = async (query: string) => {
    if (!query.trim()) return null
    const { data } = await axios.get(
        `/api/deezer/search?q=${encodeURIComponent(query)}`
    )
    return data
}

export const useSearchQuery = (query: string) => {
    return useQuery({
        queryKey: ['search', query],
        queryFn: () => fetchSearchResults(query),
        enabled: !!query,
        staleTime: 1000 * 60 * 5
    })
}
