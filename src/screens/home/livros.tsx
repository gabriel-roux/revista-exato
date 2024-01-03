import Button from '@/components/button'
import CaretRight from '@/components/icons/caret-right'
import Tag from '@/components/icons/tag'
import { Livro } from '@/components/livro'

export default function Livraria() {
  return (
    <section className="w-full px-4 py-12 md:py-24">
      <div className="w-full max-w-[1215px] mx-auto">
        <header className="flex justify-between items-center">
          <h2 className="text-2xl md:text-[32px] flex items-center gap-4 font-ptserif font-bold text-black">
            <Tag
              size={32}
              weight="fill"
              className="text-orange-200 transform rotate-90 md:w-[32px] md:h-[32px] w-[24px] h-[24px]"
            />
            Livraria
            <span className="hidden md:block w-[6px] h-[6px] bg-gray-400 rounded-full font-normal" />
            <span
              style={{
                fontWeight: 400,
              }}
              className="hidden md:block text-gray-400"
            >
              Mais vendidos
            </span>
          </h2>
          <Button variant="tertiary" className="flex items-center gap-[10px]">
            Ver todos
            <CaretRight
              size={16}
              className="text-orange-200"
              weight="regular"
            />
          </Button>
        </header>

        <div className="grid w-full grid-cols-1 md:grid-cols-4 gap-8 mt-8">
          <Livro />
          <Livro />
          <Livro />
          <Livro />
        </div>
      </div>
    </section>
  )
}
