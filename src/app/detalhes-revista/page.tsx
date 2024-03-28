import Image from 'next/image'
import ProfileBanner from '@/assets/profile.svg'
import CaretDown from '@/components/icons/caret-down'
import Banner from '@/assets/banner.png'
import Cover from '@/assets/coverMainImage.svg'
import Button from '@/components/button'
import { Newsletter } from '@/screens/home/newsletter'
import { Notice } from '@/components/notice'
import InstagramLogo from '@/components/icons/instagram'
import TwitterLogo from '@/components/icons/twitter'
import CaretRight from '@/components/icons/caret-right'
import BookBookmark from '@/components/icons/book-bookmark'
import CalendarCheck from '@/components/icons/calendar-check'
import Link from 'next/link'
import FacebookLogo from '@/components/icons/facebook'
import YoutubeLogo from '@/components/icons/youtube'

export default function DetalhesRevistasPage() {
  return (
    <main className="w-full bg-[#FFF]">
      <section className="w-full h-[430px] relative">
        <Image
          src={ProfileBanner}
          alt="bg"
          width={1120}
          height={430}
          className="w-full h-[430px] object-cover absolute"
        />

        <div className="w-full max-w-[1216px] mx-auto h-full flex items-center justify-between relative z-10">
          <div className="flex items-start gap-[194px]">
            <div className="flex flex-col items-start gap-12">
              <h1 className="text-3xl font-bold text-white flex items-center gap-[18px]">
                <BookBookmark
                  size={39}
                  weight="fill"
                  className="fill-orange-200"
                />
                Edições Exato
              </h1>

              <div className="flex items-center flex-col gap-4">
                <h2 className="text-2xl font-manrope text-white font-bold">
                  Edição de Nº45
                </h2>
                <p className="flex items-center gap-[6px] text-sm font-manrope font-medium text-gray-400">
                  <CalendarCheck
                    size={16}
                    weight="fill"
                    className="text-orange-200"
                  />
                  5 de Novembro, 2023
                </p>
              </div>

              <div className="flex flex-col gap-[14px]">
                <p className="flex items-center gap-[6px] text-sm font-manrope font-medium text-gray-400">
                  Compartilhe:
                </p>

                <div className="flex items-center gap-6">
                  <Link href="#">
                    <InstagramLogo className="fill-white w-4 h-4" />
                  </Link>
                  <Link href="#">
                    <FacebookLogo className="fill-white w-4 h-4" />
                  </Link>
                  <Link href="#">
                    <TwitterLogo className="fill-white w-4 h-4" />
                  </Link>
                  <Link href="#">
                    <YoutubeLogo className="fill-white w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative z-50 flex-shrink-0">
              <Image
                src={Banner}
                alt="Banner"
                width={166}
                height={224}
                quality={100}
                className="w-[218px] h-[278px]"
              />

              <Image
                src={Cover}
                alt="Cover"
                width={166}
                height={224}
                quality={100}
                className="  absolute z-10 w-[218px] h-[281px] top-0 left-0"
              />
            </div>
          </div>

          <div className="w-[380px] h-[257px] bg-[#FFFFFF10] rounded-lg flex items-center flex-col gap-5 justify-center">
            <div className="flex items-center flex-col gap-[6px]">
              <h2 className="text-[22px] font-ptserif text-white font-bold">
                Assine a Revista Exato
              </h2>

              <p className="text-xs text-[#FFF]">
                e tenha acesso a todas as edições
              </p>

              <div className="flex items-center gap-2 px-8">
                <p className="font-semibold text-gray-100 font-manrope text-base">
                  $
                </p>

                <h2 className="text-orange-200 text-[44px] font-bold">3.90</h2>

                <p className="text-gray-100 font-manrope text-xs font-medium">
                  /Por mês
                </p>
              </div>

              <p className="text-xs text-[#FFF]">Cancele quando quiser</p>
            </div>

            <Button
              variant="primary"
              className=" h-[40px] bg-orange-200 text-white flex items-center justify-center gap-1"
            >
              Assinar <CaretRight size={16} className="text-white" />
            </Button>
          </div>
        </div>
      </section>

      <div className="w-full max-w-[800px] mx-auto h-full flex flex-col gap-16 relative z-10">
        <section className="md:mt-24 p-4 md:p-0 mt-12 w-full">
          <div className="pb-3 mb-8 border-b border-gray-500">
            <h2 className="font-ptserif text-[32px] font-bold text-black flex items-center gap-2">
              Capa
            </h2>
          </div>

          <div className="max-w-[100vw] md:w-[800px]">
            <Notice
              category="mundo"
              createdAt="2021-09-13T15:00:00.000Z"
              title="Trump deve se apresentar hoje à Justiça"
              description="Ex-presidente dos EUA nega qualquer irregularidade e criticou as acusações que enfrente em um evento de campanha no sábado (10)"
              image=""
              size="large"
            />
          </div>
        </section>

        <div className="flex flex-col gap-8">
          <div className="pb-3 mb-8 border-b border-gray-500">
            <h2 className="font-ptserif text-[32px] font-bold text-black flex items-center gap-2">
              Carta ao Leitor
            </h2>
          </div>
          <Notice
            category="mundo"
            size="medium"
            title="Servidores do TSE monitoravam Monark para identificar críticas à Justiça Eleitoral"
            createdAt="2021-09-13T15:00:00.000Z"
            image=""
            description="O surgimento das criptomoedas trouxe uma mudança de paradigma no mundo financeiro."
          />
        </div>

        <section className="w-full flex flex-col mt-4 gap-6">
          <div className="pb-3 mb-8 border-b border-gray-500">
            <h2 className="font-ptserif text-[32px] font-bold text-black flex items-center gap-2">
              Essencial
            </h2>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
            <div className="px-4 md:p-0">
              <Notice
                category="política"
                createdAt="2021-09-13T15:00:00.000Z"
                image=""
                size="medium"
                title="Trump deve se apresentar hoje à Justiça"
              />
            </div>

            <div className="px-4 md:p-0">
              <Notice
                category="política"
                createdAt="2021-09-13T15:00:00.000Z"
                image=""
                size="medium"
                title="Trump deve se apresentar hoje à Justiça"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
            <div className="px-4 md:p-0">
              <Notice
                category="política"
                createdAt="2021-09-13T15:00:00.000Z"
                image=""
                size="medium"
                title="Trump deve se apresentar hoje à Justiça"
              />
            </div>

            <div className="px-4 md:p-0">
              <Notice
                category="política"
                createdAt="2021-09-13T15:00:00.000Z"
                image=""
                size="medium"
                title="Trump deve se apresentar hoje à Justiça"
              />
            </div>
          </div>
        </section>

        <div className="w-full flex flex-col gap-8">
          <div className="w-full pb-3 mb-8 border-b border-gray-500">
            <h2 className="font-ptserif text-[32px] font-bold text-black flex items-center gap-2">
              Essencial
            </h2>
          </div>
          <Notice
            category="mundo"
            size="medium"
            title="Servidores do TSE monitoravam Monark para identificar críticas à Justiça Eleitoral"
            createdAt="2021-09-13T15:00:00.000Z"
            image=""
            description="O surgimento das criptomoedas trouxe uma mudança de paradigma no mundo financeiro."
          />
        </div>

        <div className="flex items-center justify-center w-full my-20">
          <Button
            variant="tertiary"
            className="flex items-center gap-[10px] text-black"
          >
            Carregar mais
            <CaretDown size={16} className="text-orange-200" weight="bold" />
          </Button>
        </div>
      </div>
      <Newsletter />

      <div className="w-full max-w-[1215px] mx-auto">
        <div className="w-[335px] mx-auto h-[45px] md:w-full flex justify-center items-center my-[48px] md:my-[96px] md:h-[156px] bg-gray-400 rounded-lg">
          ADS
        </div>
      </div>
    </main>
  )
}
