/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6246FF",
        primaryLight: "#8772FF",
        secondary: "#7258FF",
        accent: "#6F59FB",
        bg100: "#181820",
        bg200: "#16161E",
        gray: "#656D76",
        lightText: "#A0A4A8",
      },
      fontFamily: {
        logo: ["Audio Wide", "sans-serif"],
      },
      backgroundImage: {
        "header-wave": "url('/src/assets/images/header-wave.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
