'use client'

import React, { useState } from 'react'
import PodcastImg from '../../assets/podcast.png'
import Image from 'next/image'
import PauseCircle from '../icons/pause'
import Button from '../button'
import Share from '../icons/share'
import { ShareModal } from './share'

interface PodcastProps {
  openedPodcast: number
  setOpenedPodcast: React.Dispatch<React.SetStateAction<number>>
  id: number
}

export default function Podcast({
  openedPodcast,
  setOpenedPodcast,
  id,
}: PodcastProps) {
  const [velocity, setVelocity] = useState(1)

  const handleVelocity = () => {
    if (velocity === 1) {
      setVelocity(2)
    } else {
      setVelocity(1)
    }
  }

  return (
    <div
      className={`w-full ${
        openedPodcast === id
          ? 'md:w-[625px] md:h-[230px] h-[186px]'
          : 'md:w-[170px] md:h-[230px] h-[96px]'
      } bg-[#fff] md:bg-[transparent] overflow-hidden flex items-start rounded-lg transition-all duration-[600ms] flex-col md:flex-row`}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.43, 0, 0.11, 1)',
      }}
    >
      <div className="flex">
        <div
          onClick={() => setOpenedPodcast(id)}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.43, 0, 0.11, 1)',
          }}
          className={`${
            openedPodcast === id ? 'md:min-w-[232px]' : 'md:min-w-[170px]'
          } md:h-[230px] overflow-hidden cursor-pointer transition-all duration-[600ms] flex-shrink-0`}
        >
          <Image
            src={PodcastImg}
            alt="Podcast"
            quality={100}
            width={232}
            height={230}
            className="object-cover w-[96px] h-[96px] md:w-[232px] md:h-[230px] flex-shrink-0" // Mantenha as proporções da imagem
          />
        </div>

        <div className="w-full md:w-[400px] px-4 py-3 md:px-8 md:py-6 bg-[#FFF] h-[96px] md:h-[230px] flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <header className="flex items-center justify-between">
              <small className="text-sm text-orange-200 font-medium">
                EXATOCAST
              </small>

              <ShareModal />
            </header>

            <p
              className={
                'text-sm md:text-base font-medium text-black w-full overflow-hidden transition-all duration-[600ms] ' +
                (openedPodcast === id ? 'line-clamp-none' : 'line-clamp-2') // Alterne entre clamps conforme necessário
              }
              style={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: openedPodcast === id ? 'none' : 2, // Ajuste o número de linhas
              }}
            >
              Decisão do TSE abala destino político de Bolsonaro? Lorem ipsum
              dolor sit
            </p>
          </div>

          <div className="md:flex flex-col gap-3 hidden">
            <span className="text-sm text-gray-200 font-normal font-manrope">
              04:10
              <span
                className={`inline-block w-[6px] h-[6px] bg-gray-500 rounded-full ml-2 mr-2`}
              ></span>
              20:45
            </span>

            <div className="flex items-center gap-2">
              <PauseCircle
                size={30}
                className="text-orange-200"
                weight="fill"
              />

              <div className="w-full h-[6px] bg-gray-600 rounded-full">
                <div className="w-[50%] h-full bg-orange-400 rounded-full relative">
                  <div className="absolute w-4 h-4 border-2 border-white bg-orange-200 rounded-full top-[-5px] right-0"></div>
                </div>
              </div>

              <button
                className="p-[10px] text-gray-200 font-medium text-base"
                onClick={handleVelocity}
              >
                {velocity}x
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-1 md:gap-3 md:hidden p-3">
        <span className="text-sm text-gray-200 font-normal font-manrope">
          04:10
          <span
            className={`inline-block w-[6px] h-[6px] bg-gray-500 rounded-full ml-2 mr-2`}
          ></span>
          20:45
        </span>

        <div className="w-full flex items-center gap-2">
          <PauseCircle size={30} className="text-orange-200" weight="fill" />

          <div className="w-full h-[6px] bg-gray-600 rounded-full">
            <div className="w-[50%] h-full bg-orange-400 rounded-full relative">
              <div className="absolute w-4 h-4 border-2 border-white bg-orange-200 rounded-full top-[-5px] right-0"></div>
            </div>
          </div>

          <button
            className="p-[10px] text-gray-200 font-medium text-base"
            onClick={handleVelocity}
          >
            {velocity}x
          </button>
        </div>
      </div>
    </div>
  )
}
