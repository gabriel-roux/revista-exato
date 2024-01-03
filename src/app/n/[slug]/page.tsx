/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import ShareNetwork from '@/components/icons/share'
import LinkIcon from '@/components/icons/link'
import Archive from '@/components/icons/archive'
import { Velocity } from '@/components/video-notice/velocity'
import PauseCircle from '@/components/icons/pause'
import Dot from '@/components/icons/dot'
import Quotes from '@/components/icons/quotes'
import Banner from '@/assets/banner.png'
import CaretRight from '@/components/icons/caret-right'
import Button from '@/components/button'
import Hashtag from '@/components/icons/hash'
import BookmarksSimple from '@/components/icons/bookmark-simple'
import PaperPlaneTilt from '@/components/icons/paper-plane-tilt'
import Microphone from '@/components/icons/microphone'
import PenNib from '@/components/icons/pen-nib'
import ColunistaImg from '@/assets/colunista.png'
import { Newsletter } from '@/screens/home/newsletter'
import CaretDown from '@/components/icons/caret-down'
import ArrowCircleLeft from '@/components/icons/arrow-circle-left'
import ArrowCircleRight from '@/components/icons/arrow-circle-right'
import MoreNews from '@/screens/categorias/more-news'
import Heart from '@/components/icons/heart'
import ShareFat from '@/components/icons/share-fat'
import Link from 'next/link'
import SpeakerHigh from '@/components/icons/speaker-high'

