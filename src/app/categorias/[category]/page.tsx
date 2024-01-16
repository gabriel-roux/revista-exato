import GlobeHemisphereWest from '@/components/icons/world'
import { Notice } from '@/components/notice'
import { LastNewsCategories } from '@/screens/categorias/last-news'
import MoreNews from '@/screens/categorias/more-news'

export default function CategoryPage() {
  return (
    <main className="pt-8 md:pt-16 border-t border-gray-500">
      <section className="overflow-hidden w-full max-w-[1215px] mx-auto px-4 md:p-0">
        <header className="flex justify-between items-center mb-8">
          <h2 className="font-ptserif font-bold text-black text-[2rem] flex items-center gap-2">
            <GlobeHemisphereWest
              size={32}
              weight="fill"
              className="text-mundo"
            />
            Mundo
          </h2>
        </header>

        <div className="flex items-start justify-between mt-8 flex-col md:flex-row-reverse">
          <div className="max-w-full md:w-[800px]">
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
              category="mundo"
              createdAt="2021-09-13T15:00:00.000Z"
              image=""
              size="medium"
              title="Trump deve se apresentar hoje à Justiça"
            />

            <div className="w-full bg-gray-500 h-[1px]" />

            <div className="flex flex-col gap-4">
              <Notice
                category="mundo"
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

        <div className="w-[335px] mx-auto h-[45px] md:w-full flex justify-center items-center my-[48px] md:my-[72px] md:h-[156px] bg-gray-400 rounded-lg">
          ADS
        </div>
      </section>

      <LastNewsCategories />
      <MoreNews />
    </main>
  )
}
