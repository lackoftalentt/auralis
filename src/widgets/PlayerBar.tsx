'ise client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import {
    BiHeart,
    BiPause,
    BiPlay,
    BiRepeat,
    BiShuffle,
    BiSkipNext,
    BiSkipPrevious
} from 'react-icons/bi'
import { usePlayerStore } from '@/app/store/playerStore'

export const PlayerBar = () => {
    const {
        queue,
        currentIndex,
        currentTrack,
        isPlaying,
        togglePlay,
        nextTrack,
        prevTrack,
        toggleShuffle,
        isShuffled,
        repeatMode,
        toggleRepeat,
        duration,
        currentTime,
        setCurrentTime,
        setDuration
    } = usePlayerStore()

    // const currentTrack = queue[currentIndex]
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        if (!audioRef.current) return
        if (isPlaying) {
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }, [isPlaying, currentIndex])

    useEffect(() => {
        if (!audioRef.current) return
        const updateProgress = () => {
            setCurrentTime(audioRef.current?.currentTime || 0)
            setDuration(audioRef.current?.duration || 0)
        }
        audioRef.current.addEventListener('timeupdate', updateProgress)
        return () => {
            audioRef.current?.removeEventListener('timeupdate', updateProgress)
        }
    }, [])

    useEffect(() => {
        if (!audioRef.current) return
        const handleEnded = () => {
            if (repeatMode === 'one') {
                // @ts-ignore
                audioRef.current.currentTime = 0
                audioRef.current?.play()
            } else {
                nextTrack()
            }
        }
        audioRef.current.addEventListener('ended', handleEnded)
        return () => {
            audioRef.current?.removeEventListener('ended', handleEnded)
        }
    }, [repeatMode, nextTrack])

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    }

    return (
        <div className="fixed bottom-0 left-0 h-[112px] w-screen flex items-center justify-between px-10 gap-5 z-10 bg-[rgb(24,24,24)]">
            <audio
                ref={audioRef}
                src={currentTrack?.preview}
            />

            <div className="flex items-center gap-5 max-w-[250px]">
                {currentTrack ? (
                    <Image
                        width={70}
                        height={70}
                        src={currentTrack.album.cover_small}
                        alt={currentTrack.title}
                    />
                ) : (
                    <div className="w-[70px] h-[70px] bg-gray-600"></div>
                )}
                <div>
                    <h3>{currentTrack?.title || 'Нет трека'}</h3>
                    <h3>
                        {currentTrack?.artist.name || 'Неизвестный исполнитель'}
                    </h3>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center flex-1">
                <div className="flex items-center gap-2">
                    <button
                        onClick={toggleShuffle}
                        className={isShuffled ? 'text-green-500' : ''}>
                        <BiShuffle size={24} />
                    </button>
                    <button onClick={prevTrack}>
                        <BiSkipPrevious size={32} />
                    </button>
                    <button onClick={togglePlay}>
                        {isPlaying ? (
                            <BiPause size={40} />
                        ) : (
                            <BiPlay size={40} />
                        )}
                    </button>
                    <button onClick={nextTrack}>
                        <BiSkipNext size={32} />
                    </button>
                    <button
                        onClick={toggleRepeat}
                        className={
                            repeatMode === 'one' ? 'text-green-500' : ''
                        }>
                        <BiRepeat size={24} />
                    </button>
                </div>
                <div className="flex gap-5 mt-2">
                    <p>{formatTime(currentTime)}</p>
                    <p>{formatTime(duration)}</p>
                </div>
            </div>

            <div className="flex gap-5 flex-shrink-0">
                <BiHeart size={32} />
            </div>
        </div>
    )
}
