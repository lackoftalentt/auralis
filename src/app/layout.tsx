'use client'

import { DM_Sans } from 'next/font/google'
import './globals.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { SideBar } from '@/widgets/SideBar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { SearchBar } from '@/widgets/SearchBar'

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

    return (
        <html lang="en">
            <head>
                <title>Auralis</title>
                <meta
                    name="description"
                    content="Слушай музыку, открывай новые плейлисты и сохраняй любимые треки!"
                />
                <meta
                    name="keywords"
                    content="музыка, плейлисты, аудио, стриминг"
                />
                <meta
                    property="og:title"
                    content="Auralis - Музыкальная платформа"
                />
                <meta
                    property="og:description"
                    content="Слушай музыку, открывай новые плейлисты и сохраняй любимые треки!"
                />
                <meta
                    property="og:image"
                    content="/preview.jpg"
                />
                <meta
                    property="og:type"
                    content="website"
                />
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
                    <QueryClientProvider client={queryClient}>
                        {children}
                    </QueryClientProvider>
                </div>
            </body>
        </html>
    )
}
