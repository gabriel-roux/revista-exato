'use client'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const isSubscriptionPage = pathname === '/planos'

  return (
    <>
      {!isSubscriptionPage && <Header />}
      {children}
      {!isSubscriptionPage && <Footer />}
    </>
  )
}
