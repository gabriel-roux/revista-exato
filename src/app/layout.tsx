import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Manrope, PT_Serif } from 'next/font/google'
import '@/styles/globals.css'

const ptserif = PT_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ptserif',
})
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title: 'Revista EXATO',
  description: 'Em desenvolvimento',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link href="/dist/output.css" rel="stylesheet" />
      </head>
      <body className={`${manrope.variable} ${ptserif.variable}`}>
        {children}
        <div id="modal-root"></div>
      </body>
    </html>
  )
}
