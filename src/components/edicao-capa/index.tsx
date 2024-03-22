'use client'

import Image from 'next/image'
import EdicaoCapaImg from '@/assets/edicao-capa.png'
import EdicaoNoneImg from '@/assets/edicao-none.png'
import CaretRight from '@/components/icons/caret-right'
import { useState } from 'react'

interface EdicaoCapaProps {
  createdAt: string
  edicao: string
  url: string
  image: string
}

export default function EdicaoCapa({
  createdAt,
  edicao,
  image,
  url,
}: EdicaoCapaProps) {
  const [hover, setHover] = useState(false)

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="w-[218px] h-[344px] flex flex-col gap-[18px]"
    >
      <div className="relative w-full h-[280px] rounded-lg overflow-hidden">
        <Image
          src={image !== '' ? EdicaoCapaImg : EdicaoNoneImg}
          alt="Edição"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />

        {hover && (
          <div className="absolute bottom-0 left-0 w-full h-full flex items-center justify-center bg-orange-200/60">
            <button className="w-[110px] h-9 rounded-full bg-white text-black flex items-center justify-center font-manrope font-bold text-sm">
              Vizualizar
              <CaretRight size={16} weight="bold" className="fill-orange-200" />
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1">
        {/* de Mes, Ano */}
        <p className="text-xs text-orange-200 font-medium">
          de{' '}
          {new Date(createdAt).toLocaleDateString('pt-BR', {
            month: 'long',
            year: 'numeric',
          })}
        </p>
        <p className="text-base text-black font-bold">{edicao}</p>
      </div>
    </div>
  )
}
