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
      colors: {
        bg_body: "#f3f5f6",
      },
      screens: {
        mobile: "320px",
        // => @media (min-width: 640px) { ... }
      },
      // animation: {
      //   spinslow: "spin 3s linear infinite",
      // },
      gridTemplateColumns: {
        // Simple custome column grid
        mygrid: "grid-template-columns: fit-content(40%)",
      },
    },
  },
  plugins: [],
};
