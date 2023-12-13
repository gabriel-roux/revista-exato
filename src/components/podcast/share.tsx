'use client'

import { useEffect, useRef, useState } from 'react'
import ShareNetwork from '@/components/icons/share'
import TwitterLogo from '../icons/twitter'
import ReactDOM from 'react-dom'
import InstagramLogo from '@/components/icons/instagram'
import FacebookLogo from '@/components/icons/facebook'
import WhatsappLogo from '@/components/icons/whatsapp'
import LinkedinLogo from '@/components/icons/linkedin'
import Envelope from '@/components/icons/envelope'

export function ShareModal() {
  const [openExato, setOpenExato] = useState(false)

  const modalRef = useRef<HTMLDivElement>(null)
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 })
  const triggerRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Assegura ao TypeScript que event.target é um Node
      const target = event.target as Node

      if (modalRef.current && !modalRef.current.contains(target)) {
        setOpenExato(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [modalRef])

  const handleClick = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect()
      setModalPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      })
    }
    setOpenExato(true)
  }

  const modalContent = openExato && (
    <div
      ref={modalRef}
      style={{
        top: `${modalPosition.top}px`,
        left: `${modalPosition.left}px`,
      }}
      className="w-[220px] z-50 py-2 px-[20px] rounded-lg shadow-exato absolute bg-[#FFF]"
    >
      <ul className="flex flex-col list-none">
        <li className="cursor-pointer py-[10px] flex gap-[6px] items-center">
          <WhatsappLogo
            size={24}
            className="text-orange-200 transform -translate-x-1"
          />
          <p className="text-black font-manrope font-medium transition-all duration-200 ease hover:text-orange-200">
            Whatsapp
          </p>
        </li>
        <li className="cursor-pointer py-[10px] flex gap-[6px] items-center">
          <FacebookLogo
            size={24}
            weight="fill"
            className="text-orange-200 transform -translate-x-1"
          />
          <p className="text-black font-manrope font-medium transition-all duration-200 ease hover:text-orange-200">
            Facebook
          </p>
        </li>
        <li className="cursor-pointer py-[10px] flex gap-[6px] items-center">
          <InstagramLogo
            size={24}
            className="text-orange-200 transform -translate-x-1"
          />
          <p className="text-black font-manrope font-medium transition-all duration-200 ease hover:text-orange-200">
            Instagram
          </p>
        </li>
        <li className="cursor-pointer py-[10px] flex gap-[10px] items-center">
          <TwitterLogo className="fill-orange-200" />
          <p className="text-black font-manrope font-medium transition-all duration-200 ease hover:text-orange-200">
            X
          </p>
        </li>
        <li className="cursor-pointer py-[10px] flex gap-[10px] items-center">
          <LinkedinLogo />
          <p className="text-black font-manrope font-medium transition-all duration-200 ease hover:text-orange-200">
            Linkedin
          </p>
        </li>
        <li className="cursor-pointer py-[10px] flex gap-[5px] items-center">
          <Envelope
            size={24}
            weight="fill"
            className="text-orange-200 transform -translate-x-1"
          />
          <p className="text-black font-manrope font-medium transition-all duration-200 ease hover:text-orange-200">
            Email
          </p>
        </li>
      </ul>
    </div>
  )
  const portalRoot = document.getElementById('modal-root')

  return (
    <div className="relative">
      <p
        ref={triggerRef}
        onClick={handleClick}
        className="font-ptserif font-normal text-[32px] flex items-center gap-3 hover:text-orange-200 transition-all duration-150 cursor-pointer"
      >
        <ShareNetwork size={16} weight="fill" className="text-orange-200" />
      </p>

      {openExato &&
        modalContent &&
        portalRoot &&
        ReactDOM.createPortal(modalContent, portalRoot)}
    </div>
  )
}
