'use client'

import Check from '@/components/icons/check'
import PencilLine from '@/components/icons/pencil-simples-line'
import UserRectangle from '@/components/icons/user-rectangle'
import CreditCard from '@/components/icons/credit-card'
import Schedule from '@/components/icons/schedule'
import { useState } from 'react'
import Image from 'next/image'
import FicCard from '@/assets/fic-card.svg'
import { PencilSimpleLine, PlusCircle, XCircle } from '@phosphor-icons/react'

export default function AssinaturaPage() {
  const [page, setPage] = useState(1)

  return (
    <main className="mt-12 mb-[250px]">
      <header className="w-full max-w-[1150px] mx-auto">
        <h1 className="text-3xl font-bold text-black">Minha assinatura</h1>

        <div className="flex items-center gap-14 mt-8">
          <button
            onClick={() => setPage(1)}
            className={`flex items-center gap-2 ${
              page === 1 ? 'text-black' : 'text-gray-300'
            } font-manrope font-medium text-sm transition-all duration-200 relative`}
          >
            <UserRectangle
              className={page === 1 ? 'fill-orange-200' : 'fill-gray-300'}
            />
            Meu plano
            {page === 1 && (
              <span className="w-full h-[2px] rounded-full bg-orange-200 absolute -bottom-5 right-0" />
            )}
          </button>
          <button
            onClick={() => setPage(2)}
            className={`flex items-center gap-2 ${
              page === 2 ? 'text-black' : 'text-gray-300'
            } font-manrope font-medium text-sm transition-all duration-200 relative`}
          >
            <CreditCard
              weight={page === 2 ? 'fill' : 'regular'}
              className={page === 2 ? 'fill-orange-200' : 'fill-gray-300'}
            />
            Métodos de Pagamento
            {page === 2 && (
              <span className="w-full h-[2px] rounded-full bg-orange-200 absolute -bottom-5 right-0" />
            )}
          </button>
          <button
            onClick={() => setPage(3)}
            className={`flex items-center gap-2 ${
              page === 3 ? 'text-black' : 'text-gray-300'
            } font-manrope font-medium text-sm transition-all duration-200 relative`}
          >
            <Schedule size={20} weight="regular" className="fill-gray-300" />
            Histórico de Pagamento
          </button>
        </div>
      </header>
      <div className="w-full h-[1px] bg-gray-500 mt-5 mb-12" />

      <div className="w-full max-w-[1150px] mx-auto">
        {page === 1 ? (
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
                <button className="items-center flex text-orange-200 fill-orange-200 transition-all duration-200 ease-in hover:fill-black hover:text-black font-manrope gap-2 text-sm">
                  Alterar plano
                  <PencilLine
                    weight="fill"
                    size={20}
                    className="flex-shrink-0"
                  />
                </button>
                <button className="items-center flex text-orange-200 fill-orange-200 transition-all duration-200 ease-in hover:fill-black hover:text-black font-manrope gap-2 text-sm">
                  Cancelar assinatura
                  <PencilLine
                    weight="fill"
                    size={20}
                    className="flex-shrink-0"
                  />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-start justify-between gap-[112px]">
            <div className="w-[624px] flex flex-col gap-7">
              <div className="w-full p-8 border border-orange-200 rounded-lg flex items-center gap-12 relative">
                <Image
                  src={FicCard}
                  alt="cartão de crédito"
                  width={128}
                  height={75}
                />

                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-bold text-black">Mastercard</h3>
                  <p className="text-sm font-medium text-gray-200">
                    Cartão de crédito terminado em **** 3546
                  </p>
                </div>

                <span className="absolute bottom-1 right-1 text-[9px] font-semibold bg-orange-200 flex items-center justify-center uppercase text-white w-16 h-5 rounded">
                  Principal
                </span>
              </div>

              <div className="w-full p-8 border border-gray-500 rounded-lg flex items-center gap-12">
                <Image
                  src={FicCard}
                  alt="cartão de crédito"
                  width={128}
                  height={75}
                />

                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-bold text-black">Mastercard</h3>
                  <p className="text-sm font-medium text-gray-200">
                    Cartão de crédito terminado em **** 3546
                  </p>
                </div>
              </div>

              <button className="w-full flex items-center justify-center h-16 rounded-lg bg-orange-600 text-orange-200 gap-[6px] font-semibold">
                Adicionar meio de pagamento
                <PlusCircle
                  size={20}
                  weight="fill"
                  className="fill-orange-200"
                />
              </button>
            </div>

            <div className="flex flex-col w-[414px] gap-7">
              <Image
                src={FicCard}
                alt="cartão de crédito"
                width={414}
                height={245}
              />

              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <p className="text-lg font-bold text-black">Mastercard</p>
                  <p className="text-base font-normal text-gray-200">
                    Cartão de crédito terminado em **** 3546
                  </p>
                </div>

                <button className="items-center flex text-orange-200 fill-orange-200 transition-all duration-200 ease-in hover:fill-black hover:text-black font-manrope gap-2">
                  Tornar esse o cartão de cobrança
                  <PencilSimpleLine
                    weight="fill"
                    size={18}
                    className="flex-shrink-0"
                  />
                </button>
                <button className="items-center flex text-gray-200 fill-gray-200 transition-all duration-200 ease-in hover:fill-black hover:text-black font-manrope gap-2">
                  Remover meio de pagamento
                  <XCircle weight="fill" size={18} className="flex-shrink-0" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
