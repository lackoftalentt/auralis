import React from 'react'
import { CgPlayPause } from 'react-icons/cg'

export const SongCard = () => {
  const activeSong = 'Test'
  return (
    <div className="flex col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-bur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50
            group-hover:flex ${
              activeSong ? 'flex bg-black bg-opacity-70  ' : 'hidden'
            }`}>
          <CgPlayPause />
        </div>
        <img
          src=""
          alt="song_img"
        />
      </div>
    </div>
  )
}
