'use client'
import { Playlist } from '@/entities/Playlist'
import { PlaylistCard } from '@/entities/PlaylistCard'

import { useDeezerQuery } from '@/services/apiDeezer'
import { ArtistCard } from '@/entities/ArtistCard'

export default function Home() {
    const {
        data: playlists,
        isLoading: playlistsLoading,
        error: playlistsError
    } = useDeezerQuery('playlists')
    const {
        data: artists,
        isLoading: artistsLoading,
        error: artistsError
    } = useDeezerQuery('artists')
    console.log(playlists)
    return (
        <main>
            <div className="mb-[40px]">
                <h2 className="font-bold text-4xl mb-5">Good Morning</h2>
                <div className="grid grid-cols-4 gap-5">
                    <Playlist />
                </div>
            </div>
            <div className="mb-10">
                <h2 className="font-bold text-4xl mb-5">Featured Playlists</h2>
                <div className="grid grid-cols-5 gap-10">
                    {playlists?.data?.map(playlist => (
                        <PlaylistCard
                            key={playlist.id}
                            img={playlist.picture_medium}
                            title={playlist.title}
                            nb_tracks={playlist.nb_tracks}
                        />
                    ))}
                </div>
            </div>
            <div className="mb-10">
                <h2 className="font-bold text-4xl mb-5">Top Artists</h2>
                <div className="grid grid-cols-5 gap-10">
                    {artists?.data?.map(artist => (
                        <ArtistCard
                            key={artist.id}
                            name={artist.name}
                            img={artist.picture_medium}
                            nb_fans={artist.id}
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}
