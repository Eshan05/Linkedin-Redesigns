/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'tab': '743px',
    },
    extend: {
      fontFamily: {
        'sans': ['DM Sans', 'serif']
      }
    },
  },
  plugins: [],
}

