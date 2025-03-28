'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import { useArtistQuery, useFetchArtistTrackList } from '@/services/apiDeezer'
import { TrackList } from '@/entities/TrackList'
import { FaSearch } from 'react-icons/fa'
import { BiHeart, BiPlay } from 'react-icons/bi'
import { Track } from '@/app/types/deezer'
import { useSearchStore } from '@/app/store/searchStore'

export default function ArtistPage() {
    const { id } = useParams()
    const artistId = Array.isArray(id) ? id[0] : id || ''

    const { data: artist, isLoading, error } = useArtistQuery(artistId)

    const tracklistUrl = artist?.tracklist
    const { data: tracklist } = useFetchArtistTrackList(tracklistUrl)

    const { trackSearchQuery, setTrackSearchQuery } = useSearchStore()

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error loading artist</p>

    const filteredTracks =
        tracklist?.data?.filter((track: Track) =>
            track.title.toLowerCase().includes(trackSearchQuery.toLowerCase())
        ) || []

    return (
        <main>
            <div className="flex items-center gap-8 mb-[40px]">
                {artist?.picture_big && (
                    <Image
                        src={artist?.picture_big}
                        width={360}
                        height={360}
                        className="rounded-full"
                        alt={artist?.name || 'Artist'}
                    />
                )}

                <div>
                    <h2 className="font-bold text-8xl mb-5">{artist?.name}</h2>
                    <h4 className="font-semibold text-xl opacity-75">
                        {artist?.nb_fan.toLocaleString()} fans
                    </h4>
                    <h4 className="font-semibold text-xl opacity-75">
                        {artist?.nb_album} albums
                    </h4>
                </div>
            </div>
            <div>
                <div className="flex justify-between items-center">
                    <h2 className="font-bold text-5xl mb-5">Top tracks</h2>
                    <div className="flex items-center gap-4">
                        <BiPlay
                            size={54}
                            className="cursor-pointer"
                        />
                        <BiHeart
                            size={40}
                            className="cursor-pointer"
                        />
                        <form className="flex items-center bg-white rounded-full px-4 py-2 w-[450px] h-[50px] gap-4 ml-2">
                            <FaSearch className="text-gray-500" />
                            <input
                                value={trackSearchQuery}
                                onChange={e =>
                                    setTrackSearchQuery(e.target.value)
                                }
                                className="focus:outline-none font-semibold text-black w-full"
                                placeholder="Search within tracks"
                            />
                        </form>
                    </div>
                </div>
                <TrackList tracks={filteredTracks} />
            </div>
        </main>
    )
}
