import Star from '@/components/icons/star'
import Button from '../button'
import CaretRight from '@/components/icons/caret-right'

export function Livro() {
  return (
    <div className="w-full md:w-[280px] md:h-[680px] flex flex-col gap-4 md:gap-6">
      <div className="flex md:flex-col gap-6">
        <div className="min-w-[105px] md:min-w-full h-[132px] md:h-[400px] rounded-lg bg-gray-200 flex items-center justify-center">
          LIVRO
        </div>

        <div className="flex flex-col gap-[6px] md:gap-6">
          <div className="w-full flex flex-col gap-1">
            <h4 className="font-medium text-sm md:text-base text-black">
              Pai Rico, Pai Pobre: o que os pais ensinam para os filhos
            </h4>
            <p className="font-normal text-sm text-gray-200">Robert Kiyosaki</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-[6px]">
              <Star
                weight="fill"
                size={24}
                className="text-orange-200 w-[16px] h-[16px] md:w-[24px] md:h-[24px]"
              />
              <Star
                weight="fill"
                size={24}
                className="text-orange-200 w-[16px] h-[16px] md:w-[24px] md:h-[24px]"
              />
              <Star
                weight="fill"
                size={24}
                className="text-orange-200 w-[16px] h-[16px] md:w-[24px] md:h-[24px]"
              />
              <Star
                weight="fill"
                size={24}
                className="text-orange-200 w-[16px] h-[16px] md:w-[24px] md:h-[24px]"
              />
              <Star
                weight="fill"
                size={24}
                className="text-orange-500 w-[16px] h-[16px] md:w-[24px] md:h-[24px]"
              />
            </div>

            <small className="text-sm text-gray-400 font-normal">(22)</small>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-manrope text-gray-400 text-[24px] md:text-[40px] font-normal">
              R$
            </span>
            <p className="text-[24px] md:text-[40px] font-semibold text-black">
              129<span className="text-[16px] md:text-[24px]">,90</span>
            </p>
          </div>
        </div>
      </div>

      <Button
        variant="secondary"
        className="w-full flex items-center justify-center gap-[10px]"
      >
        Comprar
        <CaretRight size={16} className="text-white" weight="regular" />
      </Button>
    </div>
  )
}
