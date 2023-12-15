'use client'

import { useState } from 'react'

export function Velocity() {
  const [velocity, setVelocity] = useState(1)

  const handleVelocity = () => {
    if (velocity === 1) {
      setVelocity(1.5)
    } else if (velocity === 1.5) {
      setVelocity(2)
    } else {
      setVelocity(1)
    }
  }

  return (
    <button
      className="p-[10px] text-gray-200 font-medium text-base"
      onClick={handleVelocity}
    >
      {velocity}x
    </button>
  )
}
