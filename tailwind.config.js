/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'ochr': {
          100: '#fcf9f5',
          500: '#cc7722',
        }
      },
      screens: {
        'xl': '1440px',
      },
    }
  },
  plugins: [
    require('tailwindcss-primeui'),
  ],
}