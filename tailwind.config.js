/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "lg": 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
      },
      colors: {
        main: '#2AB7CA',
        secondary: '#665ae9',
        red: '#FE4A49',
        grayMain: '#F5E6E8',
        blackMain: '#332E3C',
      },
      fontFamily: {
        work: 'Work Sans, sans-serif'
      },
      screens: {
        xs: '370px',
        mdlg: '870px'
      },
    },
    fontSize: {
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      xxl: 28,
      '2xl': '2rem',
      xlg: '2.5rem',
    },
  },
  darkMode: 'class',
  plugins: [],
}
