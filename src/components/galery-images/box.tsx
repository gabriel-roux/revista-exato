import CaretRight from '@/components/icons/caret-right'
import CaretLeft from '@/components/icons/caret-left'
import { useState } from 'react'

interface GaleryBoxProps {
  image: string
  title: string
  description: string
  handleSelectImage: (id: number) => void
  selectedImage: number
  id: number
}

export function GaleryBox({
  handleSelectImage,
  selectedImage,
  id,
}: GaleryBoxProps) {
  const [selectImage, setSelectImage] = useState(1)

  const images = ['Imagem 1', 'Imagem 2', 'Imagem 3', 'Imagem 4']

  const handleNextImage = () => {
    if (selectImage === images.length) {
      setSelectImage(1)
    } else {
      setSelectImage(selectImage + 1)
    }
  }

  const handlePrevImage = () => {
    if (selectImage === 1) {
      setSelectImage(images.length)
    } else {
      setSelectImage(selectImage - 1)
    }
  }

  return (
    <div
      onClick={() => selectedImage !== id && handleSelectImage(id)}
      style={{
        transition: `all 0.5s cubic-bezier(0.43, 0, 0.11, 1)`,
      }}
      className={`${
        selectedImage === id ? 'min-w-[800px]' : 'min-w-[190px] cursor-pointer'
      } h-[460px] relative rounded-lg bg-gray-200 flex items-center justify-center transition-all duration-500`}
    >
      <div
        className={`absolute ${
          selectedImage === id ? 'opacity-100' : 'opacity-0'
        } transition-all duration-300 w-full z-50 flex justify-between top-[50%] transform -translate-y-[50%]`}
      >
        <button
          onClick={handlePrevImage}
          className="bg-orange-200 px-3 py-2 transition-all duration-150 hover:bg-orange-300 rounded-r-md"
        >
          <CaretLeft />
        </button>
        <button
          onClick={handleNextImage}
          className="bg-orange-200 px-3 py-6 transition-all duration-150 hover:bg-orange-300 rounded-l-md"
        >
          <CaretRight />
        </button>
      </div>
      {images[selectImage - 1]}
    </div>
  )
}
