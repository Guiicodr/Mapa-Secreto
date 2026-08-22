/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mapa: {
          orange: '#F6511D',
          yellow: '#FEC001',
          cyan: '#6ED1EA',
          blue: '#1C5CB0',
          green: '#8AC926',
        },
      },
    },
  },
  plugins: [],
}