import Button from '@/components/button'
import CaretRight from '@/components/icons/caret-right'
import Tag from '@/components/icons/tag'
import { Parceiro } from '@/components/parceiros'
import { Country } from '@/components/parceiros/country'

export default function Parceiros() {
  return (
    <section className="w-full md:h-[500px] bg-gray-600 py-12 md:py-24 px-4 md:px-0">
      <div className="w-full max-w-[1215px] mx-auto">
        <header className="flex justify-between items-center">
          <h2 className="text-[24px] md:text-[32px] flex items-center gap-4 font-ptserif font-bold text-black">
            <Tag
              weight="fill"
              className="text-orange-200 transform rotate-90 md:w-[32px] md:h-[32px] w-[24px] h-[24px]"
            />
            Parceiros
            <span className="w-[6px] h-[6px] bg-gray-400 rounded-full hidden md:block" />
            <Country />
          </h2>
          <Button variant="tertiary" className="flex items-center gap-[10px]">
            Ver todos
            <CaretRight size={16} className="text-orange-200" weight="bold" />
          </Button>
        </header>

        <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Parceiro />
          <Parceiro />
          <Parceiro />
          <Parceiro />
        </div>
      </div>
    </section>
  )
}
