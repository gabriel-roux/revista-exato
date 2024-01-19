import Cardholder from '@/components/icons/cardholder'
import CardAnimation from '../card'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import Button from '@/components/button'
import { Check, PencilSimpleLine } from '@phosphor-icons/react'
import VisaBrand from '../card/visa'
import MasterBrand from '../card/master'
import EloBrand from '../card/elo'
import Brand from '../card/default-brand'

interface PaymentFormProps {
  prevStep: () => void
  nextStep: () => void
  step: number
  onChangeCardNumber?: (value: string) => void
}

const formSchema = zod.object({
  cardName: zod.string().nonempty({ message: 'Nome no cartão é obrigatório' }),
  cardNumber: zod
    .string()
    .length(16, { message: 'Número do cartão deve ter 16 dígitos' }), // Supondo que o número do cartão tenha 16 dígitos
  cardExpiry: zod
    .string()
    .regex(/^\d{2}\/\d{2}$/, { message: 'Data de validade inválida' }),
  cpfCnpj: zod.string().nonempty({ message: 'CPF ou CNPJ é obrigatório' }), // Aqui você pode adicionar uma validação mais específica para CPF ou CNPJ
  cvv: zod.string().length(3, { message: 'CVV deve ter 3 dígitos' }), // Supondo que o CVV tenha 3 dígitos

  country: zod.string().nonempty({ message: 'País é obrigatório' }),
  cep: zod.string().regex(/^\d{5}-\d{3}$/, { message: 'CEP inválido' }),
  state: zod.string().nonempty({ message: 'Estado é obrigatório' }),
  city: zod.string().nonempty({ message: 'Cidade é obrigatória' }),
  complement: zod.string().nonempty({ message: 'Complemento é obrigatório' }),
  street: zod.string().nonempty({ message: 'Rua é obrigatória' }),
  number: zod.string().nonempty({ message: 'Número é obrigatório' }),
})

function formatExpiryDate(input: string) {
  // Remove todos os caracteres não-numéricos
  const numbersOnly = input.replace(/[^\d]/g, '')

  // Divide os números em grupos de 2
  if (numbersOnly.length <= 2) {
    return numbersOnly
  }
  return `${numbersOnly.slice(0, 2)}/${numbersOnly.slice(2, 4)}`
}

