import { differenceInDays, differenceInHours, format, parseISO } from 'date-fns'

interface NoticeProps {
  title: string
  description?: string
  createdAt: string
  image: string
  category: string
  size: 'small' | 'medium' | 'large'
}

export function Notice({
  title,
  description,
  createdAt,
  image,
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
        <>
          {!description ? (
            <div className="notice-card-small flex gap-5 w-[380px] cursor-pointer">
              <div className="w-[96px] overflow-hidden h-[96px] rounded-lg bg-gray-100 flex items-center justify-center relative">
                IMAGEM
                <div
                  className={`absolute bottom-0 h-1 w-full ${perCategory}`}
                />
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
          ) : (
            <div className="notice-card-small flex flex-col md:flex-row gap-5 md:w-[795px] cursor-pointer">
              <div className="min-w-[275px] overflow-hidden h-[185px] rounded-lg bg-gray-100 flex items-center justify-center relative">
                IMAGEM
                <div
                  className={`absolute bottom-0 h-1 w-full ${perCategory}`}
                />
              </div>

              <div className="w-full md:w-[calc(100%-116px)] flex flex-col gap-3">
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
                <h2 className="text-black text-xl">{title}</h2>
                <p className="text-gray-100 text-base md:inline-block hidden">
                  {description}
                </p>
              </div>
            </div>
          )}
        </>
      ) : size === 'medium' && description ? (
        <div className="notice-card-small w-full flex flex-col md:flex-row-reverse justify-between gap-5 cursor-pointer pb-8 border-b border-gray-500">
          <div className="min-w-[275px] overflow-hidden h-[185px] rounded-lg bg-gray-100 flex items-center justify-center relative">
            IMAGEM
            <div className={`absolute bottom-0 h-1 w-full ${perCategory}`} />
          </div>

          <div className="w-full md:w-[calc(100%-116px)] flex flex-col gap-3">
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
            <h2 className="text-black text-2xl md:text-[32px]">{title}</h2>
            <p className="text-gray-100 text-base md:inline-block hidden">
              {description}
            </p>
          </div>
        </div>
      ) : (
        <div
          className={`notice-card-${size === 'large' ? 'large' : 'medium'} ${
            size === 'large' ? 'md:w-[800px]' : 'md:w-[380px]'
          } w-full flex flex-col gap-4 cursor-pointer `}
        >
          <div
            className={`w-full relative overflow-hidden h-[210px] ${
              size === 'large' ? 'md:h-[470px]' : 'md:h-[220px]'
            } bg-gray-100 rounded-lg flex items-center justify-center`}
          >
            Imagem
            <div className={`absolute bottom-0 h-1 w-full ${perCategory}`} />
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
            <h2
              className={`text-black ${
                size === 'large' ? 'md:text-[32px]' : 'md:text-[24px]'
              } text-[24px]`}
            >
              {title}
            </h2>
            {description && (
              <p className="text-gray-100 text-sm md:text-base">
                {description}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  )
}
