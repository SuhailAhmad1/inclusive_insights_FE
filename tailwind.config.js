/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "sc-1900": "1900px",
        "sc-1650": "1650px",
        "sc-1450": "1450px",
        "sc-1320": "1320px",
        "sc-1218": "1218px",
        "sc-1070": "1070px",
        "sc-950": "950px",
        "sc-900": "900px",
        "sc-834": "834px",
        "sc-650": "650px",
        "sc-500": "500px",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
