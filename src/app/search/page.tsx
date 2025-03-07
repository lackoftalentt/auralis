'use client'

import { useSearchParams } from 'next/navigation'
import React from 'react'
import { SearchResults } from './SearchResults'

export default function SearchPage() {
    const searchParams = useSearchParams()
    const query = searchParams.get('q')
    return (
        <div>
            <h1 className="font-bold text-4xl mb-5">
                Search Results for "{query}"
            </h1>
            <SearchResults query={query || ''} />
        </div>
    )
}
