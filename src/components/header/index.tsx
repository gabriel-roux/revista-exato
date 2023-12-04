import CaretDown from '@/components/icons/caret-down'
import Sun from '@/components/icons/sun'
import Link from 'next/link'

import { SearchSection } from './clientComponents/search-input'
import { Navigation } from './navigation'
import { Exato } from './modals/exato'

export function Header() {
  return (
    <header className="flex h-[224px] flex-col gap-[40px]">
      <div className="w-full h-10 bg-orange-100">
        <div className="max-w-[1216px] p-2 mx-auto flex justify-between items-center">
          <div className="flex gap-8 items-center">
            <Exato />
            <Link
              href="/"
              className="font-manrope font-medium text-sm flex items-center gap-[6px] hover:text-orange-500 transition-all duration-150"
            >
              Fale conosco
            </Link>
          </div>

          <div className="flex gap-8">
            <Link
              href="/"
              className="font-manrope font-medium text-sm flex items-center gap-[6px] hover:text-orange-500 transition-all duration-150"
            >
              Parceiros
            </Link>
            <Link
              href="/"
              className="font-manrope font-medium text-sm flex items-center gap-[6px] hover:text-orange-500 transition-all duration-150"
            >
              Cursos
            </Link>
            <Link
              href="/"
              className="font-manrope font-medium text-sm flex items-center gap-[6px] hover:text-orange-500 transition-all duration-150"
            >
              Livraria
            </Link>
          </div>

          <div className="flex items-center gap-8">
            <p className="font-manrope font-medium text-sm flex items-center gap-[6px] hover:text-orange-500 transition-all duration-150 cursor-pointer">
              Brasil (PT BR) | Brasilia DF - 16°{' '}
              <CaretDown size={14} weight="bold" />
            </p>

            <div className="w-[44px] h-[24px] rounded-[26px] bg-orange-300 flex items-center px-1">
              <Sun weight="fill" size={18} />
            </div>
          </div>
        </div>
      </div>

      <SearchSection />

      <Navigation />
    </header>
  )
}
