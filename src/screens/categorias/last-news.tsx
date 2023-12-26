import { Notice } from '@/components/notice'

export function LastNewsCategories() {
  return (
    <section className="overflow-hidden w-full max-w-[1215px] mx-auto px-4 md:p-0 md:pb-8">
      <div className="flex flex-col md:flex-row justify-between items-start gap-5">
        <div className="flex flex-col gap-8 md:pr-5 md:border-r md:border-gray-500">
          <header className="hidden md:flex justify-between items-center">
            <h2 className="font-ptserif font-bold text-black text-[28px] flex items-center gap-2">
              Últimas notícias
            </h2>
          </header>

          <div className="flex flex-col gap-9">
            <Notice
              category="mundo"
              createdAt="2021-09-13T15:00:00.000Z"
              image=""
              size="small"
              title="Servidores do TSE monitoravam Monark para identificar críticas à Justiça Eleitoral"
              description="Ex-presidente dos EUA nega qualquer irregularidade e criticou as acusações que enfrente em um evento de campanha no sábado (10)"
            />
            <Notice
              category="mundo"
              createdAt="2021-09-13T15:00:00.000Z"
              image=""
              size="small"
              title="Servidores do TSE monitoravam Monark para identificar críticas à Justiça Eleitoral"
              description="Ex-presidente dos EUA nega qualquer irregularidade e criticou as acusações que enfrente em um evento de campanha no sábado (10)"
            />
            <Notice
              category="mundo"
              createdAt="2021-09-13T15:00:00.000Z"
              image=""
              size="small"
              title="Servidores do TSE monitoravam Monark para identificar críticas à Justiça Eleitoral"
              description="Ex-presidente dos EUA nega qualquer irregularidade e criticou as acusações que enfrente em um evento de campanha no sábado (10)"
            />
            <Notice
              category="mundo"
              createdAt="2021-09-13T15:00:00.000Z"
              image=""
              size="small"
              title="Servidores do TSE monitoravam Monark para identificar críticas à Justiça Eleitoral"
              description="Ex-presidente dos EUA nega qualquer irregularidade e criticou as acusações que enfrente em um evento de campanha no sábado (10)"
            />
            <Notice
              category="mundo"
              createdAt="2021-09-13T15:00:00.000Z"
              image=""
              size="small"
              title="Servidores do TSE monitoravam Monark para identificar críticas à Justiça Eleitoral"
              description="Ex-presidente dos EUA nega qualquer irregularidade e criticou as acusações que enfrente em um evento de campanha no sábado (10)"
            />
            <Notice
              category="mundo"
              createdAt="2021-09-13T15:00:00.000Z"
              image=""
              size="small"
              title="Servidores do TSE monitoravam Monark para identificar críticas à Justiça Eleitoral"
              description="Ex-presidente dos EUA nega qualquer irregularidade e criticou as acusações que enfrente em um evento de campanha no sábado (10)"
            />
          </div>
        </div>

        <div className="w-[380px] flex flex-col gap-8 pl-8">
          <header className="hidden md:flex justify-between items-center">
            <h2 className="font-ptserif font-bold text-black text-[28px] flex items-center gap-2">
              Top 5 semana
            </h2>
          </header>

          <div className="flex flex-col border-b border-gray-500">
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
                Rosa Weber: como ministra acabou com farra dos pedidos de vistas
                e foi contraponto a ministros políticos
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
                Campos Neto pediu e Lula vai recebê-lo no Planalto pela primeira
                vez
              </p>
            </div>
          </div>

          <div>
            <header className="hidden md:flex justify-between items-center mb-8">
              <h2 className="font-ptserif font-bold text-black text-[28px] flex items-center gap-2">
                Top 5 semana
              </h2>
            </header>

            <div className="flex flex-col gap-9">
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
      </div>

      <div className="w-[335px] mx-auto h-[45px] md:w-full flex justify-center items-center my-[48px] md:my-[72px] md:h-[156px] bg-gray-400 rounded-lg">
        ADS
      </div>
    </section>
  )
}
