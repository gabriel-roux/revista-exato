'use client'

import { useState } from 'react'
import { GaleryBox } from './box'
import Button from '../button'
import Share from '../icons/share'
import CaretRight from '@/components/icons/caret-right'
import CaretLeft from '@/components/icons/caret-left'
import { ShareModal } from './share'
import { isMobile } from 'react-device-detect'

export function ImagesGalery() {
  const [selectedImage, setSelectedImage] = useState(1)

  const images = [
    {
      id: 0,
      image:
        'https://images.unsplash.com/photo-1634561005916-7a4a9d4c8e7d?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHl5ZWFyfGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80',
      title: 'Titulo 1',
      description: 'Descrição 1',
    },
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1634561005916-7a4a9d4c8e7d?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHl5ZWFyfGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80',
      title: 'Titulo 1',
      description: 'Descrição 1',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1634561005916-7a4a9d4c8e7d?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHl5ZWFyfGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80',
      title: 'Titulo 2',
      description: 'Descrição 2',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1634561005916-7a4a9d4c8e7d?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHl5ZWFyfGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80',
      title: 'Titulo 3',
      description: 'Descrição 3',
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1634561005916-7a4a9d4c8e7d?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHl5ZWFyfGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80',
      title: 'Titulo 4',
      description: 'Descrição 4',
    },
    {
      id: 5,
      image:
        'https://images.unsplash.com/photo-1634561005916-7a4a9d4c8e7d?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHl5ZWFyfGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80',
      title: 'Titulo 4',
      description: 'Descrição 4',
    },
    {
      id: 6,
      image:
        'https://images.unsplash.com/photo-1634561005916-7a4a9d4c8e7d?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHl5ZWFyfGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80',
      title: 'Titulo 4',
      description: 'Descrição 4',
    },
    {
      id: 7,
      image:
        'https://images.unsplash.com/photo-1634561005916-7a4a9d4c8e7d?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHl5ZWFyfGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80',
      title: 'Titulo 4',
      description: 'Descrição 4',
    },
  ]

  const prevImage = () => {
    setSelectedImage(selectedImage - 1)
  }

  const nextImage = () => {
    setSelectedImage(selectedImage + 1)
  }

  const calcCarouselPosition = () => {
    const imageWidth = isMobile ? 359 * selectedImage - 16 : 190 // Largura da imagem não selecionada
    const selectedImageWidth = isMobile ? 355 : 800 // Largura da imagem selecionada

    let offset = selectedImage === 0 ? 305 : selectedImage >= 5 ? 420 : 350
    // Calculando o deslocamento até a imagem selecionada
    for (let i = 0; i < selectedImage; i++) {
      offset += imageWidth
    }

    // Ajuste para centralizar a imagem selecionada
    const centerOffset = (selectedImageWidth - imageWidth) / 2
    return isMobile
      ? selectedImage === 0
        ? 'translateX(16px)'
        : `translateX(-${imageWidth}px)`
      : `translateX(calc(50% - ${offset}px - ${centerOffset}px))`
  }

  const paginationDots = Array.from({ length: images.length }, (_, index) => (
    <button
      key={index}
      className={`${
        index > 4 && 'hidden md:block'
      } w-10 h-[2px] transition-all duration-200 ${
        selectedImage === index ? 'bg-orange-200' : 'bg-gray-200'
      }`}
      onClick={() => setSelectedImage(index)}
    />
  ))

  return (
    <div className="w-full absolute left-0 overflow-hidden">
      <div
        style={{
          transform: calcCarouselPosition(),
          transition: `all 0.5s cubic-bezier(0.43, 0, 0.11, 1)`,
        }}
        className="flex items-start gap-6 flex-nowrap"
      >
        {images.map((image, index) => (
          <GaleryBox
            key={index}
            id={image.id}
            image={image.image}
            title={image.title}
            description={image.description}
            handleSelectImage={(id: number) => setSelectedImage(id)}
            selectedImage={selectedImage}
          />
        ))}
      </div>

      <footer className="px-4 md:px-0 mt-6 flex flex-col max-w-[1215px] w-full mx-auto gap-2 md:gap-6">
        <div className="flex justify-between items-start w-full">
          <div className="flex items-start gap-8">
            <small
              className={`text-orange-200 pt-[6px] uppercase text-md font-semibold font-manrope flex items-center`}
            >
              1
              <span
                className={`inline-block w-[6px] h-[6px] bg-gray-200 rounded-full ml-2 mr-2`}
              ></span>
              <span className="text-gray-300 font-normal">{images.length}</span>
            </small>

            <div className="hidden md:flex flex-col gap-1">
              <h2 className="text-[24px] text-white font-medium">
                Voluntários com elefantes em Bangkok, Tailândia
              </h2>
              <small
                className={`text-gray-400 uppercase text-base font-semibold font-manrope flex items-center`}
              >
                Nome da emissora
                <span
                  className={`inline-block w-[6px] h-[6px] bg-gray-200 rounded-full ml-2 mr-2`}
                ></span>
                <span className="text-gray-400 font-normal">
                  Nome do fotógrafo
                </span>
              </small>
            </div>
          </div>

          <ShareModal />
        </div>

        <div className="md:hidden flex flex-col gap-1">
          <h2 className="text-lg text-white font-medium">
            Voluntários com elefantes em Bangkok, Tailândia
          </h2>
          <small
            className={`text-gray-400 text-sm uppercase md:text-base font-semibold font-manrope flex items-center`}
          >
            Nome da emissora
            <span
              className={`inline-block w-[6px] h-[6px] bg-gray-200 rounded-full ml-2 mr-2`}
            ></span>
            <span className="text-gray-400 text-sm md:text-base font-normal">
              Nome do fotógrafo
            </span>
          </small>
        </div>

        <div className="flex justify-between items-center md:py-0 pt-6">
          <div className="flex gap-2 items-center">{paginationDots}</div>

          <div className="flex items-center gap-3">
            <button
              disabled={selectedImage === 0}
              onClick={prevImage}
              className="disabled:opacity-50"
            >
              <CaretLeft
                size={24}
                onClick={prevImage}
                weight="bold"
                className="text-gray-200 transition-all duration-200 hover:text-orange-200"
              />
            </button>
            <button
              disabled={selectedImage === images.length}
              onClick={nextImage}
              className="disabled:opacity-50"
            >
              <CaretRight
                size={24}
                onClick={nextImage}
                weight="bold"
                className="text-gray-700 transition-all duration-200 hover:text-orange-200"
              />
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
