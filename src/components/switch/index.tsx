'use client'

import { useState } from 'react'

export default function Switch() {
  const [active, setActive] = useState(false)

  return (
    <div
      className={`w-[46px] h-[25px] flex-shrink-0 ${
        active ? 'bg-orange-200' : 'bg-gray-400'
      } transition-all duration-300 ease-in-out rounded-3xl relative cursor-pointer`}
      onClick={() => setActive(!active)}
    >
      <div
        className={`w-[19px] h-[19px] top-[3px] left-1 ${
          active && 'translate-x-5'
        } bg-white rounded-full absolute transform transition-transform duration-300 ease-in-out`}
      ></div>
    </div>
  )
}
