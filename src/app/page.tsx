'use client'
import { Playlist } from '@/entities/Playlist'

import { useDeezerQuery } from '@/services/apiDeezer'
import { ArtistCard } from '@/entities/ArtistCard'
import { CarouselSection } from '@/widgets/Carousel'
import { PlaylistCard } from '@/entities/PlaylistCard'

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

    return (
        <main>
            <div className="mb-[40px]">
                <h2 className="font-bold text-4xl mb-5">Good Morning</h2>
                <div className="grid grid-cols-4 gap-5">
                    <Playlist />
                </div>
            </div>

            <CarouselSection
                title="Featured Playlists"
                items={playlists?.data}
                loading={playlistsLoading}
                error={playlistsError}
                renderItem={playlist => (
                    <PlaylistCard
                        img={playlist.picture_medium}
                        title={playlist.title}
                        nb_tracks={playlist.nb_tracks}
                    />
                )}
            />

            <CarouselSection
                title="Top Artists"
                items={artists?.data}
                loading={artistsLoading}
                error={artistsError}
                renderItem={artist => (
                    <ArtistCard
                        img={artist.picture_medium}
                        name={artist.name}
                        nb_fans={artist.id}
                    />
                )}
            />

            <div>stopapupa</div>
        </main>
    )
}
