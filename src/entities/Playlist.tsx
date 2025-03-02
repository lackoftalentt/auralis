import Image from 'next/image'
import React from 'react'

import heart from '../../public/assets/heart.svg'

export const Playlist = () => {
    return (
        <div className="flex bg-[rgb(48,48,48)] rounded-md items-center">
            <Image
                src={heart}
                alt="sex"
                className="w-[80px] h-[80px]"
            />
            <p className="font-bold text-lg ml-5">morning in heaven</p>
        </div>
    )
}
