/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        Mmd: "320",
        MLg: "480px",
        Tab: "768px",
        LSm: "880px",
        LMd: "970px",
        LLg: "1280px",
        Dsm: "1366px",
        DMd: "1440px",
        DLg: "1920px",
      },

    },
  },
  plugins: [],
}