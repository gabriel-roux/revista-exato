import { Notice } from '@/components/notice'
import CaretRight from '@/components/icons/caret-right'

import GlobeHemisphereWest from '@/components/icons/world'
import Bank from '@/components/icons/bank'
import Flag from '@/components/icons/flag'
import Gavel from '@/components/icons/gavel'
import Button from '@/components/button'

export default function CategoriesNews() {
  return (
    <section className="overflow-hidden my-12 md:mt-24 w-full max-w-[1215px] mx-auto px-4 md:p-0 md:pb-8">
      <header className="hidden md:flex justify-between items-center mb-8">
        <h2 className="font-ptserif font-bold text-black text-[2rem] flex items-center gap-2">
          <GlobeHemisphereWest size={32} weight="fill" className="text-mundo" />
          Mundo
        </h2>

        <Button
          variant="tertiary"
          className="flex items-center gap-[10px] text-black"
        >
          Ver mais
          <CaretRight size={16} className="text-orange-200" weight="bold" />
        </Button>
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

      <div className="grid grid-cols-[repeat(3,minmax(286px,1fr))] md:grid-cols-3 gap-10 overflow-x-auto md:overflow-x-hidden">
        <div className="flex flex-col gap-6 min-w-[286px]">
          <h4 className="flex gap-4 items-center font-ptserif text-[28px] text-black">
            <Bank weight="fill" size={24} className="text-economia" /> Economia
          </h4>
          <Notice
            category="economia"
            createdAt="2021-09-13T15:00:00.000Z"
            image=""
            size="medium"
            title="Trump deve se apresentar hoje à Justiça"
          />
          <div className="w-full h-[1px] bg-gray-500" />
          <div className="news">
            <h4>Empreendedorismo</h4>
            <p>
              Brasil teme nova crise de imigrantes no Acre após Chile e Peru
              endurecerem contra imigrantes
            </p>
          </div>
          <div className="news">
            <h4>Empreendedorismo</h4>
            <p>
              Brasil teme nova crise de imigrantes no Acre após Chile e Peru
              endurecerem contra imigrantes
            </p>
          </div>
          <div className="news">
            <h4>Empreendedorismo</h4>
            <p>
              Brasil teme nova crise de imigrantes no Acre após Chile e Peru
              endurecerem contra imigrantes
            </p>
          </div>
          <Button
            variant="tertiary"
            className="flex items-center gap-[10px] text-black pl-[0!important]"
          >
            Ver todos
            <CaretRight size={16} className="text-orange-200" weight="bold" />
          </Button>
        </div>
        <div className="flex flex-col gap-6 min-w-[286px]">
          <h4 className="flex gap-4 items-center font-ptserif text-[28px] text-black">
            <Flag weight="fill" size={24} className="text-política" /> Política
          </h4>
          <Notice
            category="política"
            createdAt="2021-09-13T15:00:00.000Z"
            image=""
            size="medium"
            title="Trump deve se apresentar hoje à Justiça"
          />
          <div className="w-full h-[1px] bg-gray-500" />
          <div className="news">
            <h4>Empreendedorismo</h4>
            <p>
              Brasil teme nova crise de imigrantes no Acre após Chile e Peru
              endurecerem contra imigrantes
            </p>
          </div>
          <div className="news">
            <h4>Empreendedorismo</h4>
            <p>
              Brasil teme nova crise de imigrantes no Acre após Chile e Peru
              endurecerem contra imigrantes
            </p>
          </div>
          <div className="news">
            <h4>Empreendedorismo</h4>
            <p>
              Brasil teme nova crise de imigrantes no Acre após Chile e Peru
              endurecerem contra imigrantes
            </p>
          </div>
          <Button
            variant="tertiary"
            className="flex items-center gap-[10px] text-black pl-[0!important]"
          >
            Ver todos
            <CaretRight size={16} className="text-orange-200" weight="bold" />
          </Button>
        </div>
        <div className="flex flex-col gap-6 min-w-[286px]">
          <h4 className="flex gap-4 items-center font-ptserif text-[28px] text-black">
            <Gavel weight="fill" size={24} className="text-justiça" /> Justiça
          </h4>
          <Notice
            category="justiça"
            createdAt="2021-09-13T15:00:00.000Z"
            image=""
            size="medium"
            title="Trump deve se apresentar hoje à Justiça"
          />
          <div className="w-full h-[1px] bg-gray-500" />

          <div className="news">
            <h4>Empreendedorismo</h4>
            <p>
              Brasil teme nova crise de imigrantes no Acre após Chile e Peru
              endurecerem contra imigrantes
            </p>
          </div>
          <div className="news">
            <h4>Empreendedorismo</h4>
            <p>
              Brasil teme nova crise de imigrantes no Acre após Chile e Peru
              endurecerem contra imigrantes
            </p>
          </div>
          <div className="news">
            <h4>Empreendedorismo</h4>
            <p>
              Brasil teme nova crise de imigrantes no Acre após Chile e Peru
              endurecerem contra imigrantes
            </p>
          </div>

          <Button
            variant="tertiary"
            className="flex items-center gap-[10px] text-black pl-[0!important]"
          >
            Ver todos
            <CaretRight size={16} className="text-orange-200" weight="bold" />
          </Button>
        </div>
      </div>
    </section>
  )
}
