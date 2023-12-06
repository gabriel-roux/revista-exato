'use client'

import Button from '@/components/button'
import CaretRight from '@/components/icons/caret-right'
import Microphone from '@/components/icons/microphone'
import Podcast from '@/components/podcast'
import { useState } from 'react'

export default function Podcasts() {
  const [openedPodcast, setOpenedPodcast] = useState(1)

  return (
    <section className="w-full h-[500px] bg-gray-600 py-24">
      <div className="w-full max-w-[1215px] mx-auto">
        <header className="flex justify-between items-center">
          <h2 className="text-[32px] flex items-center gap-4 font-ptserif font-bold text-black">
            <Microphone size={32} weight="fill" className="text-orange-200" />
            Podcast
          </h2>
          <Button variant="tertiary" className="flex items-center gap-[10px]">
            Ouça outros podcasts aqui
            <CaretRight size={16} className="text-orange-200" weight="bold" />
          </Button>
        </header>

        <div className="mt-8 flex items-center gap-6 ">
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
