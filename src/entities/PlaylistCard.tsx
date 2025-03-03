'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import React from 'react'

interface PlaylistCardProps {
    img: string
    title: string
    nb_tracks: number
}

export const PlaylistCard = ({ img, title, nb_tracks }: PlaylistCardProps) => {
    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            whileHover={{
                scale: 1.05,
                boxShadow: '0px 10px 20px rgba(0,0,0,0.3)'
            }}
            className="bg-[rgb(24,24,24)] w-[230px] h-[280px] px-6 py-5 rounded-xl cursor-pointer
            transition-all duration-100">
            <Image
                src={img}
                alt="Playlist Cover"
                width={190}
                height={190}
                className="w-[190px] h-[190px] rounded-xl mb-3"
            />
            <h3 className="font-semibold text-lg text-white break-words">
                {title}
            </h3>
            <p className="font-medium text-sm text-gray-400">
                {nb_tracks} tracks
            </p>
        </motion.div>
    )
}
