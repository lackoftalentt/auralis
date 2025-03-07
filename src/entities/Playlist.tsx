import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

import heart from '../../public/assets/heart.svg'

export const Playlist = () => {
    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            whileHover={{ scale: 1.1 }}
            className="flex bg-[rgb(48,48,48)] rounded-md items-center cursor-pointer">
            <Image
                src={heart}
                alt="sex"
                className="w-[80px] h-[80px]"
            />
            <p className="font-bold text-lg ml-5">morning in heaven</p>
        </motion.div>
    )
}
