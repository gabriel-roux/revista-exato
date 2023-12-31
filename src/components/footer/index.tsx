import GooglePay from '@/assets/google-play.svg'
import AppStore from '@/assets/app-store.svg'
import Image from 'next/image'
import InstagramLogo from '@/components/icons/instagram'
import FacebookLogo from '@/components/icons/facebook'
import TwitterLogo from '@/components/icons/twitter'
import YoutubeLogo from '@/components/icons/youtube'

import Autis from '@/assets/autis.png'
import Insany from '@/assets/insany.svg'
import { FooterModal } from './modal'

export function Footer() {
  const footerCategories = [
    {
      title: 'A Exato',
      links: [
        {
          title: 'Quem Somos',
          url: '#',
        },
        {
          title: 'Nossa Equipe',
          url: '#',
        },
      ],
    },
    {
      title: 'Edições',
      links: [
        {
          title: 'Revista Exato 1',
          url: '#',
        },
        {
          title: 'Revista Exato 2',
          url: '#',
        },
        {
          title: 'Revista Exato 3',
          url: '#',
        },
        {
          title: 'Revista Exato 4',
          url: '#',
        },
      ],
    },
    {
      title: 'Colunistas',
      links: [
        {
          title: 'Fernanda Silva',
          url: '#',
        },
        {
          title: 'Marina Buarque',
          url: '#',
        },
        {
          title: 'Ricardo Dias',
          url: '#',
        },
      ],
    },
    {
      title: 'Ingressar',
      links: [
        {
          title: 'Anuncie Conosco',
          url: '#',
        },
        {
          title: 'Trabalhe Conosco',
          url: '#',
        },
        {
          title: 'Grade de Programação',
          url: '#',
        },
      ],
    },
    {
      title: 'Minha conta',
      links: [
        {
          title: 'Entrar',
          url: '#',
        },

        {
          title: 'Newsletter',
          url: '#',
        },
        {
          title: 'Errata',
          url: '#',
        },
        {
          title: 'Denúncia',
          url: '#',
        },
      ],
    },
  ]

  return (
    <div className="flex flex-col">
      <FooterModal />
      <footer className="w-full bg-black md:h-[510px] px-4 md:px-0 pt-12">
        <div className="w-full md:max-w-[1215px] mx-auto flex flex-col-reverse gap-12 md:flex-row justify-between items-start">
          <div className="flex flex-col gap-3">
            <p className="text-sm text-white font-medium">
              Baixe o app da Exato
            </p>

            <div className="flex md:flex-col gap-3">
              <button className="w-[125px] h-[42px] rounded-[4px] flex items-center justify-center border border-orange-200 transition-all duration-200 hover:bg-orange-200">
                <Image src={AppStore} alt="App Store" />
              </button>
              <button className="w-[125px] h-[42px] rounded-[4px] flex items-center justify-center border border-orange-200 transition-all duration-200 hover:bg-orange-200">
                <Image src={GooglePay} alt="Google Play" />
              </button>
            </div>
          </div>

          <div className="w-full md:max-w-[860px] grid grid-cols-2 md:flex md:flex-row items-start justify-start gap-6">
            {footerCategories.map((category, index) => (
              <div
                key={category.title}
                className={`flex flex-col gap-3 w-[150px] ${
                  index > 2 ? 'hidden md:flex' : ''
                } transition-all duration-300`}
              >
                <h4 className="text-sm text-white font-semibold">
                  {category.title}
                </h4>

                {category.links?.map((link) => (
                  <a
                    key={link.title}
                    href={link.url}
                    className="text-sm text-gray-300 font-normal transition-all duration-200 hover:text-orange-200"
                  >
                    {link.title}
                  </a>
                ))}

                {index === 0 && (
                  <div className="md:flex flex-col gap-3 pt-4 hidden">
                    <a
                      href="#"
                      className="text-sm text-white font-normal transition-all duration-200 hover:text-orange-200"
                    >
                      Parceiros
                    </a>
                    <a
                      href="#"
                      className="text-sm text-white font-normal transition-all duration-200 hover:text-orange-200"
                    >
                      Cursos
                    </a>
                    <a
                      href="#"
                      className="text-sm text-white font-normal transition-all duration-200 hover:text-orange-200"
                    >
                      Livraria
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:max-w-[1215px] mx-auto mt-16 py-8 flex flex-col md:flex-row justify-between items-center border-y-[1.5px] border-gray-100">
          <div className="hidden md:flex items-center gap-6 md:w-[824px]">
            <a
              href="#"
              className="text-base text-white font-normal transition-all duration-200 hover:text-orange-200"
            >
              Atendimento
            </a>
            <div className="w-[5px] h-[5px] rounded-full bg-orange-200" />
            <a
              href="#"
              className="text-base text-white font-normal transition-all duration-200 hover:text-orange-200"
            >
              Central de ajuda
            </a>
            <div className="w-[5px] h-[5px] rounded-full bg-orange-200" />
            <a
              href="#"
              className="text-base text-white font-normal transition-all duration-200 hover:text-orange-200"
            >
              Política de Privacidade
            </a>
            <div className="w-[5px] h-[5px] rounded-full bg-orange-200" />
            <a
              href="#"
              className="text-base text-white font-normal transition-all duration-200 hover:text-orange-200"
            >
              Termos de Uso
            </a>
          </div>

          <div className="md:hidden flex flex-col gap-6 mb-12">
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-base text-white font-normal transition-all duration-200 hover:text-orange-200"
              >
                Atendimento
              </a>
              <div className="w-[5px] h-[5px] rounded-full bg-orange-200" />
              <a
                href="#"
                className="text-base text-white font-normal transition-all duration-200 hover:text-orange-200"
              >
                Central de ajuda
              </a>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-base text-white font-normal transition-all duration-200 hover:text-orange-200"
              >
                Política de Privacidade
              </a>
              <div className="w-[5px] h-[5px] rounded-full bg-orange-200" />
              <a
                href="#"
                className="text-base text-white font-normal transition-all duration-200 hover:text-orange-200"
              >
                Termos de Uso
              </a>
            </div>
          </div>

          <div className="md:w-[430px] px-4 md:p-0 flex md:justify-end flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <p className="text-base text-gray-400">Acompanhe as redes</p>

            <div className="flex items-center gap-3">
              <button className="w-[40px] h-[40px] rounded-lg bg-orange-200 transition-all duration-200 flex items-center justify-center text-white hover:bg-orange-300">
                <InstagramLogo className="fill-white" />
              </button>
              <button className="w-[40px] h-[40px] rounded-lg bg-orange-200 transition-all duration-200 flex items-center justify-center text-white hover:bg-orange-300">
                <FacebookLogo className="fill-white" />
              </button>
              <button className="w-[40px] h-[40px] rounded-lg bg-orange-200 transition-all duration-200 flex items-center justify-center text-white hover:bg-orange-300">
                <TwitterLogo className="fill-white" />
              </button>
              <button className="w-[40px] h-[40px] rounded-lg bg-orange-200 transition-all duration-200 flex items-center justify-center text-white hover:bg-orange-300">
                <YoutubeLogo className="fill-white" />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:max-w-[1215px] mx-auto py-6 flex flex-col gap-4 md:flex-row justify-between items-center">
          <p className="text-gray-400 md:text-white text-sm font-normal">
            ©2023. Todos os direitos reservados. Revista Exato, Inc.
          </p>

          <div className="flex gap-3 flex-col md:flex-row md:items-center">
            <p className="text-sm font-normal text-white flex items-center gap-1">
              Develop by: <Image alt="" src={Autis} width={16} />
              autis.com.br
            </p>
            <p className="text-sm font-normal text-white flex items-center gap-1">
              Design by: <Image alt="" src={Insany} /> Insany.Design
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
