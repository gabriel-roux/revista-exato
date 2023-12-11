import Button from '@/components/button'
import Quotes from '../../components/icons/quotes'
import CaretRight from '@/components/icons/caret-right'
import Image from 'next/image'
import QuotesImg from '@/assets/quotes.svg'
import OpniaoCarousel from './opniao-carousel'

export default function Opniao() {
  return (
    <section className="w-full bg-black h-[608px] py-20 relative mt-24">
      <div className="w-full max-w-[1215px] mx-auto flex flex-col gap-6">
        <header className="flex justify-between">
          <h2 className="text-[32px] flex items-   gap-4 font-ptserif font-bold text-white">
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
          <div className="min-w-[496px] relative z-10 pt-6 pb- flex flex-col justify-between h-[376px]">
            <h2 className="text-[32px] font-normal">
              O governo, policitamente fragilizado, teme que o desgaste de Lula
              se reflita negativamente na operação política.
            </h2>

            <p className="text-orange-200 text-base font-normal">
              Sérgio Ribas - Revista Exato
            </p>
          </div>
          <OpniaoCarousel />
        </div>
      </div>
    </section>
  )
}
