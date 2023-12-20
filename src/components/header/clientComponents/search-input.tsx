'use client'

import MagnifyingGlass from '@/components/icons/magnify-glass'
import CaretRight from '@/components/icons/caret-right'
import ExatoLogo from '@/assets/logo'
import Button from '../../button'
import { useState } from 'react'
import ListMenu from '@/components/icons/menu'

export function SearchSection() {
  const [focused, setFocused] = useState(false)

  return (
    <div className="w-full h-[48px] px-4 md:px-0 overflow-hidden">
      <div className="md:max-w-[1216px] mx-auto flex flex-row-reverse md:flex-row justify-between items-center">
        <div className="flex items-center justify-start gap-[12px]">
          <MagnifyingGlass
            onClick={() => setFocused(true)}
            size={24}
            weight="bold"
            className="text-orange-100"
          />
          <input
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={focused ? 'Digite aqui sua busca' : 'Buscar'}
            className={`w-0 ${
              focused ? 'md:w-[200px] w-[290px]' : 'md:w-[120px]'
            } h-[48px] text-gray-300 placeholder-gray-300 font-manrope text-base focus:outline-none`}
          />
        </div>

        <ExatoLogo
          className={
            focused
              ? 'w-[118px] h-10 md:w-[150px] md:h-[50px] transform -translate-x-[360%] md:translate-x-[360%] transition-all fill-[#070707] hover:fill-orange-200 duration-[800ms] ease'
              : 'transition-all duration-[800ms] ease w-[145px] h-[50px] fill-[#070707] hover:fill-orange-200'
          }
        />

        <Button
          variant="tertiary"
          className={
            focused
              ? 'transform -translate-x-[360%] md:translate-x-[360%] transition-all duration-500 opacity-0 ease'
              : 'flex md:hidden p-[0!important] transition-all duration-500 ease opacity-100'
          }
          size="md"
        >
          <ListMenu />
        </Button>
        <div
          className={`md:flex hidden items-center gap-2 transition-all duration-700 ease ${
            focused && 'transform translate-x-16 opacity-0'
          }`}
        >
          <Button variant="primary" size="md">
            Login
          </Button>
          <Button variant="secondary" size="md">
            Assine <CaretRight size={16} weight="bold" />
          </Button>
        </div>
      </div>
    </div>
  )
}
