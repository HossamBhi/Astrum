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
      // '2xl': '1400px',
      '2xl': "1370px",
      '3xl': '2560px',
      '4xl': '3840px',
    },
  },
  plugins: [],
});
