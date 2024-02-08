/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        space_grotesk: ['"Space_Grotesk"', "sans-serif"],
        // Add more custom font families as needed
      }
    },
  },
  plugins: [],
}