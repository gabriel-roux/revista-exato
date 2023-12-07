import Button from '@/components/button'
import * as ImageIcon from '@/components/icons/image'
import CaretRight from '@/components/icons/caret-right'
import { ImagesGalery } from '@/components/galery-images'

export function Galeria() {
  return (
    <section className="w-full bg-black h-[860px] py-24 relative">
      <div className="w-full max-w-[1215px] mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-[32px] flex items-center gap-4 font-ptserif font-bold text-white">
            <ImageIcon.default
              size={32}
              weight="fill"
              className="text-orange-200"
            />
            Galeria
          </h2>

          <Button
            variant="tertiary"
            className="flex items-center gap-[10px] text-white"
          >
            Ver outras galerias
            <CaretRight size={16} className="text-orange-200" weight="bold" />
          </Button>
        </header>

        <div className="pointer-events-none absolute z-10 left-0 w-[370px] h-[460px] bg-gradient-to-r from-black to-black/0" />
        <div className="pointer-events-none absolute z-10 right-0 w-[370px] h-[460px] bg-gradient-to-l from-black to-black/0" />
        <ImagesGalery />
        <div className="mt-4"></div>
      </div>
    </section>
  )
}
