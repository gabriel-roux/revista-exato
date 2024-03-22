import Image from 'next/image'
import ProfileBanner from '@/assets/profile.svg'
import CaretDown from '@/components/icons/caret-down'
import BookBookmark from '@/components/icons/book-bookmark'
import MagnifyGlass from '@/components/icons/magnify-glass'
import CalendarBlank from '@/components/icons/calendar-blank'
import EdicaoCapa from '@/components/edicao-capa'
import Button from '@/components/button'
import { Newsletter } from '@/screens/home/newsletter'

const edicoes = {
  '2024': [
    {
      createdAt: '2024-01-01',
      edicao: 'Edição de Nº1',
      image: 'a',
      url: '',
    },
    {
      createdAt: '2024-02-01',
      edicao: 'Edição de Nº2',
      image: '',
      url: '',
    },
    {
      createdAt: '2024-03-01',
      edicao: 'Edição de Nº3',
      image: '',
      url: '',
    },
    {
      createdAt: '2024-04-01',
      edicao: 'Edição de Nº4',
      image: '',
      url: '',
    },
    {
      createdAt: '2024-05-01',
      edicao: 'Edição de Nº5',
      image: 'a',
      url: '',
    },
    {
      createdAt: '2024-06-01',
      edicao: 'Edição de Nº6',
      image: 'a',
      url: '',
    },
    {
      createdAt: '2024-07-01',
      edicao: 'Edição de Nº7',
      image: 'a',
      url: '',
    },
    {
      createdAt: '2024-08-01',
      edicao: 'Edição de Nº8',
      image: 'a',
      url: '',
    },
    {
      createdAt: '2024-09-01',
      edicao: 'Edição de Nº9',
      image: 'a',
      url: '',
    },
    {
      createdAt: '2024-10-01',
      edicao: 'Edição de Nº10',
      image: 'a',
      url: '',
    },
    {
      createdAt: '2024-11-01',
      edicao: 'Edição de Nº11',
      image: 'a',
      url: '',
    },
    {
      createdAt: '2024-12-01',
      edicao: 'Edição de Nº12',
      image: '',
      url: '',
    },
  ],
  '2023': [
    {
      createdAt: '2023-01-01',
      edicao: 'Edição de Nº1',
      image: 'a',
      url: '',
    },
    {
      createdAt: '2023-02-01',
      edicao: 'Edição de Nº2',
      image: 'a',
      url: '',
    },
    {
      createdAt: '2023-03-01',
      edicao: 'Edição de Nº3',
      image: 'a',
      url: '',
    },
    {
      createdAt: '2023-04-01',
      edicao: 'Edição de Nº4',
      image: '',
      url: '',
    },
    {
      createdAt: '2023-05-01',
      edicao: 'Edição de Nº5',
      image: '',
      url: '',
    },
    {
      createdAt: '2023-06-01',
      edicao: 'Edição de Nº6',
      image: 'a',
      url: '',
    },
    {
      createdAt: '2023-07-01',
      edicao: 'Edição de Nº7',
      image: 'a',
      url: '',
    },
    {
      createdAt: '2023-08-01',
      edicao: 'Edição de Nº8',
      image: 'a',
      url: '',
    },
    {
      createdAt: '2023-09-01',
      edicao: 'Edição de Nº9',
      image: '',
      url: '',
    },
    {
      createdAt: '2023-10-01',
      edicao: 'Edição de Nº10',
      image: 'a',
      url: '',
    },
    {
      createdAt: '2023-11-01',
      edicao: 'Edição de Nº11',
      image: '',
      url: '',
    },
    {
      createdAt: '2023-12-01',
      edicao: 'Edição de Nº12',
      image: 'a',
      url: '',
    },
  ],
}

export default function RevistasPage() {
  return (
    <main className="w-full bg-[#FFF]">
      <section className="w-full h-[200px] relative">
        <Image
          src={ProfileBanner}
          alt="bg"
          width={1120}
          height={170}
          className="w-full h-[200px] object-cover absolute"
        />

        <div className="w-full max-w-[1215px] mx-auto h-full flex items-center relative z-10">
          <h1 className="text-3xl font- font-bold text-white flex items-center gap-[18px]">
            <BookBookmark size={39} weight="fill" className="fill-orange-200" />
            Edições Exato
          </h1>
        </div>
      </section>
      <header className="w-full max-w-[1215px] mx-auto h-[96px] flex items-center border-b border-gray-500">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-12">
            <h2 className="text-base font-medium text-gray-300">
              1002 Resultados para{' '}
              <span className="text-gray-100">” Edições exato”</span>
            </h2>
          </div>

          <div className="flex items-center gap-14">
            <div className="flex items-center gap-[10px] w-[289px] h-[45px] pl-5 bg-gray-600 rounded-lg transition-all duration-200 focus-within:shadow-input">
              <MagnifyGlass size={16} weight="bold" className="text-gray-100" />
              <input
                type="search"
                placeholder="Buscar edição"
                className="text-sm bg-gray-600 font-medium text-black focus:outline-none focus:ring-0"
              />
            </div>

            <div className="flex items-center gap-4">
              <p className="text-sm text-gray-200 font-medium">
                Filtrar por período:
              </p>

              <div className="flex items-center gap-2">
                <select className="text-sm font-medium text-black bg-[transparent] appearance-none">
                  <option value="">Último semestre</option>
                </select>
                <CaretDown
                  size={16}
                  weight="bold"
                  className="fill-orange-200"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="w-full max-w-[1215px] h- mx-auto mt-12">
        {Object.keys(edicoes).map((year, index) => {
          const key = year as keyof typeof edicoes

          return (
            <div
              key={year}
              className={`w-full pb-20 ${
                index === Object.keys(edicoes).length - 1
                  ? ''
                  : 'border-b border-gray-500 mt-11'
              }`}
            >
              <h2 className="text-2xl font- font-bold text-black flex items-center gap-[8px]">
                <CalendarBlank
                  size={24}
                  weight="fill"
                  className="fill-orange-100"
                />
                {year}
              </h2>

              <div className="mt-7 flex items-center gap-[30px] flex-wrap">
                {edicoes[key].map((edicao: any) => (
                  <EdicaoCapa
                    createdAt={edicao.createdAt}
                    edicao={edicao.edicao}
                    image={edicao.image}
                    url={edicao.url}
                    key={edicao.edicao}
                  />
                ))}
              </div>
            </div>
          )
        })}

        <div className="flex items-center justify-center w-full mt-10 mb-20">
          <Button
            variant="tertiary"
            className="flex items-center gap-[10px] text-black"
          >
            Carregar mais
            <CaretDown size={16} className="text-orange-200" weight="bold" />
          </Button>
        </div>
      </section>

      <Newsletter />

      <div className="w-full max-w-[1215px] mx-auto">
        <div className="w-[335px] mx-auto h-[45px] md:w-full flex justify-center items-center my-[48px] md:my-[96px] md:h-[156px] bg-gray-400 rounded-lg">
          ADS
        </div>
      </div>
    </main>
  )
}
