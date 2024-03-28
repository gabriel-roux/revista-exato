import Image from 'next/image'
import ProfileBanner from '@/assets/profile.svg'
import CaretDown from '@/components/icons/caret-down'
import Colunista from '@/assets/colunista-lg.png'
import BookmarksSimple from '@/components/icons/bookmark-simple'
import Button from '@/components/button'
import { Newsletter } from '@/screens/home/newsletter'
import Newspaper from '@/components/icons/newspaper'
import { Notice } from '@/components/notice'
import InstagramLogo from '@/components/icons/instagram'
import TwitterLogo from '@/components/icons/twitter'

export default function RevistasPage() {
  return (
    <main className="w-full bg-[#FFF]">
      <section className="w-full h-[200px] relative">
        <Image
          src={ProfileBanner}
          alt="bg"
          width={1120}
          height={220}
          className="w-full h-[220px] object-cover absolute"
        />

        <div className="w-full max-w-[1215px] mx-auto h-full flex items-center gap-10 relative z-10">
          <Image src={Colunista} alt="bg" width={111} height={111} />

          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-ptserif text-white font-bold">
              Fernanda Silva
            </h1>
            <p className="text-base text-gray-300">
              Monica bergamo é jornalista colunista
            </p>

            <div className="flex items-center gap-2">
              <button className="w-[26px] h-[26px] rounded-[4px] bg-orange-200 transition-all duration-200 flex items-center justify-center text-white hover:bg-orange-300">
                <InstagramLogo className="fill-white w-3 h-3" />
              </button>

              <button className="w-[26px] h-[26px] rounded-[4px] bg-orange-200 transition-all duration-200 flex items-center justify-center text-white hover:bg-orange-300">
                <TwitterLogo className="fill-white w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1215px] mx-auto ">
        <section className="md:mt-24 p-4 md:p-0 mt-12 w-full md:pb-8 border-b border-gray-500">
          <h2 className="font-ptserif text-[32px] font-bold text-black flex items-center gap-2">
            <Newspaper size={24} weight="fill" className="text-orange-200" />
            Últimas notícias
          </h2>

          <div className="flex flex-col md:flex-row items-start md:justify-between mt-8">
            <div className="max-w-[100vw] md:w-[800px]">
              <Notice
                category="mundo"
                createdAt="2021-09-13T15:00:00.000Z"
                title="Trump deve se apresentar hoje à Justiça"
                description="Ex-presidente dos EUA nega qualquer irregularidade e criticou as acusações que enfrente em um evento de campanha no sábado (10)"
                image=""
                size="large"
              />
            </div>

            <div className="md:hidden my-8 w-full h-[1px] bg-gray-500" />

            <div className="md:max-w-[380px] flex flex-col gap-6">
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
                <div className="flex items-start gap-4 pb-6 mb-6 border-b border-gray-500 hover:text-orange-200">
                  <p className="text-orange-400">1</p>

                  <p className="[&:not(:hover)]:text-black font-semibold text-base transition-colors duration-200">
                    Brasil teme nova crise de imigrantes no Acre após Chile e
                    Peru endurecerem contra imigrantes
                  </p>
                </div>
                <div className="flex items-start gap-4 pb-6 mb-6 border-b border-gray-500 hover:text-orange-200">
                  <p className="text-orange-400">2</p>

                  <p className="[&:not(:hover)]:text-black font-semibold text-base transition-colors duration-200">
                    Invasor que fez live na cadeira de Moraes é preso
                  </p>
                </div>
                <div className="flex items-start gap-4 pb-6 mb-6 border-b border-gray-500 hover:text-orange-200">
                  <p className="text-orange-400">3</p>

                  <p className="[&:not(:hover)]:text-black font-semibold text-base transition-colors duration-200">
                    Rosa Weber: como ministra acabou com farra dos pedidos de
                    vistas e foi contraponto a ministros políticos
                  </p>
                </div>
                <div className="flex items-start gap-4 pb-6 mb-6 border-b border-gray-500 hover:text-orange-200">
                  <p className="text-orange-400">4</p>

                  <p className="[&:not(:hover)]:text-black font-semibold text-base transition-colors duration-200">
                    Oposição articula PEC que permitiria ao Congresso Nacional
                    barrar decisões do STF
                  </p>
                </div>
                <div className="flex items-start gap-4 pb-6 mb-6 hover:text-orange-200">
                  <p className="text-orange-400">5</p>

                  <p className="[&:not(:hover)]:text-black font-semibold text-base transition-colors duration-200">
                    Campos Neto pediu e Lula vai recebê-lo no Planalto pela
                    primeira vez
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col mt-8 gap-10">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
            <div className="px-4 md:p-0">
              <Notice
                category="política"
                createdAt="2021-09-13T15:00:00.000Z"
                image=""
                size="medium"
                title="Trump deve se apresentar hoje à Justiça"
              />
            </div>

            <div className="px-4 md:p-0">
              <Notice
                category="política"
                createdAt="2021-09-13T15:00:00.000Z"
                image=""
                size="medium"
                title="Trump deve se apresentar hoje à Justiça"
              />
            </div>
            <div className="px-4 md:p-0">
              <Notice
                category="justiça"
                createdAt="2021-09-13T15:00:00.000Z"
                image=""
                size="medium"
                title="Trump deve se apresentar hoje à Justiça"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
            <div className="px-4 md:p-0">
              <Notice
                category="política"
                createdAt="2021-09-13T15:00:00.000Z"
                image=""
                size="medium"
                title="Trump deve se apresentar hoje à Justiça"
              />
            </div>

            <div className="px-4 md:p-0">
              <Notice
                category="política"
                createdAt="2021-09-13T15:00:00.000Z"
                image=""
                size="medium"
                title="Trump deve se apresentar hoje à Justiça"
              />
            </div>
            <div className="px-4 md:p-0">
              <Notice
                category="justiça"
                createdAt="2021-09-13T15:00:00.000Z"
                image=""
                size="medium"
                title="Trump deve se apresentar hoje à Justiça"
              />
            </div>
          </div>
        </section>
        <div className="flex items-center justify-center w-full my-20">
          <Button
            variant="tertiary"
            className="flex items-center gap-[10px] text-black"
          >
            Carregar mais
            <CaretDown size={16} className="text-orange-200" weight="bold" />
          </Button>
        </div>
      </section>

      <Newsletter />

      <div className="w-full max-w-[1215px] mx-auto">
        <div className="w-[335px] mx-auto h-[45px] md:w-full flex justify-center items-center my-[48px] md:my-[96px] md:h-[156px] bg-gray-400 rounded-lg">
          ADS
        </div>
      </div>
    </main>
  )
}
