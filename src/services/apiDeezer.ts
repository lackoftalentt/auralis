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

const fetchDeezerData = async <T>(type: DeezerType): Promise<T> => {
    const { data } = await axios.get<T>(`/api/deezer/charts/${type}`)
    return data
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

const fetchArtist = async (id: string) => {
    const { data } = await axios.get(`/api/deezer/artist/${id}`)
    return data
}

export const useArtistQuery = (id: string) => {
    return useQuery({
        queryKey: ['artist', id],
        queryFn: () => fetchArtist(id),
        enabled: !!id,
        staleTime: 1000 * 60 * 5
    })
}

const fetchArtistTrackList = async (tracklistUrl: string) => {
    const { data } = await axios.get(
        `/api/deezer/artist/tracklist?tracklist=${encodeURIComponent(
            tracklistUrl
        )}`
    )
    return data
}

export const useFetchArtistTrackList = (tracklistUrl?: string) => {
    return useQuery({
        queryKey: ['tracklist', tracklistUrl],
        queryFn: () =>
            tracklistUrl
                ? fetchArtistTrackList(tracklistUrl)
                : Promise.resolve(null),
        enabled: !!tracklistUrl,
        staleTime: 1000 * 60 * 5
    })
}

const fetchPlaylistById = async (id: string) => {
    const { data } = await axios.get(`/api/deezer/playlist/${id}`)
    return data
}

export const useFetchPlaylistById = (id: string) => {
    return useQuery({
        queryKey: ['playlist', id],
        queryFn: () => fetchPlaylistById(id),
        enabled: !!id,
        staleTime: 1000 * 60 * 5
    })
}
