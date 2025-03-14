'use client'

import { useSearchStore } from '@/app/store/searchStore'
import { Track } from '@/app/types/deezer'
import { TrackList } from '@/entities/TrackList'
import { useFetchAlbumById } from '@/services/apiDeezer'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'
import { BiHeart, BiPlay } from 'react-icons/bi'
import { FaSearch } from 'react-icons/fa'

export default function AlbumPage() {
    const { id } = useParams()
    const { data: album, isLoading, error } = useFetchAlbumById(id as string)
    console.log(album)

    const { trackSearchQuery, setTrackSearchQuery } = useSearchStore()

    const filteredTracks =
        album?.tracks?.data?.filter((track: Track) =>
            track.title.toLowerCase().includes(trackSearchQuery.toLowerCase())
        ) || []

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    }

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error loading album</p>

    console.log(album)

    return (
        <main>
            <div className="flex items-center gap-8 mb-[40px]">
                {album?.cover_big && (
                    <Image
                        src={album.cover_big}
                        width={360}
                        height={360}
                        alt={album?.title || 'Album'}
                    />
                )}
                <div>
                    <h2 className="font-bold text-8xl mb-5">{album?.title}</h2>
                    <div className="">
                        <span className="font-semibold text-xl opacity-75 ">
                            author{'  '}
                            <Link
                                href={`/artist/${album?.artist?.id}`}
                                className="hover:underline">
                                {album?.artist?.name}
                            </Link>
                        </span>
                        <h4 className="font-semibold text-xl opacity-75">
                            {album?.nb_tracks} tracks
                        </h4>
                        <h4 className="font-semibold text-xl opacity-75">
                            Duration:{' '}
                            {album?.duration
                                ? formatTime(album.duration)
                                : 'Unknown'}
                        </h4>
                        <h4 className="font-semibold text-xl opacity-75">
                            {album?.fans?.toLocaleString() || 0} liked
                        </h4>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-between items-center">
                    <h2 className="font-bold text-5xl mb-5">Tracks</h2>
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
