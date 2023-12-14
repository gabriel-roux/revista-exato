'use client'

import { useEffect, useRef, useState } from 'react'
import CaretDown from '@/components/icons/caret-down'
import Magnifying from '@/components/icons/magnify-glass'

interface AutoCompleteProps {
  features: {
    properties: {
      address_line1: string
      address_line2: string
      city: string
      county: string
      country_code: string
      state: string
      state_code: string
    }
  }[]
}
export function WeatherModal() {
  const [openWeather, setOpenWeather] = useState(false)
  const [focusInput, setFocusInput] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState({} as AutoCompleteProps)

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
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&apiKey=d1482446bb124f949b39fe000aac5a6a`,
      )
        .then((response) => response.json())
        .then((result: AutoCompleteProps) => {
          const filteredResults = result.features.filter(
            (item) =>
              item.properties.city !== undefined &&
              item.properties.county !== undefined &&
              item.properties.state !== undefined &&
              (item.properties.city.includes(value) ||
                item.properties.county.includes(value) ||
                item.properties.state.includes(value)),
          )

          setSearchResults({
            features: filteredResults,
          })
        })
        .catch((error) => console.log('error', error))
    }
  }

  return (
    <div className="relative">
      <p
        onClick={() => setOpenWeather(true)}
        className="font-manrope font-medium text-sm flex items-center gap-[6px] hover:text-orange-500 transition-all duration-150 cursor-pointer"
      >
        Brasil (PT BR) | Brasilia DF - 16° <CaretDown size={14} weight="bold" />
      </p>

      {openWeather && (
        <div
          ref={modalRef}
          className="w-[380px] h-[60px] py-2 px-5 top-6 rounded-lg shadow-exato absolute bg-[#FFF]"
        >
          <div className="flex items-center gap-5 relative">
            <p className="font-manrope text-black">Brasil (PT BR)</p>

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
                      {searchResults.features?.map((result) => (
                        <li
                          className="py-[10px]"
                          key={result.properties.address_line1}
                        >
                          <p className="text-black text-sm font-manrope font-medium transition-all duration-200 ease hover:text-orange-200">
                            {result.properties.city +
                              ' - ' +
                              result.properties.county ||
                              result.properties.state}
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
