import ExatoLogo from '@/assets/logo'
import Button from '@/components/button'
import ShieldCheck from '@/components/icons/shield-check'
import WhatsAppLogo from '@/components/icons/whatsapp'
import CaretRight from '@/components/icons/caret-right'

export function PlanosHeader() {
  return (
    <header className="w-full h-[100px] bg-[#FFF] flex items-center justify-center">
      <div className="md:w-[1220px] mx-auto flex items-center justify-between">
        <div className="flex items-center md:gap-11">
          <ExatoLogo className="w-[105px] h-[36px] fill-black" />

          <div className="w-[1px] h-[36px] bg-gray-400 hidden md:block" />

          <p className="gap-2 text-gray-100 text-sm md:text-xs items-center font-semibold hidden md:flex">
            <ShieldCheck /> Site 100% seguro
          </p>
        </div>

        <Button
          variant="tertiary"
          className="flex items-center md:gap-[14px] border-0 text-sm md:text-xs gap-2"
        >
          <WhatsAppLogo className="fill-orange-200" />
          Assine pelo WhatsApp
          <CaretRight weight="bold" className="text-orange-200" />
        </Button>
      </div>
    </header>
  )
}
