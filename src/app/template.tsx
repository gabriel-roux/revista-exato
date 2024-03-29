'use client'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const isSubscriptionPage =
    pathname.includes('/planos') ||
    pathname.includes('/login') ||
    pathname.includes('/esqueci-minha-senha') ||
    pathname.includes('/dashboard')

  return (
    <>
      {!isSubscriptionPage && <Header />}
      {children}
      {!isSubscriptionPage && <Footer />}
    </>
  )
}
