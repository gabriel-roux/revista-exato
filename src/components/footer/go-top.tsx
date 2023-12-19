'use client'

import CaretUp from '@/components/icons/caret-up'
import { useState } from 'react'

export function GoToTop() {
  const [isHover, setIsHover] = useState(false)

  function handleGoToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={handleGoToTop}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`absolute ${
        isHover ? 'w-[150px]' : 'w-[40px]'
      } -top-[48px] md:-top-[84px] right-0 h-[40px] rounded-lg bg-orange-200 ease transition-all duration-500 flex items-center justify-center text-white hover:bg-orange-300`}
    >
      <CaretUp
        size={18}
        weight="bold"
        className={`transform transition-all duration-500`}
      />
      <span
        className={`truncate w-[115px] transition-all duration-300 ease ${
          isHover ? 'opacity-100' : 'opacity-0 absolute'
        }`}
      >
        Voltar ao topo
      </span>
    </button>
  )
}
