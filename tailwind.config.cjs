/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#32a852',
          yellow: '#cccc29',
          purple: '#2d1b87',
        },
        paper: {
          DEFAULT: '#efe7d3',
          dark: '#e4dabd',
        },
        ink: '#211d16',
        pin: '#b23a2e',
      },
    },
  },
  plugins: [],
}