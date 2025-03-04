'use client'
import { Playlist } from '@/entities/Playlist'

import { useDeezerQuery } from '@/services/apiDeezer'
import { ArtistCard } from '@/entities/ArtistCard'
import { CarouselSection } from '@/widgets/Carousel'
import { PlaylistCard } from '@/entities/PlaylistCard'
import { TrackPreview } from '@/entities/TrackPreview'

export default function Home() {
    const {
        data: tracks,
        isLoading: tracksLoading,
        error: tracksError
    } = useDeezerQuery('tracks')

    console.log(tracks)

    const {
        data: artists,
        isLoading: artistsLoading,
        error: artistsError
    } = useDeezerQuery('artists')

    const {
        data: playlists,
        isLoading: playlistsLoading,
        error: playlistsError
    } = useDeezerQuery('playlists')

    return (
        <main>
            <div className="mb-[40px]">
                <h2 className="font-bold text-4xl mb-5">Good Morning</h2>
                <div className="grid grid-cols-4 gap-5">
                    <Playlist />
                </div>
            </div>

            <div className="mb-[40px]">
                <h2 className="font-bold text-4xl mb-5">Chart Tracks</h2>
                <div className="grid grid-cols-3 gap-3">
                    {tracks?.data.map(track => (
                        <TrackPreview
                            key={track.id}
                            title={track.title}
                            img={track.album.cover_small}
                            author={track.artist.name}
                            isExpilit={track.expilit_lyrics}
                        />
                    ))}
                </div>
            </div>

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

            <div>stopapupa</div>
        </main>
    )
}
