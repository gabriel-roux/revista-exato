import Button from '@/components/button'
import Quotes from '../../components/icons/quotes'
import CaretRight from '@/components/icons/caret-right'
import CaretLeft from '@/components/icons/caret-left'
import Sugestion from '@/components/sugestion'
import Image from 'next/image'
import QuotesImg from '@/assets/quotes.svg'

const opnioes = [
  {
    name: 'Sérgio Ribas - Revista Exato',
    sugestion:
      'Trump deve se apresentar hoje à Justiça, lorem ipsum sit dolor.',
    isFree: true,
    createdAt: '2021-09-13T15:00:00.000Z',
  },
  {
    name: 'Sérgio Ribas - Revista Exato',
    sugestion:
      'Trump deve se apresentar hoje à Justiça, lorem ipsum sit dolor.',
    isFree: false,
    createdAt: '2021-09-13T15:00:00.000Z',
  },
  {
    name: 'Sérgio Ribas - Revista Exato',
    sugestion:
      'Trump deve se apresentar hoje à Justiça, lorem ipsum sit dolor.',
    isFree: false,
    createdAt: '2021-09-13T15:00:00.000Z',
  },
  {
    name: 'Sérgio Ribas - Revista Exato',
    sugestion:
      'Trump deve se apresentar hoje à Justiça, lorem ipsum sit dolor.',
    isFree: false,
    createdAt: '2021-09-13T15:00:00.000Z',
  },
]

export default function Opniao() {
  return (
    <section className="w-full bg-black h-[608px] py-20 relative mt-24">
      <div className="w-full max-w-[1215px] mx-auto flex flex-col gap-6">
        <header className="flex justify-between">
          <h2 className="text-[32px] flex items-center gap-4 font-ptserif font-bold text-white">
            <Quotes
              size={32}
              weight="fill"
              className="text-orange-200 transform rotate-180"
            />
            Opinião
          </h2>

          <div>
            <Button
              variant="tertiary"
              className="flex items-center gap-[10px] text-white"
            >
              Ver todos
              <CaretRight size={16} className="text-orange-200" weight="bold" />
            </Button>

            <Image
              src={QuotesImg}
              alt=""
              width={266}
              height={166}
              quality={100}
              className="absolute top-0 ml-[-140px]"
            />
          </div>
        </header>

        <div className="flex justify-between items-start gap-10">
          <div className="w-[496px] pt-6 pb- flex flex-col justify-between h-[376px]">
            <h2 className="text-[32px] font-normal">
              O governo, policitamente fragilizado, teme que o desgaste de Lula
              se reflita negativamente na operação política.
            </h2>

            <p className="text-orange-200 text-base font-normal">
              Sérgio Ribas - Revista Exato
            </p>
          </div>

          <div className="flex flex-col gap-10">
            <div className="grid grid-cols-2">
              {opnioes.map((opniao, index) => (
                <Sugestion
                  createdAt={opniao.createdAt}
                  name={opniao.name}
                  sugestion={opniao.sugestion}
                  isFree={opniao.isFree}
                  key={index}
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
  )
}
