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
import Globe from '@/components/icons/globe'
import Newspaper from '@/components/icons/newspaper'
import PenNib from '@/components/icons/pen-nib'
import Quotes from '@/components/icons/quotes'
import GraduationCap from '@/components/icons/graduation-cap'
import SaveIcon from '@/components/icons/save'
import Gavel from '@/components/icons/gavel'
import Bank from '@/components/icons/bank'
import Flag from '@/components/icons/flag'
import World from '@/components/icons/world'
import CaretLeft from '@/components/icons/caret-left'
import { Notice } from '@/components/notice'

export default function Dashboard() {
  return (
    <main>
      <div className="w-full h-[350px] bg-black p-16 relative overflow-hidden">
        <div className="w-full max-w-[1240px] mx-auto flex items-center justify-between">
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

      <div className="w-full max-w-[1240px] mx-auto pt-[30px] border-b border-gray-500 mb-9">
        <div className="flex items-center justify-between">
          <h2 className="font-manrope text-lg text-black font-bold flex items-center gap-3 pb-[30px]">
            <Globe size={24} className="text-orange-100" />
            Descubra
          </h2>

          <div className="flex items-center gap-[54px]">
            <button className="pb-[35px] text-black items-center flex gap-2 font-bold text-sm font-manrope border-b-2 border-orange-200">
              <Newspaper weight="fill" size={18} className="text-orange-200" />
              Notícias
            </button>

            <button className="pb-[35px] text-gray-300 fill-gray-300 hover:fill-black items-center flex gap-2 font-medium hover:text-black transition-all duration-200 text-sm font-manrope">
              <SaveIcon className="w-[18px] h-[18px]" />
              Artigos
            </button>

            <button className="pb-[35px] text-gray-300 fill-gray-300 hover:fill-black items-center flex gap-2 font-medium hover:text-black transition-all duration-200 text-sm font-manrope">
              <Quotes className="w-[18px] h-[18px]" /> Opnião
            </button>

            <button className="pb-[35px] text-gray-300 items-center flex gap-2 font-medium hover:text-black transition-all duration-200 text-sm font-manrope">
              <PenNib weight="fill" size={18} /> Colunistas
            </button>

            <button className="pb-[35px] text-gray-300 items-center flex gap-2 font-medium hover:text-black transition-all duration-200 text-sm font-manrope">
              <GraduationCap weight="fill" size={18} /> Cursos
            </button>
          </div>
        </div>
      </div>

      <section className="w-full max-w-[1240px] mx-auto">
        <p className="text-gray-300 font-semibold text-sm">
          Navegue pelas suas categorias
        </p>
        <div className="flex items-center gap-4 mt-4">
          <button className="w-[305px] h-16 rounded-lg gap-[10px] bg-orange-600 flex items-center justify-center text-gray-100 font-semibold font-manrope">
            <Gavel weight="fill" size={20} className="text-orange-200" />
            Justiça
          </button>
          <button className="w-[305px] h-16 rounded-lg gap-[10px] bg-orange-600 flex items-center justify-center text-gray-100 font-semibold font-manrope">
            <Bank weight="fill" size={20} className="text-orange-200" />
            Economia
          </button>
          <button className="w-[305px] h-16 rounded-lg gap-[10px] bg-orange-600 flex items-center justify-center text-gray-100 font-semibold font-manrope">
            <Flag weight="fill" size={20} className="text-orange-200" />
            Política
          </button>
          <button className="w-[305px] h-16 rounded-lg gap-[10px] bg-orange-600 flex items-center justify-center text-gray-100 font-semibold font-manrope">
            <World weight="fill" size={20} className="text-orange-200" />
            Mundo
          </button>
        </div>
      </section>

      <section className="w-full max-w-[1240px] mx-auto mt-9 flex flex-col gap-[54px] mb-20">
        <div className="flex flex-col gap-6">
          <header className="flex items-center justify-between">
            <h2 className="text-black font-bold font-manrope text-lg flex items-center gap-3">
              <Globe size={24} className="text-orange-100" />
              Notícias para você
            </h2>

            <div className="flex items-center gap-1">
              <button className="w-7 h-7 rounded-full bg-orange-600 hover:bg-orange-500 transition-all duration-200 flex items-center justify-center text-orange-200">
                <CaretLeft />
              </button>
              <button className="w-7 h-7 rounded-full bg-orange-200 hover:bg-orange-100 transition-all duration-200 flex items-center justify-center text-white">
                <CaretRight />
              </button>
            </div>
          </header>

          <div className="flex items-center gap-[18px]">
            <Notice
              breakLine
              size="small"
              category="economia"
              title="Trump deve se apresentar hoje à Justiça"
              description="Ex-presidente dos EUA nega qualquer irregularidade e criticou as acusações que enfrente em um evento de campanha no..."
              createdAt={new Date().toISOString()}
              image=""
            />
            <Notice
              breakLine
              size="small"
              category="justiça"
              title="Trump deve se apresentar hoje à Justiça"
              description="Ex-presidente dos EUA nega qualquer irregularidade e criticou as acusações que enfrente em um evento de campanha no..."
              createdAt={new Date().toISOString()}
              image=""
            />
            <Notice
              breakLine
              size="small"
              category="mundo"
              title="Trump deve se apresentar hoje à Justiça"
              description="Ex-presidente dos EUA nega qualquer irregularidade e criticou as acusações que enfrente em um evento de campanha no..."
              createdAt={new Date().toISOString()}
              image=""
            />
            <Notice
              breakLine
              size="small"
              category="brasil"
              title="Trump deve se apresentar hoje à Justiça"
              description="Ex-presidente dos EUA nega qualquer irregularidade e criticou as acusações que enfrente em um evento de campanha no..."
              createdAt={new Date().toISOString()}
              image=""
            />
          </div>
        </div>

        <div className="w-full h-[1px] bg-gray-500" />

        <div className="flex flex-col gap-6">
          <header className="flex items-center justify-between">
            <h2 className="text-black font-bold font-manrope text-lg flex items-center gap-3">
              <Newspaper weight="fill" size={24} className="text-orange-100" />
              Últimas notícias para você
            </h2>

            <div className="flex items-center gap-1">
              <button className="w-7 h-7 rounded-full bg-orange-600 hover:bg-orange-500 transition-all duration-200 flex items-center justify-center text-orange-200">
                <CaretLeft />
              </button>
              <button className="w-7 h-7 rounded-full bg-orange-200 hover:bg-orange-100 transition-all duration-200 flex items-center justify-center text-white">
                <CaretRight />
              </button>
            </div>
          </header>

          <div className="flex items-center gap-[18px]">
            <Notice
              breakLine
              size="small"
              category="justiça"
              title="Trump deve se apresentar hoje à Justiça"
              description="Ex-presidente dos EUA nega qualquer irregularidade e criticou as acusações que enfrente em um evento de campanha no..."
              createdAt={new Date().toISOString()}
              image=""
            />
            <Notice
              breakLine
              size="small"
              category="justiça"
              title="Trump deve se apresentar hoje à Justiça"
              description="Ex-presidente dos EUA nega qualquer irregularidade e criticou as acusações que enfrente em um evento de campanha no..."
              createdAt={new Date().toISOString()}
              image=""
            />
            <Notice
              breakLine
              size="small"
              category="mundo"
              title="Trump deve se apresentar hoje à Justiça"
              description="Ex-presidente dos EUA nega qualquer irregularidade e criticou as acusações que enfrente em um evento de campanha no..."
              createdAt={new Date().toISOString()}
              image=""
            />
            <Notice
              breakLine
              size="small"
              category="brasil"
              title="Trump deve se apresentar hoje à Justiça"
              description="Ex-presidente dos EUA nega qualquer irregularidade e criticou as acusações que enfrente em um evento de campanha no..."
              createdAt={new Date().toISOString()}
              image=""
            />
          </div>
        </div>

        <div className="w-full h-[1px] bg-gray-500" />

        <div className="flex flex-col gap-6">
          <header className="flex items-center justify-between">
            <h2 className="text-black font-bold font-manrope text-lg flex items-center gap-3">
              <SaveIcon className="fill-orange-100 w-6 h-6" />
              Sugestões para você
            </h2>

            <div className="flex items-center gap-1">
              <button className="w-7 h-7 rounded-full bg-orange-600 hover:bg-orange-500 transition-all duration-200 flex items-center justify-center text-orange-200">
                <CaretLeft />
              </button>
              <button className="w-7 h-7 rounded-full bg-orange-200 hover:bg-orange-100 transition-all duration-200 flex items-center justify-center text-white">
                <CaretRight />
              </button>
            </div>
          </header>

          <div className="flex items-center gap-[18px]">
            <Notice
              breakLine
              size="small"
              category="política"
              title="Trump deve se apresentar hoje à Justiça"
              description="Ex-presidente dos EUA nega qualquer irregularidade e criticou as acusações que enfrente em um evento de campanha no..."
              createdAt={new Date().toISOString()}
              image=""
            />
            <Notice
              breakLine
              size="small"
              category="economia"
              title="Trump deve se apresentar hoje à Justiça"
              description="Ex-presidente dos EUA nega qualquer irregularidade e criticou as acusações que enfrente em um evento de campanha no..."
              createdAt={new Date().toISOString()}
              image=""
            />
            <Notice
              breakLine
              size="small"
              category="justiça"
              title="Trump deve se apresentar hoje à Justiça"
              description="Ex-presidente dos EUA nega qualquer irregularidade e criticou as acusações que enfrente em um evento de campanha no..."
              createdAt={new Date().toISOString()}
              image=""
            />
            <Notice
              breakLine
              size="small"
              category="economia"
              title="Trump deve se apresentar hoje à Justiça"
              description="Ex-presidente dos EUA nega qualquer irregularidade e criticou as acusações que enfrente em um evento de campanha no..."
              createdAt={new Date().toISOString()}
              image=""
            />
          </div>
        </div>
      </section>
    </main>
  )
}
