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
        "header-wave-dark": "url('/src/assets/images/header-wave-dark.svg')",
        "contact-wave": "url('/src/assets/images/contact-wave.svg')",
        "contact-wave-dark": "url('/src/assets/images/contact-wave-dark.svg')",
        "footer-wave": "url('/src/assets/images/footer-wave.svg')",
        "footer-wave-dark": "url('/src/assets/images/footer-wave-dark.svg')",
        "team-shape": "url('/src/assets/images/team-shape.svg')",
        "team-shape-dark": "url('/src/assets/images/team-shape-dark.svg')",
        "project-lynx": "url('/src/assets/projects/lynx.png')",
        "project-panther": "url('/src/assets/projects/panther.png')",
        "project-lion": "url('/src/assets/projects/lion.png')",
        "project-tiger": "url('/src/assets/projects/tiger.png')",
        "project-leopard": "url('/src/assets/projects/leopard.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
