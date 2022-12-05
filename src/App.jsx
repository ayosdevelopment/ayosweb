import { createContext, useContext, useEffect, useState } from "react"
import { About, Header, Hero, Team } from "./views"

const Theme = createContext()
const Scroll = createContext()

function App() {
  const [theme, setTheme] = useState(localStorage.theme)
  const [scrolled, setScrolled] = useState(window?.scrollY > 48)
  const [scrolledSection, setScrolledSection] = useState("about")

  const handleScroll = (e) => {
    setScrolled(window?.scrollY > 48)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    localStorage.theme = theme

    document.documentElement.classList[theme === "dark" ? "add" : "remove"](
      "dark"
    )
  }, [theme])

  return (
    <Theme.Provider value={[theme, setTheme]}>
      <Scroll.Provider
        value={{ scrolled: [scrolled, scrolledSection], setScrolledSection }}
      >
        <div className="bg-white dark:bg-gradient-to-r from-bg100 to-bg200 dark:text-white">
          <Header />
          <Hero />
          <Team />
          <About />
        </div>
      </Scroll.Provider>
    </Theme.Provider>
  )
}

export default App

export const useTheme = () => useContext(Theme)
export const useScroll = () => useContext(Scroll)
