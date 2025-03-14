'use client'

import { useSearchStore } from '@/app/store/searchStore'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { FaSearch } from 'react-icons/fa'
import { useDebounce } from 'use-debounce'

export const SearchBar = () => {
    const { globalSearchQuery, setGlobalSearchQuery, setDebouncedSearchQuery } =
        useSearchStore()
    const router = useRouter()

    const [debouncedValue] = useDebounce(globalSearchQuery, 500)

    useEffect(() => {
        if (globalSearchQuery !== debouncedValue) {
            setDebouncedSearchQuery(debouncedValue)
        }
        if (debouncedValue.trim()) {
            router.push(`/search?q=${encodeURIComponent(debouncedValue)}`)
        }
        setGlobalSearchQuery('')
    }, [debouncedValue, router, setDebouncedSearchQuery])

    return (
        <form className="flex items-center bg-white rounded-full px-4 py-2 w-[450px] h-[50px] gap-4">
            <FaSearch className="text-gray-500" />
            <input
                value={globalSearchQuery}
                onChange={e => setGlobalSearchQuery(e.target.value)}
                className="focus:outline-none font-semibold text-black w-full"
                placeholder="What do you want to include?"
            />
        </form>
    )
}
