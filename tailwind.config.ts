import { defaultTheme } from './src/theme/colors'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: defaultTheme,
    extend: {
      fontFamily: {
        manrope: ['var(--font-manrope)'],
        ptserif: ['var(--font-ptserif)'],
      },
    },
  },
  plugins: [],
}
export default config
