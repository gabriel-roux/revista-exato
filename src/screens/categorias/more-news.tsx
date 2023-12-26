import Button from '@/components/button'
import { Notice } from '@/components/notice'
import CaretDown from '@/components/icons/caret-down'

export default function MoreNews() {
  return (
    <section className="overflow-hidden w-full max-w-[1215px] mx-auto px-4 md:p-0 md:pb-8">
      <div className="flex flex-col gap-8 items-center">
        <Notice
          category="mundo"
          size="medium"
          title="Servidores do TSE monitoravam Monark para identificar críticas à Justiça Eleitoral"
          createdAt="2021-09-13T15:00:00.000Z"
          image=""
          description="O surgimento das criptomoedas trouxe uma mudança de paradigma no mundo financeiro."
        />
        <Notice
          category="mundo"
          size="medium"
          title="Servidores do TSE monitoravam Monark para identificar críticas à Justiça Eleitoral"
          createdAt="2021-09-13T15:00:00.000Z"
          image=""
          description="O surgimento das criptomoedas trouxe uma mudança de paradigma no mundo financeiro."
        />
        <Notice
          category="mundo"
          size="medium"
          title="Servidores do TSE monitoravam Monark para identificar críticas à Justiça Eleitoral"
          createdAt="2021-09-13T15:00:00.000Z"
          image=""
          description="O surgimento das criptomoedas trouxe uma mudança de paradigma no mundo financeiro."
        />
        <Notice
          category="mundo"
          size="medium"
          title="Servidores do TSE monitoravam Monark para identificar críticas à Justiça Eleitoral"
          createdAt="2021-09-13T15:00:00.000Z"
          image=""
          description="O surgimento das criptomoedas trouxe uma mudança de paradigma no mundo financeiro."
        />

        <Button
          variant="tertiary"
          className="flex items-center gap-[10px] text-black"
        >
          Carregar mais
          <CaretDown size={16} className="text-orange-200" weight="bold" />
        </Button>
      </div>
    </section>
  )
}
