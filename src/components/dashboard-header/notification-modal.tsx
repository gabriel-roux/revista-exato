'use client'

import { useState } from 'react'
import Button from '../button'
import Bell from '../icons/bell'
import CaretRight from '../icons/caret-right'
import { useRouter } from 'next/navigation'

export default function NotificationModal() {
  const [hovered, setHovered] = useState(false)

  const router = useRouter()

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-[46px] h-[46px] rounded-lg border border-gray-500 flex items-center justify-center relative hover:border-orange-200 hover:bg-orange-200 transition-all duration-200 fill-black hover:fill-white"
    >
      <Bell weight={hovered ? 'bold' : 'normal'} />

      <span className="absolute w-4 h-4 rounded-full bg-justiça text-[#FFF] -right-1 -top-1 text-[10px] flex items-center justify-center">
        9+
      </span>

      {hovered && (
        <div className="w-[400px] h-[570px] bg-[#FFF] rounded-lg shadow-modal z-[100] right-0 top-full mt-3 absolute border border-[#EBEBEB]">
          <header className="py-4 px-8 w-full border-b border-gray-500">
            <h2 className="font-manrope text-left text-base font-bold text-black">
              Notificações
            </h2>
          </header>

          <div className="h-[445px] flex flex-col overflow-y-auto overflow-x-hidden">
            <div className="p-6 bg-[#EEF3FC] border-b border-gray-500">
              <div className="flex items-center gap-4 justify-between">
                <div className="items-start flex flex-col gap-2">
                  <div className="flex flex-col items-start gap-1">
                    <h3 className="text-xs text-justiça font-semibold uppercase">
                      Justiça
                    </h3>
                    <p className="text-sm text-gray-100 font-medium font-manrope">
                      Trump deve se apresentar hoje à Justiça.
                    </p>
                  </div>

                  <small className="text-xs text-gray-300">12:02 AM</small>
                </div>

                <span className="w-[6px] h-[6px] rounded-full flex-shrink-0 bg-[#4479E4]"></span>
              </div>
            </div>
            <div className="p-6 bg-[#EEF3FC] border-b border-gray-500">
              <div className="flex items-center gap-4 justify-between">
                <div className="items-start flex flex-col gap-2">
                  <div className="flex flex-col items-start gap-1">
                    <h3 className="text-xs text-justiça font-semibold uppercase">
                      Justiça
                    </h3>
                    <p className="text-sm text-gray-100 font-medium font-manrope">
                      Trump deve se apresentar hoje à Justiça.
                    </p>
                  </div>

                  <small className="text-xs text-gray-300">12:02 AM</small>
                </div>

                <span className="w-[6px] h-[6px] rounded-full flex-shrink-0 bg-[#4479E4]"></span>
              </div>
            </div>
            <div className="p-6 bg-[#EEF3FC] border-b border-gray-500">
              <div className="flex items-center gap-4 justify-between">
                <div className="items-start flex flex-col gap-2">
                  <div className="flex flex-col items-start gap-1">
                    <h3 className="text-xs text-justiça font-semibold uppercase">
                      Justiça
                    </h3>
                    <p className="text-sm text-gray-100 font-medium font-manrope">
                      Trump deve se apresentar hoje à Justiça.
                    </p>
                  </div>

                  <small className="text-xs text-gray-300">12:02 AM</small>
                </div>

                <span className="w-[6px] h-[6px] rounded-full flex-shrink-0 bg-[#4479E4]"></span>
              </div>
            </div>
            <div className="p-6 border-b border-gray-500">
              <div className="flex items-center gap-4 justify-between">
                <div className="items-start flex flex-col gap-2">
                  <div className="flex flex-col items-start gap-1">
                    <h3 className="text-xs text-justiça font-semibold uppercase">
                      Justiça
                    </h3>
                    <p className="text-sm text-gray-100 font-medium font-manrope">
                      Trump deve se apresentar hoje à Justiça.
                    </p>
                  </div>

                  <small className="text-xs text-gray-300">12:02 AM</small>
                </div>
              </div>
            </div>
          </div>

          <footer className="flex justify-center items-center py-3 px-8 w-full border-t border-gray-500">
            <Button
              onClick={() => router.push('/dashboard/notificacoes')}
              variant="tertiary"
              size="md"
              className="w-full flex items-center justify-center gap-4"
            >
              Ver todas{' '}
              <CaretRight className="fill-orange-200" weight="bold" size={20} />
            </Button>
          </footer>
        </div>
      )}
    </button>
  )
}
