'use client'

import ExatoLogo from '@/assets/logo'
import { useState } from 'react'
import Phone from '@/components/icons/phone'
import Envelope from '@/components/icons/envelope'
import Clock from '@/components/icons/clock'
import MapPin from '@/components/icons/map-pin'
import CaretUp from '@/components/icons/caret-up'

export function FooterModal() {
  const [opened, setOpened] = useState(true)

  const categories = [
    {
      category: 'Brasil',
      subcategories: ['Button', 'Button', 'Button'],
    },
    {
      category: 'Mundo',
      subcategories: ['Button', 'Button', 'Button'],
    },
    {
      category: 'Economia',
      subcategories: ['Button', 'Button', 'Button'],
    },
    {
      category: 'Política',
      subcategories: ['Button', 'Button', 'Button'],
    },
    {
      category: 'Ver & Ouvir',
      subcategories: ['Podcast', 'Vídeos', 'Lives', 'Galeria', 'Músicas'],
    },
  ]

  return (
    <div
      className={`w-full bg-[#1B1B1B] py-16 transition-all duration-300 ${
        opened ? 'h-[324px]' : 'h-[0px] py-0'
      }`}
    >
      <div className="w-full relative max-w-[1215px] mx-auto flex items-start justify-between">
        <div className="flex flex-col">
          <ExatoLogo
            className={`w-[145px] ${
              !opened && 'opacity-0 pointer-events-none'
            } h-[50px] transition-all fill-[#FFF] hover:fill-orange-200 duration-300 ease`}
          />
          <ul
            className={`${
              !opened && 'opacity-0 pointer-events-none'
            }flex flex-col gap-4 mt-8 transition-all duration-300`}
          >
            <li className="text-xs text-white font-normal transition-all duration-200 hover:text-orange-200 flex items-center gap-2">
              <Phone size={16} weight="fill" className="text-orange-200" />
              +1 (774) 570-1226
            </li>
            <li className="text-xs text-white font-normal transition-all duration-200 hover:text-orange-200 flex items-center gap-2">
              <Envelope size={16} weight="fill" className="text-orange-200" />
              suporte@revistaexato.com
            </li>
            <li className="text-xs text-white font-normal transition-all duration-200 hover:text-orange-200 flex items-center gap-2">
              <Clock size={16} weight="fill" className="text-orange-200" />
              Segunda à sexta - 09:00 às 17:00
            </li>
            <li className="text-xs text-white font-normal transition-all duration-200 hover:text-orange-200 flex items-center gap-2">
              <MapPin size={16} weight="fill" className="text-orange-200" />
              Worcester, Massachusetts 01604
            </li>
          </ul>
        </div>

        <div
          className={`w-full max-w-[860px] flex items-start gap-6 transition-all duration-300 ${
            !opened && 'opacity-0 pointer-events-none'
          }`}
        >
          {categories.map((category) => (
            <div
              key={category.category}
              className="flex flex-col gap-4 w-[150px]"
            >
              <h4 className="text-sm text-white font-semibold">
                {category.category}
              </h4>

              {category.subcategories.map((subcategory, index) => (
                <a
                  href="#"
                  key={index}
                  className="text-sm text-gray-300 font-normal transition-all duration-200 hover:text-orange-200"
                >
                  {subcategory}
                </a>
              ))}
            </div>
          ))}
        </div>

        <button
          onClick={() => setOpened(!opened)}
          className={`absolute w-[40px] ${
            opened ? '-top-[84px]' : '-top-5'
          } right-0 h-[40px] rounded-lg bg-orange-200 transition-all duration-300 flex items-center justify-center text-white hover:bg-orange-300`}
        >
          <CaretUp
            size={20}
            weight="bold"
            className={`transform ${
              opened ? 'rotate-180' : ''
            } transition-all duration-300`}
          />
        </button>
      </div>
    </div>
  )
}
