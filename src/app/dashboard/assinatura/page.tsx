import Check from '@/components/icons/check'
import PencilLine from '@/components/icons/pencil-simples-line'
import UserRectangle from '@/components/icons/user-rectangle'
import CreditCard from '@/components/icons/credit-card'
import Schedule from '@/components/icons/schedule'

export default function AssinaturaPage() {
  return (
    <main className="mt-12 mb-[250px]">
      <header className="w-full max-w-[1150px] mx-auto">
        <h1 className="text-3xl font-bold text-black">Minha assinatura</h1>

        <div className="flex items-center gap-14 mt-8">
          <button className="flex items-center gap-2 text-black font-manrope font-semibold text-sm relative">
            <UserRectangle className="fill-orange-200" /> Meu plano
            <span className="w-full h-[2px] rounded-full bg-orange-200 absolute -bottom-5 right-0" />
          </button>
          <button className="flex items-center gap-2 text-gray-300 font-manrope font-medium text-sm">
            <CreditCard weight="normal" className="fill-gray-300" />
            Métodos de Pagamento
          </button>
          <button className="flex items-center gap-2 text-gray-300 font-manrope font-medium text-sm">
            <Schedule size={20} weight="regular" className="fill-gray-300" />
            Histórico de Pagamento
          </button>
        </div>
      </header>
      <div className="w-full h-[1px] bg-gray-500 mt-5 mb-12" />

      <div className="w-full max-w-[1150px] mx-auto">
        <div className="flex items-start gap-20">
          <div className="py-10 px-[50px] rounded-lg bg-gray-700">
            <header className="flex items-center gap-4 pb-6 mb-6 border-b border-gray-500">
              <p className="text-sm font-medium text-gray-200">Seu plano:</p>
              <h3 className="text-xl font-bold text-black">Plano mensal</h3>
            </header>

            <ul className="flex flex-col gap-6">
              <li className="flex items-center gap-3 text-gray-100 font-manrope text-sm font-semibold">
                <Check weight="bold" size={16} className="fill-orange-200" />
                Acesso ilimitado a notícias, análises, vídeos e podcasts.
              </li>
              <li className="flex items-center gap-3 text-gray-100 font-manrope text-sm font-semibold">
                <Check weight="bold" size={16} className="fill-orange-200" />
                Acesso ilimitado a todas ediçoes da exato
              </li>
              <li className="flex items-center gap-3 text-gray-100 font-manrope text-sm font-semibold">
                <Check weight="bold" size={16} className="fill-orange-200" />
                Acesso aos cupons dos parceiros da exato.
              </li>
              <li className="flex items-center gap-3 text-gray-100 font-manrope text-sm font-semibold">
                <Check weight="bold" size={16} className="fill-orange-200" />
                Os melhores colunistas do brasil e do mundo.
              </li>
              <li className="flex items-center gap-3 text-gray-100 font-manrope text-sm font-semibold">
                <Check weight="bold" size={16} className="fill-orange-200" />
                Os melhores colunistas do brasil e do mundo.
              </li>
            </ul>
          </div>

          <div className="w-[525px] flex flex-col gap-9">
            <div className="flex flex-col gap-[18px]">
              <p className="flex items-center gap-3 text-base text-gray-100 font-semibold">
                Valor da assinatura
                <span className="font-normal text-gray-200">R$ 3,90</span>
              </p>
              <p className="flex items-center gap-3 text-base text-gray-100 font-semibold">
                Data da assinatura:
                <span className="font-normal text-gray-200">04/08/2023</span>
              </p>
              <p className="flex items-center gap-3 text-base text-gray-100 font-semibold">
                Último pagamento:
                <span className="font-normal text-gray-200">04/12/2023</span>
              </p>
            </div>

            <div className="w-full h-[1px] bg-gray-500" />

            <div className="flex flex-col gap-8">
              <button className="items-center flex text-orange-200 fill-orange-200 transition-all duration-200 ease-in hover:fill-black hover:text-black font-manrope gap-2">
                Alterar plano
                <PencilLine weight="fill" size={20} className="flex-shrink-0" />
              </button>
              <button className="items-center flex text-orange-200 fill-orange-200 transition-all duration-200 ease-in hover:fill-black hover:text-black font-manrope gap-2">
                Cancelar assinatura
                <PencilLine weight="fill" size={20} className="flex-shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
