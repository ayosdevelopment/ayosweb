import { createContext, useContext, useEffect, useRef, useState } from "react"
import { About, Contact, Header, Hero, Portfolio, Team } from "./views"

const Theme = createContext()
const Scroll = createContext()

function App() {
  const [theme, setTheme] = useState(localStorage.theme)
  const [scrolled, setScrolled] = useState(window?.scrollY > 48)
  const [scrolledSection, setScrolledSection] = useState("home")

  const hero = useRef()
  const team = useRef()
  const about = useRef()
  const portfolio = useRef()
  const contact = useRef()

  const sections = Array.from([contact, portfolio, about, team, hero])

  const handleScroll = (e) => {
    const scroll = window?.scrollY

    setScrolled(scroll > 48)

    sections.some(({ current }) => {
      if (scroll >= current.offsetTop * 0.85) {
        setScrolledSection(current.id)
        return true
      }
      return false
    })
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
          <Hero ref={hero} />
          <Team ref={team} />
          <About ref={about} />
          <Portfolio ref={portfolio} />
          <Contact ref={contact} />
        </div>
      </Scroll.Provider>
    </Theme.Provider>
  )
}

export default App

export const useTheme = () => useContext(Theme)
export const useScroll = () => useContext(Scroll)
