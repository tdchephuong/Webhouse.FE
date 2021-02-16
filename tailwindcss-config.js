module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderColor: (theme) => ({
      ...theme('colors'),
      default: '#e8e8e8',
      'primary-input': '#d8d8d8'
    }),
    extend: {
      colors: {
        blue: { 500: '#5074f6' },
        active: { default: '#acacac' },
        submenu: { default: '#eef1fe' }
      }
    },
  },
  variants: {
    extend: {
      textColor: ['hover']
    },
  },
  plugins: [],
}
