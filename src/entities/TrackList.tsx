'use client'
import Image from 'next/image'
import { Track } from '@/app/types/deezer'
import { BsExplicitFill, BsHeart, BsHeartFill } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { BiDotsHorizontal } from 'react-icons/bi'
import Link from 'next/link'

interface TrackListProps {
    tracks: Track[]
}

export const TrackList: React.FC<TrackListProps> = ({ tracks }) => {
    const formatDuration = (seconds: number) => {
        const min = Math.floor(seconds / 60)
        const sec = seconds % 60
        return `${min}:${sec.toString().padStart(2, '0')}`
    }

    const isFav = false
    return (
        <div className="w-full">
            {tracks.map(track => (
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    whileHover={{ scale: 1.02 }}
                    key={track.id}
                    className="flex items-center w-full p-2 hover:bg-[rgb(24,24,24)] transition-colors rounded-lg">
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
                                {track.explicit_lyrics && <BsExplicitFill />}
                                <Link
                                    href={`/artist/${track.artist.id}`}
                                    className="cursor-pointer hover:underline">
                                    {track.artist.name}
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Link
                        href={`/album/${track.album.id}`}
                        className="w-1/4 text-gray-400 cursor-pointer hover:underline">
                        {track.album.title}
                    </Link>

                    <div className="flex items-center gap-4 w-1/4 justify-end">
                        {isFav ? (
                            <BsHeartFill className="text-red-500 cursor-pointer" />
                        ) : (
                            <BsHeart className="cursor-pointer" />
                        )}
                        <BiDotsHorizontal
                            className="cursor-pointer"
                            size={24}
                        />
                        <p className="text-gray-400">
                            {formatDuration(track.duration)}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}
