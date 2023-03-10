/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      integralCF: ["IntegralCF", "Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        purple: "#B188EA",
        grey: "#D8D8D8",
        lightgrey: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
