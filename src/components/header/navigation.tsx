import Link from 'next/link'
import { BroadCastTag } from './clientComponents/broadcast'
import { DropDown } from './modals/drop-down'
import { brasilMenu } from './seeds'

export function Navigation() {
  return (
    <div className="hidden md:block w-full py-[12px] border-t border-gray-500">
      <div className="flex gap-[40px] w-full max-w-[1215px] mx-auto">
        <BroadCastTag />

        <div className="flex items-center gap-[39px]">
          <Link
            href="/"
            className="text-sm font-manrope font-medium text-black transition-all duration-300 hover:text-orange-200"
          >
            Edições
          </Link>
          <Link
            href="/"
            className="text-sm font-manrope font-medium text-black transition-all duration-300 hover:text-orange-200"
          >
            Opiniões
          </Link>
          <Link
            href="/"
            className="text-sm font-manrope font-medium text-black transition-all duration-300 hover:text-orange-200"
          >
            Colunistas
          </Link>
          <DropDown menu="Brasil" items={brasilMenu} />
          <DropDown menu="Mundo" items={['Mais', 'Mais', 'Mais']} />
          <DropDown menu="Política" items={['Mais', 'Mais', 'Mais']} />
          <DropDown menu="Economia" items={['Mais', 'Mais', 'Mais']} />
          <DropDown menu="Esportes" items={['Mais', 'Mais', 'Mais']} />
          <DropDown menu="Lifestyle" items={['Mais', 'Mais', 'Mais']} />
          <DropDown menu="Ver & Ouvir" items={['Mais', 'Mais', 'Mais']} />
        </div>
      </div>
    </div>
  )
}
