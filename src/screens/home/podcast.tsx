'use client'

import Button from '@/components/button'
import CaretRight from '@/components/icons/caret-right'
import Microphone from '@/components/icons/microphone'
import Podcast from '@/components/podcast'
import { useState } from 'react'

export default function Podcasts() {
  const [openedPodcast, setOpenedPodcast] = useState(1)

  return (
    <section className="w-full h-[735px] md:h-[500px] bg-gray-600 py-12 md:py-24">
      <div className="w-full px-4 md:px-0 md:max-w-[1215px] mx-auto">
        <header className="flex justify-between items-center">
          <h2 className="text-[24px] md:text-[32px] flex items-center gap-2 md:gap-4 font-ptserif font-bold text-black">
            <Microphone
              size={32}
              weight="fill"
              className="text-orange-200 md:w-[32px] md:h-[32px] w-[24px] h-[24px]"
            />
            Podcast
          </h2>
          <Button
            variant="tertiary"
            className="flex items-center gap-[10px] p-[0!important]"
          >
            <span className="hidden md:inline-block">
              Ouça outros podcasts aqui
            </span>
            <span className="md:hidden">Ver todos</span>
            <CaretRight size={16} className="text-orange-200" weight="bold" />
          </Button>
        </header>

        <div className="mt-8 grid grid-cols-1 md:flex items-center gap-6">
          <Podcast
            id={1}
            openedPodcast={openedPodcast}
            setOpenedPodcast={setOpenedPodcast}
          />
          <Podcast
            id={2}
            openedPodcast={openedPodcast}
            setOpenedPodcast={setOpenedPodcast}
          />
          <Podcast
            id={3}
            openedPodcast={openedPodcast}
            setOpenedPodcast={setOpenedPodcast}
          />
          <Podcast
            id={4}
            openedPodcast={openedPodcast}
            setOpenedPodcast={setOpenedPodcast}
          />
        </div>
      </div>
    </section>
  )
}
