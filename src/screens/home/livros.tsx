import Button from '@/components/button'
import CaretRight from '@/components/icons/caret-right'
import Tag from '@/components/icons/tag'
import { Livro } from '@/components/livro'

export default function Livraria() {
  return (
    <section className="w-full py-24">
      <div className="w-full max-w-[1215px] mx-auto">
        <header className="flex justify-between items-center">
          <h2 className="text-[32px] flex items-center gap-4 font-ptserif font-bold text-black">
            <Tag size={32} weight="fill" className="text-orange-200" />
            Livraria
          </h2>
          <Button variant="tertiary" className="flex items-center gap-[10px]">
            Ver todos
            <CaretRight size={16} className="text-orange-200" weight="bold" />
          </Button>
        </header>

        <div className="grid w-full grid-cols-4 gap-8 mt-8">
          <Livro />
          <Livro />
          <Livro />
          <Livro />
        </div>
      </div>
    </section>
  )
}
