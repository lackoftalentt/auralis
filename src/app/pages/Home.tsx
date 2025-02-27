import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { PlaylistCard } from '../entities/PlaylistCard'
import { SongCard } from '../entities/SongCard'

export const HomePage = () => {
  return (
    <main className="w-[1200px] mx-auto pl-5">
      <div className="page-header mt-5 flex gap-4 mb-[40px]">
        <span className="flex items-center justify-center w-[40px] h-[40px] bg-[rgb(19,19,19)] rounded-full hover:opacity-100 opacity-50 cursor-pointer">
          <FaAngleLeft size={20} />
        </span>
        <span className="flex items-center justify-center w-[40px] h-[40px] bg-[rgb(19,19,19)] rounded-full hover:opacity-100  cursor-pointer">
          <FaAngleRight size={20} />
        </span>
      </div>
      <div className="mb-[40px]">
        <h2 className="font-bold text-4xl mb-5">Good Morning</h2>
        <div className="grid grid-cols-4 gap-5">
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
        </div>
      </div>
      <div>
        <h2 className="font-bold text-4xl mb-5">Songs you might like</h2>
        <div className="grid grid-cols-5 gap-10">
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
        </div>
      </div>
    </main>
  )
}
