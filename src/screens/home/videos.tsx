import Button from '@/components/button'
import CaretRight from '@/components/icons/caret-right'
import MonitorPlay from '@/components/icons/monitor-play'
import { VideoNotice } from '@/components/video-notice'

export default function Videos() {
  return (
    <section className="w-full max-w-[1215px] mx-auto mt-24 flex flex-col gap-8">
      <header className="flex justify-between items-center">
        <h2 className="text-[32px] flex items-center gap-4 font-ptserif font-bold text-black">
          <MonitorPlay size={32} weight="fill" className="text-orange-200" />
          Vídeos em destaque
        </h2>
        <Button variant="tertiary" className="flex items-center gap-[10px]">
          Ver todos
          <CaretRight size={16} className="text-orange-200" weight="bold" />
        </Button>
      </header>

      <div className="w-full flex flex-col gap-[56px]">
        <VideoNotice
          size="large"
          videoUrl=""
          category="mundo"
          createdAt="2021-09-01T00:00:00.000Z"
          title="PF faz busca e apreensão em endereços do senador Marcos do Val"
          description="Ex-presidente dos EUA nega qualquer irregularidade e criticou as acusações que enfrente em um evento de campanha no sábado (10)"
        />

        <div className="w-full grid grid-cols-3">
          <VideoNotice
            size="medium"
            videoUrl=""
            category="brasil"
            createdAt="2021-09-01T00:00:00.000Z"
            title="Trump deve se apresentar hoje à Justiça, lorem ipsum dolor"
            description="Ex-presidente dos EUA nega qualquer irregularidade e criticou as acusações que enfrente em um evento de campanha no sábado (10)"
          />
          <VideoNotice
            size="medium"
            videoUrl=""
            category="justiça"
            createdAt="2021-09-01T00:00:00.000Z"
            title="Servidores do TSE monitoravam Monark para identificar críticas à Justiça Eleitoral"
            description="Ex-presidente dos EUA nega qualquer irregularidade e criticou as acusações que enfrente em um evento de campanha no sábado (10)"
          />
          <VideoNotice
            size="medium"
            videoUrl=""
            category="mundo"
            createdAt="2021-09-01T00:00:00.000Z"
            title="Trump deve se apresentar hoje à Justiça, lorem ipsum dolor"
            description="Ex-presidente dos EUA nega qualquer irregularidade e criticou as acusações que enfrente em um evento de campanha no sábado (10)"
          />
        </div>
      </div>

      <div className="w-full flex justify-center items-center my-24 h-[156px] bg-gray-400 rounded-lg">
        ADS
      </div>
    </section>
  )
}
