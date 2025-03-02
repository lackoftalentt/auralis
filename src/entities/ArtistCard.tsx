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
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            whileHover={{
                scale: 1.05,
                boxShadow: '0px 10px 20px rgba(0,0,0,0.3)'
            }}
            className="rounded-full w-[200px] h-[200px] transition-all duration-100">
            <Image
                className="rounded-full"
                width={200}
                height={200}
                src={img}
                alt={`${name} img`}
            />
            <div className="text-center mt-3">
                <h3 className="font-semibold text-lg text-white">{name}</h3>
                <p className="font-medium text-sm text-gray-400">
                    {nb_fans.toLocaleString()} fans
                </p>
            </div>
        </motion.div>
    )
}
