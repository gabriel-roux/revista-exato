import Image from 'next/image'
import AmbevImg from '../../assets/ambev.png'
import { VerCupom } from './ver-cupom-'

export function Parceiro() {
  return (
    <div className="w-full max-w-[596px] bg-[#FFF] p-4 flex flex-col">
      <div className="w-full flex gap-6">
        <Image
          src={AmbevImg}
          alt=""
          width={72}
          height={72}
          className="rounded-full h-[72px]"
        />
        <div className="flex flex-col w-full">
          <header className="flex justify-between items-center w-full h-[72px]">
            <div>
              <p className="text-black text-base font-semibold">Localiza</p>
              <h3 className="text-orange-200 text-lg font-semibold">15% OFF</h3>
            </div>

            <div className="md:block hidden">
              <VerCupom codigo="EXATO15" />
            </div>
          </header>

          <p className="text-sm text-gray-200 font-normal">
            Para membros assinantes que moram no Brasil.
          </p>
        </div>
      </div>
      <div className="block md:hidden w-full mt-4">
        <VerCupom codigo="EXATO15" />
      </div>
    </div>
  )
}
