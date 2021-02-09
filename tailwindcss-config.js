const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderColor: (theme) => ({
      ...theme('colors'),
      default: '#e8e8e8',
    }),
    extend: {
      colors: {
        blue: { ...colors.blue, 500: '#5074F6' }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
