import { TrackList } from '@/entities/TrackList'
import { useSearchQuery } from '@/services/apiDeezer'
import React from 'react'

interface SearchResults {
    query: string
}

export const SearchResults = ({ query }: SearchResults) => {
    const { data, isLoading, error } = useSearchQuery(query)

    console.log(data)

    if (isLoading) return <p>Загрузка...</p>
    if (error) return <p>Ошибка загрузки</p>
    return (
        <div>
            {isLoading ? (
                <p className="text-white mt-4">Загрузка...</p>
            ) : (
                data?.data && <TrackList tracks={data.data} />
            )}
        </div>
    )
}
