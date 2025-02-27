import Image from 'next/image'
import React from 'react'
import tinkoff from '../../../public/assets/tinkoff.jpg'
export const SongCard = () => {
  return (
    <div className="bg-[rgb(24,24,24)] w-[230px] h-[280px] p-6 rounded-md">
      <Image
        src={tinkoff}
        alt="sex"
        className="w-[190px] h-[190px] rounded-xl"
      />
      <h3 className="font-medium text-xl">Weakly Motivation</h3>
      <p className="font-medium text-base opacity-50">huesos kakito</p>
    </div>
  )
}
