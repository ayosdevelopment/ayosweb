/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-wave": "url('/src/assets/hero-wave.svg')",
      },
    },
  },
  plugins: [],
};
