import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    screens: {
      'xl': '1440px',
    },
    extend: {
      colors: {
        'ochr': {
          100: '#fcf9f5',
          500: '#cc7722',
        }
      },
    }
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: ["light"],
    darkTheme: "light",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root"
  },
}