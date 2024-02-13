// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         space_grotesk: ['"Space_Grotesk"', "sans-serif"],
//         // Add more custom font families as needed
//       }
//     },
//   },
//   plugins: [],
// }

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      '2xl': '1400px',
      '3xl': '1921px'
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
});
