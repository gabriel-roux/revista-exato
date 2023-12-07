import Image from 'next/image'
import AmbevImg from '../../assets/ambev.png'

export function Parceiro() {
  return (
    <div className="w-full max-w-[596px] bg-[#FFF] p-4 flex gap-6 rounded-lg">
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

          <button className="w-[180px] rounded-lg bg-orange-200 hover:bg-orange-300 transition-all duration-200 h-[44px] flex justify-center items-center text-gray-600 font-manrope text-base">
            Ver Cupom
          </button>
        </header>

        <p className="text-sm text-gray-200 font-normal">
          Para membros assinantes que moram no Brasil.
        </p>
      </div>
    </div>
  )
}
