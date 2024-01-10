import Button from '@/components/button'
import CheckCircle from '@/components/icons/check-circle'
import CaretRight from '@/components/icons/caret-right'
import GlobeHemisphereWest from '@/components/icons/world'
import ChatCircles from '@/components/icons/chat-circles'
import Medal from '@/components/icons/medal'
import Plus from '@/components/icons/plus'

export default function Planos() {
  return (
    <main>
      <section className="w-full h-[1008px] bg-gray-700 py-20 flex items-center justify-start flex-col gap-20">
        <div className="flex flex-col gap-[14px] items-center">
          <h1 className="text-2xl text-black font-bold text-center">
            Una-se a nós para uma jornada de descoberta, informação e inclusão.
          </h1>

          <p className="text-base text-gray-200 text-center max-w-[660px]">
            Ao assinar a Revista EXATO, você terá acesso a conteúdo relevante e
            acessível, projetado para proporcionar uma experiência de leitura
            agradável e informativa.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-4 max-w-[1220px] mx-auto">
          <div className="w-[295px] h-[610px] bg-[#fff] rounded-lg flex flex-col gap-8 py-8">
            <div className="flex flex-col gap-1 px-8">
              <h2 className="text-lg text-black font-bold text-left">
                Plano mensal
              </h2>

              <p className="text-xs text-gray-200 text-left max-w-[660px]">
                Acesso ilimitado a notícias
              </p>
            </div>

            <div className="flex items-center gap-2 px-8">
              <p className="font-semibold text-gray-100 font-manrope text-base">
                $
              </p>

              <h2 className="text-orange-200 text-[44px] font-bold">3.90</h2>

              <p className="text-gray-100 font-manrope text-xs font-medium">
                /Por mês
              </p>
            </div>

            <div className="w-full h-[1px] bg-gray-500 flex-shrink-0" />

            <ul className="px-8 flex flex-col gap-6">
              <li className="flex items-center gap-3 text-gray-100 font-manrope text-xs font-semibold">
                <CheckCircle className="fill-orange-200" />
                Acesso ilimitado a notícias, análises, vídeos e podcasts.
              </li>
              <li className="flex items-center gap-3 text-gray-100 font-manrope text-xs font-semibold">
                <CheckCircle className="fill-orange-200" />
                Acesso ilimitado a todas ediçoes da exato
              </li>
              <li className="flex items-center gap-3 text-gray-100 font-manrope text-xs font-semibold">
                <CheckCircle className="fill-orange-200" />
                Acesso aos cupons dos parceiros da exato.
              </li>
              <li className="flex items-center gap-3 text-gray-100 font-manrope text-xs font-semibold">
                <CheckCircle className="fill-orange-200" />
                Os melhores colunistas do brasil e do mundo.
              </li>
              <li className="flex items-center gap-3 text-gray-100 font-manrope text-xs font-semibold">
                <CheckCircle className="fill-orange-200" />
                Os melhores colunistas do brasil e do mundo.
              </li>
            </ul>

            <Button variant="secondary" className="mx-8">
              Assinar
              <CaretRight weight="bold" className="text-white" />
            </Button>
          </div>
          <div className="w-[295px] h-[610px] bg-[#fff] rounded-lg flex flex-col gap-8 py-8">
            <div className="flex flex-col gap-1 px-8">
              <div className="flex items-center gap-4">
                <h2 className="text-lg text-black font-bold text-left">
                  Plano semestral
                </h2>

                <span className="py-[2px] px-2 rounded-lg bg-orange-200 font-manrope font-bold text-white text-sm">
                  5% off
                </span>
              </div>

              <p className="text-xs text-gray-200 text-left max-w-[660px]">
                Acesso ilimitado a notícias
              </p>
            </div>

            <div className="flex items-center gap-2 px-8">
              <p className="font-semibold text-gray-100 font-manrope text-base">
                $
              </p>

              <h2 className="text-orange-200 text-[44px] font-bold">22.20</h2>

              <p className="text-gray-100 font-manrope text-xs font-medium">
                /Por mês
              </p>
            </div>

            <div className="w-full h-[1px] bg-gray-500 flex-shrink-0" />

            <ul className="px-8 flex flex-col gap-6">
              <li className="flex items-center gap-3 text-gray-100 font-manrope text-xs font-semibold">
                <CheckCircle className="fill-orange-200" />
                Acesso ilimitado a notícias, análises, vídeos e podcasts.
              </li>
              <li className="flex items-center gap-3 text-gray-100 font-manrope text-xs font-semibold">
                <CheckCircle className="fill-orange-200" />
                Acesso ilimitado a todas ediçoes da exato
              </li>
              <li className="flex items-center gap-3 text-gray-100 font-manrope text-xs font-semibold">
                <CheckCircle className="fill-orange-200" />
                Acesso aos cupons dos parceiros da exato.
              </li>
              <li className="flex items-center gap-3 text-gray-100 font-manrope text-xs font-semibold">
                <CheckCircle className="fill-orange-200" />
                Os melhores colunistas do brasil e do mundo.
              </li>
              <li className="flex items-center gap-3 text-gray-100 font-manrope text-xs font-semibold">
                <CheckCircle className="fill-orange-200" />
                Os melhores colunistas do brasil e do mundo.
              </li>
            </ul>

            <Button variant="secondary" className="mx-8">
              Assinar
              <CaretRight weight="bold" className="text-white" />
            </Button>
          </div>
          <div className="relative">
            <header className="absolute -top-[34px] w-full h-[60px] bg-orange-100 rounded-lg flex items-start justify-center py-[10px]">
              <p className="text-white text-xs font-bold">
                MELHOR OFERTA! 10$ OFF
              </p>
            </header>
            <div className="w-[295px] h-[610px] bg-[#fff] rounded-lg flex flex-col gap-8 py-8 relative z-10">
              <div className="flex flex-col gap-1 px-8">
                <div className="flex items-center gap-4">
                  <h2 className="text-lg text-black font-bold text-left">
                    Plano anual
                  </h2>

                  <span className="py-[2px] px-2 rounded-lg bg-orange-200 font-manrope font-bold text-white text-sm">
                    10% off
                  </span>
                </div>

                <p className="text-xs text-gray-200 text-left max-w-[660px]">
                  Acesso ilimitado a notícias
                </p>
              </div>

              <div className="flex items-center gap-2 px-8">
                <p className="font-semibold text-gray-100 font-manrope text-base">
                  $
                </p>

                <h2 className="text-orange-200 text-[44px] font-bold">42.10</h2>

                <p className="text-gray-100 font-manrope text-xs font-medium">
                  /Por mês
                </p>
              </div>

              <div className="w-full h-[1px] bg-gray-500 flex-shrink-0" />

              <ul className="px-8 flex flex-col gap-6">
                <li className="flex items-center gap-3 text-gray-100 font-manrope text-xs font-semibold">
                  <CheckCircle className="fill-orange-200" />
                  Acesso ilimitado a notícias, análises, vídeos e podcasts.
                </li>
                <li className="flex items-center gap-3 text-gray-100 font-manrope text-xs font-semibold">
                  <CheckCircle className="fill-orange-200" />
                  Acesso ilimitado a todas ediçoes da exato
                </li>
                <li className="flex items-center gap-3 text-gray-100 font-manrope text-xs font-semibold">
                  <CheckCircle className="fill-orange-200" />
                  Acesso aos cupons dos parceiros da exato.
                </li>
                <li className="flex items-center gap-3 text-gray-100 font-manrope text-xs font-semibold">
                  <CheckCircle className="fill-orange-200" />
                  Os melhores colunistas do brasil e do mundo.
                </li>
                <li className="flex items-center gap-3 text-gray-100 font-manrope text-xs font-semibold">
                  <CheckCircle className="fill-orange-200" />
                  Os melhores colunistas do brasil e do mundo.
                </li>
              </ul>

              <Button variant="secondary" className="mx-8">
                Assinar
                <CaretRight weight="bold" className="text-white" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <header className="absolute -top-[34px] w-full h-[60px] bg-black rounded-lg flex items-start justify-center py-[10px]">
              <p className="text-white text-xs font-bold">MAIS COMPLETO!</p>
            </header>
            <div className="w-[295px] h-[610px] bg-[#fff] rounded-lg flex flex-col gap-5 py-8 relative z-10">
              <div className="flex flex-col gap-1 px-8">
                <h2 className="text-lg text-black font-bold text-left">
                  Platinum anual
                </h2>

                <p className="text-xs text-gray-200 text-left max-w-[660px]">
                  Acesso ilimitado a notícias
                </p>
                <h2 className="text-sm text-black font-bold text-left">
                  Recomendado
                </h2>
              </div>

              <div className="flex items-center gap-2 px-8">
                <p className="font-semibold text-gray-100 font-manrope text-base">
                  $
                </p>

                <h2 className="text-black text-[44px] font-bold">46.80</h2>

                <p className="text-gray-100 font-manrope text-xs font-medium">
                  /Por mês
                </p>
              </div>

              <div className="w-full h-[1px] bg-gray-500 flex-shrink-0" />

              <ul className="px-8 flex flex-col gap-6 mt-6">
                <li className="flex items-center gap-3 text-gray-100 font-manrope text-xs font-semibold">
                  <CheckCircle className="fill-black" />
                  Todos beneficios do plano anual.
                </li>
                <li className="flex items-center gap-3 text-gray-100 font-manrope text-xs font-semibold">
                  Mais:
                </li>
                <li className="flex items-center gap-3 text-gray-100 font-manrope text-xs font-semibold">
                  <CheckCircle className="fill-black" />
                  Acesso aos cursos com desconto pela exato
                </li>
                <li className="flex items-center gap-3 text-gray-100 font-manrope text-xs font-semibold">
                  <CheckCircle className="fill-black" />
                  Palestras e aulas exclusivas para aprofundar seu conhecimento.
                </li>
              </ul>

              <Button
                variant="secondary"
                className="mt-[85px] mx-8 bg-[black!important] border-[black!important] hover:bg-[#0b0b0b!important] hover:border-[#0b0b0b!important]"
              >
                Assinar
                <CaretRight weight="bold" className="text-white" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full mt-[90px] flex flex-col gap-16">
        <div className="flex flex-col gap-[14px] items-center">
          <h2 className="text-2xl text-black font-bold text-center">
            Por que assinar a Exato?
          </h2>

          <p className="text-base text-gray-200 text-center max-w-[550px]">
            Descubra um mundo de informações precisas e análises aprofundadas{' '}
            <b>Torne-se um assinante da Exato hoje mesmo!</b>
          </p>
        </div>

        <div className="grid grid-cols-3 gap-10 max-w-[1220px] mx-auto">
          <div className="p-8 bg-gray-700 flex flex-col gap-8 rounded-2xl">
            <GlobeHemisphereWest
              className="text-orange-200"
              size={40}
              weight="fill"
            />

            <div className="flex flex-col gap-[14px] items-start">
              <h2 className="text-lg text-black font-bold text-left">
                Conhecimento Global, <br />
                Perspectivas Nacionais
              </h2>

              <p className="text-base text-gray-200 text-left">
                A Exato reúne grandes nomes de brasileiros espalhados ao redor
                do mundo, para trazer informação e educação sobre política,
                economia, e muito mais.
              </p>
            </div>
          </div>
          <div className="p-8 bg-gray-700 flex flex-col gap-8 rounded-2xl">
            <ChatCircles className="fill-orange-200" />

            <div className="flex flex-col gap-[14px] items-start">
              <h2 className="text-lg text-black font-bold text-left">
                Diálogo Construtivo, Jornalismo de Excelência
              </h2>

              <p className="text-base text-gray-200 text-left">
                Através do diálogo, apresentamos nossa visão em debates
                saudáveis, pautados pelos princípios da credibilidade,
                integridade, verdade, responsabilidade e excelência.
              </p>
            </div>
          </div>
          <div className="p-8 bg-gray-700 flex flex-col gap-8 rounded-2xl">
            <Medal className="fill-orange-200" />

            <div className="flex flex-col gap-[14px] items-start">
              <h2 className="text-lg text-black font-bold text-left">
                Compromisso com Valores Fundamentais
              </h2>

              <p className="text-base text-gray-200 text-left">
                Como base temos nosso compromisso em defender a família, a
                propriedade privada, a agricultura como economia sustentável e
                independente, e a liberdade de expressão assim como a liberdade
                de culto religioso.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full mt-[90px] mb-[150px] flex flex-col gap-16">
        <h2 className="text-2xl text-black font-bold text-center">Dúvidas</h2>

        <div className="max-w-[800px] w-full mx-auto">
          <div className="w-full h-[100px] flex justify-between items-center border-y border-gray-500 cursor-pointer">
            <p className="text-base text-gray-200 text-left">
              Como funciona a assinatura do Plano Mensal?
            </p>

            <Plus className="text-gray-200" size={16} />
          </div>
          <div className="w-full h-[100px] flex justify-between items-center border-y border-gray-500 cursor-pointer">
            <p className="text-base text-gray-200 text-left">
              Como é feita a cobrança da assinatura?
            </p>

            <Plus className="text-gray-200" size={16} />
          </div>
          <div className="w-full h-[100px] flex justify-between items-center border-y border-gray-500 cursor-pointer">
            <p className="text-base text-gray-200 text-left">
              Quanto tempo leva para o acesso digital ser liberado após a
              assinatura?
            </p>

            <Plus className="text-gray-200" size={16} />
          </div>
          <div className="w-full h-[100px] flex justify-between items-center border-y border-gray-500 cursor-pointer">
            <p className="text-base text-gray-200 text-left">
              Como funciona a renovação da assinatura?
            </p>

            <Plus className="text-gray-200" size={16} />
          </div>
          <div className="w-full h-[100px] flex justify-between items-center border-y border-gray-500 cursor-pointer">
            <p className="text-base text-gray-200 text-left">
              Quando pode ocorrer um reajuste no preço da mensalidade?
            </p>

            <Plus className="text-gray-200" size={16} />
          </div>
          <div className="w-full h-[100px] flex justify-between items-center border-y border-gray-500 cursor-pointer">
            <p className="text-base text-gray-200 text-left">
              Como funciona o desconto com os parceiros?
            </p>

            <Plus className="text-gray-200" size={16} />
          </div>
          <div className="w-full h-[100px] flex justify-between items-center border-y border-gray-500 cursor-pointer">
            <p className="text-base text-gray-200 text-left">
              Como funciona o acesso aos cursos?
            </p>

            <Plus className="text-gray-200" size={16} />
          </div>
          <div className="w-full h-[100px] flex justify-between items-center border-t border-gray-500 cursor-pointer">
            <p className="text-base text-gray-200 text-left">
              Como posso cancelar minha assinatura?
            </p>

            <Plus className="text-gray-200" size={16} />
          </div>
        </div>
      </section>
    </main>
  )
}