export default function SlugPage() {
  return (
    <main className="pt-16 border-t border-gray-500">
      <section className="overflow-hidden w-full max-w-[100vw] md:max-w-[1215px] mx-auto px-4 md:p-0">
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
            className={`text-black text-2xl md:text-5xl md:leading-[140%!important] font-manrope font-bold text-center`}
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

        <div className="w-full flex justify-between items-center mt-16">
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
              <span>
                Por{' '}
                <Link href="#" className="underline">
                  Priscila cardoso
                </Link>
              </span>
              <span
                className={`hidden md:inline-block w-[6px] h-[6px] bg-gray-400 rounded-full ml-2 mr-2`}
              ></span>
              <span className="text-gray-200 font-normal hidden md:flex">
                Guerra na ucrânia
              </span>
            </small>
          </div>
          <small
            className={`text-gray-200 text-sm font-manrope hidden md:flex items-center`}
          >
            Postado em 12 de novembro de 2023 às 14:32
            <span
              className={`w-[6px] h-[6px] bg-gray-400 rounded-full ml-2 mr-2 hidden md:inline-block`}
            ></span>
            <span className="text-gray-200 font-normal hidden md:flex">
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
              <LinkIcon size={24} weight="regular" />
            </button>
          </div>
        </div>
      </section>

      <div className="w-full h-[312px] md:h-[612px] bg-gray-100 mt-7"></div>

      <section className="overflow-hidden w-full md:max-w-[1215px] mx-auto mt-2 px-4 md:p-0">
        <div className="w-full flex justify-between items-center mt-4">
          <div className="flex items-start gap-3 flex-col md:flex-row">
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

        <div className="w-full flex-1 justify-between flex items-start">
          <div className="w-full max-w-[600px] md:max-w-[800px] flex flex-col gap-9 ">
            <div className="flex gap-3 items-start md:items-center flex-col md:flex-row">
              <p className="font-manrope text-gray-200 text-xs md:text-sm">
                Ouça este conteúdo:
              </p>

              <footer className="flex items-center gap-1 px-4 py-1 rounded-lg border border-gray-500">
                <div className="flex items-center gap-2">
                  <PauseCircle
                    size={30}
                    className="text-orange-200"
                    weight="fill"
                  />

                  <div className="w-[200px] md:w-[460px] h-[6px] bg-gray-600 rounded-full">
                    <div className="w-[50%] h-full bg-orange-400 rounded-full relative">
                      <div className="absolute w-4 h-4 border-2 border-white bg-orange-200 rounded-full top-[-5px] right-0"></div>
                    </div>
                  </div>

                  <SpeakerHigh />
                  <Velocity />
                </div>
              </footer>
            </div>

            <div className="flex flex-col gap-8">
              <p className="font-manrope text-lg text-black leading-[160%!important]">
                O surgimento das criptomoedas trouxe uma mudança de paradigma no
                mundo financeiro. No entanto, esta nova fronteira é, muitas
                vezes, mal compreendida, levando à apreensão e à hesitação entre
                os potenciais adotantes. Sendo assim, vê-se a necessidade de
                conscientizar e educar a sociedade em relação aos ativos
                digitais e todos os seus benefícios. Ao esclarecer os mitos das
                criptomoedas e fornecer informações precisas, é possível ajudar
                a promover a compreensão e a adoção desta tecnologia inovadora.
              </p>

              <p className="font-manrope text-lg text-black leading-[160%!important]">
                Em momentos de recuperação de preços como se viu nas últimas
                semanas, a busca por informações cresce acompanhando os gráficos
                do mercado. Cada vez mais pessoas têm olhado os criptoativos
                como uma ferramenta para diversificação de investimentos e
                aumento de ganhos. Para que isso aconteça de forma sólida, o
                acesso à educação sobre esta indústria é essencial.
              </p>

              <p className="font-manrope text-lg text-black leading-[160%!important]">
                É comum que pessoas não saibam o que são e como funcionam. Além
                disso, não sabem o que é a rede blockchain e como podem se
                beneficiar de sua tecnologia. Muitos têm a percepção de que é um
                assunto extremamente complexo e, assim, sentem que não são
                capazes de compreendê-lo, o que vem se mostrando um dos maiores
                obstáculos para que ingressem no universo cripto e aproveitem os
                benefícios que ele oferece.
              </p>

              <div className="md:pl-[50px] border-l border-gray-500 flex flex-col gap-8">
                <h2 className="font-ptserif text-black font-bold text-2xl">
                  Talvez você possa gostar
                </h2>

                <ul className="flex flex-col gap-6">
                  <li className="li-noticia transition-all duration-200 flex items-center gap-8 text-gray-200 font-semibold font-manrope">
                    <Dot /> A história de sucesso da Oncoclínicas&Co. na
                    promoção do aprendizado corporativo
                  </li>
                  <li className="li-noticia transition-all duration-200 flex items-center gap-8 text-gray-200 font-semibold font-manrope">
                    <Dot />
                    Em nova campanha, a Renner acompanha a vida de uma mulher
                    dos 8 aos 80 anos
                  </li>
                  <li className="li-noticia transition-all duration-200 flex items-center gap-8 text-gray-200 font-semibold font-manrope">
                    <Dot />
                    Ford abre inscrições para formação gratuita em tecnologia;
                    saiba como participar
                  </li>
                  <li className="li-noticia transition-all duration-200 flex items-center gap-8 text-gray-200 font-semibold font-manrope">
                    <Dot /> A história de sucesso da Oncoclínicas&Co. na
                    promoção do aprendizado corporativo
                  </li>
                </ul>
              </div>

              <div className="w-full h-[1px] bg-gray-500 my-4" />

              <div className="flex flex-col items-center justify-center gap-7">
                <Quotes />

                <h2 className="text-black font-bold text-2xl text-center">
                  Desde o seu lançamento em 2018, a{' '}
                  <span className="text-orange-100">Binance</span>, criou uma
                  plataforma para oferecer conteúdo gratuito em diversos idiomas
                  para os entusiastas das criptomoedas.”
                </h2>

                <small
                  className={`text-black text-sm font-medium font-manrope flex items-center`}
                >
                  Priscila cardoso
                  <span
                    className={`inline-block w-[6px] h-[6px] bg-gray-400 rounded-full ml-2 mr-2`}
                  ></span>
                  <span className="text-gray-200 font-normal">
                    Deputada federal
                  </span>
                </small>
              </div>

              <div className="w-full h-[1px] bg-gray-500 my-4" />

              <div className="flex flex-col gap-4">
                <div className="w-full h-[280px] md:h-[414px] bg-gray-100 rounded-lg"></div>

                <div className="w-full flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <small
                      className={`text-gray-200 text-xs font-medium font-manrope flex items-center`}
                    >
                      Legenda: O surgimento das criptomoedas trouxe uma mudança
                      de paradigma no mundo financeiro...
                    </small>
                  </div>
                  <small
                    className={`text-gray-200 text-xs font-manrope flex items-center`}
                  >
                    Foto: Globo/João Santos
                  </small>
                </div>
              </div>

              <p className="font-manrope text-xl font-semibold text-black">
                Conteúdo gratuito sobre cripto
              </p>

              <p className="font-manrope text-lg text-black leading-[160%!important]">
                A <span className="text-orange-100">Binance Academy</span>, como
                chama o braço educacional da exchange, tem sido uma das maiores
                e mais abrangentes coleções online de artigos sobre a indústria
                no mundo, com material sobre blockchain e criptomoedas em mais
                de 32 idiomas. Atualmente, mais de 3,2 milhões de pessoas
                acessam a plataforma todas as semanas em busca de conteúdo.
                <br />
                <br />
                Além de adquirir habilidades práticas, como a criação de uma
                carteira sem custódia (por exemplo, MetaMask ou TrustWallet) e a
                exploração de{' '}
                <span className="text-orange-100">
                  estratégias de redução de riscos
                </span>
                , aqueles que acessam a Binance Academy também podem aprender
                sobre os princípios fundamentais da interação com ativos
                digitais, entre centenas de outros temas.
                <br />
                <br />
                “Como líder no segmento, temos o dever de olhar para todos os
                usuários, do iniciante ao avançado, do investidor de varejo ao
                corporativo. Para que a inclusão financeira se aprofunde, é
                preciso que as plataformas tenham o olhar apurado para as
                necessidades dos clientes, e por isso o foco no usuário é um
                valor essencial da #Binance, e a educação é um de nossos
                pilares", comenta o diretor-geral da Binance no Brasil,
                Guilherme Nazar.
                <br />
                <br />
                Para fomentar a formação de usuários, a Binance lançou o
                programa educacional cripto Learn and Earn (“Aprenda e Ganhe”)
                para incentivar os usuários a desenvolver habilidades
                específicas necessárias ao realizar suas próprias pesquisas,
                enquanto ganham recompensas. Hospedados na Binance Academy,
                artigos e vídeos curtos do Learn and Earn apresentam os
                principais dados dos projetos e familiarizam os leitores com o
                tipo de informação que devem procurar antes de escolher um
                token. Um simples questionário final testa a compreensão básica
                do projeto. Até agora, 3,1 milhões de pessoas concluíram os
                cursos do programa que distribuiu US$ 5,2 milhões em recompensas
                em forma de token.
              </p>

              <p className="font-manrope text-xl font-semibold text-black my-4">
                Para fomentar a formação de usuários
              </p>

              <p className="font-manrope text-lg text-black leading-[160%!important]">
                Em outubro de 2022, a Binance também lançou cursos educativos
                gratuitos em 14 idiomas, oferecendo educação personalizada e
                estruturada sobre blockchain e criptomoedas. Este ano, a Academy
                também introduziu cursos com certificação profissional, com o
                objetivo de educar os alunos interessados e equipá-los com
                habilidades e conhecimento para uma carreira no espaço cripto e
                Web3.
                <br />
                <br />
                Além disso, foi iniciada uma nova série de webinars semanais,
                que podem ser acessados através do Binance Live ou da conta{' '}
                <span className="text-orange-100">@BinanceBrasil</span> no
                YouTube, para conhecer o ecossistema, aprender a usar a
                plataforma e cada um dos produtos da exchange.
                <br />
                <br />
                Na América Latina, este ano, a Binance anunciou sua primeira
                parceria na Argentina, juntamente com a Faculdade de Ciências
                Empresariais da Universidade Austral. No Brasil, foram
                realizados workshops para mais de 1,5 mil alunos em parceria com
                mais de dez universidades, incluindo o Instituto Tecnológico de
                Aeronáutica (ITA), a Fundação Getulio Vargas (FGV), o Instituto
                de Tecnologia e Liderança (Inteli), a Universidade Estadual de
                Campinas (Unicamp), a Universidade de São Paulo (USP) e o
                Instituto de Ensino e Pesquisa (Insper).
                <br />
                <br />
                O programa Binance Scholar oferece bolsas de estudo a pessoas de
                comunidades desfavorecidas para que realizem cursos de
                blockchain nas principais universidades, escolas de formação
                profissional e institutos universitários em todo o mundo.
                <br />
                <br />
                “Estamos convencidos de que a adoção das criptomoedas e o
                desenvolvimento de tecnologias blockchain e Web3 ainda estão em
                suas fases iniciais", afirma Nazar. "Para acelerar esses
                processos, a Binance investe em educação no longo prazo, seja
                financiando pesquisas acadêmicas em algumas das melhores
                universidades do mundo, seja desenvolvendo cursos gratuitos”,
                acrescenta.
              </p>
            </div>
          </div>
          <div className="md:flex flex-col gap-8 w-full max-w-[275px] hidden">
            <div className="flex flex-col gap-3">
              <Image
                src={Banner}
                alt=""
                width={275}
                height={392}
                quality={100}
                className="rounded-lg max-w-[275px]"
              />

              <footer className="flex w-full justify-between items-center">
                <p className="text-gray-200 text-sm font-manrope flex items-center gap-1">
                  <Hashtag
                    size={20}
                    className="text-orange-200"
                    weight="fill"
                  />{' '}
                  Edição de Nº45
                </p>

                <Button
                  variant="tertiary"
                  size="sm"
                  className="p-[0!important] flex justify-center items-center gap-2"
                >
                  Ver todas{' '}
                  <CaretRight
                    size={16}
                    weight="regular"
                    className="text-orange-200"
                  />
                </Button>
              </footer>
            </div>

            <div className="w-full h-[1px] bg-gray-500" />

            <header className="hidden md:flex justify-between items-center">
              <h2 className="font-ptserif font-bold text-black text-[24px] flex items-center gap-2">
                <BookmarksSimple
                  size={24}
                  weight="fill"
                  className="text-orange-200"
                />{' '}
                Top 5 semana
              </h2>
            </header>

            <div className="flex flex-col border-b border-gray-500">
              <div className="flex items-start gap-4 pb-6 mb-6 border-b border-gray-500 hover:text-orange-200">
                <p className="text-orange-400">1</p>

                <p className="[&:not(:hover)]:text-black font-semibold text-sm transition-colors duration-200">
                  Brasil teme nova crise de imigrantes no Acre após Chile e Peru
                  endurecerem contra imigrantes
                </p>
              </div>
              <div className="flex items-start gap-4 pb-6 mb-6 border-b border-gray-500 hover:text-orange-200">
                <p className="text-orange-400">2</p>

                <p className="[&:not(:hover)]:text-black font-semibold text-sm transition-colors duration-200">
                  Invasor que fez live na cadeira de Moraes é preso
                </p>
              </div>
              <div className="flex items-start gap-4 pb-6 mb-6 border-b border-gray-500 hover:text-orange-200">
                <p className="text-orange-400">3</p>

                <p className="[&:not(:hover)]:text-black font-semibold text-sm transition-colors duration-200">
                  Rosa Weber: como ministra acabou com farra dos pedidos de
                  vistas e foi contraponto a ministros políticos
                </p>
              </div>
              <div className="flex items-start gap-4 pb-6 mb-6 border-b border-gray-500 hover:text-orange-200">
                <p className="text-orange-400">4</p>

                <p className="[&:not(:hover)]:text-black font-semibold text-sm transition-colors duration-200">
                  Oposição articula PEC que permitiria ao Congresso Nacional
                  barrar decisões do STF
                </p>
              </div>
              <div className="flex items-start gap-4 pb-6 mb-6 hover:text-orange-200">
                <p className="text-orange-400">5</p>

                <p className="[&:not(:hover)]:text-black font-semibold text-sm transition-colors duration-200">
                  Campos Neto pediu e Lula vai recebê-lo no Planalto pela
                  primeira vez
                </p>
              </div>
            </div>

            <div className="w-full bg-black p-8 flex flex-col gap-6">
              <p>
                <PaperPlaneTilt
                  weight="fill"
                  size={32}
                  className="text-orange-200"
                />
              </p>

              <h2 className="text-white text-2xl font-bold text-left font-ptserif">
                Inscreva-se agora para receber nossa newsletter
              </h2>

              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full max-w-[350px] h-[50px] px-4 bg-gray-100 rounded-md text-white placeholder-gray-300 font-manrope transition-all duration-200 outline-0 border-0 focus:shadow-input"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full max-w-[350px] h-[50px] px-4 bg-gray-100 rounded-md text-white placeholder-gray-300 font-manrope transition-all duration-200 outline-0 border-0 focus:shadow-input"
                />
                <Button
                  variant="secondary"
                  size="md"
                  className="flex items-center justify-center gap-2"
                >
                  Inscrever <CaretRight size={20} />
                </Button>
              </div>
            </div>

            <div className="w-full h-[1px] bg-gray-500" />

            <header className="hidden md:flex justify-between items-center">
              <h2 className="font-ptserif font-bold text-black text-[24px] flex items-center gap-2">
                <PenNib size={24} weight="fill" className="text-orange-200" />{' '}
                Colunistas
              </h2>
            </header>

            <div className="flex flex-col border-b border-gray-500">
              <div className="flex items-center gap-6 pb-4 border-b border-gray-500">
                <Image
                  src={ColunistaImg}
                  alt="Colunista"
                  width={58}
                  height={58}
                  quality={100}
                  className="flex-shrink-0 rounded-full"
                />

                <div className="flex flex-col gap-1">
                  <h2 className="text-lg text-black">Fernanda Silva</h2>
                  <p className="hidden md:inline-block text-sm text-gray-200">
                    Jornalista
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 pb-4 border-b border-gray-500 mt-4">
                <Image
                  src={ColunistaImg}
                  alt="Colunista"
                  width={58}
                  height={58}
                  quality={100}
                  className="flex-shrink-0 rounded-full"
                />

                <div className="flex flex-col gap-1">
                  <h2 className="text-lg text-black">Fernanda Silva</h2>
                  <p className="hidden md:inline-block text-sm text-gray-200">
                    Jornalista
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 pb-4 border-b border-gray-500 mt-4">
                <Image
                  src={ColunistaImg}
                  alt="Colunista"
                  width={58}
                  height={58}
                  quality={100}
                  className="flex-shrink-0 rounded-full"
                />

                <div className="flex flex-col gap-1">
                  <h2 className="text-lg text-black">Fernanda Silva</h2>
                  <p className="hidden md:inline-block text-sm text-gray-200">
                    Jornalista
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 pb-4 mt-4">
                <Image
                  src={ColunistaImg}
                  alt="Colunista"
                  width={58}
                  height={58}
                  quality={100}
                  className="flex-shrink-0 rounded-full"
                />

                <div className="flex flex-col gap-1">
                  <h2 className="text-lg text-black">Fernanda Silva</h2>
                  <p className="hidden md:inline-block text-sm text-gray-200">
                    Jornalista
                  </p>
                </div>
              </div>

              <Button
                variant="tertiary"
                size="md"
                className="flex items-center gap-2 my-2"
              >
                Ver todos{' '}
                <CaretRight className="text-orange-200 p-0" size={20} />
              </Button>
            </div>

            <div className="w-full bg-black p-8 flex flex-col gap-6">
              <p>
                <Microphone
                  weight="fill"
                  size={32}
                  className="text-orange-200"
                />
              </p>

              <h2 className="text-white text-2xl font-bold text-left font-ptserif">
                Conheça nossos podcasts
              </h2>

              <Button
                variant="secondary"
                size="md"
                className="flex items-center justify-center gap-2"
              >
                Conhecer <CaretRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`overflow-hidden flex flex-col md:flex-row gap-4 w-full md:max-w-[1372px] mx-auto mt-8 px-4 md:p-0`}
      >
        <div className="flex flex-col gap-3 max-w-[100vw] md:w-[530px]">
          <div className="w-full bg-gray-100 h-[340px]" />

          <small
            className={`text-gray-200 text-xs font-medium font-manrope flex items-center`}
          >
            Legenda: O surgimento das criptomoedas trouxe uma mudança de
            paradigma no mundo financeiro...
          </small>
          <small
            className={`text-gray-200 text-xs font-manrope flex items-center`}
          >
            Foto: Globo/João Santos
          </small>
        </div>
        <div className="flex flex-col gap-3 max-w-[100vw] md:w-[370px]">
          <div className="w-full bg-gray-100 h-[340px]" />

          <small
            className={`text-gray-200 text-xs font-medium font-manrope flex items-center`}
          >
            Legenda: O surgimento das criptomoedas trouxe uma mudança de
            paradigma no mundo financeiro...
          </small>
          <small
            className={`text-gray-200 text-xs font-manrope flex items-center`}
          >
            Foto: Globo/João Santos
          </small>
        </div>
        <div className="flex flex-col gap-3 max-w-[100vw] md:w-[446px]">
          <div className="w-full bg-gray-100 h-[340px]" />

          <small
            className={`text-gray-200 text-xs font-medium font-manrope flex items-center`}
          >
            Legenda: O surgimento das criptomoedas trouxe uma mudança de
            paradigma no mundo financeiro...
          </small>
          <small
            className={`text-gray-200 text-xs font-manrope flex items-center`}
          >
            Foto: Globo/João Santos
          </small>
        </div>
      </section>

      <section className="overflow-hidden w-full max-w-[1215px] mx-auto md:mt-8 px-4 md:p-0">
        <div className="w-[335px] mx-auto h-[45px] md:w-full flex justify-center items-center my-[48px] md:my-[72px] md:h-[156px] bg-gray-400 rounded-lg">
          ADS
        </div>

        <div>
          <h2 className="text-black text-[24px] font-ptserif font-bold">
            Galeria
          </h2>

          <div className="flex flex-col gap-4">
            <div className="w-full h-[300px] md:h-[612px] bg-gray-100 mt-7 rounded-lg"></div>

            <div className="w-full flex justify-between items-center">
              <div className="flex items-center gap-3">
                <small
                  className={`text-gray-200 text-xs font-medium font-manrope flex items-center`}
                >
                  Legenda: O surgimento das criptomoedas trouxe uma mudança de
                  paradigma no mundo financeiro...
                </small>
                <small
                  className={`text-gray-200 text-xs font-manrope flex items-center`}
                >
                  Foto: Globo/João Santos
                </small>
              </div>
              <button className="text-orange-200">
                <ShareNetwork size={24} weight="fill" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button className="text-gray-200">
                <ArrowCircleLeft size={28} />
              </button>
              <div className="w-[152px] h-[85px] bg-gray-100 rounded-lg flex justify-center items-center">
                1/7
              </div>
              <div className="w-[152px] h-[85px] bg-gray-100 rounded-lg flex justify-center items-center">
                2/7
              </div>
              <div className="w-[152px] h-[85px] bg-gray-100 rounded-lg flex justify-center items-center">
                3/7
              </div>
              <div className="w-[152px] h-[85px] bg-gray-100 rounded-lg md:flex justify-center items-center hidden">
                4/7
              </div>
              <div className="w-[152px] h-[85px] bg-gray-100 rounded-lg md:flex justify-center items-center hidden">
                5/7
              </div>
              <div className="w-[152px] h-[85px] bg-gray-100 rounded-lg md:flex justify-center items-center hidden">
                6/7
              </div>
              <div className="w-[152px] h-[85px] bg-gray-100 rounded-lg md:flex justify-center items-center hidden">
                7/7
              </div>
              <button className="text-gray-200">
                <ArrowCircleRight size={28} />
              </button>
            </div>
          </div>

          <div className="w-full h-[1px] bg-gray-500 my-12" />

          <div className="flex items-center gap-4 mb-12">
            <p className="text-base font-manrope text-black font-bold">Tags:</p>
            <small
              className={`text-gray-200 text-sm uppercase font-semibold font-manrope flex items-center`}
            >
              Política
              <span
                className={`inline-block w-[6px] h-[6px] bg-gray-200 rounded-full ml-2 mr-2`}
              ></span>
              <span className="text-gray-200 font-normal">Brasil</span>
              <span
                className={`inline-block w-[6px] h-[6px] bg-gray-200 rounded-full ml-2 mr-2`}
              ></span>
              <span className="text-gray-200 font-normal">Eleições</span>
              <span
                className={`inline-block w-[6px] h-[6px] bg-gray-200 rounded-full ml-2 mr-2`}
              ></span>
              <span className="text-gray-200 font-normal">Economia</span>
            </small>
          </div>
        </div>

        <Newsletter isRounded />

        <div className="w-full flex flex-col gap-16 my-12">
          <div className="w-full flex flex-col gap-4">
            <h2 className="font-manrope text-2xl text-black font-bold">
              Comentarios
            </h2>

            <div className="w-full h-[1px] bg-gray-500" />
          </div>

          <div className="w-full flex flex-col gap-11">
            <div className="md:max-w-[800px] w-full h-[235px] border border-gray-500 flex flex-col gap-6 items-center justify-center rounded-lg mx-auto">
              <h3 className="font-manrope text-black text-center">
                Faça o login na exato para poder comentar
              </h3>

              <Button variant="primary" size="lg" className="border-gray-300">
                Clique aqui para fazer o login
              </Button>
            </div>

            <div className="md:max-w-[800px] w-full flex flex-col gap-9 mx-auto">
              <div className="w-full flex justify-between items-center">
                <div className="flex gap-2">
                  <p className="text-base text-gray-300 font-manrope">
                    Ordenar por:
                  </p>

                  <button className="flex items-center gap-1 text-black font-manrope font-medium">
                    Novos <CaretDown size={16} className="text-orange-200" />
                  </button>
                </div>

                <p className="text-base text-gray-300 font-manrope">
                  300 Comentarios
                </p>
              </div>

              <div className="flex items-start gap-6 pb-9 border-b border-gray-500">
                <Image
                  src={ColunistaImg}
                  alt="Comentario"
                  width={58}
                  height={58}
                  quality={100}
                  className="rounded-full flex-shrink-0"
                />

                <div className="flex flex-col gap-3">
                  <header className="flex items-center justify-between w-full">
                    <small
                      className={`text-black text-base font-semibold font-manrope flex items-center`}
                    >
                      Kevin Murphy
                      <span
                        className={`inline-block w-[6px] h-[6px] bg-gray-300 rounded-full ml-2 mr-2`}
                      ></span>
                      <span className="text-gray-300 font-normal">
                        2 dias atrás
                      </span>
                    </small>

                    <button className="text-orange-200">
                      <ShareNetwork size={24} weight="fill" />
                    </button>
                  </header>

                  <p className="text-sm font-manrope text-gray-100 ">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </p>

                  <footer className="flex items-center gap-4">
                    <button className="flex items-center gap-2 text-black font-manrope text-xs font-medium">
                      <Heart size={18} />
                      125
                    </button>
                    <button className="flex items-center gap-2 text-black font-manrope text-xs font-medium">
                      <ShareFat size={18} />
                      Responder
                    </button>
                  </footer>
                </div>
              </div>

              <div className="w-full flex items-center justify-center">
                <Button
                  variant="tertiary"
                  className="flex items-center gap-[10px] text-black"
                >
                  Carregar mais
                  <CaretDown
                    size={16}
                    className="text-orange-200"
                    weight="regular"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[335px] mx-auto h-[45px] md:w-full flex justify-center items-center my-[48px] md:my-[72px] md:h-[156px] bg-gray-400 rounded-lg">
          ADS
        </div>

        <MoreNews />

        <div className="w-[335px] mx-auto h-[45px] md:w-full flex justify-center items-center my-[48px] md:my-[72px] md:h-[156px] bg-gray-400 rounded-lg">
          ADS
        </div>
      </section>
    </main>
  )
}
