'use client'

import { useEffect, useRef, useState } from 'react'
import CaretDown from '@/components/icons/caret-down'
import Magnifying from '@/components/icons/magnify-glass'
import Image, { StaticImageData } from 'next/image'

import Sun from '@/assets/weather/sun.svg'
import Moon from '@/assets/weather/moon.svg'
import CloudMoon from '@/assets/weather/cloudmoon.svg'
import CloudSun from '@/assets/weather/cloudsun.svg'
import Fog from '@/assets/weather/fog.svg'
import Snow from '@/assets/weather/snow.svg'
import Rain from '@/assets/weather/rain.svg'
import Lightning from '@/assets/weather/lightning.svg'

interface AutoCompleteProps {
  name: string
  region: string
  country: string
}

interface WeatherProps {
  location: AutoCompleteProps
  current: {
    temp_c: number
    temp_f: number
    is_day: number
    condition: {
      text: string
      code: number
    }
  }
}

interface WeatherIcon {
  day: StaticImageData
  night: StaticImageData
}

interface WeatherIcons {
  [key: string]: WeatherIcon
}

const weatherIcons: WeatherIcons = {
  '1000': { day: Sun, night: Moon },
  '1003': { day: CloudSun, night: CloudMoon },
  '1006': { day: CloudSun, night: CloudMoon }, // Exemplo, se ambos os códigos usarem o mesmo ícone
  '1009': { day: CloudSun, night: CloudMoon },
  '1030': { day: Fog, night: Fog },
  '1063': { day: Rain, night: Rain },
  '1066': { day: Snow, night: Snow },
  '1069': { day: Snow, night: Snow }, // Neve com chuva pode usar o ícone de neve
  '1072': { day: Fog, night: Fog }, // Garoa congelante pode usar o ícone de névoa
  '1087': { day: Lightning, night: Lightning },
  '1114': { day: Snow, night: Snow },
  '1117': { day: Snow, night: Snow }, // Uma tempestade de neve pode usar o ícone de neve
  '1135': { day: Fog, night: Fog },
  '1147': { day: Fog, night: Fog }, // Névoa congelante pode usar o ícone de névoa
  '1150': { day: Rain, night: Rain },
  '1153': { day: Rain, night: Rain },
  '1168': { day: Rain, night: Rain }, // Orvalho congelante pode usar o ícone de chuva
  '1171': { day: Rain, night: Rain }, // Orvalho congelante pesado pode usar o ícone de chuva
  '1180': { day: Rain, night: Rain },
  '1183': { day: Rain, night: Rain },
  '1186': { day: Rain, night: Rain }, // Chuva moderada em intervalos pode usar o ícone de chuva
  '1189': { day: Rain, night: Rain },
  '1192': { day: Rain, night: Rain }, // Chuva pesada em intervalos pode usar o ícone de chuva
  '1195': { day: Rain, night: Rain },
  '1198': { day: Rain, night: Rain }, // Chuva congelante leve pode usar o ícone de chuva
  '1201': { day: Rain, night: Rain }, // Chuva congelante moderada ou pesada pode usar o ícone de chuva
  '1204': { day: Snow, night: Snow }, // Neve leve pode usar o ícone de neve
  '1207': { day: Snow, night: Snow }, // Neve moderada ou pesada pode usar o ícone de neve
  '1210': { day: Snow, night: Snow },
  '1213': { day: Snow, night: Snow },
  '1216': { day: Snow, night: Snow }, // Neve moderada em intervalos pode usar o ícone de neve
  '1219': { day: Snow, night: Snow },
  '1222': { day: Snow, night: Snow }, // Neve pesada em intervalos pode usar o ícone de neve
  '1225': { day: Snow, night: Snow },
  '1237': { day: Snow, night: Snow }, // Pellets de gelo pode usar o ícone de neve
  '1240': { day: Rain, night: Rain },
  '1243': { day: Rain, night: Rain },
  '1246': { day: Rain, night: Rain }, // Chuveiro de chuva torrencial pode usar o ícone de chuva
  '1249': { day: Snow, night: Snow }, // Chuveiros de neve leve podem usar o ícone de neve
  '1252': { day: Snow, night: Snow }, // Chuveiros de neve moderados ou pesados podem usar o ícone de neve
  '1255': { day: Snow, night: Snow },
  '1258': { day: Snow, night: Snow },
  '1261': { day: Snow, night: Snow }, // Chuveiros leves de pellets de gelo podem usar o ícone de neve
  '1264': { day: Snow, night: Snow }, // Chuveiros moderados ou pesados de pellets de gelo podem usar o ícone de neve
  '1273': { day: Rain, night: Rain }, // Chuva leve com trovão pode usar o ícone de chuva
  '1276': { day: Rain, night: Rain }, // Chuva moderada ou pesada com trovão pode usar o ícone de chuva
  '1279': { day: Snow, night: Snow }, // Neve leve com trovão pode usar o ícone de neve
  '1282': { day: Snow, night: Snow }, // Neve moderada ou pesada com trovão pode usar o ícone de neve
}

