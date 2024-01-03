import Sun from '@/components/icons/sun'
import Link from 'next/link'
import CaretRight from '@/components/icons/caret-right'

import { SearchSection } from './clientComponents/search-input'
import { Navigation } from './navigation'
import { Exato } from './modals/exato'
import { WeatherModal } from './modals/weather'
import Button from '../button'

export function Header() {
  return (
    <header className="flex h-[182px] md:h-[227px] flex-col gap-4 md:gap-[40px]">
      <div className="w-full h-10 bg-orange-100">
        <div className="md:max-w-[1216px] p-2 mx-auto flex justify-center md:justify-between items-center">
          <div className="md:flex hidden gap-8 items-center">
            <Exato />
            <Link
              href="/"
              className="font-manrope font-medium text-sm flex items-center gap-[6px] hover:text-orange-500 transition-all duration-150"
            >
              Fale conosco
            </Link>
          </div>

          <div className="md:flex gap-8 hidden">
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
            <WeatherModal />

            <div className="w-[44px] h-[24px] rounded-[26px] bg-orange-300 hidden md:flex items-center px-1">
              <Sun weight="fill" size={18} />
            </div>
          </div>
        </div>
      </div>

      <SearchSection />

      <div className="md:hidden flex justify-between items-center py-2 px-5 bg-orange-600">
        <p className="text-gray-100 text-sm font-semibold">
          Tenha acesso a <br /> conteúdos exclusivos!
        </p>

        <Button variant="secondary" size="md">
          Assine a Exato <CaretRight size={16} weight="regular" />
        </Button>
      </div>

      <Navigation />
    </header>
  )
}
