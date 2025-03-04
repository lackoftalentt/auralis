'use-client'

import { useRef, JSX, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'

interface CarouselSectionProps<T> {
    title: string
    items: T[] | undefined
    loading: boolean
    error: Error | null
    renderItem: (item: T) => JSX.Element
}

export const CarouselSection = <T,>({
    title,
    items,
    loading,
    error,
    renderItem
}: CarouselSectionProps<T>) => {
    const swiperRef = useRef(null)

    const normalizedTitle = title.replace(/\s+/g, '-').toLowerCase()

    return (
        <div className="mb-10">
            <div className="flex justify-between items-center">
                <h2 className="font-bold text-4xl mb-5">{title}</h2>
                <div className="page-header mt-5 flex gap-4 mb-[20px]">
                    <button
                        className={`custom-prev-${normalizedTitle} flex items-center justify-center w-[40px] h-[40px] bg-[rgb(19,19,19)] opacity-30 hover:opacity-100 rounded-full cursor-pointer`}>
                        <FaAngleLeft size={20} />
                    </button>
                    <button
                        className={`custom-next-${normalizedTitle} flex items-center justify-center w-[40px] h-[40px] bg-[rgb(19,19,19)] opacity-30 hover:opacity-100 rounded-full cursor-pointer transition-colors`}>
                        <FaAngleRight size={20} />
                    </button>
                </div>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p>Error loading data</p>}
            <div>
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={5}
                    navigation={{
                        nextEl: `.custom-next-${normalizedTitle}`,
                        prevEl: `.custom-prev-${normalizedTitle}`
                    }}
                    className="swiper max-w-[1280px]">
                    {items?.map((item, index) => (
                        <SwiperSlide key={index}>
                            {renderItem(item)}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
