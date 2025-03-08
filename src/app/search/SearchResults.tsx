'use client'

import { TrackList } from '@/entities/TrackList'
import { useSearchQuery } from '@/services/apiDeezer'
import React from 'react'

interface SearchResultsProps {
    query: string
}

export const SearchResults = ({ query }: SearchResultsProps) => {
    const { data, isLoading, error } = useSearchQuery(query)

    if (isLoading) return <p>Загрузка...</p>
    if (error) return <p>Ошибка загрузки</p>

    return <div>{data?.data && <TrackList tracks={data.data} />}</div>
}
