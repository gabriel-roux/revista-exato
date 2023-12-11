'use client'

import { useState } from 'react'
import { GaleryBox } from './box'
import Button from '../button'
import Share from '../icons/share'
import CaretRight from '@/components/icons/caret-right'
import CaretLeft from '@/components/icons/caret-left'

export function ImagesGalery() {
  const [selectedImage, setSelectedImage] = useState(1)

  const images = [
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
    {
      id: 8,
      image:
        'https://images.unsplash.com/photo-1634561005916-7a4a9d4c8e7d?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHl5ZWFyfGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80',
      title: 'Titulo 4',
      description: 'Descrição 4',
    },
  ]

  const prevImage = () => {
    console.log(selectedImage)
    setSelectedImage((current) => current - 1)
  }

  const nextImage = () => {
    console.log(selectedImage)
    setSelectedImage((current) => current + 1)
  }

  const calcCarouselPosition = () => {
    const imageWidth = 190 // Largura da imagem não selecionada
    const selectedImageWidth = 800 // Largura da imagem selecionada

    let offset = selectedImage >= 5 ? 220 : 150
    // Calculando o deslocamento até a imagem selecionada
    for (let i = 0; i < selectedImage; i++) {
      offset += imageWidth
    }

    // Ajuste para centralizar a imagem selecionada
    const centerOffset = (selectedImageWidth - imageWidth) / 2
    return `translateX(calc(50% - ${offset}px - ${centerOffset}px))`
  }
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

      <footer className="mt-6 flex flex-col max-w-[1215px] w-full mx-auto gap-6">
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

            <div className="flex flex-col gap-1">
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

          <Button variant="tertiary" className="px-[0!important]">
            <Share weight="fill" size={24} className="text-orange-200" />
          </Button>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <button className="w-10 h-[2px] bg-orange-200" />
            <button className="w-10 h-[2px] bg-gray-200" />
            <button className="w-10 h-[2px] bg-gray-200" />
            <button className="w-10 h-[2px] bg-gray-200" />
          </div>

          <div className="flex items-center gap-3">
            <button>
              <CaretLeft
                size={24}
                onClick={prevImage}
                weight="bold"
                className="text-gray-200 transition-all duration-200 hover:text-orange-200"
              />
            </button>
            <button>
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
