import { PlanosFooter } from '@/screens/planos/footer'
import { PlanosHeader } from '@/screens/planos/header'
import { ReactNode } from 'react'

export default function Template({ children }: { children: ReactNode }) {
  return (
    <>
      <PlanosHeader />
      {children}
      <PlanosFooter />
    </>
  )
}
