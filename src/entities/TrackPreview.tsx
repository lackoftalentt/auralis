import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

import { BsExplicitFill } from 'react-icons/bs'

interface TrackPreviewProps {
    title: string
    img: string
    author: string
    isExpilit: boolean
}

export const TrackPreview = ({
    title,
    img,
    author,
    isExpilit
}: TrackPreviewProps) => {
    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            whileHover={{ scale: 1.1 }}
            className="w-[400px] h-[60px] bg-[rgb(24,24,24)] flex items-center gap-4 rounded-md whitespace-nowrap overflow-hidden overflow-ellipsis">
            {img && (
                <Image
                    className="rounded-md"
                    width={56}
                    height={56}
                    src={img}
                    alt={title || 'Track image'}
                />
            )}
            <div>
                <div className="flex items-center gap-2">
                    <h3>{title}</h3>
                    {isExpilit && <BsExplicitFill />}
                </div>
                <div className="flex gap-1">
                    <span className="opacity-55">by</span>
                    <p className="opacity-55">{author}</p>
                </div>
            </div>
        </motion.div>
    )
}
