import Button from '@/components/button'
import Checkbox from '@/components/checkbox'
import AddressBook from '@/components/icons/address-book'
import Cardholder from '@/components/icons/cardholder'
import CheckCircle from '@/components/icons/check-circle'
import MagnifyGlassFilled from '@/components/icons/magnify-glass-filled'
import PencilSimpleLine from '@/components/icons/pencil-simples-line'
import Link from 'next/link'

export default function AssinarPage() {
  return (
    <main>
      <section className="w-full bg-gray-700 py-20 flex items-center justify-start flex-col gap-20">
        <div className="w-full max-w-[1220px] mx-auto flex items-start justify-center gap-10">
          <div className="flex flex-col gap-8">
            <div className="w-[695px] rounded-lg p-14 bg-[#FFF] flex flex-col gap-9">
              <header className="flex items-center justify-between w-full">
                <h2 className="flex items-center gap-[18px] text-orange-200 text-lg font-bold">
                  <span className="w-7 h-7 text-sm items-center justify-center flex rounded-full border border-orange-600">
                    1
                  </span>

                  <span className="flex items-center gap-[14px]">
                    <AddressBook />
                    Dados pessoais
                  </span>
                </h2>

                <p className="text-gray-300 text-sm font-medium underline">
                  Ja possui cadastro?{' '}
                  <Link href="/" className="text-gray-100">
                    Faça login
                  </Link>
                </p>
              </header>

              <div className="flex flex-col gap-6">
                <div className="w-full flex flex-col gap-1">
                  <p className="text-xs font-semibold text-gray-300">
                    Seu nome*
                  </p>

                  <input
                    placeholder="Insira seu nome"
                    className="h-[50px] w-full transition-all duration-200 focus:border-orange-200  border-[1.5px] border-gray-500 bg-[#fff] p-6 rounded-lg outline-0 text-gray-100"
                  />
                </div>
                <div className="w-full flex flex-col gap-1">
                  <p className="text-xs font-semibold text-gray-300">E-mail*</p>

                  <input
                    placeholder="Insira seu email"
                    className="h-[50px] w-full  transition-all duration-200 focus:border-orange-200 border-[1.5px] border-gray-500 bg-[#fff] p-6 rounded-lg outline-0 text-gray-100"
                  />
                </div>
                <div className="w-full flex flex-col gap-1">
                  <p className="text-xs font-semibold text-gray-300">Senha*</p>

                  <input
                    placeholder="Insira sua senha"
                    className="h-[50px] w-full transition-all duration-200 focus:border-orange-200  border-[1.5px] border-gray-500 bg-[#fff] p-6 rounded-lg outline-0 text-gray-100"
                  />
                </div>
                <div className="w-full flex flex-col gap-1">
                  <p className="text-xs font-semibold text-gray-300">
                    Confirmar senha*
                  </p>

                  <input
                    placeholder="Confirme sua senha"
                    className="h-[50px] w-full transition-all duration-200 focus:border-orange-200  border-[1.5px] border-gray-500 bg-[#fff] p-6 rounded-lg outline-0 text-gray-100"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-gray-200 text-sm flex items-center gap-2">
                  <Checkbox /> Li e concordo com os Termos de Uso e Política de
                  Privacidade *
                </p>

                <p className="text-gray-200 text-sm flex items-center gap-2">
                  <Checkbox /> Quero receber as principais notícias do dia no
                  meu e-mail
                </p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-gray-200 text-xs">*Campos obrigatórios</p>

                <Button
                  size="md"
                  variant="secondary"
                  className="w-[200px] h-[50px] bg-orange-200 text-gray-700 font-semibold"
                >
                  Confirmar cadastro
                </Button>
              </div>
            </div>

            <div className="w-[695px] rounded-lg p-14 bg-[#FFF] flex flex-col gap-9">
              <header className="flex items-center justify-between w-full">
                <h2 className="flex items-center gap-[18px] text-gray-300 text-lg font-bold">
                  <span className="w-7 h-7 text-sm items-center justify-center flex rounded-full border border-orange-600">
                    2
                  </span>

                  <span className="flex items-center gap-[14px]">
                    <Cardholder className="fill-gray-300" />
                    Forma de pagamento
                  </span>
                </h2>
              </header>
            </div>

            <div className="w-[695px] rounded-lg p-14 bg-[#FFF] flex flex-col gap-9">
              <header className="flex items-center justify-between w-full">
                <h2 className="flex items-center gap-[18px] text-gray-300 text-lg font-bold">
                  <span className="w-7 h-7 text-sm items-center justify-center flex rounded-full border border-orange-600">
                    3
                  </span>

                  <span className="flex items-center gap-[14px]">
                    <MagnifyGlassFilled className="fill-gray-300" />
                    Revise seu pedido
                  </span>
                </h2>
              </header>
            </div>
          </div>

          <div className="w-[485px] bg-[#FFF] rounded-lg sticky top-14">
            <div className="w-full p-10 border-b border-gray-500">
              <div className="flex flex-col gap-2 w-full">
                <p className="text-gray-100 text-sm font-semibold">
                  Plano escolhido:
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <h2 className="text-xl font-bold text-black">
                      Plano semestral
                    </h2>

                    <span className="py-[2px] px-2 rounded-lg bg-orange-200 font-manrope font-bold text-[#fff] text-sm">
                      5% off
                    </span>
                  </div>

                  <Link
                    href="/planos"
                    className="text-orange-200 flex items-center gap-1"
                  >
                    Alterar{' '}
                    <PencilSimpleLine
                      size={20}
                      className="text-orange-200"
                      weight="fill"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-10">
              <ul className="flex flex-col gap-6">
                <li className="flex items-center gap-3 text-gray-100 font-manrope text-xs font-semibold">
                  <CheckCircle className="fill-orange-200" />
                  Acesso ilimitado a notícias, análises, vídeos e podcasts.
                </li>
                <li className="flex items-center gap-3 text-gray-100 font-manrope text-xs font-semibold">
                  <CheckCircle className="fill-orange-200" />
                  Acesso ilimitado a todas ediçoes da exato
                </li>
                <li className="flex items-center gap-3 text-gray-100 font-manrope text-xs font-semibold">
                  <CheckCircle className="fill-orange-200" />
                  Acesso aos cupons dos parceiros da exato.
                </li>
                <li className="flex items-center gap-3 text-gray-100 font-manrope text-xs font-semibold">
                  <CheckCircle className="fill-orange-200" />
                  Os melhores colunistas do brasil e do mundo.
                </li>
                <li className="flex items-center gap-3 text-gray-100 font-manrope text-xs font-semibold">
                  <CheckCircle className="fill-orange-200" />
                  Os melhores colunistas do brasil e do mundo.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
