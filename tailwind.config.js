/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB'
        },
        accentStart: '#6D28D9',
        accentEnd: '#2563EB'
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(90deg, #6D28D9 0%, #2563EB 100%)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}