module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
        center: true,
        padding: {
            DEFAULT: '1rem',
            lg: '2rem',
            xl: '6rem',
            '2xl': '12rem',
        },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
