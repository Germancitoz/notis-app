/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,svelte}'],
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      colors: {
        primary: '#3F4145',
        secondary: '#5E5E5E',
        tertiary: '#878787',
        cblue: 'rgb(34, 104, 235)'
      }
    }
  },
  plugins: []
}
