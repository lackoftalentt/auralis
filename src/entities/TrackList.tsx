'use-client'
import Image from 'next/image'
import { Track } from '@/app/types/deezer'
import { BsExplicitFill } from 'react-icons/bs'
import { motion } from 'framer-motion'

interface TrackListProps {
    tracks: Track[]
}

export const TrackList: React.FC<TrackListProps> = ({ tracks }) => {
    return (
        <div>
            {tracks.map(track => (
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    whileHover={{ scale: 1.1 }}
                    key={track.id}
                    className="flex justify-between w-full h-[64px] gap-1 p-1 hover:bg-[rgb(24,24,24)] transition-colors rounded-lg">
                    <div className="flex justify-between gap-2">
                        <div className="flex gap-2">
                            <Image
                                src={track.album.cover_small}
                                alt={track.title}
                                width={56}
                                height={56}
                                className="rounded-md"
                            />
                            <div className="flex flex-col ">
                                <h3 className="text-lg font-semibold">
                                    {track.title}
                                </h3>
                                {track.expilit_lyrics && <BsExplicitFill />}
                                <p className="text-gray-400">
                                    {track.artist.name}
                                </p>{' '}
                            </div>
                        </div>
                        <div></div>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}
