import { BreakingNews } from '@/components/breaking-news'
import { Notice } from '@/components/notice'
import Newspaper from '@/components/icons/newspaper'
import BookmarksSimple from '@/components/icons/bookmark-simple'
import LiveNotice from '@/components/live'

export default function LastNews() {
  return (
    <div className="w-full md:max-w-[1215px] mx-auto md:mt-10">
      <BreakingNews />

      <div className="w-[335px] mx-auto h-[45px] md:w-full flex justify-center items-center mt-[48px] md:mt-[72px] md:h-[156px] bg-gray-400 rounded-lg">
        ADS
      </div>

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

          <div className="max-w-full md:w-[380px] flex flex-col gap-8">
            <Notice
              category="justiça"
              createdAt="2021-09-13T15:00:00.000Z"
              image=""
              size="medium"
              title="Trump deve se apresentar hoje à Justiça"
            />

            <div className="w-full bg-gray-500 h-[1px]" />

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
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
          <LiveNotice />

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

        <div className="flex flex-col md:flex-row px-4 md:px-0 items-start justify-between">
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
                  Brasil teme nova crise de imigrantes no Acre após Chile e Peru
                  endurecerem contra imigrantes
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

      <div className="w-[335px] mx-auto h-[45px] md:w-full flex justify-center items-center my-[48px] md:my-[72px] md:h-[156px] bg-gray-400 rounded-lg">
        ADS
      </div>
    </div>
  )
}
