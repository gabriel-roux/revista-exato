import Image from 'next/image'
import ShareNetwork from '@/components/icons/share'
import Link from '@/components/icons/link'
import Archive from '@/components/icons/archive'

export default function SlugPage() {
  return (
    <main className="pt-16 border-t border-gray-500">
      <section className="overflow-hidden w-full max-w-[1215px] mx-auto px-4 md:p-0">
        <div className="flex flex-col gap-3 items-center">
          <small
            className={`text-mundo uppercase text-sm font-semibold font-manrope flex items-center`}
          >
            MUNDO
            <span
              className={`inline-block w-[6px] h-[6px] bg-mundo rounded-full ml-2 mr-2`}
            ></span>
            <span className="text-gray-200 font-normal">Guerra na ucrânia</span>
          </small>

          <h1
            className={`text-black text-[44px] font-manrope font-bold text-center`}
          >
            Educação cripto é a chave para adoção e um pilar no desenvolvimento
            da indústria, afirma Binance
          </h1>

          <p
            className={`text-gray-100 text-[18px] font-manrope font-normal text-center`}
          >
            Desde sua criação, seis anos atrás, a exchange tem investido em
            educação cripto <br />
            gratuita, facilitando o acesso à informação e a cursos.
          </p>
        </div>

        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src="https://github.com/rafaelofil.png"
              alt="Rafael Fil"
              width={32}
              height={32}
              className="rounded-full w-[32px] h-[32px] flex-shrink-0"
            />

            <small
              className={`text-black text-sm font-medium font-manrope flex items-center`}
            >
              Por Priscila cardoso
              <span
                className={`inline-block w-[6px] h-[6px] bg-gray-400 rounded-full ml-2 mr-2`}
              ></span>
              <span className="text-gray-200 font-normal">
                Guerra na ucrânia
              </span>
            </small>
          </div>
          <small
            className={`text-gray-200 text-sm font-manrope flex items-center`}
          >
            Postado em 12 de novembro de 2023 às 14:32
            <span
              className={`inline-block w-[6px] h-[6px] bg-gray-400 rounded-full ml-2 mr-2`}
            ></span>
            <span className="text-gray-200 font-normal">
              Atualizado em 22 de novembro de 2023 às: 16:01
            </span>
          </small>

          <div className="flex items-center gap-4">
            <button className="text-orange-200">
              <ShareNetwork size={24} weight="fill" />
            </button>
            <button className="text-orange-200">
              <Archive />
            </button>
            <button className="text-orange-200">
              <Link size={24} weight="bold" />
            </button>
          </div>
        </div>
      </section>

      <div className="w-full h-[612px] bg-gray-100 mt-7"></div>

      <section className="overflow-hidden w-full max-w-[1215px] mx-auto mt-2 px-4 md:p-0">
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-3">
            <small
              className={`text-gray-200 text-xs font-medium font-manrope flex items-center`}
            >
              Legenda: O surgimento das criptomoedas trouxe uma mudança de
              paradigma no mundo financeiro...
            </small>
          </div>
          <small
            className={`text-gray-200 text-xs font-manrope flex items-center`}
          >
            Foto: Globo/João Santos
          </small>
        </div>

        <div className="w-[335px] mx-auto h-[45px] md:w-full flex justify-center items-center my-[48px] md:my-[72px] md:h-[156px] bg-gray-400 rounded-lg">
          ADS
        </div>
      </section>
    </main>
  )
}
