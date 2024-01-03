'use client'

import { differenceInDays, differenceInHours, format, parseISO } from 'date-fns'
import { useState } from 'react'
import LockKeyOpen from '../icons/lock'
import Image from 'next/image'
import Faixa from '@/assets/faixa.svg'

interface SugestionProps {
  name: string
  sugestion: string
  createdAt: string
  isFree?: boolean
}

export default function Sugestion({
  name,
  sugestion,
  createdAt,
  isFree = false,
}: SugestionProps) {
  const [isHover, setIsHover] = useState(false)

  const formatDate = (dateString: string) => {
    const date = parseISO(dateString)
    const now = new Date()
    const hourDifference = differenceInHours(now, date)
    const dayDifference = differenceInDays(now, date)

    if (hourDifference < 24) {
      return `${hourDifference} horas atrás`
    } else if (dayDifference <= 7) {
      return `${dayDifference} dias atrás`
    } else {
      return format(date, 'dd/MM/yy')
    }
  }

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="w-[325px] relative px-8 py-6 flex flex-col gap-3 transition-all rounded-lg hover:bg-[#262626] duration-200 border border-gray-100"
    >
      <header className="flex items-center justify-between">
        <small className="text-sm text-gray-300 font-medium">
          {formatDate(createdAt)}
        </small>

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

      <div className="flex flex-col gap-[6px]">
        <p className="text-base font-medium text-gray-700">{sugestion}</p>

        <span className="text-orange-200 text-sm">{name}</span>
      </div>
    </div>
  )
}
