import PenNib from '@/components/icons/pen-nib'
import ColunistaImg from '@/assets/colunista.png'
import Button from '@/components/button'
import CaretRight from '@/components/icons/caret-right'
import Image from 'next/image'
import CaretLeft from '@/components/icons/caret-left'

export default function Colunistas() {
  return (
    <section className="w-full bg-black h-[370px] py-20">
      <div className="w-full max-w-[1215px] mx-auto">
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

        <div className="w-full grid grid-cols-3 gap-10">
          <div className="w-wull flex gap-6 items-center">
            <Image
              src={ColunistaImg}
              alt="Colunista"
              width={72}
              height={72}
              quality={100}
            />

            <div className="flex flex-col gap-1">
              <h2 className="text-lg text-orange-200">Fernanda Silva</h2>
              <p className="text-sm text-gray-700">
                A participação desastrosa do general Heleno na CPI do 8 de
                Janeiro
              </p>
            </div>
          </div>
          <div className="w-wull flex gap-6 items-center">
            <Image
              src={ColunistaImg}
              alt="Colunista"
              width={72}
              height={72}
              quality={100}
            />

            <div className="flex flex-col gap-1">
              <h2 className="text-lg text-orange-200">Fernanda Silva</h2>
              <p className="text-sm text-gray-700">
                A participação desastrosa do general Heleno na CPI do 8 de
                Janeiro
              </p>
            </div>
          </div>
          <div className="w-wull flex gap-6 items-center">
            <Image
              src={ColunistaImg}
              alt="Colunista"
              width={72}
              height={72}
              quality={100}
            />

            <div className="flex flex-col gap-1">
              <h2 className="text-lg text-orange-200">Fernanda Silva</h2>
              <p className="text-sm text-gray-700">
                A participação desastrosa do general Heleno na CPI do 8 de
                Janeiro
              </p>
            </div>
          </div>
        </div>
        <footer className="w-full flex justify-between items-center mt-8">
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
    </section>
  )
}
