import { BroadCastTag } from './broadcast'
import Eye from '@/components/icons/eye'
import Microphone from '@/components/icons/microphone'

export default function LiveNotice() {
  return (
    <div className="w-[380px] h-[444px] rounded-2xl bg-gray-700 p-4">
      <div className="w-full h-[200px] rounded-lg relative bg-gray-200">
        <BroadCastTag />
      </div>

      <div className="mt-2">
        <small className="text-gray-300 text-base flex items-center gap-1 font-medium">
          <Eye size={16} weight="fill" className="text-gray-400" />
          120 assistindo
        </small>

        <p className="text-black text-[20px] font-semibold border-b pb-4 mt-2 mb-4 border-gray-500">
          Servidores do TSE monitoravam Monark para identificar críticas à
          Justiça Eleitoral
        </p>

        <div className="flex flex-col gap-2">
          <p className="uppercase text-orange-200 font-medium text-[14px]">
            Nome do canal
          </p>

          <p className="text-gray-100 text-sm font-semibold flex items-center gap-1">
            <Microphone size={16} weight="fill" className="text-gray-300" />
            Nome do apresentador
          </p>
        </div>
      </div>
    </div>
  )
}
