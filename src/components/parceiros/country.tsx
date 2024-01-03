'use client'

import { useEffect, useRef, useState } from 'react'
import CaretDown from '@/components/icons/caret-down'
import Check from '@/components/icons/check'

export function Country() {
  const [openExato, setOpenExato] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState('Brasil')

  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Assegura ao TypeScript que event.target é um Node
      const target = event.target as Node

      if (modalRef.current && !modalRef.current.contains(target)) {
        setOpenExato(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [modalRef])

  return (
    <div className="relative hidden md:block">
      <p
        onClick={() => setOpenExato(true)}
        className="font-ptserif text-gray-200 font-normal text-[32px] flex items-center gap-3 hover:text-orange-200 transition-all duration-150 cursor-pointer"
      >
        {selectedCountry}{' '}
        <CaretDown size={16} weight="regular" className="text-orange-200" />
      </p>

      {openExato && (
        <div
          ref={modalRef}
          className="w-[220px] z-50 h-[105px] py-2 px-[20px] top-12 rounded-lg shadow-exato absolute bg-[#FFF]"
        >
          <ul className="flex flex-col list-none">
            <li
              onClick={() => setSelectedCountry('Brasil')}
              className="cursor-pointer py-[10px] flex justify-between items-center"
            >
              <p className="text-black font-manrope font-medium transition-all duration-200 ease hover:text-orange-200">
                Brasil
              </p>
              {selectedCountry === 'Brasil' && (
                <Check size={16} weight="regular" className="text-orange-200" />
              )}
            </li>
            <li
              onClick={() => setSelectedCountry('Estados Unidos')}
              className="cursor-pointer py-[10px] flex justify-between items-center"
            >
              <p className="text-black font-manrope font-medium transition-all duration-200 ease hover:text-orange-200">
                Estados Unidos
              </p>

              {selectedCountry === 'Estados Unidos' && (
                <Check size={16} weight="regular" className="text-orange-200" />
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
