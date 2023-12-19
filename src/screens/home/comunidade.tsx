import Bank from '@/components/icons/bank'
import Flag from '@/components/icons/flag'
import Gavel from '@/components/icons/gavel'
import Button from '@/components/button'
import { Notice } from '@/components/notice'
import CaretRight from '@/components/icons/caret-right'

export default function Comunidade() {
  return (
    <section className="px-4 mt-12 md:mt-24 w-full max-w-[1215px] mx-auto pb-8 border-b border-gray-500">
      <div className="grid grid-cols-[repeat(3,minmax(286px,1fr))] md:grid-cols-3 gap-10 overflow-x-auto md:overflow-x-hidden">
        <div className="flex flex-col gap-6 min-w-[286px]">
          <h4 className="flex gap-4 items-center font-ptserif text-[28px] text-black">
            <Bank weight="fill" size={24} className="text-economia" />{' '}
            Comunidade
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
            <Flag weight="fill" size={24} className="text-política" />{' '}
            Comunidade
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
            <Gavel weight="fill" size={24} className="text-justiça" />{' '}
            Comunidade
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

      <div className="w-[335px] mx-auto h-[45px] md:w-full flex justify-center items-center my-[48px] md:my-[72px] md:h-[156px] bg-gray-400 rounded-lg">
        ADS
      </div>
    </section>
  )
}
