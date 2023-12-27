import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        courier: ['Courier New', 'Courier', 'monospace'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        pr: { 
          500: 'rgb(185, 25, 25)',
          200: 'rgb(207, 138, 47)'
        }
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      midscreen: {'max': '767px'},
      maxscreen: {'max': '639px'},
      maxmobile: {'max': '580px'},
      mobile: {'max': '480px'},
      midmobile: {'max': '380px'},
      minmobile: {'max': '280px'}
    }
  },
  plugins: [],
}
export default config
