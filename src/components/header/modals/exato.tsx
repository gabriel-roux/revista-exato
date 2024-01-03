'use client'

import { useEffect, useRef, useState } from 'react'
import CaretDown from '@/components/icons/caret-down'
import Link from 'next/link'

export function Exato() {
  const [openExato, setOpenExato] = useState(false)

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
    <div className="relative">
      <p
        onClick={() => setOpenExato(true)}
        className="font-manrope font-medium text-sm flex items-center gap-[6px] hover:text-orange-500 transition-all duration-150 cursor-pointer"
      >
        A Exato <CaretDown size={14} weight="regular" />
      </p>

      {openExato && (
        <div
          ref={modalRef}
          className="w-[160px] h-[105px] py-2 px-[20px] top-6 rounded-lg shadow-exato absolute bg-[#FFF]"
        >
          <ul className="flex flex-col list-none">
            <li className="py-[10px]">
              <Link
                href="/"
                className="text-black font-manrope font-medium transition-all duration-200 ease hover:text-orange-200"
              >
                Quem Somos
              </Link>
            </li>
            <li className="py-[10px]">
              <Link
                href="/"
                className="text-black font-manrope font-medium transition-all duration-200 ease hover:text-orange-200"
              >
                Nossa Equipe
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
