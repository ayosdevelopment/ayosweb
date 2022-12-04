/** @type {import('tailwindcss').Config} */
module.exports = {
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
        "header-wave": "url('/src/assets/header-wave.svg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
