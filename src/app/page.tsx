import Button from '@/components/button'
import BookBookmark from '../components/icons/book-bookmark'
import CaretRight from '../components/icons/caret-right'
import CaretLeft from '../components/icons/caret-left'
import Banner from '../assets/banner.png'
import Image from 'next/image'
import { Edition } from '@/components/edition'
import { BreakingNews } from '@/components/breaking-news'
import Newspaper from '@/components/icons/newspaper'
import Dot from '@/components/icons/dot'

export default function Home() {
  const monthlyEditions = [
    {
      title: 'Capa',
      desc: 'Trump deve se apresentar hoje à Justiça, lorem ipsum sit dolor.',
      isFree: true,
    },
    {
      title: 'Capa',
      desc: 'Trump deve se apresentar hoje à Justiça, lorem ipsum sit dolor.',
      isFree: false,
    },
    {
      title: 'Capa',
      desc: 'Trump deve se apresentar hoje à Justiça, lorem ipsum sit dolor.',
      isFree: false,
    },
    {
      title: 'Capa',
      desc: 'Trump deve se apresentar hoje à Justiça, lorem ipsum sit dolor.',
      isFree: false,
    },
    {
      title: 'Capa',
      desc: 'Trump deve se apresentar hoje à Justiça, lorem ipsum sit dolor.',
      isFree: false,
    },
    {
      title: 'Capa',
      desc: 'Trump deve se apresentar hoje à Justiça, lorem ipsum sit dolor.',
      isFree: false,
    },
  ]

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
                className="absolute w-[80px] h-[320px] transform -rotate-90 -bottom-[51%] left-[35%] "
              />
            </div>
            <div className="h-[325px] w-[calc(100%-300px)] flex flex-col gap-10">
              <div className="grid grid-cols-3 h-[258px]">
                {monthlyEditions.map((edition, index) => (
                  <Edition
                    key={index}
                    title={edition.title}
                    desc={edition.desc}
                    isFree={edition.isFree}
                  />
                ))}
              </div>

              <footer className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <button className="w-10 h-[2px] bg-orange-200" />
                  <button className="w-10 h-[2px] bg-gray-200" />
                  <button className="w-10 h-[2px] bg-gray-200" />
                </div>

                <div className="flex items-center gap-3">
                  <button>
                    <CaretLeft
                      size={24}
                      weight="bold"
                      className="text-gray-200 transition-all duration-200 hover:text-orange-200"
                    />
                  </button>
                  <button>
                    <CaretRight
                      size={24}
                      weight="bold"
                      className="text-gray-700 transition-all duration-200 hover:text-orange-200"
                    />
                  </button>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full max-w-[1215px] mx-auto mt-8">
        <BreakingNews />

        <div className="w-full flex justify-center items-center mt-16 h-[156px] bg-gray-400 rounded-lg">
          ADS
        </div>

        <section className="mt-24 w-full pb-4 border-b border-gray-500">
          <h2 className="font-ptserif font-bold text-black flex items-center gap-2">
            <Newspaper size={24} weight="fill" className="text-orange-200" />
            Últimas notícias
          </h2>

          <div className="flex items-start justify-between mt-8">
            <div className="w-[800px] flex flex-col gap-4 cursor-pointer">
              <div className="w-full relative overflow-hidden h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">
                Imagem
                <div className="absolute bottom-0 h-1 w-full bg-mundo" />
              </div>

              <div className="flex flex-col gap-2">
                <small className="text-mundo text-sm font-semibold font-manrope flex items-center">
                  MUNDO
                  <span className="inline-block w-[6px] h-[6px] bg-mundo rounded-full ml-2 mr-2"></span>
                  <span className="text-gray-200 font-normal">
                    Publicado agora
                  </span>
                </small>
                <h2 className="text-black text-[32px]">
                  Trump deve se apresentar hoje à Justiça
                </h2>
                <p className="text-gray-100 text-base">
                  Ex-presidente dos EUA nega qualquer irregularidade e criticou
                  as acusações que enfrente em um evento de campanha no sábado
                  (10)
                </p>
              </div>
            </div>

            <div className="w-[380px] flex flex-col gap-8">
              <div className="flex flex-col gap-4 cursor-pointer">
                <div className="w-full overflow-hidden h-[220px] rounded-lg bg-gray-100 flex items-center justify-center relative">
                  IMAGEM
                  <div className="absolute bottom-0 h-1 w-full bg-justiça" />
                </div>

                <div className="flex flex-col gap-2">
                  <small className="text-justiça text-sm font-semibold font-manrope flex items-center">
                    JUSTIÇA
                    <span className="inline-block w-[6px] h-[6px] bg-justiça rounded-full ml-2 mr-2"></span>
                    <span className="text-gray-200 font-normal">
                      8 horas atrás
                    </span>
                  </small>
                  <h2 className="text-black text-2xl">
                    Trump deve se apresentar hoje à Justiça, lorem ipsum dolor
                  </h2>
                </div>
              </div>

              <div className="w-full bg-gray-500 h-[1px]" />

              <div className="flex flex-col gap-6">
                <div className="flex gap-5 w-full cursor-pointer">
                  <div className="w-[96px] overflow-hidden h-[96px] rounded-lg bg-gray-100 flex items-center justify-center relative">
                    IMAGEM
                    <div className="absolute bottom-0 h-1 w-full bg-brasil" />
                  </div>

                  <div className="w-[calc(100%-116px)] flex flex-col gap-3">
                    <small className="text-brasil text-sm font-semibold font-manrope flex items-center">
                      BRAZIL
                      <span className="inline-block w-[6px] h-[6px] bg-brasil rounded-full ml-2 mr-2"></span>
                      <span className="text-gray-200 font-normal">
                        29/08/23
                      </span>
                    </small>
                    <h2 className="text-black text-base">
                      Trump deve se apresentar hoje à Justiça, lorem ipsum
                    </h2>
                  </div>
                </div>
                <div className="flex gap-5 w-full cursor-pointer">
                  <div className="w-[96px] overflow-hidden h-[96px] rounded-lg bg-gray-100 flex items-center justify-center relative">
                    IMAGEM
                    <div className="absolute bottom-0 h-1 w-full bg-mundo" />
                  </div>

                  <div className="w-[calc(100%-116px)] flex flex-col gap-3">
                    <small className="text-mundo text-sm font-semibold font-manrope flex items-center">
                      MUNDO
                      <span className="inline-block w-[6px] h-[6px] bg-mundo rounded-full ml-2 mr-2"></span>
                      <span className="text-gray-200 font-normal">
                        29/08/23
                      </span>
                    </small>
                    <h2 className="text-black text-base">
                      Trump deve se apresentar hoje à Justiça, lorem ipsum
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
