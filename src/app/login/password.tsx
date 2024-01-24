'use client'

import { Eye, EyeSlash } from '@phosphor-icons/react'
import { useState } from 'react'

export default function Password() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="w-full h-14 px-6 py-[10px] flex items-center border-[1.5px] border-gray-500 rounded-lg focus-within:border-orange-500 transition-all duration-200 justify-between">
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder="Senha"
        className="outline-none text-gray-100"
      />

      {!showPassword ? (
        <Eye
          onClick={() => setShowPassword(!showPassword)}
          className="w-6 h-6 fill-orange-300 hover:fill-orange-100 transition-all duration-150 cursor-pointer"
        />
      ) : (
        <EyeSlash
          onClick={() => setShowPassword(!showPassword)}
          className="w-6 h-6 fill-orange-300 hover:fill-orange-100 transition-all duration-150 cursor-pointer"
        />
      )}
    </div>
  )
}
