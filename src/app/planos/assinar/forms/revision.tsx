import MagnifyGlassFilled from '@/components/icons/magnify-glass-filled'

export default function RevisionForm() {
  return (
    <div className="w-[695px] rounded-lg p-14 bg-[#FFF] flex flex-col gap-9">
      <header className="flex items-center justify-between w-full">
        <h2 className="flex items-center gap-[18px] text-gray-300 text-lg font-bold">
          <span className="w-7 h-7 text-sm items-center justify-center flex rounded-full border border-orange-600">
            3
          </span>

          <span className="flex items-center gap-[14px]">
            <MagnifyGlassFilled className="fill-gray-300" />
            Revise seu pedido
          </span>
        </h2>
      </header>
    </div>
  )
}