function formatCep(input: string) {
  // Remove todos os caracteres não-numéricos
  const numbersOnly = input.replace(/[^\d]/g, '')

  // Divide os números em grupos de 5
  if (numbersOnly.length <= 5) {
    return numbersOnly
  }
  return `${numbersOnly.slice(0, 5)}-${numbersOnly.slice(5, 8)}`
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

export default function PaymentForm({
  nextStep,
  step,
  prevStep,
  onChangeCardNumber,
}: PaymentFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(formSchema),
  })

  const cardExpiry = watch('cardExpiry')
  const cardBrand = getCardBrand(
    watch('cardNumber')?.replace(/[^\d]/g, ''), // Remove todos os caracteres não-numéricos
  )
  const cep = watch('cep')

  const handleExpiryChange = (event: any) => {
    const formattedExpiryDate = formatExpiryDate(event.target.value)
    setValue('cardExpiry', formattedExpiryDate)
  }

  const handleCepChange = (event: any) => {
    const formattedCep = formatCep(event.target.value)
    setValue('cep', formattedCep)
  }

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

  const onSubmit = (data: any) => {
    nextStep()
  }

  useEffect(() => {
    const fetchAddress = async () => {
      if (cep?.match(/^\d{5}-\d{3}$/)) {
        try {
          const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
          const data = await response.json()
          if (data.erro) {
            console.log('CEP não encontrado')
          } else {
            setValue('street', data.logradouro)
            setValue('city', data.localidade)
            setValue('state', data.uf)
          }
        } catch (error) {
          console.error('Erro ao buscar CEP:', error)
        }
      }
    }

    fetchAddress()
  }, [cep, setValue])

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="md:w-[695px] w-full rounded-lg p-6 md:p-14 bg-[#FFF] flex flex-col gap-9"
    >
      <header className="flex items-center justify-between w-full">
        <h2
          className={`flex items-center gap-[18px] ${
            step >= 1 ? 'text-orange-200' : 'text-gray-300'
          } text-lg font-bold`}
        >
          <span className="w-7 h-7 text-sm items-center justify-center flex rounded-full border border-orange-600 flex-shrink-0">
            2
          </span>

          <span className="flex items-center gap-[14px]">
            <Cardholder
              className={
                step >= 1
                  ? 'fill-orange-200 flex-shrink-0'
                  : 'fill-gray-300 flex-shrink-0'
              }
            />
            Forma de pagamento
          </span>
        </h2>
      </header>

      {step === 1 ? (
        <div className="flex flex-col gap-10">
          <CardAnimation
            expiry={watch('cardExpiry')}
            name={watch('cardName')}
            number={watch('cardNumber')}
          />

          <div className="flex flex-col gap-6">
            <div className="w-full flex flex-col gap-1">
              <p className="text-xs font-semibold text-gray-300">
                Nome (como no cartão)
              </p>
              <input
                {...register('cardName')}
                placeholder="Nome no cartão"
                type="text"
                className={`h-[50px] w-full transition-all duration-200 focus:border-orange-200  border-[1.5px] border-gray-500 bg-[#fff] p-6 rounded-lg outline-0 text-gray-100`}
              />
              {errors.cardName && (
                <p className="text-xs text-justiça">{`${errors.cardName.message}`}</p>
              )}
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-5">
              <div className="flex flex-col gap-1 w-full md:w-[400px]">
                <p className="text-xs font-semibold text-gray-300">
                  Número do cartão
                </p>
                <input
                  {...register('cardNumber')}
                  onChange={(event) => {
                    setValue(
                      'cardNumber',
                      event.target.value.replace(/[^\d]/g, ''), // Remove todos os caracteres não-numéricos
                    )
                    onChangeCardNumber?.(event.target.value)
                  }}
                  placeholder="Numero do cartão"
                  type="text"
                  maxLength={16}
                  className={`h-[50px] w-full transition-all duration-200 focus:border-orange-200  border-[1.5px] border-gray-500 bg-[#fff] p-6 rounded-lg outline-0 text-gray-100`}
                />
                {errors.cardNumber && (
                  <p className="text-xs text-justiça">{`${errors.cardNumber.message}`}</p>
                )}
              </div>
              <div className="flex flex-col gap-1 w-full md:w-[156px]">
                <p className="text-xs font-semibold text-gray-300">Validade</p>
                <input
                  {...register('cardExpiry')}
                  value={cardExpiry}
                  onChange={handleExpiryChange}
                  placeholder="MM/AA"
                  type="text"
                  maxLength={5}
                  className="h-[50px] w-full transition-all duration-200 focus:border-orange-200  border-[1.5px] border-gray-500 bg-[#fff] p-6 rounded-lg outline-0 text-gray-100"
                />
                {errors.cardExpiry && (
                  <p className="text-xs text-justiça">{`${errors.cardExpiry.message}`}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-5">
              <div className="flex flex-col gap-1 w-full md:w-[400px]">
                <p className="text-xs font-semibold text-gray-300">
                  CPF ou CNPJ
                </p>
                <input
                  {...register('cpfCnpj')}
                  placeholder="CPF  ou CNPJ"
                  type="text"
                  className={`h-[50px] w-full transition-all duration-200 focus:border-orange-200  border-[1.5px] border-gray-500 bg-[#fff] p-6 rounded-lg outline-0 text-gray-100`}
                />
                {errors.cpfCnpj && (
                  <p className="text-xs text-justiça">{`${errors.cpfCnpj.message}`}</p>
                )}
              </div>
              <div className="flex flex-col gap-1 w-full md:w-[156px]">
                <p className="text-xs font-semibold text-gray-300">
                  Código de segurança
                </p>
                <input
                  {...register('cvv')}
                  placeholder="CVV"
                  type="text"
                  maxLength={4}
                  className={`h-[50px] w-full transition-all duration-200 focus:border-orange-200  border-[1.5px] border-gray-500 bg-[#fff] p-6 rounded-lg outline-0 text-gray-100`}
                />
                {errors.cvv && (
                  <p className="text-xs text-justiça">{`${errors.cvv.message}`}</p>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-sm font-black text-black">
              Endereço de cobrança
            </h2>

            <div className="w-full flex flex-col gap-1">
              <p className="text-xs font-semibold text-gray-300">País</p>
              <select
                {...register('country')}
                className="h-[50px] w-full transition-all duration-200 focus:border-orange-200 border-[1.5px] border-gray-500 bg-[#fff] px-6 rounded-lg outline-0 text-gray-100 "
              >
                <option value="">Selecione um País</option>
                <option value="br">Brasil</option>
                <option value="us">Estados Unidos</option>
              </select>

              {errors.country && (
                <p className="text-xs text-justiça">{`${errors.country.message}`}</p>
              )}
            </div>

            {(watch('country') === 'br' || watch('country') === 'us') && (
              <>
                <div className="w-full flex flex-col gap-1">
                  <p className="text-xs font-semibold text-gray-300">CEP</p>
                  <input
                    {...register('cep')}
                    onChange={handleCepChange}
                    placeholder="CEP"
                    type="text"
                    className={`h-[50px] w-full transition-all duration-200 focus:border-orange-200  border-[1.5px] border-gray-500 bg-[#fff] p-6 rounded-lg outline-0 text-gray-100`}
                  />
                  {errors.cep && (
                    <p className="text-xs text-justiça">{`${errors.cep.message}`}</p>
                  )}
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                  <div className="flex flex-col gap-1 w-full md:w-[400px]">
                    <p className="text-xs font-semibold text-gray-300">
                      Complemento
                    </p>
                    <input
                      {...register('complement')}
                      placeholder="Complemento"
                      type="text"
                      className={`h-[50px] w-full transition-all duration-200 focus:border-orange-200  border-[1.5px] border-gray-500 bg-[#fff] p-6 rounded-lg outline-0 text-gray-100`}
                    />
                    {errors.complement && (
                      <p className="text-xs text-justiça">{`${errors.complement.message}`}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-1 w-full md:w-[156px]">
                    <p className="text-xs font-semibold text-gray-300">
                      Numero
                    </p>
                    <input
                      {...register('number')}
                      placeholder="Numero"
                      type="text"
                      className={`h-[50px] w-full transition-all duration-200 focus:border-orange-200  border-[1.5px] border-gray-500 bg-[#fff] p-6 rounded-lg outline-0 text-gray-100`}
                    />
                    {errors.number && (
                      <p className="text-xs text-justiça">{`${errors.number.message}`}</p>
                    )}
                  </div>
                </div>

                <div className="w-full flex flex-col gap-1">
                  <p className="text-xs font-semibold text-gray-300">
                    Logadouro
                  </p>
                  <input
                    {...register('street')}
                    placeholder="Estado"
                    type="text"
                    className={`h-[50px] w-full transition-all duration-200 focus:border-orange-200  border-[1.5px] border-gray-500 bg-[#fff] p-6 rounded-lg outline-0 text-gray-100`}
                  />
                  {errors.state && (
                    <p className="text-xs text-justiça">{`${errors.state.message}`}</p>
                  )}
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                  <div className="flex flex-col gap-1 w-full md:w-[400px]">
                    <p className="text-xs font-semibold text-gray-300">
                      Estado
                    </p>
                    <input
                      {...register('state')}
                      placeholder="CPF  ou CNPJ"
                      type="text"
                      className={`h-[50px] w-full transition-all duration-200 focus:border-orange-200  border-[1.5px] border-gray-500 bg-[#fff] p-6 rounded-lg outline-0 text-gray-100`}
                    />
                    {errors.state && (
                      <p className="text-xs text-justiça">{`${errors.state.message}`}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-1 w-full md:w-[156px]">
                    <p className="text-xs font-semibold text-gray-300">
                      Cidade
                    </p>
                    <input
                      {...register('city')}
                      placeholder="Cidade"
                      type="text"
                      className={`h-[50px] w-full transition-all duration-200 focus:border-orange-200  border-[1.5px] border-gray-500 bg-[#fff] p-6 rounded-lg outline-0 text-gray-100`}
                    />
                    {errors.city && (
                      <p className="text-xs text-justiça">{`${errors.city.message}`}</p>
                    )}
                  </div>
                </div>
              </>
            )}

            <div className="flex items-center justify-end">
              <Button
                size="md"
                variant="secondary"
                type="submit"
                disabled={
                  Object.keys(errors).length > 0 ||
                  watch('country') === '' ||
                  watch('cep') === ''
                }
                className="w-[200px] h-[50px] bg-orange-200 text-gray-700 font-semibold disabled:bg-gray-300 disabled:border-gray-300 disabled:text-white disabled:cursor-not-allowed"
              >
                Confirmar dados
              </Button>
            </div>
          </div>
        </div>
      ) : step > 1 ? (
        <div className="flex justify-between items-center gap-6">
          <h3 className="text-base font-semibold text-gray-200 flex items-center gap-2">
            {renderCardBrandLogo()}

            <b className="hidden md:inline-block">
              {getCardBrand(watch('cardNumber'))}
            </b>

            <span>**** {watch('cardNumber')?.slice(12)}</span>
            <Check weight="bold" className="fill-orange-200" />
          </h3>

          <button
            onClick={prevStep}
            className="text-orange-200 flex items-center gap-1"
          >
            Alterar{' '}
            <PencilSimpleLine
              size={20}
              className="text-orange-200"
              weight="fill"
            />
          </button>
        </div>
      ) : (
        <></>
      )}
    </form>
  )
}
