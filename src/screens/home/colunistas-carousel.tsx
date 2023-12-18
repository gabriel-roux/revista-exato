'use client'

import Image from 'next/image'
import CaretLeft from '@/components/icons/caret-left'
import ColunistaImg from '@/assets/colunista.png'
import CaretRight from '@/components/icons/caret-right'
import { useRef, useState } from 'react'

export default function ColunistasCarousel() {
  const coluninstas = [
    {
      name: 'Fernanda Silva',
      description:
        'A participação desastrosa do general Heleno na CPI do 8 de Janeiro',
      image: 'https://source.unsplash.com/random',
    },
    {
      name: 'Fernanda Silva',
      description:
        'A participação desastrosa do general Heleno na CPI do 8 de Janeiro',
      image: 'https://source.unsplash.com/random',
    },
    {
      name: 'Fernanda Silva',
      description:
        'A participação desastrosa do general Heleno na CPI do 8 de Janeiro',
      image: 'https://source.unsplash.com/random',
    },
    {
      name: 'Fernanda Silva',
      description:
        'A participação desastrosa do general Heleno na CPI do 8 de Janeiro',
      image: 'https://source.unsplash.com/random',
    },
    {
      name: 'Fernanda Silva',
      description:
        'A participação desastrosa do general Heleno na CPI do 8 de Janeiro',
      image: 'https://source.unsplash.com/random',
    },
    {
      name: 'Fernanda Silva',
      description:
        'A participação desastrosa do general Heleno na CPI do 8 de Janeiro',
      image: 'https://source.unsplash.com/random',
    },
    {
      name: 'Fernanda Silva',
      description:
        'A participação desastrosa do general Heleno na CPI do 8 de Janeiro',
      image: 'https://source.unsplash.com/random',
    },
    {
      name: 'Fernanda Silva',
      description:
        'A participação desastrosa do general Heleno na CPI do 8 de Janeiro',
      image: 'https://source.unsplash.com/random',
    },
    {
      name: 'Fernanda Silva',
      description:
        'A participação desastrosa do general Heleno na CPI do 8 de Janeiro',
      image: 'https://source.unsplash.com/random',
    },
    {
      name: 'Fernanda Silva',
      description:
        'A participação desastrosa do general Heleno na CPI do 8 de Janeiro',
      image: 'https://source.unsplash.com/random',
    },
  ]

  const [currentPage, setCurrentPage] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const moveCarouselTo = (page: number) => {
    setCurrentPage(page)
    if (carouselRef.current) {
      const newTranslateX = page * (378 * 3 + 40 * 3)
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

  const itemsPerSlide = 3 // Como temos duas linhas, 4 itens por linha é igual a 8 por "página"
  const maxPage = Math.ceil(coluninstas.length / itemsPerSlide) - 1

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
    <div className="w-full overflow-hidden">
      <div
        ref={carouselRef}
        className="w-full grid grid-flow-col gap-10 transition-all duration-700 ease"
      >
        {coluninstas.map((coluninsta, index) => (
          <div
            key={index}
            className="w-[268px] md:w-[378px] flex flex-col gap-6"
          >
            <div className="w-full flex gap-6 items-center">
              <Image
                src={ColunistaImg}
                alt="Colunista"
                width={72}
                height={72}
                quality={100}
                className="flex-shrink-0"
              />

              <div className="flex flex-col gap-1">
                <h2 className="text-lg text-orange-200">{coluninsta.name}</h2>
                <p className="hidden md:inline-block text-sm text-gray-700">
                  {coluninsta.description}
                </p>
              </div>
            </div>
            <p className="md:hidden text-sm text-gray-700">
              {coluninsta.description}
            </p>
          </div>
        ))}
      </div>

      <footer className="hidden w-full md:flex justify-between items-center mt-8">
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
  )
}
