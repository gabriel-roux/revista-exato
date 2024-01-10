import ExatoLogo from '@/assets/logo'
import Envelope from '@/components/icons/envelope'
import Image from 'next/image'

import Autis from '@/assets/autis.png'
import Insany from '@/assets/insany-black.svg'

export function PlanosFooter() {
  return (
    <footer className="w-full h-[120px] border-t border-gray-500 flex items-center">
      <div className="w-full max-w-[1216px] mx-auto flex justify-between items-center">
        <ExatoLogo className="w-[105px] h-[36px] fill-gray-100" />

        <div>
          <p className="text-xs text-gray-100 font-medium transition-all duration-200 hover:text-orange-200 flex items-center gap-2">
            <Envelope className="fill-orange-200" />
            suporte@revistaexato.com
          </p>
        </div>

        <p className="text-gray-100 md:text-gray-100 text-xs font-medium">
          ©2023. Todos os direitos reservados. Revista Exato, Inc.
        </p>

        <div className="flex gap-3 flex-col md:flex-row md:items-center">
          <p className="text-xs font-medium text-gray-100 flex items-center gap-1">
            Develop by: <Image alt="" src={Autis} width={16} />
            autis.com.br
          </p>
          <p className="text-xs font-medium text-gray-100 flex items-center gap-1">
            Design by: <Image alt="" src={Insany} /> Insany.Design
          </p>
        </div>
      </div>
    </footer>
  )
}
