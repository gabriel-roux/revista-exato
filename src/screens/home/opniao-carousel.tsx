'use client'
import CaretRight from '@/components/icons/caret-right'
import CaretLeft from '@/components/icons/caret-left'
import Sugestion from '@/components/sugestion'
import { useRef, useState } from 'react'

const opnioes = [
  {
    name: 'Sérgio Ribas - Revista Exato',
    sugestion:
      'Trump deve se apresentar hoje à Justiça, lorem ipsum sit dolor.',
    isFree: true,
    createdAt: '2021-09-13T15:00:00.000Z',
  },
  {
    name: 'Sérgio Ribas - Revista Exato',
    sugestion:
      'Trump deve se apresentar hoje à Justiça, lorem ipsum sit dolor.',
    isFree: false,
    createdAt: '2021-09-13T15:00:00.000Z',
  },
  {
    name: 'Sérgio Ribas - Revista Exato',
    sugestion:
      'Trump deve se apresentar hoje à Justiça, lorem ipsum sit dolor.',
    isFree: false,
    createdAt: '2021-09-13T15:00:00.000Z',
  },
  {
    name: 'Sérgio Ribas - Revista Exato',
    sugestion:
      'Trump deve se apresentar hoje à Justiça, lorem ipsum sit dolor.',
    isFree: false,
    createdAt: '2021-09-13T15:00:00.000Z',
  },
  {
    name: 'Sérgio Ribas - Revista Exato',
    sugestion:
      'Trump deve se apresentar hoje à Justiça, lorem ipsum sit dolor.',
    isFree: false,
    createdAt: '2021-09-13T15:00:00.000Z',
  },
  {
    name: 'Sérgio Ribas - Revista Exato',
    sugestion:
      'Trump deve se apresentar hoje à Justiça, lorem ipsum sit dolor.',
    isFree: false,
    createdAt: '2021-09-13T15:00:00.000Z',
  },
  {
    name: 'Sérgio Ribas - Revista Exato',
    sugestion:
      'Trump deve se apresentar hoje à Justiça, lorem ipsum sit dolor.',
    isFree: false,
    createdAt: '2021-09-13T15:00:00.000Z',
  },
  {
    name: 'Sérgio Ribas - Revista Exato',
    sugestion:
      'Trump deve se apresentar hoje à Justiça, lorem ipsum sit dolor.',
    isFree: false,
    createdAt: '2021-09-13T15:00:00.000Z',
  },
  {
    name: 'Sérgio Ribas - Revista Exato',
    sugestion:
      'Trump deve se apresentar hoje à Justiça, lorem ipsum sit dolor.',
    isFree: false,
    createdAt: '2021-09-13T15:00:00.000Z',
  },
  {
    name: 'Sérgio Ribas - Revista Exato',
    sugestion:
      'Trump deve se apresentar hoje à Justiça, lorem ipsum sit dolor.',
    isFree: false,
    createdAt: '2021-09-13T15:00:00.000Z',
  },
  {
    name: 'Sérgio Ribas - Revista Exato',
    sugestion:
      'Trump deve se apresentar hoje à Justiça, lorem ipsum sit dolor.',
    isFree: false,
    createdAt: '2021-09-13T15:00:00.000Z',
  },
  {
    name: 'Sérgio Ribas - Revista Exato',
    sugestion:
      'Trump deve se apresentar hoje à Justiça, lorem ipsum sit dolor.',
    isFree: false,
    createdAt: '2021-09-13T15:00:00.000Z',
  },
]

export default function OpniaoCarousel() {
  const [currentPage, setCurrentPage] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const itemWidth = 332 // Largura de cada item do carrossel
  const itemsPerPage = 1 // Quantos itens devem ser passados por vez

  const moveCarouselTo = (page: number) => {
    setCurrentPage(page)
    const newTranslateX =
      page >= maxPage
        ? page * (itemWidth * itemsPerPage) - 50
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

  const itemsPerSlide = 2 // Como temos duas linhas, 4 itens por linha é igual a 8 por "página"
  const maxPage = Math.ceil(opnioes.length / itemsPerSlide) - 1

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
      <div className="flex flex-col gap-10 relative">
        <div
          ref={carouselRef}
          className="w-[100%] transition-all duration-500 ease grid-cols-[repeat(auto-fill,minmax(325px,1fr))] md:grid-rows-[repeat(2,156px)] grid grid-flow-col h-[138px] md:h-[312px]"
        >
          {opnioes.map((opniao, index) => (
            <Sugestion
              createdAt={opniao.createdAt}
              name={opniao.name}
              sugestion={opniao.sugestion}
              isFree={opniao.isFree}
              key={index}
            />
          ))}
        </div>

        <footer className="flex justify-between items-center max-w-[620px]">
          <div className="md:flex gap-2 items-center hidden">
            {paginationDots}
          </div>

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
      <div className="hidden md:block w-[50%] pointer-events-none h-[366px] bg-gradient-to-r from-black from-[84%] to-black/0 absolute left-0" />
      <div className="hidden md:block w-[320px] pointer-events-none h-[366px] bg-gradient-to-l from-black from-[80%] to-black/0 absolute right-0" />
    </>
  )
}
