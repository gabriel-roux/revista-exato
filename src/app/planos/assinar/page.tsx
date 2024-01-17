import Cardholder from '@/components/icons/cardholder'
import CheckCircle from '@/components/icons/check-circle'
import MagnifyGlassFilled from '@/components/icons/magnify-glass-filled'
import PencilSimpleLine from '@/components/icons/pencil-simples-line'
import Link from 'next/link'
import AccountForm from './forms/account'
import StepForm from './forms'

export default function AssinarPage() {
  return (
    <main>
      <section className="w-full bg-gray-700 py-20 flex items-center justify-start flex-col gap-20">
        <div className="w-full max-w-[1220px] mx-auto flex items-start justify-center gap-10">
          <StepForm />

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
