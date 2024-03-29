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
        modal: '0px 12px 36px -2px #080C2F12',
        exato: '0px 10px 22px -4px rgba(0, 0, 0, 0.08)',
        input: '0px 0px 1px 2px #FF702E95',
      },
      screens: {
        '3xl': '1920px',
      },
      backgroundColor: { ...defaultTheme },
      textColor: { ...defaultTheme },
      borderColor: { ...defaultTheme },
    },
  },
  plugins: [],
}
export default config
