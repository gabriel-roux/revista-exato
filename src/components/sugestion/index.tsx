'use client'

import { differenceInDays, differenceInHours, format, parseISO } from 'date-fns'
import { useState } from 'react'
import LockKeyOpen from '../icons/lock'

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
          <span
            className={`absolute rounded-l-md w-[35px] h-[38px] bg-gray-100 ${
              isHover
                ? 'bg-orange-200 rounded-l-none w-[84px] after:content-[""] after:absolute after:border-t-[19px] after:border-b-[19px] after:border-l-[19px] after:border-t-orange-200 after:border-b-orange-200 after:border-l-[transparent] after:top-1/2 after:-translate-y-1/2 after:left-[-18px] after:transition-all ease after:duration-[400ms]'
                : 'after:opacity-0'
            } flex items-center justify-center gap-1 right-0 transition-all duration-500`}
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
        )}
      </header>

      <div className="flex flex-col gap-[6px]">
        <p className="text-base font-medium text-gray-700">{sugestion}</p>

        <span className="text-orange-200 text-sm">{name}</span>
      </div>
    </div>
  )
}
