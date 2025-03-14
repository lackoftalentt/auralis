'use client'
import Image from 'next/image'
import { Track } from '@/app/types/deezer'
import { BsExplicitFill, BsHeart, BsHeartFill } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { BiDotsHorizontal } from 'react-icons/bi'
import { usePlayerStore } from '@/app/store/playerStore'
import Link from 'next/link'
import { useCallback } from 'react'

interface TrackListProps {
    tracks: Track[]
}

export const TrackList: React.FC<TrackListProps> = ({ tracks }) => {
    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    }

    const { setTrack, currentTrack } = usePlayerStore()

    const trackHandler = useCallback(
        (track: Track) => (event: React.MouseEvent<HTMLDivElement>) => {
            event.stopPropagation()
            setTrack(track)
        },
        [setTrack]
    )

    return (
        <div className="w-full">
            {tracks.map(track => {
                return (
                    <motion.div
                        key={track.id}
                        onClick={trackHandler(track)}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        whileHover={{ scale: 1.02 }}
                        className={`flex items-center w-full p-2 hover:bg-[rgb(24,24,24)] transition-colors rounded-lg ${
                            currentTrack?.id === track.id
                                ? 'bg-[rgb(30,30,30)]'
                                : ''
                        }`}>
                        <div className="flex items-center gap-3 w-2/5">
                            <Image
                                src={track.album.cover_small}
                                alt={track.title}
                                width={56}
                                height={56}
                                className="rounded-md"
                            />
                            <div className="flex flex-col">
                                <h3 className="text-lg font-semibold">
                                    {track.title}
                                </h3>
                                <div className="flex items-center gap-1 text-gray-400">
                                    {track.explicit_lyrics && (
                                        <BsExplicitFill />
                                    )}
                                    <Link
                                        href={`/artist/${track.artist.id}`}
                                        className="cursor-pointer hover:underline"
                                        onClick={e => e.stopPropagation()} // Чтобы не срабатывал onClick родителя
                                    >
                                        {track.artist.name}
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link
                            href={`/album/${track.album.id}`}
                            className="w-1/4 text-gray-400 cursor-pointer hover:underline"
                            onClick={e => e.stopPropagation()}>
                            {track.album.title}
                        </Link>

                        <div className="flex items-center gap-4 w-1/4 justify-end">
                            {/* {isFav ? (
                                <BsHeartFill
                                    className="text-red-500 cursor-pointer"
                                    onClick={e => {
                                        e.stopPropagation()
                                        toggleFavorite(track)
                                    }}
                                />
                            ) : (
                                <BsHeart
                                    className="cursor-pointer"
                                    onClick={e => {
                                        e.stopPropagation()
                                        toggleFavorite(track)
                                    }}
                                />
                            )} */}
                            <BiDotsHorizontal
                                className="cursor-pointer"
                                size={24}
                                onClick={e => e.stopPropagation()}
                            />
                            <p className="text-gray-400">
                                {formatTime(track.duration)}
                            </p>
                        </div>
                    </motion.div>
                )
            })}
        </div>
    )
}
