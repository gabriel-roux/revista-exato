'use client'

import MagnifyGlassFilled from '@/components/icons/magnify-glass-filled'
import { Check } from '@phosphor-icons/react'
import VisaBrand from '../card/visa'
import MasterBrand from '../card/master'
import EloBrand from '../card/elo'
import Brand from '../card/default-brand'
import Button from '@/components/button'

interface RevisionFormProps {
  step: number
  cardNumber: string
  prevStep: () => void
  nextStep: () => void
}

function getCardBrand(cardNumber: string) {
  // Exemplos de prefixos para Visa, Mastercard e Elo
  const visaPrefix = '4'
  const mastercardPrefixes = ['51', '52', '53', '54', '55']
  const eloPrefixes = ['4011', '4312', '4389', '4514', '4573', '4576']

  if (eloPrefixes?.some((prefix) => cardNumber?.startsWith(prefix))) {
    return 'Elo'
  } else if (cardNumber?.startsWith(visaPrefix)) {
    return 'Visa'
  } else if (
    mastercardPrefixes?.some((prefix) => cardNumber?.startsWith(prefix))
  ) {
    return 'Mastercard'
  }

  return 'unknown'
}

export default function RevisionForm({
  step,
  prevStep,
  nextStep,
  cardNumber,
}: RevisionFormProps) {
  const cardBrand = getCardBrand(cardNumber)
  const renderCardBrandLogo = () => {
    switch (cardBrand) {
      case 'Visa':
        return <VisaBrand className="fill-black" /> // Substitua com o componente/logo da Visa
      case 'Mastercard':
        return <MasterBrand /> // Substitua com o componente/logo da Mastercard
      case 'Elo':
        return <EloBrand /> // Substitua com o componente/logo da Elo
      default:
        return <Brand /> // Seu componente padrão
    }
  }

  return (
    <div className="md:w-[695px] w-full rounded-lg p-6 md:p-14 bg-[#FFF] flex flex-col gap-9">
      <header className="flex items-center justify-between w-full">
        <h2
          className={`flex items-center gap-[18px] ${
            step === 2 ? 'text-orange-200' : 'text-gray-300'
          } text-lg font-bold`}
        >
          <span className="w-7 h-7 text-sm items-center justify-center flex rounded-full border border-orange-600">
            3
          </span>

          <span className="flex items-center gap-[14px]">
            <MagnifyGlassFilled
              className={step === 2 ? 'fill-orange-200' : 'fill-gray-300'}
            />
            Revise seu pedido
          </span>
        </h2>
      </header>

      {step === 2 && (
        <div className="flex flex-col gap-8 w-full">
          <div className="flex w-full md:items-center justify-between flex-col md:flex-row items-start gap-2">
            <h3 className="text-black text-sm">Forma de pagamento:</h3>

            <h3 className="text-base font-semibold text-gray-200 flex items-center gap-2">
              {renderCardBrandLogo()}

              <b>{getCardBrand(cardNumber)}</b>

              <span>**** {cardNumber?.slice(12)}</span>
              <Check weight="bold" className="fill-orange-200" />
            </h3>
          </div>

          <div className="w-full h-[1px] bg-gray-500" />

          <div className="flex w-full md:items-center justify-between flex-col md:flex-row items-start gap-2">
            <h3 className="text-black text-sm">
              Possui um código promocional?
            </h3>

            <input
              placeholder="Código"
              type="text"
              className={`h-[50px] md:max-w-[256px] w-full transition-all duration-200 focus:border-orange-200  border-[1.5px] border-gray-500 bg-[#fff] p-6 rounded-lg outline-0 text-gray-100`}
            />
          </div>

          <div className="w-full h-[1px] bg-gray-500" />

          <div className="flex w-full items-center justify-between">
            <h3 className="text-black text-sm">Total:</h3>

            <div className="flex items-end gap-2">
              <p className="text-xs text-gray-300 font-medium line-through">
                $46.31
              </p>

              <h2 className="text-[28px] font-bold text-gray-100 tracking-tighter leading-7">
                $ 22.20
              </h2>

              <p className="text-xs text-gray-300 font-medium">/mês</p>
            </div>
          </div>

          <div className="flex items-center justify-end">
            <Button
              size="md"
              variant="secondary"
              type="submit"
              className="w-[200px] h-[50px] bg-orange-200 text-gray-700 font-semibold disabled:bg-gray-300 disabled:border-gray-300 disabled:text-white disabled:cursor-not-allowed"
            >
              Finalizar pedido
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
