import Brand from './default-brand'
import CardBg from '@/assets/cardBg.png'
import VisaBrand from './visa'
import MasterBrand from './master'
import EloBrand from './elo'

interface CardAnimationProps {
  name: string
  number: string
  expiry: string
}

function getCardBrand(cardNumber: string) {
  // Exemplos de prefixos para Visa, Mastercard e Elo
  const visaPrefix = '4'
  const mastercardPrefixes = ['51', '52', '53', '54', '55']
  const eloPrefixes = ['4011', '4312', '4389', '4514', '4573', '4576']

  if (eloPrefixes?.some((prefix) => cardNumber?.startsWith(prefix))) {
    return 'elo'
  } else if (cardNumber?.startsWith(visaPrefix)) {
    return 'visa'
  } else if (
    mastercardPrefixes?.some((prefix) => cardNumber?.startsWith(prefix))
  ) {
    return 'mastercard'
  }

  return 'unknown'
}

function formatCardNumber(cardNumber: string) {
  const totalDigits = 16 // Total de dígitos em um número de cartão padrão

  // Preenchendo com asteriscos
  const formattedNumber = cardNumber?.padEnd(totalDigits, '*')

  // Adicionando espaços a cada 4 dígitos para legibilidade
  return formattedNumber?.replace(/(.{4})/g, '$1 ').trim()
}

function formatExpiryDate(expiryDate: string) {
  // Verifica se a data é maior que 2 caracteres e insere uma barra "/"
  if (expiryDate?.length > 2) {
    return (
      expiryDate?.substring(0, 2) +
      ' / ' +
      expiryDate?.substring(2).padEnd(2, '*')
    )
  } else {
    // Preenche com asteriscos se tiver menos de 2 caracteres
    return expiryDate?.padEnd(2, '*') + ' / **'
  }
}

export default function CardAnimation({
  name,
  number,
  expiry,
}: CardAnimationProps) {
  const cardBrand = getCardBrand(number)

  const renderCardBrandLogo = () => {
    switch (cardBrand) {
      case 'visa':
        return <VisaBrand /> // Substitua com o componente/logo da Visa
      case 'mastercard':
        return <MasterBrand /> // Substitua com o componente/logo da Mastercard
      case 'elo':
        return <EloBrand /> // Substitua com o componente/logo da Elo
      default:
        return <Brand /> // Seu componente padrão
    }
  }

  return (
    <div
      style={
        number?.length > 4
          ? {
              backgroundImage: `url(${CardBg.src})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              transform: 'rotateY(180deg)',
            }
          : {}
      }
      className="w-[335px] h-[200px] p-8 bg-gray-500 rounded-xl transition-all duration-500 ease"
    >
      <div
        style={
          number?.length > 4
            ? {
                transform: 'rotateY(180deg)',
              }
            : {}
        }
        className="flex flex-col gap-7"
      >
        {number?.length > 4 ? renderCardBrandLogo() : <Brand />}

        <p className="text-lg text-gray-300 font-semibold tracking-[4px]">
          {formatCardNumber(number)}
        </p>

        <div className="flex items-center justify-between">
          <p className="text-gray-300 text-xs font-semibold">
            {name?.length > 0 ? name : 'NOME E SOBRENOME'}
          </p>

          <div className="flex flex-col">
            <p className="text-gray-300 text-[8px] font-semibold">VALIDADE</p>
            <p className="text-gray-300 text-xs tracking-[2px] font-semibold">
              {formatExpiryDate(expiry)}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
