/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#C9A24D',
        'gold-dark': '#A68437',
        'gold-light': '#F5EFE0',
        dark: '#1A1A1A',
        'dark-soft': '#2D2D2D',
        'bg-light': '#FAFAFA',
      },
      fontFamily: {
        serif: ['Cormorant', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://picsum.photos/seed/ibvrd-hero/1920/1080')",
      }
    },
  },
  plugins: [],
}