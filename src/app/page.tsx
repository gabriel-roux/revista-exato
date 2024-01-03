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
import Cover from '@/assets/coverMainImage.svg'
import CalendarCheck from '@/components/icons/calendar-check'
import Hash from '@/components/icons/hash'

export default function Home() {
  return (
    <main className="overflow-x-hidden max-w-[100vw]">
      <section className="w-full border-y-2 border-orange-200 h-[396px] md:h-[506px] md:py-[56px] py-6 px-5 md:px-0 bg-black">
        <div className="w-full mx-auto max-w-[1215px] flex flex-col gap-8">
          <header className="hidden md:flex justify-between items-center">
            <h2 className="font-ptserif font-bold text-2xl flex items-center gap-2 text-white tracking-[-2%]">
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
              <CaretRight
                size={16}
                className="text-orange-200"
                weight="regular"
              />
            </Button>
          </header>

          <div className="h-[325px] w-full flex gap-6 md:gap-16 flex-col md:flex-row md:justify-between">
            <div className="relative">
              <div className="flex md:flex-col gap-3 rounded-lg bg-[#1A1A1A60] border border-[#ffffff30] md:border-0 md:bg-[transparent]">
                <div className="relative z-50 flex-shrink-0">
                  <Image
                    src={Banner}
                    alt="Banner"
                    width={202}
                    height={258}
                    quality={100}
                    className="md:w-[200px] md:h-[258px] w-[142px] h-[184px]"
                  />

                  <Image
                    src={Cover}
                    alt="Cover"
                    width={202}
                    height={258}
                    quality={100}
                    className="absolute z-10 md:w-[200px] md:h-[258px] top-0 left-0 w-[142px] h-[184px]"
                  />
                </div>

                <div className="relative z-20 flex flex-col gap-[2px] justify-between md:gap-3 py-3 md:p-0">
                  <h2 className="md:hidden font-ptserif font-bold text-lg md:text-2xl flex items-center gap-2 tracking-[-2%]">
                    <BookBookmark
                      size={24}
                      weight="fill"
                      className="text-orange-200"
                    />
                    Edição do Mês
                  </h2>

                  <div className="flex flex-col gap-[2px]">
                    <p className="flex items-center gap-[6px] text-sm font-manrope font-medium text-gray-400">
                      <CalendarCheck
                        size={16}
                        weight="fill"
                        className="text-orange-200"
                      />
                      5 de Novembro, 2023
                    </p>
                    <p className="flex items-center gap-[6px] text-sm font-manrope font-semibold text-gray-400">
                      <Hash
                        size={16}
                        weight="fill"
                        className="text-orange-200"
                      />
                      Edição de Nº45
                    </p>
                  </div>
                </div>
              </div>

              <div
                style={{
                  background:
                    'radial-gradient(100% 50.41% at 0% 48.27%, rgba(242, 77, 0, 0.70) 0%, rgba(242, 77, 0, 0.00) 100%)',
                }}
                className="absolute z-10 w-[80px] h-[320px] transform -top-[78%] md:top-[52.5%] rotate-90 md:-rotate-90 left-[35%] "
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
