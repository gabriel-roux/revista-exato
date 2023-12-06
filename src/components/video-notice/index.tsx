import { differenceInDays, differenceInHours, format, parseISO } from 'date-fns'
import PauseCircle from '../icons/pause'
import { Velocity } from './velocity'

interface NoticeProps {
  title: string
  description?: string
  createdAt: string
  videoUrl: string
  category: string
  size: 'small' | 'medium' | 'large'
}

export function VideoNotice({
  title,
  description,
  createdAt,
  category,
  size = 'medium',
}: NoticeProps) {
  const formatDate = (dateString: string) => {
    const date = parseISO(dateString)
    const now = new Date()
    const hourDifference = differenceInHours(now, date)
    const dayDifference = differenceInDays(now, date)

    if (hourDifference < 24) {
      return `${hourDifference} horas atrás`
    } else if (dayDifference <= 7) {
      return `${dayDifference} dias atrás`
    } else {
      return format(date, 'dd/MM/yy')
    }
  }

  let perCategory = ''

  switch (category) {
    case 'política':
      perCategory = 'bg-política text-política'
      break
    case 'economia':
      perCategory = 'bg-economia text-economia'
      break
    case 'brasil':
      perCategory = 'bg-brasil text-brasil'
      break
    case 'justiça':
      perCategory = 'bg-justiça text-justiça'
      break
    case 'mundo':
      perCategory = 'bg-mundo text-mundo'
      break
  }

  return (
    <>
      {size === 'small' ? (
        <div className="flex gap-5 w-[380px] cursor-pointer">
          <div className="w-[96px] overflow-hidden h-[96px] rounded-lg bg-gray-100 flex items-center justify-center relative">
            IMAGEM
            <div className={`absolute bottom-0 h-1 w-full ${perCategory}`} />
          </div>

          <div className="w-[calc(100%-116px)] flex flex-col gap-3">
            <small
              className={`text-${category} uppercase text-sm font-semibold font-manrope flex items-center`}
            >
              {category}
              <span
                className={`inline-block w-[6px] h-[6px] ${perCategory} rounded-full ml-2 mr-2`}
              ></span>
              <span className="text-gray-200 font-normal">
                {formatDate(createdAt)}
              </span>
            </small>
            <h2 className="text-black text-base">{title}</h2>
          </div>
        </div>
      ) : size === 'medium' ? (
        <div className={`w-[380px] flex flex-col gap-4 cursor-pointer`}>
          <div>
            <div
              className={`w-full relative overflow-hidden h-[220px] bg-gray-100 rounded-lg flex items-center justify-center`}
            >
              Imagem
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <PauseCircle
                  size={30}
                  className="text-orange-200"
                  weight="fill"
                />

                <div className="w-[170px] h-[6px] bg-gray-600 rounded-full">
                  <div className="w-[50%] h-full bg-orange-400 rounded-full relative">
                    <div className="absolute w-4 h-4 border-2 border-white bg-orange-200 rounded-full top-[-5px] right-0"></div>
                  </div>
                </div>

                <Velocity />
              </div>

              <span className="text-sm text-gray-200 font-normal font-manrope">
                04:10
                <span
                  className={`inline-block w-[6px] h-[6px] bg-gray-500 rounded-full ml-2 mr-2`}
                ></span>
                20:45
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <small
              className={`text-${category} uppercase text-sm font-semibold font-manrope flex items-center`}
            >
              {category}
              <span
                className={`inline-block w-[6px] h-[6px] ${perCategory} rounded-full ml-2 mr-2`}
              ></span>
              <span className="text-gray-200 font-normal">
                {formatDate(createdAt)}
              </span>
            </small>
            <h2 className={`text-black text-[24px]`}>{title}</h2>
          </div>
        </div>
      ) : (
        <div className={`w-full flex justify-between gap-8`}>
          <div className="min-w-[800px] h-[510px]">
            <div
              className={`w-full max-w-[800px] relative overflow-hidden h-[460px] bg-gray-100 rounded-lg flex items-center justify-center`}
            >
              Imagem
            </div>

            <footer className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <PauseCircle
                  size={30}
                  className="text-orange-200"
                  weight="fill"
                />

                <div className="w-[590px] h-[6px] bg-gray-600 rounded-full">
                  <div className="w-[50%] h-full bg-orange-400 rounded-full relative">
                    <div className="absolute w-4 h-4 border-2 border-white bg-orange-200 rounded-full top-[-5px] right-0"></div>
                  </div>
                </div>

                <Velocity />
              </div>

              <span className="text-sm text-gray-200 font-normal font-manrope">
                04:10
                <span
                  className={`inline-block w-[6px] h-[6px] bg-gray-500 rounded-full ml-2 mr-2`}
                ></span>
                20:45
              </span>
            </footer>
          </div>

          <div className="flex flex-col gap-2">
            <small
              className={`text-${category} uppercase text-sm font-semibold font-manrope flex items-center`}
            >
              {category}
              <span
                className={`inline-block w-[6px] h-[6px] ${perCategory} rounded-full ml-2 mr-2`}
              ></span>
              <span className="text-gray-200 font-normal">
                {formatDate(createdAt)}
              </span>
            </small>
            <h2 className={`text-black font-semibold text-[32px]`}>{title}</h2>
            {description && (
              <p className="text-gray-200 text-base">{description}</p>
            )}
          </div>
        </div>
      )}
    </>
  )
}
