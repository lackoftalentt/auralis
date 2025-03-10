'use client'

import Image from 'next/image'
import React from 'react'
import logo from '../../public/assets/logo.png'
import heart from '../../public/assets/heart.svg'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const playlistItems = [
    {
        name: 'morning in heaven',
        href: '/liked',
        icon: (
            <Image
                src={heart}
                alt="heart"
                width={35}
                height={35}
            />
        )
    }
]

export function SideBar() {
    const pathname = usePathname()

    return (
        <aside className="fixed w-60 h-screen left-0 px-3 bg-black rounded-md text-[14px] font-bold leading-[25px]">
            <div className="flex justify-center my-8 cursor-pointer">
                <Link href="/">
                    <Image
                        width={200}
                        src={logo}
                        alt="logo"
                    />
                </Link>
            </div>

            {/* <div className="side-top mb-8">
                <ul>
                    {menuItems.map(({ name, href, icon }) => {
                        const isActive = pathname === href
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`flex items-center py-3 px-6 mb-[1px] rounded-md cursor-pointer gap-3 
                  hover:bg-[rgb(40,40,40)] transition-colors ${
                      isActive ? 'bg-[rgb(40,40,40)]' : ''
                  }`}>
                                {icon} {name}
                            </Link>
                        )
                    })}
                </ul>
            </div> */}

            <div>
                <p className="opacity-70">Playlists</p>
                <ul>
                    {playlistItems.map(({ name, href, icon }) => {
                        const isActive = pathname === href
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`flex items-center py-3 px-4 mb-[1px] rounded-md cursor-pointer gap-3 
                  hover:bg-[rgb(40,40,40)] transition-colors ${
                      isActive ? 'bg-[rgb(40,40,40)]' : ''
                  }`}>
                                <div className="flex bg-[rgb(48,48,48)] w-[35px] h-[35px] rounded-md items-center justify-center">
                                    {icon}
                                </div>
                                {name}
                            </Link>
                        )
                    })}
                </ul>
            </div>
        </aside>
    )
}
