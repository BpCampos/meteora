/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        lime: {
          300: '#DAFF01'
        },
      },

      screens: {
        'sm': '375px'
      },

      backgroundImage: {
        'banner-1': './Mobile/Banner carousel 1 _ 375.png',
        'banner-2': './Mobile/Banner carousel 2 _ 375.png',
        'banner-3': './Mobile/Banner carousel 3 _ 375.png'
      },

      keyframes: {
        'show': {
          '0%': {
            'opacity': 0
          },
          '100%': {
            'opacity': 1
          }

        }
      },

      animation: {
        show: 'show 300ms ease-in-out'
      }

    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}
