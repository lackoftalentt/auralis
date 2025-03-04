import Image from 'next/image'
import React from 'react'
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
        <div className="w-[400px] h-[60px] bg-[rgb(24,24,24)] flex items-center gap-4 cursor-pointer rounded-md">
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
        </div>
    )
}
