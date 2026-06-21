/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./lib/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#475aa7",
          deep: "#2d418d",
          green: "#60b630",
        },
        ink: {
          DEFAULT: "#181c1e",
          soft: "#454651",
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', "Arial", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};
