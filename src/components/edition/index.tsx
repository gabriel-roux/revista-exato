'use client'

import { useState } from 'react'
import Lock from '../../components/icons/lock'

interface EditionProps {
  title: string
  desc: string
  isFree: boolean
}

export function Edition({ title, desc, isFree }: EditionProps) {
  const [isHover, setIsHover] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="relative bg-black w-full max-w-[332px] px-8 py-6 rounded-lg flex flex-col gap-3 border border-gray-100 hover:bg-gray-100 transition-all duration-500"
    >
      <header className="flex justify-between items-center">
        <h2 className="text-orange-200 text-sm font-semibold">{title}</h2>
        {isFree && (
          <span
            className={`absolute rounded-l-md w-[35px] h-[38px] bg-gray-100 ${
              isHover
                ? 'bg-orange-200 rounded-l-none w-[84px] after:content-[""] after:absolute after:border-t-[19px] after:border-b-[19px] after:border-l-[19px] after:border-t-orange-200 after:border-b-orange-200 after:border-l-[transparent] after:top-1/2 after:-translate-y-1/2 after:left-[-18px] after:transition-all after:duration-300'
                : 'after:border-t-[0px] after:border-b-[0px] after:opacity-0'
            } flex items-center justify-center gap-1 right-0 transition-all duration-500`}
          >
            <Lock size={16} className="text-gray-500" weight="fill" />
            {
              <span
                className={`text-sm font-semibold ${
                  isHover ? 'text-white' : 'opacity-0 absolute'
                } transition-all duration-500`}
              >
                Gratuito
              </span>
            }
          </span>
        )}
      </header>
      <p className="text-base text-gray-600 font-medium">{desc}</p>
    </div>
  )
}
