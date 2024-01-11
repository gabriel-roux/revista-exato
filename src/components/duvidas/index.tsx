'use client'

import Plus from '@/components/icons/plus'
import { useState } from 'react'

interface DuvidaComponentProps {
  title: string
}

export default function DuvidaComponent({ title }: DuvidaComponentProps) {
  const [opened, setOpened] = useState(false)

  return (
    <div
      className={`w-full ${
        opened ? 'h-auto md:h-auto py-7' : 'h-[80px] md:h-[100px] '
      } flex flex-col gap-6 justify-center border-y border-gray-500 cursor-pointer`}
      onClick={() => setOpened(!opened)}
    >
      <div className="w-full flex justify-between items-center">
        <p
          className={`${
            opened ? 'text-orange-200 font-semibold' : 'text-gray-200'
          } text-lg font-medium text-left`}
        >
          {title}
        </p>

        <Plus className="text-gray-200 flex-shrink-0" size={16} />
      </div>

      {opened && (
        <div className="w-full flex flex-col gap-2">
          <p className="text-base text-gray-200 text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            pulvinar leo eget orci aliquam, ac euismod sem gravida. Sed suscipit
            nunc id nulla tempus tincidunt. Suspendisse ultrices semper purus id
            mattis. Maecenas dapibus justo porttitor bibendum eleifend. Quisque
            ultricies iaculis mi in consequat.
          </p>
        </div>
      )}
    </div>
  )
}
