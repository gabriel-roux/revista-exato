import ExatoLogo from '@/assets/logo'
import Phone from '@/components/icons/phone'
import Envelope from '@/components/icons/envelope'
import Clock from '@/components/icons/clock'
import MapPin from '@/components/icons/map-pin'
import { GoToTop } from './go-top'

export function FooterModal() {
  const categories = [
    {
      category: 'Brasil',
      subcategories: ['Button', 'Button', 'Button', 'Button', 'Button'],
    },
    {
      category: 'Mundo',
      subcategories: ['Button', 'Button', 'Button'],
    },
    {
      category: 'Economia',
      subcategories: ['Button', 'Button', 'Button'],
    },
    {
      category: 'Política',
      subcategories: ['Button', 'Button', 'Button'],
    },
    {
      category: 'Ver & Ouvir',
      subcategories: ['Podcast', 'Vídeos', 'Lives', 'Galeria', 'Músicas'],
    },
  ]

  return (
    <div
      className={`w-full bg-[#1B1B1B] py-8 px-4 md:py-16 transition-all duration-300 h-[324px]`}
    >
      <div className="w-full relative md:max-w-[1215px] mx-auto flex flex-col md:flex-row items-start gap-12 justify-between">
        <div className="flex flex-col">
          <ExatoLogo
            className={`w-[145px] h-[50px] transition-all fill-[#FFF] hover:fill-orange-200 duration-300 ease`}
          />
          <ul
            className={`hidden md:flex flex-col gap-3 mt-8 transition-all duration-300`}
          >
            {/* <li className="text-xs text-white font-normal transition-all duration-200 hover:text-orange-200 flex items-center gap-2">
              <Phone size={16} weight="fill" className="text-orange-200" />
              +1 (302) 217-3735
            </li> */}
            <li className="text-xs text-white font-normal transition-all duration-200 hover:text-orange-200 flex items-center gap-2">
              <Envelope className="fill-orange-200" />
              suporte@revistaexato.com
            </li>
            <li className="text-xs text-white font-normal transition-all duration-200 hover:text-orange-200 flex items-center gap-2">
              <Clock size={16} weight="fill" className="text-orange-200" />
              Segunda à sexta - 09:00 às 17:00
            </li>
            <li className="text-xs text-white font-normal transition-all duration-200 hover:text-orange-200 flex items-center gap-2">
              <MapPin size={16} weight="fill" className="text-orange-200" />
              Dover, Delaware 19901
            </li>
          </ul>
        </div>

        <div
          className={`w-full max-w-[860px] flex items-start gap-6 transition-all duration-300`}
        >
          {categories.map((category, index) => (
            <div
              key={category.category}
              className={`flex flex-col gap-4 ${
                index > 0 ? 'hidden md:flex' : ''
              }`}
            >
              <h4 className="text-base md:text-sm text-white font-semibold">
                {category.category}
              </h4>

              <div className="w-full md:flex md:flex-col grid grid-cols-2 gap-2">
                {category.subcategories.map((subcategory, index) => (
                  <a
                    href="#"
                    key={index}
                    className="w-[160px] block text-base md:text-sm text-gray-300 font-normal transition-all duration-200 hover:text-orange-200"
                  >
                    {subcategory}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <GoToTop />
      </div>
    </div>
  )
}
