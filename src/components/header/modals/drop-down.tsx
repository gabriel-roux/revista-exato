'use client'

import CaretDown from '@/components/icons/caret-down'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

interface DropDownProps {
  menu: string
  items: string[]
}

export function DropDown({ menu, items }: DropDownProps) {
  const [open, setOpen] = useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Assegura ao TypeScript que event.target é um Node
      const target = event.target as Node

      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [dropdownRef])

  return (
    <div ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className={`text-sm font-manrope font-medium text-black ${
          open && 'text-orange-200'
        } transition-all duration-300 hover:text-orange-200 flex items-center gap-[6px]`}
      >
        {menu} <CaretDown size={16} weight="bold" className="text-orange-200" />
      </button>

      {open && (
        <div className="absolute z-[100] left-0 bg-[white] border-b-2 border-orange-200 w-full mt-4 h-[230px]">
          <div className="max-w-[1216px] mx-auto p-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {items.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="text-gray-200 py-3 pr-2.5 font-manrope text-sm font-medium transition-all duration-200 ease-in-out hover:text-orange-200"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
