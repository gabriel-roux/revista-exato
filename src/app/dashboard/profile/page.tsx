import Image from 'next/image'
import ProfileBanner from '@/assets/profile.svg'
import User from '@/components/icons/user'
import PencilLine from '@/components/icons/pencil-simples-line'
import Globe from '@/components/icons/globe'

export default function ProfilePage() {
  return (
    <main className="w-full h-screen bg-[#FFF]">
      <section className="w-full h-[200px]">
        <Image
          src={ProfileBanner}
          alt="bg"
          width={1120}
          height={170}
          className="w-full h-[200px] object-cover"
        />
      </section>

      <section className="w-full max-w-[1120px] mx-auto -mt-8">
        <div className="flex items-end justify-between mb-20">
          <div className="flex items-end gap-12">
            <div className="bg-[#613131] w-[160px] h-[160px] rounded-lg flex items-center justify-center relative">
              <h3 className="text-6xl font-bold text-white">FT</h3>

              <button className="w-[32px] h-[32px] bg-orange-200 rounded-full absolute -bottom-2 -right-2 flex items-center justify-center">
                <PencilLine weight="fill" size={20} className="fill-[#FFF]" />
              </button>
            </div>

            <div>
              <h1 className="text-[28px] font-bold text-black font-manrope">
                Felipe Terra
              </h1>
              <p className="text-gray-200">@felipeterra15</p>

              <p className="text-sm flex items-center gap-2 text-gray-100 pt-6">
                <User className="fill-orange-200 w-[16px]" />
                Membro fiel desde: <b>22/07/2023</b>
              </p>
            </div>
          </div>

          <button className="w-[190px] h-[50px] justify-center items-center flex border border-orange-200 rounded-lg text-orange-200 fill-orange-200 transition-all duration-200 ease-in hover:fill-black hover:text-black hover:bg-orange-200 font-manrope gap-2">
            Editar perfil
            <PencilLine weight="fill" size={20} className="flex-shrink-0" />
          </button>
        </div>

        <div className="w-full pb-8 border-b border-gray-500 mb-12">
          <h2 className="flex items-center gap-3 text-lg font-bold text-black">
            <Globe size={20} className="fill-orange-200" />
            Informações pessoais
          </h2>
        </div>

        <div className="flex items-start gap-14 justify-between">
          <div className="w-1/2 flex flex-col gap-6">
            <div className="flex flex-col gap-4 w-full pb-5 border-b border-gray-500">
              <h3 className="text-sm text-gray-300 font-semibold">Nome</h3>
              <p className="text-base text-gray-100 font-medium font-manrope">
                Felipe Terra
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full pb-5 border-b border-gray-500">
              <h3 className="text-sm text-gray-300 font-semibold">Email</h3>
              <div className="flex items-center justify-between">
                <p className="text-base text-gray-100 font-medium font-manrope">
                  felipeterra@insanydesign.com
                </p>
                <button className="items-center flex text-orange-200 fill-orange-200 transition-all duration-200 ease-in hover:fill-black hover:text-black font-manrope gap-2">
                  Alterar
                  <PencilLine
                    weight="fill"
                    size={20}
                    className="flex-shrink-0"
                  />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full pb-5 border-b border-gray-500">
              <h3 className="text-sm text-gray-300 font-semibold">Senha</h3>
              <div className="flex items-center justify-between">
                <p className="text-base text-gray-100 font-medium font-manrope">
                  ***********
                </p>
                <button className="items-center flex text-orange-200 fill-orange-200 transition-all duration-200 ease-in hover:fill-black hover:text-black font-manrope gap-2">
                  Alterar
                  <PencilLine
                    weight="fill"
                    size={20}
                    className="flex-shrink-0"
                  />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full pb-5">
              <h3 className="text-sm text-gray-300 font-semibold">Gênero</h3>
              <p className="text-base text-gray-100 font-medium font-manrope">
                Masculino
              </p>
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-6">
            <div className="flex flex-col gap-4 w-full pb-5 border-b border-gray-500">
              <h3 className="text-sm text-gray-300 font-semibold">Telefone</h3>
              <p className="text-base text-gray-100 font-medium font-manrope">
                37 98876-9888
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full pb-5 border-b border-gray-500">
              <h3 className="text-sm text-gray-300 font-semibold">CPF</h3>
              <p className="text-base text-gray-100 font-medium font-manrope">
                XXX.XXX.XXX-XX
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full pb-5 border-b border-gray-500">
              <h3 className="text-sm text-gray-300 font-semibold">
                Data de nascimento
              </h3>
              <p className="text-base text-gray-100 font-medium font-manrope">
                26/11/1992
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full pb-5">
              <h3 className="text-sm text-gray-300 font-semibold">Endereço</h3>
              <p className="text-base text-gray-100 font-medium font-manrope">
                Rua paulista damião - 123, São paulo - SP
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
