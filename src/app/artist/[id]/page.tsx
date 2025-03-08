'use client'

import Image from 'next/image'
import React from 'react'
import { useParams } from 'next/navigation'
import { useArtistQuery } from '@/services/apiDeezer'

export default function ArtistPage() {
    const { id } = useParams()
    const artistId = Array.isArray(id) ? id[0] : id || ''

    const { data, isLoading, error } = useArtistQuery(artistId)

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error loading artist</p>

    return (
        <main>
            <div className="flex items-center gap-8">
                <Image
                    src={data?.picture_big || '/default-artist.jpg'}
                    width={240}
                    height={240}
                    className="rounded-full"
                    alt={data?.name || 'Artist'}
                />
                <div>
                    <h2 className="font-bold text-8xl mb-5">{data?.name}</h2>
                    <h4 className="font-semibold text-xl opacity-75">
                        {data?.nb_fan.toLocaleString()} fans
                    </h4>
                    <h4 className="font-semibold text-xl opacity-75">
                        {data?.nb_album} albums
                    </h4>
                </div>
            </div>
        </main>
    )
}
