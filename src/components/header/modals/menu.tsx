import ExatoLogo from '@/assets/logo'
import Button from '@/components/button'
import { CaretUp, X } from '@phosphor-icons/react'
import GooglePay from '@/assets/google-play-black.svg'
import AppStore from '@/assets/app-store-black.svg'
import Image from 'next/image'
import InstagramLogo from '@/components/icons/instagram'
import FacebookLogo from '@/components/icons/facebook'
import TwitterLogo from '@/components/icons/twitter'
import YoutubeLogo from '@/components/icons/youtube'
import Autis from '@/assets/autis.png'
import Insany from '@/assets/insany.png'

interface MenuProps {
  closeMenu: () => void
}

export default function Menu({ closeMenu }: MenuProps) {
  return (
    <div className="w-[100vw] h-[180vh] fixed left-0 top-0 bg-white z-[100]">
      <div className="py-6 px-5">
        <header className="flex justify-between items-center">
          <ExatoLogo className="w-[102px] h-[35px] fill-orange-200" />

          <Button variant="tertiary" size="md">
            <X size={24} weight="bold" className="text-gray-300" />
          </Button>
        </header>

        <div className="w-full mb-4 pb-4 border-b border-gray-500">
          <Button variant="primary" size="md" className="w-full mt-4">
            Login
          </Button>

          <Button variant="secondary" size="md" className="w-full mt-2">
            Assine
          </Button>
        </div>

        <ul className="flex flex-col gap-8 mb-4 pb-4 border-b border-gray-500">
          <li className="flex justify-between w-full items-center text-black font-medium font-manrope text-base">
            Edições
          </li>
          <li className="flex justify-between w-full items-center text-black font-medium font-manrope text-base">
            Opinião
          </li>
          <li className="flex justify-between w-full items-center text-black font-medium font-manrope text-base">
            Colunistas
          </li>
          <li className="flex justify-between w-full items-center text-black font-medium font-manrope text-base">
            Brasil <CaretUp size={20} className="text-orange-200" />
          </li>
          <li className="flex justify-between w-full items-center text-black font-medium font-manrope text-base">
            Mundo <CaretUp size={20} className="text-orange-200" />
          </li>
          <li className="flex justify-between w-full items-center text-black font-medium font-manrope text-base">
            Economia <CaretUp size={20} className="text-orange-200" />
          </li>
          <li className="flex justify-between w-full items-center text-black font-medium font-manrope text-base">
            Esportes <CaretUp size={20} className="text-orange-200" />
          </li>
          <li className="flex justify-between w-full items-center text-black font-medium font-manrope text-base">
            Ver & Ouvir <CaretUp size={20} className="text-orange-200" />
          </li>
        </ul>

        <div className="flex flex-col gap-2 mb-4 pb-4 border-b border-gray-500">
          <p className="text-sm text-gray-300 font-medium">
            Baixe o app da Exato
          </p>

          <div className="flex md:flex-col gap-6">
            <button className="w-[160px] h-[53px] rounded-[4px] flex items-center justify-center border border-orange-200 transition-all duration-200 hover:bg-orange-200">
              <Image src={AppStore} alt="App Store" />
            </button>
            <button className="w-[160px] h-[53px] rounded-[4px] flex items-center justify-center border border-orange-200 transition-all duration-200 hover:bg-orange-200">
              <Image src={GooglePay} alt="Google Play" />
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row md:items-center gap-4 md:gap-8  mb-4 pb-4 border-b border-gray-500">
          <p className="text-sm text-gray-300">Acompanhe as redes</p>
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

        <div className="w-full md:max-w-[1215px] mx-auto py-6 flex flex-col gap-4 md:flex-row justify-between items-center">
          <p className="text-gray-400 md:text-white text-sm font-normal">
            ©2023. Todos os direitos reservados. Revista Exato, Inc.
          </p>

          <div className="flex gap-3 flex-col md:flex-row md:items-center w-full">
            <p className="text-sm font-normal flex items-center gap-1">
              Develop by: <Image alt="" src={Autis} width={16} />
              autis.com.br
            </p>
            <p className="text-sm font-normal flex items-center gap-1">
              Design by: <Image alt="" src={Insany} /> Insany.Design
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
