'use client'

import Image from 'next/image'
import React from 'react'
import logo from '../../public/assets/logo.png'
import heart from '../../public/assets/heart.svg'
import media from '../../public/assets/media-podcast.png'
import {
  BiHistory,
  BiHomeCircle,
  BiLibrary,
  BiPlusMedical,
  BiSearch,
  BiSolidPlusSquare
} from 'react-icons/bi'

export function SideBar() {
  const isActive = true
  return (
    <aside className="fixed w-60 h-screen left-0 px-3 bg-black rounded-md text-[14px] font-bold leading-[25px]">
      <div className="flex justify-center my-6">
        {logo && (
          <Image
            width={200}
            src={logo}
            alt="logo"
          />
        )}
      </div>
      <div className="side-top mb-8">
        <ul>
          <li
            className={`flex items-center ${
              isActive && 'bg-[rgb(40,40,40)]'
            } py-3 px-6 mb-[1px] rounded-md cursor-pointer gap-3`}>
            <BiHomeCircle size={20} /> Home
          </li>
          <li className="flex items-center py-3 px-6 mb-[1px] rounded-md cursor-pointer gap-3 hover:bg-[rgb(40,40,40)] transition-colors">
            <BiSearch size={20} /> Search
          </li>
          <li className="flex items-center py-3 px-6 mb-[1px] rounded-md cursor-pointer gap-3 hover:bg-[rgb(40,40,40)] transition-colors">
            <BiLibrary size={20} /> Your Library
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="flex items-center py-3 px-4 mb-[1px] rounded-md cursor-pointer gap-3 hover:bg-[rgb(40,40,40)] transition-colors">
            <div className="flex bg-[rgb(48,48,48)] w-[35px] h-[35px] rounded-md items-center justify-center">
              <BiHistory size={18} />
            </div>
            Discover Weekly
          </li>
          <li className="flex items-center py-3 px-4 mb-[1px] rounded-md cursor-pointer gap-3 hover:bg-[rgb(40,40,40)] transition-colors">
            <Image
              src={heart}
              alt="heart"
              className="w-[35px] h-[35px]"
            />
            Liked Songs
          </li>
          <li className="flex items-center py-3 px-4 mb-[1px] rounded-md cursor-pointer gap-3 hover:bg-[rgb(40,40,40)] transition-colors">
            <div className="flex bg-[rgb(0,70,56)] w-[35px] h-[35px] rounded-md items-center justify-center">
              <Image
                src={media}
                alt="heart"
                className="w-[15px] h-[15px]"
              />
            </div>
            Discover Weekly
          </li>
        </ul>
      </div>
    </aside>
  )
}
