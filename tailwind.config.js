/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#2AB7CA',
        secondary: '#ae71f5',
        red: '#FE4A49',
        grayMain: '#ececec',
        darkMain: '#333333',
        darkColor: 'rgb(23 23 23)',
        lightColor: 'rgb(249 250 251)',
        lightHover: '#dfe0e0',
        darkHover: '#444950',
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
      xs: 14,
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
