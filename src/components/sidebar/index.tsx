'use client'

import Image from 'next/image'
import ExatoLogo from '@/assets/exato-icon.svg'
import { usePathname } from 'next/navigation'
import House from '../icons/house'
import UserRectangle from '../icons/user-rectangle'
import CreditCard from '../icons/credit-card'
import FileText from '../icons/file-text'
import CurrencyDollar from '../icons/currency-dollar'
import Cog from '../icons/cog'
import Lifebuoy from '../icons/lifebuoy'
import { useState } from 'react'
import Link from 'next/link'

export default function Sidebar() {
  const pathname = usePathname()

  const [isHovered, setIsHovered] = useState(false)

  return (
    <aside className="w-20 h-screen">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`${
          isHovered ? 'w-64 shadow-[0px_4px_32px] shadow-[#080C2F12]' : 'w-20'
        } h-screen transition-all ease-in duration-200 fixed left-[-1px] z-50 top-0 bg-[#FFF] border border-[#EBEBEB]`}
      >
        <div className="p-4">
          <Image
            src={ExatoLogo}
            alt="Exato Logo"
            width={47}
            height={47}
            className="w-[47px] h-[47px]"
          />
        </div>

        <div className="mt-16">
          <Link
            href="/dashboard"
            className={`w-full h-[60px] flex items-center gap-6 text-gray-300 ${
              pathname === '/dashboard' &&
              'bg-orange-600 border-l-2 border-l-orange-200 !text-black'
            } justify-start p-7 flex-shrink-0`}
          >
            <House
              weight={pathname === '/dashboard' ? 'bold' : 'normal'}
              className={
                pathname === '/dashboard'
                  ? 'fill-orange-200 stroke-orange-200 flex-shrink-0'
                  : 'fill-[#969696] flex-shrink-0'
              }
            />

            <span
              className={`${
                isHovered ? 'opacity-100' : 'opacity-0'
              } transition-all duration-200 ease-in truncate max-w-[120px]`}
            >
              Dashboard
            </span>
          </Link>
          <button
            className={`w-full h-[60px] flex items-center gap-6 text-gray-300 ${
              pathname === '/perfil' &&
              'bg-orange-600 border-l-2 border-l-orange-200 !text-black'
            } pl-7`}
          >
            <UserRectangle
              className={
                pathname === '/perfil'
                  ? 'fill-orange-200 flex-shrink-0'
                  : 'fill-[#969696] flex-shrink-0'
              }
            />

            <span
              className={`${
                isHovered ? 'opacity-100' : 'opacity-0'
              } transition-all duration-200 ease-in truncate max-w-[120px]`}
            >
              Meu Perfil
            </span>
          </button>
          <button
            className={`w-full h-[60px] flex items-center gap-6 text-gray-300 ${
              pathname === '/assinatura' &&
              'bg-orange-600 border-l-2 border-l-orange-200 !text-black'
            } pl-7`}
          >
            <CreditCard
              className={
                pathname === '/assinatura'
                  ? 'fill-orange-200 flex-shrink-0'
                  : 'fill-[#969696] flex-shrink-0'
              }
            />

            <span
              className={`${
                isHovered ? 'opacity-100' : 'opacity-0'
              } transition-all duration-200 ease-in truncate max-w-[120px]`}
            >
              Assinatura
            </span>
          </button>
          <button
            className={`w-full h-[60px] flex items-center gap-6 text-gray-300 ${
              pathname === '/conteudo' &&
              'bg-orange-600 border-l-2 border-l-orange-200 !text-black'
            } pl-7`}
          >
            <FileText
              className={
                pathname === '/conteudo'
                  ? 'fill-orange-200 flex-shrink-0'
                  : 'fill-[#969696] flex-shrink-0'
              }
            />

            <span
              className={`${
                isHovered ? 'opacity-100' : 'opacity-0'
              } transition-all duration-200 ease-in truncate max-w-[120px]`}
            >
              Conteúdo
            </span>
          </button>
          <button
            className={`w-full h-[60px] flex items-center gap-7 text-gray-300 ${
              pathname === '/afiliados' &&
              'bg-orange-600 border-l-2 border-l-orange-200 !text-black'
            } pl-7`}
          >
            <CurrencyDollar
              className={
                pathname === '/afiliados'
                  ? 'fill-orange-200 flex-shrink-0'
                  : 'fill-[#969696] flex-shrink-0'
              }
            />

            <span
              className={`${
                isHovered ? 'opacity-100' : 'opacity-0'
              } transition-all duration-200 ease-in truncate max-w-[120px]`}
            >
              Afiliados
            </span>
          </button>
          <button
            className={`w-full h-[60px] flex items-center gap-6 text-gray-300 ${
              pathname === '/settings' &&
              'bg-orange-600 border-l-2 border-l-orange-200 !text-black'
            } pl-7`}
          >
            <Cog
              className={
                pathname === '/settings'
                  ? 'fill-orange-200 flex-shrink-0'
                  : 'fill-[#969696] flex-shrink-0'
              }
            />

            <span
              className={`${
                isHovered ? 'opacity-100' : 'opacity-0'
              } transition-all duration-200 ease-in truncate max-w-[120px]`}
            >
              Configurações
            </span>
          </button>
          <button
            className={`w-full h-[60px] flex items-center gap-6 text-gray-300 ${
              pathname === '/suporte' &&
              'bg-orange-600 border-l-2 border-l-orange-200 !text-black'
            } pl-7`}
          >
            <Lifebuoy
              className={
                pathname === '/suporte'
                  ? 'fill-orange-200 flex-shrink-0'
                  : 'fill-[#969696] flex-shrink-0'
              }
            />

            <span
              className={`${
                isHovered ? 'opacity-100' : 'opacity-0'
              } transition-all duration-200 ease-in truncate max-w-[120px]`}
            >
              Suporte
            </span>
          </button>
        </div>
      </div>
    </aside>
  )
}
