import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#fdf8f0',
          100: '#faefd9',
          200: '#f3d9a8',
          300: '#e8bb6e',
          400: '#dc9a3c',
          500: '#c97d22',
          600: '#a8621a',
          700: '#874c18',
          800: '#6e3d19',
          900: '#5a3318',
        },
        clay: '#3d2b1f',
        cream: '#fdf6ec',
        warm: '#f5ede0',
      },
      fontFamily: {
        display: ['Sarabun', 'sans-serif'],
        body: ['Sarabun', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
