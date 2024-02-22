import InstagramLogo from '@/components/icons/instagram'
import FacebookLogo from '@/components/icons/facebook'
import TwitterLogo from '@/components/icons/twitter'
import YoutubeLogo from '@/components/icons/youtube'

export default function DashboardFooter() {
  return (
    <footer className="w-full border-t border-gray-500 py-6">
      <div className="w-full max-w-[1240px] mx-auto flex items-center justify-between">
        <p className="text-xs text-gray-200 font-manrope">
          ©2023. Todos os direitos reservados. Revista Exato, Inc.
        </p>

        <div className="flex gap-8 items-center">
          <button className="transition-all duration-200 flex items-center justify-center text-gray-200">
            <InstagramLogo className="fill-gray-200" />
          </button>
          <button className="transition-all duration-200 flex items-center justify-center text-gray-200">
            <FacebookLogo className="fill-gray-200" />
          </button>
          <button className="transition-all duration-200 flex items-center justify-center text-gray-200">
            <TwitterLogo className="fill-gray-200" />
          </button>
          <button className="transition-all duration-200 flex items-center justify-center text-gray-200">
            <YoutubeLogo className="fill-gray-200" />
          </button>
        </div>
      </div>
    </footer>
  )
}
