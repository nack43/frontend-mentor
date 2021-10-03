module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'rhd': ['"Red Hat Display"']
      },
      backgroundImage: {
        'hero-desktop': "url('/static/pattern-background-desktop.svg')",
        'hero-mobile': "url('/static/pattern-background-mobile.svg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
