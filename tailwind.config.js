module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      richblack:{
        DEFAULT: '#0D1321'
      },
      eggshell:{
        DEFAULT: '#F0EBD8'
      },
      shadowblue: {
        DEFAULT: '#F0EBD8'
      },
      prublue: {
        DEFAULT: '#1D2D44'
      },
      blackcoral: {
        DEFAULT: '#3E5C76'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
