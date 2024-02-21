import User from '@/components/icons/user'
import Image from 'next/image'
import Banner from '@/assets/banner.png'
import Cover from '@/assets/coverMainImage.svg'
import CalendarCheck from '@/components/icons/calendar-check'
import Hash from '@/components/icons/hash'
import BookBookmark from '@/components/icons/book-bookmark'
import Button from '@/components/button'
import CaretRight from '@/components/icons/caret-right'
import CreditCard from '@/components/icons/credit-card'
import CurrencyCircleDollar from '@/components/icons/currency-circle-dollar'
import Calendar from '@/components/icons/calendar'

export default function Dashboard() {
  return (
    <main>
      <div className="w-full h-[350px] bg-black p-16 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="flex flex-col justify-between h-[190px]">
            <div className="flex flex-col gap-3">
              <h1 className="font-manrope text-[32px] text-white">
                Bom dia, <b>Andressa ✌️</b>
              </h1>

              <p className="font-manrope text-[14px] text-gray-600">
                Muito legal ver você de volta a Exato.
              </p>
            </div>

            <div className="flex items-center gap-[14px] w-[240px] px-4 py-[10px] bg-[#ffffff1e] rounded-lg">
              <User className="fill-orange-200 flex-shrink-0" />

              <p className="text-xs font-manrope text-[#FFF]">
                Membro fiel desde: <b>22/07/2023</b>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-[77px]">
            <div className="flex items-center gap-[52px]">
              <div className="relative z-50 flex-shrink-0">
                <Image
                  src={Banner}
                  alt="Banner"
                  width={166}
                  height={224}
                  quality={100}
                  className="md:w-[166px] md:h-[220px] w-[142px] h-[184px]"
                />

                <Image
                  src={Cover}
                  alt="Cover"
                  width={166}
                  height={224}
                  quality={100}
                  className="absolute z-10 md:w-[166px] md:h-[224px] top-0 left-0 w-[142px] h-[184px]"
                />
              </div>

              <div className="flex flex-col gap-6">
                <BookBookmark size={28} className="text-orange-200" />

                <div className="flex flex-col">
                  <h3 className="font-manrope font-bold text-[18px] text-[white]">
                    Edição do Mês
                  </h3>
                  <p className="font-manrope text-[14px] text-[white]">
                    Está disponível
                  </p>
                </div>

                <div className="flex flex-col gap-[2px]">
                  <p className="flex items-center gap-[6px] text-sm font-manrope font-medium text-gray-400">
                    <CalendarCheck
                      size={16}
                      weight="fill"
                      className="text-orange-200"
                    />
                    5 de Novembro, 2023
                  </p>
                  <p className="flex items-center gap-[6px] text-sm font-manrope font-semibold text-gray-400">
                    <Hash size={16} weight="fill" className="text-orange-200" />
                    Edição de Nº45
                  </p>
                </div>

                <Button
                  variant="tertiary"
                  className="flex items-center font-bold text-white gap-2 !p-0"
                  size="md"
                >
                  Ver todas{' '}
                  <CaretRight className="text-orange-200" weight="bold" />
                </Button>
              </div>
            </div>

            <div className="w-[1px] h-[205px] bg-[#ffffff1e]" />

            <div className="flex flex-col gap-6">
              <CreditCard className="fill-orange-200" />

              <div className="flex flex-col">
                <h3 className="font-manrope font-bold text-[18px] text-[white]">
                  Meu plano
                </h3>
                <p className="font-manrope text-[14px] text-[white]">
                  Próxima cobrança: <b>09 de Novembro</b>
                </p>
              </div>

              <div className="flex flex-col gap-[2px]">
                <p className="flex items-center gap-[6px] text-sm font-manrope font-medium text-gray-400">
                  <CurrencyCircleDollar
                    size={16}
                    weight="fill"
                    className="text-orange-200"
                  />
                  $3.90
                </p>
                <p className="flex items-center gap-[6px] text-sm font-manrope font-semibold text-gray-400">
                  <Calendar
                    size={16}
                    weight="fill"
                    className="text-orange-200"
                  />
                  Semestral
                </p>
              </div>

              <Button
                variant="tertiary"
                className="flex items-center font-bold text-white gap-2 !p-0"
                size="md"
              >
                Detalhes{' '}
                <CaretRight className="text-orange-200" weight="bold" />
              </Button>
            </div>
          </div>
        </div>

        <div
          style={{
            background:
              'radial-gradient(100% 50.41% at 0% 48.27%, rgba(242, 77, 0, 0.50) 0%, rgba(242, 77, 0, 0.00) 100%)',
          }}
          className="absolute z-10 w-[112px] h-[424px] transform top-[25%] rotate-90 md:-rotate-90 left-[47%] "
        />
      </div>
    </main>
  )
}
