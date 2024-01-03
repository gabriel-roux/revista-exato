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
    const updateInterval = 100 // Intervalo de atualização do progresso em milissegundos
    const totalDuration = 10000 // Duração total para mudar a notícia em milissegundos

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress =
          prevProgress + (updateInterval / totalDuration) * 100

        if (newProgress >= 100) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length)
          return 0 // Reiniciar o progresso ao atingir 100%
        }
        return newProgress
      })
    }, updateInterval)

    return () => {
      clearInterval(interval)
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
    <div className="w-full h-[116px] md:h-[75px] rounded-t-[12px] rounded-r-[12px] bg-gray-700 relative">
      <div className="w-full h-full flex items-center flex-col md:flex-row md:justify-between px-[20px] py-4 md:py-0 gap-3 md:gap-[40px]">
        <div className="flex justify-between md:justify-start items-center w-full md:gap-[40px]">
          <h2 className="text-orange-200 tracking-[-2%] text-right font-normal font-s font-manrope text-lg md:text-[24px] leading-6">
            BREAKING <br className="hidden md:block" />
            <span className=" font-extrabold">NEWS</span>
          </h2>

          <div className="md:hidden flex items-center gap-[10px]">
            <p className="text-gray-300 font-normal">
              {formatTime(news[currentIndex].createdAt)}
            </p>
            <CaretLeft
              weight="regular"
              size={16}
              className={`text-orange-200 cursor-pointer ${
                isPrevDisabled ? 'opacity-50' : ''
              }`}
              onClick={!isPrevDisabled ? prevNews : undefined}
            />
            <CaretRight
              weight="regular"
              size={16}
              className={`text-orange-200 cursor-pointer ${
                isNextDisabled ? 'opacity-50' : ''
              }`}
              onClick={!isNextDisabled ? nextNews : undefined}
            />
          </div>

          <h2 className="hidden md:inline-block text-black font-medium text-sm">
            {news[currentIndex].legend}
          </h2>
        </div>

        <h2 className="md:hidden text-black font-medium text-sm">
          {news[currentIndex].legend}
        </h2>

        <div className="hidden md:flex items-center gap-[10px]">
          <p className="text-gray-300 font-normal">
            {formatTime(news[currentIndex].createdAt)}
          </p>
          <CaretLeft
            weight="regular"
            size={16}
            className={`text-orange-200 cursor-pointer ${
              isPrevDisabled ? 'opacity-50' : ''
            }`}
            onClick={!isPrevDisabled ? prevNews : undefined}
          />
          <CaretRight
            weight="regular"
            size={16}
            className={`text-orange-200 cursor-pointer ${
              isNextDisabled ? 'opacity-50' : ''
            }`}
            onClick={!isNextDisabled ? nextNews : undefined}
          />
        </div>
      </div>

      <div
        className="hidden md:block absolute bottom-0 bg-orange-400 transition-all duration-300 ease-linear"
        style={{ height: '1.5px', width: `${progress}%` }}
      />
    </div>
  )
}
