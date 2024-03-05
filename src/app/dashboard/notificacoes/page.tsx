import Button from '@/components/button'
import Eye from '@/components/icons/eye'
import Cog from '@/components/icons/cog'

export default function Notifications() {
  return (
    <main className="w-full h-screen bg-[#F7F7F7] pt-12">
      <header className="flex items-center justify-between w-full max-w-[1248px] mx-auto">
        <h2 className="text-2xl text-left font-bold text-black">
          Notificações (+12)
        </h2>

        <div className="flex items-center gap-[60px]">
          <Button variant="tertiary" className="flex items-center gap-4">
            <Eye size={20} className="fill-orange-200" />
            Marcar todos como lido
          </Button>

          <button className="w-[190px] h-[50px] justify-center items-center flex bg-[white] border border-gray-500 rounded-lg text-black font-manrope gap-2">
            <Cog weight="fill" className="fill-orange-200 flex-shrink-0" />
            Configurações
          </button>
        </div>
      </header>

      <div className="w-full max-w-[1248px] mx-auto mt-12">
        <div className="flex flex-col gap-9">
          <div className="flex flex-col gap-2">
            <p className="font-manrope text-gray-300 font-sm">Hoje</p>

            <div className="w-full h-[70px] rounded-lg bg-[#FFF] border border-[#CAD9F7] px-8 flex items-center">
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <h3 className="text-sm text-justiça font-semibold uppercase">
                    Justiça
                  </h3>
                  <p className="text-base text-gray-100 font-medium font-manrope">
                    Trump deve se apresentar hoje à Justiça.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <small className="text-sm text-gray-300">12:02 AM</small>

                  <span className="w-[6px] h-[6px] rounded-full flex-shrink-0 bg-[#4479E4]"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-manrope text-gray-300 font-sm">Ontem</p>

            <div className="w-full h-[70px] rounded-lg bg-[#FFF] px-8 flex items-center">
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <p className="text-base text-gray-100 font-medium font-manrope">
                    <span className="text-orange-200">@felipeterra15</span>{' '}
                    Mencionou vc em um comentário: “Ex-presidente dos EUA nega
                    qualquer irregularidade e criticou as acus...”
                  </p>
                </div>

                <small className="text-sm text-gray-300">12:02 AM</small>
              </div>
            </div>
            <div className="w-full h-[70px] rounded-lg bg-[#FFF] px-8 flex items-center">
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <p className="text-base text-gray-100 font-medium font-manrope">
                    <span className="text-orange-200">@felipeterra15</span>{' '}
                    Mencionou vc em um comentário: “Ex-presidente dos EUA nega
                    qualquer irregularidade e criticou as acus...”
                  </p>
                </div>

                <small className="text-sm text-gray-300">12:02 AM</small>
              </div>
            </div>
            <div className="w-full h-[70px] rounded-lg bg-[#FFF] px-8 flex items-center">
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <h3 className="text-sm text-brasil font-semibold uppercase">
                    Brasil
                  </h3>
                  <p className="text-base text-gray-100 font-medium font-manrope">
                    Trump deve se apresentar hoje à Justiça
                  </p>
                </div>

                <small className="text-sm text-gray-300">12:02 AM</small>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-manrope text-gray-300 font-sm">3 de dezembro</p>

            <div className="w-full h-[70px] rounded-lg bg-[#FFF] px-8 flex items-center">
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <h3 className="text-sm text-justiça font-semibold uppercase">
                    Justiça
                  </h3>
                  <p className="text-base text-gray-100 font-medium font-manrope">
                    Trump deve se apresentar hoje à Justiça.
                  </p>
                </div>

                <small className="text-sm text-gray-300">12:02 AM</small>
              </div>
            </div>

            <div className="w-full h-[70px] rounded-lg bg-[#FFF] px-8 flex items-center">
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <h3 className="text-sm text-política font-semibold uppercase">
                    Politica
                  </h3>
                  <p className="text-base text-gray-100 font-medium font-manrope">
                    Trump deve se apresentar hoje à Justiça
                  </p>
                </div>

                <small className="text-sm text-gray-300">12:02 AM</small>
              </div>
            </div>

            <div className="w-full h-[70px] rounded-lg bg-[#FFF] px-8 flex items-center">
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <h3 className="text-sm text-mundo font-semibold uppercase">
                    Mundo
                  </h3>
                  <p className="text-base text-gray-100 font-medium font-manrope">
                    Trump deve se apresentar hoje à Justiça
                  </p>
                </div>

                <small className="text-sm text-gray-300">12:02 AM</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
