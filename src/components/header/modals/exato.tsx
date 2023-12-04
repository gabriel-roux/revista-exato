'use client'

import { useState } from 'react'
import CaretDown from '@/components/icons/caret-down'
import Link from 'next/link'

export function Exato() {
  const [openExato, setOpenExato] = useState(false)

  return (
    <div className="relative">
      <p
        onClick={() => setOpenExato(!openExato)}
        className="font-manrope font-medium text-sm flex items-center gap-[6px] hover:text-orange-500 transition-all duration-150 cursor-pointer"
      >
        A Exato <CaretDown size={14} weight="bold" />
      </p>

      {openExato && (
        <div className="w-[160px] h-[105px] py-2 px-[20px] top-6 rounded-lg shadow-md absolute bg-[#FFF]">
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
