/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Tahoma', 'Arial', 'sans-serif'],
        'iran': ['IRANSans', 'Tahoma', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        },
        warm: {
          50: '#fefdfb',
          100: '#fef7f0',
          200: '#feeee0',
          300: '#fde0c7',
          400: '#fbcca3',
          500: '#f7b377',
          600: '#f09849',
          700: '#e8802e',
          800: '#d16a26',
          900: '#a85424',
        },
        lavender: {
          50: '#faf7ff',
          100: '#f3efff',
          200: '#e9e2ff',
          300: '#d9c7ff',
          400: '#c5a3ff',
          500: '#b07aff',
          600: '#9954ff',
          700: '#8333eb',
          800: '#6d28d9',
          900: '#5b21b6',
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
