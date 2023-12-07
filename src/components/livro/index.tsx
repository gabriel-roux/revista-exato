import Star from '@/components/icons/star'
import Button from '../button'
import CaretRight from '@/components/icons/caret-right'

export function Livro() {
  return (
    <div className="w-[280px] h-[680px] flex flex-col gap-6">
      <div className="w-full h-[400px] rounded-lg bg-gray-200 flex items-center justify-center">
        LIVRO
      </div>

      <div className="w-full flex flex-col gap-1">
        <h4 className="font-medium text-base text-black">
          Pai Rico, Pai Pobre: o que os pais ensinam para os filhos
        </h4>
        <p className="font-normal text-sm text-gray-200">Robert Kiyosaki</p>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-[6px]">
          <Star weight="fill" size={24} className="text-orange-200" />
          <Star weight="fill" size={24} className="text-orange-200" />
          <Star weight="fill" size={24} className="text-orange-200" />
          <Star weight="fill" size={24} className="text-orange-200" />
          <Star weight="fill" size={24} className="text-orange-500" />
        </div>

        <small className="text-sm text-gray-400 font-normal">(22)</small>
      </div>

      <div className="flex items-center gap-2">
        <span className="font-manrope text-gray-400 text-[40px] font-normal">
          R$
        </span>
        <p className="text-[40px] font-semibold text-black">
          129<span className="text-[24px]">,90</span>
        </p>
      </div>

      <Button
        variant="secondary"
        className="w-full flex items-center justify-center gap-[10px]"
      >
        Comprar
        <CaretRight size={16} className="text-white" weight="bold" />
      </Button>
    </div>
  )
}
