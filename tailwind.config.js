module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'theme-white': '#F5F5F5',
        'theme-black': '#292929',
        'theme-gray': '#494949',
        'theme-green': '#48B216'
      },
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
        epilogue: ['Epilogue', 'sans-serif']
      },
      transform: ['hover']
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/line-clamp')]
};
