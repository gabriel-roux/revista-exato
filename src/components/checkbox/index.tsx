'use client'

import { useState } from 'react'

export default function Checkbox() {
  const [checked, setChecked] = useState(false)

  return (
    <div
      onClick={() => setChecked(!checked)}
      className={`w-4 h-4 rounded-[4px] border cursor-pointer flex items-center justify-center ${
        checked ? 'border-orange-200' : 'border-gray-400'
      }`}
    >
      <input type="checkbox" className="hidden" />

      <div
        className={`w-3 h-3 bg-orange-200 rounded-[3px] ${
          !checked && 'hidden'
        }`}
      />
    </div>
  )
}
