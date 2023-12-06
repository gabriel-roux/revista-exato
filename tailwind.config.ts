import { defaultTheme } from './src/theme/colors'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/screens/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: defaultTheme,
    extend: {
      fontFamily: {
        manrope: ['var(--font-manrope)'],
        ptserif: ['var(--font-ptserif)'],
      },
      boxShadow: {
        exato: '0px 10px 22px -4px rgba(0, 0, 0, 0.08)',
      },
      backgroundColor: { ...defaultTheme },
      textColor: { ...defaultTheme },
      borderColor: { ...defaultTheme },
    },
  },
  plugins: [],
}
export default config
