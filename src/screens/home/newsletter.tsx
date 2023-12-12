import PaperPlaneTilt from '../../components/icons/paper-plane-tilt'
import CaretRight from '../../components/icons/caret-right'
import Button from '@/components/button'

export function Newsletter() {
  return (
    <section className="w-full bg-black h-[460px] py-20">
      <div className="w-full max-w-[1005px] mx-auto flex flex-col gap-[48px]">
        <div className="flex items-center justify-center flex-col gap-4">
          <PaperPlaneTilt size={32} weight="fill" className="text-orange-200" />
          <h2 className="text-[28px] text-center font-ptserif font-bold text-white">
            Inscreva-se agora para receber nossa newsletter <br /> com conteúdos
            exclusivos e em primeira mão.
          </h2>
          <p className="text-gray-500 text-base text-center font-manrope font-normal">
            Cada dia, uma seleção cuidadosa de notícias, artigos e atualizações
            <br />
            chegará diretamente em sua caixa de entrada.
          </p>
        </div>
        <div className="flex gap-4 max-w-[890px]">
          <input
            type="text"
            placeholder="Nome"
            className="w-full max-w-[350px] h-[54] px-4 bg-gray-100 rounded-md text-white placeholder-gray-300 font-manrope transition-all duration-200 outline-0 border-0 focus:shadow-input"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full max-w-[350px] h-[54] px-4 bg-gray-100 rounded-md text-white placeholder-gray-300 font-manrope transition-all duration-200 outline-0 border-0 focus:shadow-input"
          />
          <Button
            variant="secondary"
            size="lg"
            className="flex items-center justify-center gap-2"
          >
            Inscrever <CaretRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  )
}