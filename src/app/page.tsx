import Button from '@/components/button'
import BookBookmark from '@/components/icons/book-bookmark'
import CaretRight from '@/components/icons/caret-right'
import Banner from '@/assets/banner.png'
import Image from 'next/image'

import LastNews from '@/screens/home/last-news'
import Colunistas from '@/screens/home/colunistas'
import CategoriesNews from '@/screens/home/categories-news'
import Opniao from '@/screens/home/opniao'
import Podcasts from '@/screens/home/podcast'
import Videos from '@/screens/home/videos'
import { Galeria } from '@/screens/home/galeria'
import Parceiros from '@/screens/home/parceiros'
import Livraria from '@/screens/home/livros'
import { Newsletter } from '@/screens/home/newsletter'
import Comunidade from '@/screens/home/comunidade'
import EditionCarousel from '@/screens/home/main-carousel'

export default function Home() {
  return (
    <main>
      <section className="w-full border-y-2 border-orange-200 h-[506px] py-[56px] bg-black">
        <div className="w-full mx-auto max-w-[1215px] flex flex-col gap-8">
          <header className="flex justify-between items-center">
            <h2 className="font-ptserif font-bold text-2xl flex items-center gap-2 tracking-[-2%]">
              <BookBookmark
                size={24}
                weight="fill"
                className="text-orange-200"
              />
              Edição do Mês
            </h2>

            <Button
              variant="tertiary"
              className="flex items-center gap-[10px] text-white"
            >
              Ver todas as edições
              <CaretRight size={16} className="text-orange-200" weight="bold" />
            </Button>
          </header>

          <div className="h-[325px] w-full flex gap-16 justify-between">
            <div className="relative">
              <Image
                src={Banner}
                alt="Banner"
                width={200}
                height={315}
                quality={100}
                className="relative z-10 w-[200px] h-[315px]"
              />

              <div
                style={{
                  background:
                    'radial-gradient(100% 50.41% at 0% 48.27%, rgba(242, 77, 0, 0.70) 0%, rgba(242, 77, 0, 0.00) 100%)',
                }}
                className="absolute z-10 w-[80px] h-[320px] transform -rotate-90 -bottom-[51%] left-[35%] "
              />
            </div>
            <EditionCarousel />
          </div>
        </div>
      </section>

      <LastNews />

      <Colunistas />

      <CategoriesNews />

      <Opniao />

      <Podcasts />

      <Videos />

      <Galeria />

      <Parceiros />

      <Livraria />

      <Newsletter />

      <Comunidade />
    </main>
  )
}
