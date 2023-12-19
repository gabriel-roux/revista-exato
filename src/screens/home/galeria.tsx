import Button from '@/components/button'
import * as ImageIcon from '@/components/icons/image'
import CaretRight from '@/components/icons/caret-right'
import { ImagesGalery } from '@/components/galery-images'

export function Galeria() {
  return (
    <section className="w-full bg-black h-[547px] md:h-[860px] py-12 px-4 md:px-0 md:py-24 relative">
      <div className="w-full max-w-[1215px] mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-[24px] md:text-[32px] flex items-center gap-2 md:gap-4 font-ptserif font-bold text-white">
            <ImageIcon.default
              size={32}
              weight="fill"
              className="text-orange-200 w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
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

        <div className="hidden md:block pointer-events-none absolute z-10 left-0 w-[370px] h-[460px] bg-gradient-to-r from-black to-black/0" />
        <div className="hidden md:block pointer-events-none absolute z-10 right-0 w-[370px] h-[460px] bg-gradient-to-l from-black to-black/0" />
        <ImagesGalery />
      </div>
    </section>
  )
}