export function WeatherModal() {
  const [openWeather, setOpenWeather] = useState(false)
  const [focusInput, setFocusInput] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([] as AutoCompleteProps[])
  const [weather, setWeather] = useState({
    location: {
      name: 'Brasília',
      country: 'Brasil',
    },
    current: {
      temp_c: 0,
      temp_f: 0,
      is_day: 0,
      condition: {
        text: 'Nublado',
      },
    },
  } as WeatherProps)

  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Assegura ao TypeScript que event.target é um Node
      const target = event.target as Node

      if (modalRef.current && !modalRef.current.contains(target)) {
        setOpenWeather(false)
        setFocusInput(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [modalRef])

  const autoComplete = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearchTerm(value)

    if (value.length > 0) {
      fetch(
        `http://api.weatherapi.com/v1/search.json?key=419f61a8f1a14b519d7194158231412&q=${value}`,
      )
        .then((response) => response.json())
        .then((result: AutoCompleteProps[]) => {
          setSearchResults(result)
        })
        .catch((error) => console.log('error', error))
    }
  }

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=419f61a8f1a14b519d7194158231412&q=Brasilia`,
    )
      .then((response) => response.json())
      .then((result: WeatherProps) => {
        setWeather(result)
      })
      .catch((error) => console.log('error', error))
  }, [])

  const currentIcon = weatherIcons[`${weather.current.condition.code}`]
  const Icon =
    weather.current.is_day === 1 ? currentIcon?.day : currentIcon?.night

  return (
    <div className="relative">
      <p
        onClick={() => setOpenWeather(true)}
        className="font-manrope font-medium text-sm flex items-center gap-[6px] hover:text-orange-500 transition-all duration-150 cursor-pointer"
      >
        <Image src={Icon} alt="Weather icon" width={24} height={24} />
        {(weather.location.country === 'Brazil'
          ? 'Brasil'
          : weather.location.country) +
          ' | ' +
          weather.location.name +
          ', ' +
          weather.location.region +
          ' - ' +
          Math.ceil(weather.current.temp_c) +
          '° '}
        <CaretDown size={14} weight="bold" />
      </p>

      {openWeather && (
        <div
          ref={modalRef}
          className="w-[320px] h-[60px] py-2 px-5 top-6 rounded-lg shadow-exato absolute bg-[#FFF]"
        >
          <div className="flex items-center gap-5 relative">
            <p className="font-manrope text-black hover:text-orange-200 transition-all duration-200">
              {weather.location.country === 'Brazil'
                ? 'Brasil'
                : weather.location.country}
            </p>

            <div
              onClick={() => setFocusInput(true)}
              className="border-gray-500 cursor-pointer w-[220px] transition-all text-sm duration-200 font-normal hover:border-gray-400 relative h-11 px-4 py-[10px] gap-2 flex items-center rounded-lg border-[1.5px] text-gray-300"
            >
              <Magnifying size={16} weight="bold" className="text-gray-400" />
              <span
                style={{
                  fontWeight: '400 !important',
                }}
              >
                Buscar por cidade
              </span>
              {focusInput && (
                <div className="absolute left-0 top-0 z-[100]">
                  <div
                    className={`border-gray-500 absolute transition-all duration-200 bg-[#FFF] w-[220px] h-11 px-4 py-[10px] gap-2 flex items-center rounded-lg border-[1.5px] text-gray-300 ${
                      focusInput
                        ? 'border-orange-200 border-2'
                        : 'hover:border-gray-400'
                    } `}
                  >
                    <Magnifying
                      size={16}
                      weight="bold"
                      className="text-gray-400"
                    />
                    <input
                      autoFocus
                      onChange={autoComplete}
                      value={searchTerm}
                      className="placeholder:text-gray-400 text-sm text-black font-manrope outline-0 max-w-[150px]"
                      placeholder="Buscar por cidade"
                    />
                  </div>

                  <div className="w-[220px] mt-[50px] py-2 px-5 rounded-lg shadow-exato bg-[#FFF]">
                    <ul className="flex flex-col list-none">
                      {searchResults?.map((result) => (
                        <li
                          onClick={() => {
                            setFocusInput(false)
                            setSearchTerm('')
                            fetch(
                              `http://api.weatherapi.com/v1/current.json?key=419f61a8f1a14b519d7194158231412&q=${result.name}`,
                            )
                              .then((response) => response.json())
                              .then((result: WeatherProps) => {
                                setWeather(result)
                              })
                              .catch((error) => console.log('error', error))
                          }}
                          className="py-[10px]"
                          key={`${result.name}-${result.country}-${result.region}`}
                        >
                          <p className="text-black text-sm font-manrope font-medium transition-all duration-200 ease hover:text-orange-200">
                            {result.name + ' - ' + result.country}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {focusInput && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[90]" />
      )}
    </div>
  )
}
