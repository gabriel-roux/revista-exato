'use client'

import { Edition } from '@/components/edition'
import CaretLeft from '@/components/icons/caret-left'
import CaretRight from '@/components/icons/caret-right'
import { useRef, useState } from 'react'
import { isMobile } from 'react-device-detect'

export default function EditionCarousel() {
  const monthlyEditions = [
    {
      title: 'Capa',
      desc: 'Trump deve se apresentar hoje à Justiça, lorem ipsum sit dolor.',
      isFree: true,
    },
    {
      title: 'Capa',
      desc: 'Trump deve se apresentar hoje à Justiça, lorem ipsum sit dolor.',
      isFree: false,
    },
    {
      title: 'Capa',
      desc: 'Trump deve se apresentar hoje à Justiça, lorem ipsum sit dolor.',
      isFree: false,
    },
    {
      title: 'Capa',
      desc: 'Trump deve se apresentar hoje à Justiça, lorem ipsum sit dolor.',
      isFree: false,
    },
    {
      title: 'Capa',
      desc: 'Trump deve se apresentar hoje à Justiça, lorem ipsum sit dolor.',
      isFree: false,
    },
    {
      title: 'Capa',
      desc: 'Trump deve se apresentar hoje à Justiça, lorem ipsum sit dolor.',
      isFree: false,
    },
    {
      title: 'Capa',
      desc: 'Trump deve se apresentar hoje à Justiça, lorem ipsum sit dolor.',
      isFree: false,
    },
    {
      title: 'Capa',
      desc: 'Trump deve se apresentar hoje à Justiça, lorem ipsum sit dolor.',
      isFree: false,
    },
    {
      title: 'Capa',
      desc: 'Trump deve se apresentar hoje à Justiça, lorem ipsum sit dolor.',
      isFree: false,
    },
    {
      title: 'Capa',
      desc: 'Trump deve se apresentar hoje à Justiça, lorem ipsum sit dolor.',
      isFree: false,
    },
    {
      title: 'Capa',
      desc: 'Trump deve se apresentar hoje à Justiça, lorem ipsum sit dolor.',
      isFree: false,
    },
    {
      title: 'Capa',
      desc: 'Trump deve se apresentar hoje à Justiça, lorem ipsum sit dolor.',
      isFree: false,
    },
  ]

  const [currentPage, setCurrentPage] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const itemWidth = isMobile ? 332 : 360 // Largura de cada item do carrossel
  const itemsPerPage = 1 // Quantos itens devem ser passados por vez

  const moveCarouselTo = (page: number) => {
    setCurrentPage(page)
    const newTranslateX =
      page >= maxPage
        ? page * (itemWidth * itemsPerPage) - 100
        : page * (itemWidth * itemsPerPage)
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${newTranslateX}px)`
    }
  }

  const nextPage = () => {
    setCurrentPage((prev) => {
      const nextPage = prev + 1
      moveCarouselTo(nextPage)
      return nextPage
    })
  }

  const prevPage = () => {
    setCurrentPage((prev) => {
      const prevPage = prev > 0 ? prev - 1 : 0
      moveCarouselTo(prevPage)
      return prevPage
    })
  }

  const itemsPerSlide = isMobile ? 1 : 2 // Como temos duas linhas, 4 itens por linha é igual a 8 por "página"
  const maxPage = Math.ceil(monthlyEditions.length / itemsPerSlide) - 1

  const paginationDots = Array.from({ length: maxPage + 1 }, (_, index) => (
    <button
      key={index}
      className={`w-10 h-[2px] transition-all duration-200 ${
        currentPage === index ? 'bg-orange-200' : 'bg-gray-200'
      }`}
      onClick={() => moveCarouselTo(index)}
    />
  ))

  return (
    <>
      <div className="h-[325px] w-[calc(100%-300px)] flex flex-col gap-10 relative">
        <div
          ref={carouselRef}
          className="w-[100%] transition-all duration-500 ease md:grid-cols-[repeat(auto-fill,minmax(332px,1fr))] md:grid-rows-[repeat(2,130px)] grid grid-flow-col h-[109px] md:h-[258px]"
        >
          {monthlyEditions.map((edition, index) => (
            <Edition
              key={index}
              title={edition.title}
              desc={edition.desc}
              isFree={edition.isFree}
            />
          ))}
        </div>

        <footer className="hidden md:flex justify-between items-center">
          <div className="flex gap-2 items-center">{paginationDots}</div>

          <div className="flex items-center gap-3">
            <button onClick={prevPage} disabled={currentPage === 0}>
              <CaretLeft
                size={24}
                weight="bold"
                className="text-gray-200 transition-all duration-200 hover:text-orange-200"
              />
            </button>
            <button onClick={nextPage} disabled={currentPage >= maxPage}>
              <CaretRight
                size={24}
                weight="bold"
                className="text-gray-700 transition-all duration-200 hover:text-orange-200"
              />
            </button>
          </div>
        </footer>
      </div>
      <div className="hidden md:block w-[33%] h-[366px] bg-gradient-to-r from-black from-[84%] to-black/0 absolute left-0" />
      <div className="hidden md:block w-[320px] h-[366px] bg-gradient-to-l from-black/95 from-[50%] to-black/0 absolute right-0" />
    </>
  )
}
