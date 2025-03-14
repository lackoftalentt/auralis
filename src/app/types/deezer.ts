export interface Playlist {
    id: number
    title: string
    picture: string
    picture_medium: string
    nb_tracks: number
}

export interface PlaylistsResponse {
    data: Playlist[]
    total: number
}

export interface Track {
    id: number
    url: string
    title: string
    duration: number
    image: string
    preview: string
    explicit_lyrics: boolean
    readable: boolean
    artist: {
        id: number
        name: string
        picture_medium: string
    }
    album: {
        id: number
        title: string
        cover_small: string
    }
}

export interface TracksResponse {
    data: Track[]
    total: number
}

export interface Artist {
    id: number
    name: string
    picture_medium: string
    nb_album: number
    nb_fan: number
}

export interface ArtistsResponse {
    data: Artist[]
    total: number
}

export interface Album {
    id: number
    title: string
    cover_medium: string
    tracklist: string
    artist: {
        id: number
        name: string
    }
}

export interface AlbumsResponse {
    data: Album[]
    total: number
}
