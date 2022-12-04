/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6246FF",
        secondary: "#8772FF",
        accent: "#6F59FB",
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
