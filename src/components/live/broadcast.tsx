'use client'

import Play from '@/components/icons/play'
import Broadcast from '@/components/icons/broadcast'
import { useState } from 'react'

export function BroadCastTag() {
  const [hover, setHover] = useState(false)

  return (
    <span
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="transtion-all absolute right-4 top-4 duration-[600ms] w-[105px] cursor-pointer px-[14px] h-8 rounded-3xl text-orange-200 bg-orange-600 font-manrope font-medium text-sm flex items-center gap-[6px] hover:bg-orange-200 hover:text-white"
    >
      <span
        className={`${
          hover && 'transform translate-x-14'
        } transition-all duration-[600ms]`}
      >
        <Play
          className={`transition-all absolute duration-[600ms] transform scale-0 ${
            hover ? 'opacity-100 text-white scale-100' : 'opacity-0'
          }`}
          size={18}
          weight="fill"
        />
        <Broadcast
          size={20}
          weight="fill"
          className={`transition-all duration-[600ms] ${
            hover ? 'opacity-0' : 'opacity-100 text-orange-200'
          }`}
        />
      </span>
      <span
        className={`text-orange-200 ${
          hover && 'transform translate-x-[-1.5rem] text-white'
        } transition-all duration-[600ms]`}
      >
        {hover ? 'Assistir' : 'Ao vivo'}
      </span>
    </span>
  )
}
