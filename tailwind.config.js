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
      screens: {
        mobile: "320px",
        // => @media (min-width: 640px) { ... }
      },
      // animation: {
      //   spinslow: "spin 3s linear infinite",
      // },
      // gridTemplateColumns: {
      //   // Simple custome column grid
      //   mygrid: "repeat(5, 1fr)",
      // },
    },
  },
  plugins: [],
};
