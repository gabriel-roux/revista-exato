import Button from '@/components/button'
import BookBookmark from '../components/icons/book-bookmark'
import CaretRight from '../components/icons/caret-right'
import CaretLeft from '../components/icons/caret-left'
import Banner from '../assets/banner.png'
import Image from 'next/image'
import { Edition } from '@/components/edition'
import { BreakingNews } from '@/components/breaking-news'
import Newspaper from '@/components/icons/newspaper'
import BookmarksSimple from '@/components/icons/bookmark-simple'
import { Notice } from '@/components/notice'

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

        <div className="w-full text-justiça flex justify-center items-center mt-16 h-[156px] bg-gray-400 rounded-lg">
          ADS
        </div>

        <section className="mt-24 w-full pb-8 border-b border-gray-500">
          <h2 className="font-ptserif font-bold text-black flex items-center gap-2">
            <Newspaper size={24} weight="fill" className="text-orange-200" />
            Últimas notícias
          </h2>

          <div className="flex items-start justify-between mt-8">
            <div className="w-[800px] text-política">
              <Notice
                category="mundo"
                createdAt="2021-09-13T15:00:00.000Z"
                title="Trump deve se apresentar hoje à Justiça"
                description="Ex-presidente dos EUA nega qualquer irregularidade e criticou as acusações que enfrente em um evento de campanha no sábado (10)"
                image=""
                size="large"
              />
            </div>

            <div className="w-[380px] flex flex-col gap-8">
              <Notice
                category="justiça"
                createdAt="2021-09-13T15:00:00.000Z"
                image=""
                size="medium"
                title="Trump deve se apresentar hoje à Justiça"
              />

              <div className="w-full bg-gray-500 h-[1px] text-brasil" />

              <div className="flex flex-col gap-4">
                <Notice
                  category="brasil"
                  createdAt="2021-09-13T15:00:00.000Z"
                  image=""
                  size="small"
                  title="Trump deve se apresentar hoje à Justiça"
                />
                <Notice
                  category="mundo"
                  createdAt="2021-09-13T15:00:00.000Z"
                  image=""
                  size="small"
                  title="Trump deve se apresentar hoje à Justiça"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col mt-8 gap-10">
          <div className="grid grid-cols-3 gap-10 text-mundo">
            <Notice
              category="mundo"
              createdAt="2021-09-13T15:00:00.000Z"
              image=""
              size="medium"
              title="Trump deve se apresentar hoje à Justiça"
            />
            <Notice
              category="política"
              createdAt="2021-09-13T15:00:00.000Z"
              image=""
              size="medium"
              title="Trump deve se apresentar hoje à Justiça"
            />
            <Notice
              category="justiça"
              createdAt="2021-09-13T15:00:00.000Z"
              image=""
              size="medium"
              title="Trump deve se apresentar hoje à Justiça"
            />
          </div>

          <div className="flex items-start justify-between">
            <div className="max-w-[380px] flex flex-col gap-6">
              <header className="flex items-center gap-2">
                <h2 className="text-2xl flex items-center gap-2 font-ptserif font-bold text-black">
                  <BookmarksSimple
                    size={24}
                    weight="fill"
                    className="text-orange-200"
                  />
                  Mais lidas
                </h2>
              </header>

              <div className="flex flex-col">
                <div className="flex items-start gap-4 pb-6 mb-6 border-b border-gray-500">
                  <p className="text-orange-400">1</p>

                  <p className="text-black font-semibold text-base">
                    Brasil teme nova crise de imigrantes no Acre após Chile e
                    Peru endurecerem contra imigrantes
                  </p>
                </div>
                <div className="flex items-start gap-4 pb-6 mb-6 border-b border-gray-500">
                  <p className="text-orange-400">2</p>

                  <p className="text-black font-semibold text-base">
                    Invasor que fez live na cadeira de Moraes é preso
                  </p>
                </div>
                <div className="flex items-start gap-4 pb-6 mb-6 border-b border-gray-500">
                  <p className="text-orange-400">3</p>

                  <p className="text-black font-semibold text-base">
                    Rosa Weber: como ministra acabou com farra dos pedidos de
                    vistas e foi contraponto a ministros políticos
                  </p>
                </div>
                <div className="flex items-start gap-4 pb-6 mb-6 border-b border-gray-500">
                  <p className="text-orange-400">4</p>

                  <p className="text-black font-semibold text-base">
                    Oposição articula PEC que permitiria ao Congresso Nacional
                    barrar decisões do STF
                  </p>
                </div>
                <div className="flex items-start gap-4 pb-6 mb-6">
                  <p className="text-orange-400">5</p>

                  <p className="text-black font-semibold text-base">
                    Campos Neto pediu e Lula vai recebê-lo no Planalto pela
                    primeira vez
                  </p>
                </div>
              </div>
            </div>

            <Notice
              title="Trump deve se apresentar hoje à Justiça"
              category="mundo"
              createdAt="2021-09-13T15:00:00.000Z"
              image=""
              size="large"
              description="Ex-presidente dos EUA nega qualquer irregularidade e criticou as acusações que enfrente em um evento de campanha no sábado (10)"
            />
          </div>
        </section>
      </div>
    </main>
  )
}
