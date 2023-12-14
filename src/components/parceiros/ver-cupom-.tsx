'use client'

import Rectangle from '@/assets/rectangle.png'
import Image from 'next/image'

interface VerCupomProps {
  codigo: string
}

export function VerCupom({ codigo }: VerCupomProps) {
  return (
    <div className="relative px-3 h-[44px] flex items-center justify-end w-[180px] rounded-lg bg-gray-600 border border-dashed border-gray-400">
      <p className="text-gray-300 font-medium">{codigo}</p>

      <div className="absolute left-0">
        <button className="w-[140px] -ml-[1px] cupom-button relative rounded-lg font-medium bg-orange-200 hover:bg-orange-300 transition-all duration-300 h-[44px] flex justify-center items-center text-gray-600 font-manrope text-base">
          Ver Cupom
          <Image
            src={Rectangle}
            alt=""
            className="absolute -right-5 -top-[2px]"
          />
        </button>
      </div>
    </div>
  )
}
