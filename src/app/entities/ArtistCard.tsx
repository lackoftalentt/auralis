'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import React from 'react'

interface ArtistCardProps {
    name: string
    img: string
    nb_fans: number
}

export const ArtistCard = ({ name, img, nb_fans }: ArtistCardProps) => {
    return (
        <div className="rounded-full w-[200px] h-[280px] text-center cursor-pointer">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                whileHover={{ scale: 0.9 }}
                className="rounded-full overflow-hidden">
                <Image
                    className="rounded-full"
                    width={200}
                    height={200}
                    src={img}
                    alt={`${name} img`}
                />
            </motion.div>

            <div className="mt-3">
                <h3 className="font-semibold text-lg text-white">{name}</h3>
                <p className="font-medium text-sm text-gray-400">
                    {nb_fans.toLocaleString()} fans
                </p>
            </div>
        </div>
    )
}
