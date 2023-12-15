'use client'

import { useState } from 'react'
import LockKeyOpen from '../../components/icons/lock'
import Faixa from '@/assets/faixa.svg'
import Image from 'next/image'

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
      className="relative bg-black w-full min-w-[332px] px-8 py-6 rounded-lg flex flex-col gap-3 border border-gray-100 hover:bg-[#262626] transition-all duration-500"
    >
      <header className="flex justify-between items-center">
        <h2 className="text-orange-200 uppercase text-sm font-semibold">
          {title}
        </h2>
        {isFree && (
          <div className="absolute right-0">
            <span
              className={`rounded-l-md w-[35px] h-[38px] bg-gray-100 ${
                isHover ? 'bg-orange-200 rounded-l-none w-[89px]' : ''
              } flex items-center justify-center gap-1 transition-all duration-500`}
            >
              <LockKeyOpen />
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
            <Image
              src={Faixa}
              alt="Faixa"
              width={30}
              height={15}
              className={`absolute bottom-0 h-[38px] ${
                isHover
                  ? 'w-[89px] right-[3.2rem] opacity-100'
                  : 'right-6 opacity-0'
              } transition-all duration-500`}
            />
          </div>
        )}
      </header>
      <p className="text-base text-gray-600 font-medium">{desc}</p>
    </div>
  )
}
