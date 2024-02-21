import ArrowDown from '../icons/arrow-down'
import Bell from '../icons/bell'
import ChatCenteredDots from '../icons/chat-centered-dots'
import MagnifyGlass from '../icons/magnify-glass'
import Sun from '../icons/sun'

export default function DashboardHeader() {
  return (
    <header className="bg-[#FFF]">
      <div className="w-full h-[85px] py-5 px-12">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <MagnifyGlass size={21} className="text-gray-100" />

            <input
              type="text"
              placeholder="Faça sua busca"
              className="w-full bg-[#FFF] border-none rounded-md px-4 text-black outline-0"
            />
          </div>

          <div className="flex items-center gap-16">
            <div className="flex items-center gap-4">
              <button className="w-[46px] h-[46px] rounded-lg border border-gray-500 flex items-center justify-center">
                <Sun size={24} className="text-black" />
              </button>
              <button className="w-[46px] h-[46px] rounded-lg border border-gray-500 flex items-center justify-center">
                <ChatCenteredDots className="fill-black" />
              </button>
              <button className="w-[46px] h-[46px] rounded-lg border border-gray-500 flex items-center justify-center relative">
                <Bell className="fill-black" />

                <span className="absolute w-4 h-4 rounded-full bg-justiça text-[#FFF] -right-1 -top-1 text-[10px] flex items-center justify-center">
                  9+
                </span>
              </button>
            </div>

            <div className="flex items-center gap-5">
              <div className="flex flex-col gap-[2px]">
                <h2 className="font-manrope text-sm font-bold text-black">
                  Andressa Nunes
                </h2>
                <p className="font-manrope text-xs text-gray-300">
                  @andressanunes92
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-[46px] h-[46px] rounded-lg bg-black">
                  <h3 className="text-white text-sm font-bold">AN</h3>
                </div>

                <ArrowDown className="fill-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
