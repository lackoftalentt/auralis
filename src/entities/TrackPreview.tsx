import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

import { BsExplicitFill } from 'react-icons/bs'
import Link from 'next/link'
import { Track } from '@/app/types/deezer'

import { usePlayerStore } from '@/app/store/playerStore'

interface TrackPreviewProps {
    track: Track
}

export const TrackPreview = ({ track }: TrackPreviewProps) => {
    const { setCurrentIndex, setTrack, queue } = usePlayerStore()

    const trackHandler = () => {
        const trackIndex = queue.findIndex(t => t.id === track.id)

        if (trackIndex !== -1) {
            setCurrentIndex(trackIndex)
        }

        setTrack(track)
    }

    return (
        <motion.div
            onClick={trackHandler}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            whileHover={{ scale: 1.1 }}
            className="w-[400px] h-[60px] bg-[rgb(24,24,24)] flex items-center gap-4 rounded-md whitespace-nowrap overflow-hidden overflow-ellipsis cursor-pointer">
            {track.album.cover_small && (
                <Link href={`/album/${track.album.id}`}>
                    <Image
                        className="rounded-md"
                        width={56}
                        height={56}
                        src={track.album.cover_small}
                        alt={track.title || 'Track image'}
                    />
                </Link>
            )}
            <div>
                <div className="flex items-center gap-2">
                    <h3>{track.title}</h3>
                    {track.explicit_lyrics && <BsExplicitFill />}
                </div>
                <div className="flex gap-1">
                    <span className="opacity-55">by</span>
                    <Link
                        href={`/artist/${track.artist.id}`}
                        className="opacity-55 hover:underline">
                        {track.artist.name}
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}
