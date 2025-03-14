'use client'

import { DM_Sans } from 'next/font/google'
import './shared/styles/globals.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { SideBar } from '@/widgets/SideBar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { SearchBar } from '@/widgets/SearchBar'
import { PlayerBar } from '@/widgets/PlayerBar'
import { usePlayerStore } from './store/playerStore'

const dmSans = DM_Sans({
    variable: '--font-dm-sans',
    subsets: ['latin']
})

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    const [queryClient] = useState(() => new QueryClient())
    const { currentTrack } = usePlayerStore()

    return (
        <html lang="en">
            <head>
                <title>Auralis</title>
            </head>
            <body className={`${dmSans.variable} antialiased h-screen flex`}>
                <SideBar />
                <div className="w-[1280px] mx-auto pl-14">
                    <div className="flex gap-4 items-center page-header mt-5 mb-[40px]">
                        <div className="flex gap-4 ">
                            <span className="flex items-center justify-center w-[40px] h-[40px] bg-[rgb(19,19,19)] rounded-full hover:opacity-100 opacity-50 transition-colors  cursor-pointer">
                                <FaAngleLeft size={20} />
                            </span>
                            <span className="flex items-center justify-center w-[40px] h-[40px] bg-[rgb(19,19,19)] rounded-full hover:opacity-100 opacity-50 transition-colors cursor-pointer">
                                <FaAngleRight size={20} />
                            </span>
                        </div>

                        <SearchBar />
                    </div>
                    {currentTrack && <PlayerBar />}

                    <QueryClientProvider client={queryClient}>
                        {children}
                    </QueryClientProvider>
                </div>
            </body>
        </html>
    )
}
