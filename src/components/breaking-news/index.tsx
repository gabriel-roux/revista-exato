'use client'

import BreakingNewsLogo from '@/assets/breakingNews.svg'
import Image from 'next/image'
import CaretLeft from '../../components/icons/caret-left'
import CaretRight from '../../components/icons/caret-right'
import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const news = [
  {
    legend: 'Inovações em Energia Renovável Impulsionam Mercado Global',
    createdAt: '2021-09-01T08:30:00.000Z',
  },
  {
    legend:
      'Mercados Financeiros Reagem Positivamente a Novas Políticas Econômicas',
    createdAt: '2021-09-01T09:15:00.000Z',
  },
  {
    legend: 'Avanços na Inteligência Artificial Abrem Novas Possibilidades',
    createdAt: '2021-09-01T11:00:00.000Z',
  },
  {
    legend: 'Estudo Revela Impacto do Teletrabalho na Produtividade',
    createdAt: '2021-09-01T13:45:00.000Z',
  },
  {
    legend: 'Exploração Espacial: Novas Descobertas em Marte',
    createdAt: '2021-09-01T16:30:00.000Z',
  },
  {
    legend: 'Tendências de Moda Sustentável Ganham Força em 2023',
    createdAt: '2021-09-01T18:15:00.000Z',
  },
]

export function BreakingNews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length)
      setProgress(0)
    }, 10000)

    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1
        }
        return 0
      })
    }, 100)

    return () => {
      clearInterval(interval)
      clearInterval(progressInterval)
    }
  }, [])

  const nextNews = () => {
    setCurrentIndex((currentIndex + 1) % news.length)
    setProgress(0)
  }

  // Função para ir para a notícia anterior
  const prevNews = () => {
    setCurrentIndex((currentIndex - 1 + news.length) % news.length)
    setProgress(0)
  }

  const formatTime = (dateString: string) => {
    const date = new Date(dateString)
    return format(date, "HH'h'mm", { locale: ptBR })
  }

  const isPrevDisabled = currentIndex === 0
  const isNextDisabled = currentIndex === news.length - 1

  return (
    <div className="w-full h-[75px] rounded-t-[12px] rounded-r-[12px] bg-gray-700 relative">
      <div className="w-full h-full flex items-center justify-between px-[20px] gap-[40px]">
        <div className="flex items-center gap-[40px]">
          <Image
            src={BreakingNewsLogo}
            alt="Breaking News"
            width={110}
            height={50}
          />
          <h2 className="text-black font-medium text-sm">
            {news[currentIndex].legend}
          </h2>
        </div>
        <div className="flex items-center gap-[10px]">
          <p className="text-gray-300 font-normal">
            {formatTime(news[currentIndex].createdAt)}
          </p>
          <CaretLeft
            weight="bold"
            size={16}
            className={`text-orange-200 cursor-pointer ${
              isPrevDisabled ? 'opacity-50' : ''
            }`}
            onClick={!isPrevDisabled ? prevNews : undefined}
          />
          <CaretRight
            weight="bold"
            size={16}
            className={`text-orange-200 cursor-pointer ${
              isNextDisabled ? 'opacity-50' : ''
            }`}
            onClick={!isNextDisabled ? nextNews : undefined}
          />
        </div>
      </div>

      <div
        className="absolute bottom-0 bg-orange-400 transition-all duration-1000"
        style={{ height: '1.5px', width: `${progress}%` }}
      />
    </div>
  )
}
