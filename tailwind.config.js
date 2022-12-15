/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Roboto", "sans-serif"],
      },
      // colors: {
      //   header_bg: "#1e2d7d",
      // },
      // screens: {
      //   sm: "375px",
      //   // => @media (min-width: 640px) { ... }
      // },
    },
  },
  plugins: [],
};
