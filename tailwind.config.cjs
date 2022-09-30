/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter, sans-serif']
    },
    extend: {
      backgroundImage: {
        finder: "url('/background.png')",
      }
    },
  },
  plugins: [],
}
