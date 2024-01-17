import Cardholder from '@/components/icons/cardholder'
import CardAnimation from '../card'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

interface PaymentFormProps {
  prevStep: () => void
  nextStep: () => void
  step: number
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

export default function PaymentForm({
  nextStep,
  step,
  prevStep,
}: PaymentFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(formSchema),
  })

  const cardExpiry = watch('cardExpiry')

  const handleExpiryChange = (event: any) => {
    const formattedExpiryDate = formatExpiryDate(event.target.value)
    setValue('cardExpiry', formattedExpiryDate)
  }

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[695px] rounded-lg p-14 bg-[#FFF] flex flex-col gap-9"
    >
      <header className="flex items-center justify-between w-full">
        <h2
          className={`flex items-center gap-[18px] ${
            step === 1 ? 'text-orange-200' : 'text-gray-300'
          } text-lg font-bold`}
        >
          <span className="w-7 h-7 text-sm items-center justify-center flex rounded-full border border-orange-600">
            2
          </span>

          <span className="flex items-center gap-[14px]">
            <Cardholder
              className={step === 1 ? 'fill-orange-200' : 'fill-gray-300'}
            />
            Forma de pagamento
          </span>
        </h2>
      </header>

      {step === 1 && (
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
            </div>

            <div className="flex justify-between items-center gap-5">
              <div className="flex flex-col gap-1 w-[400px]">
                <p className="text-xs font-semibold text-gray-300">
                  Número do cartão
                </p>
                <input
                  {...register('cardNumber')}
                  placeholder="Numero do cartão"
                  type="text"
                  maxLength={15}
                  className={`h-[50px] w-full transition-all duration-200 focus:border-orange-200  border-[1.5px] border-gray-500 bg-[#fff] p-6 rounded-lg outline-0 text-gray-100`}
                />
              </div>
              <div className="flex flex-col gap-1 w-[156px]">
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
              </div>
            </div>
            <div className="flex justify-between items-center gap-5">
              <div className="flex flex-col gap-1 w-[400px]">
                <p className="text-xs font-semibold text-gray-300">
                  CPF ou CNPJ
                </p>
                <input
                  {...register('cpfCnpj')}
                  placeholder="CPF  ou CNPJ"
                  type="text"
                  className={`h-[50px] w-full transition-all duration-200 focus:border-orange-200  border-[1.5px] border-gray-500 bg-[#fff] p-6 rounded-lg outline-0 text-gray-100`}
                />
              </div>
              <div className="flex flex-col gap-1 w-[156px]">
                <p className="text-xs font-semibold text-gray-300">
                  Código de segurança
                </p>
                <input
                  {...register('cvv')}
                  placeholder="CVV"
                  type="text"
                  className={`h-[50px] w-full transition-all duration-200 focus:border-orange-200  border-[1.5px] border-gray-500 bg-[#fff] p-6 rounded-lg outline-0 text-gray-100`}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </form>
  )
}
