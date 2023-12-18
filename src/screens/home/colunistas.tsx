import PenNib from '@/components/icons/pen-nib'
import Button from '@/components/button'
import CaretRight from '@/components/icons/caret-right'
import ColunistasCarousel from './colunistas-carousel'

export default function Colunistas() {
  return (
    <section className="w-full bg-black h-[280px] md:h-[370px] pl-4 md:px-0 py-8 md:py-20">
      <div className="w-full md:max-w-[1215px] mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-[32px] flex items-center gap-2 font-ptserif font-bold text-white">
            <PenNib size={32} weight="fill" className="text-orange-200" />
            Colunistas
          </h2>

          <Button
            variant="tertiary"
            className="flex items-center gap-[10px] text-white"
          >
            Ver todos
            <CaretRight size={16} className="text-orange-200" weight="bold" />
          </Button>
        </header>

        <ColunistasCarousel />
      </div>
    </section>
  )
}
