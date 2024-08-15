const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",
  "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}","path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", 'sans-serif'],
      },
    },
    colors: {
      'mycolor': '#FFCD29',
      'mycolor2':'#303845',
      'mycolor3':'#8770FE',
      'mycolorhover':'#6450CD',
      'mycolorhover2':'#6450CD'
    },
  },
  plugins: [],
});