import { createContext, useContext, useEffect, useRef, useState } from "react"
import { FiChevronUp } from "react-icons/fi"
import { About, Contact, Footer, Header, Hero, Portfolio, Team } from "./views"

const Theme = createContext()
const Scroll = createContext()

function App() {
  const [theme, setTheme] = useState(localStorage.theme)
  const [scrolled, setScrolled] = useState(window?.scrollY > 48)
  const [scrolledSection, setScrolledSection] = useState("home")

  const hero = useRef()
  const about = useRef()
  const portfolio = useRef()
  const team = useRef()
  const contact = useRef()

  const sections = Array.from([contact, team, portfolio, about, hero])

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
        <div className="bg-white dark:bg-gradient-to-r from-bg100 to-bg200 dark:text-white relative select-none overflow-x-hidden">
          <Header />
          <Hero ref={hero} />
          <About ref={about} />
          {/* <Portfolio ref={portfolio} /> */}
          <Team ref={team} />
          <Contact ref={contact} />
          <Footer />
          <button
            className={`${
              scrolled ? "flex" : "hidden"
            } container mx-auto fixed bottom-4 right-0 left-0 sm:left-0 sm:-right-3/4 rounded-full flex-wrap w-12 h-12 bg-primary justify-center items-center border border-solid border-primary`}
            onClick={() => window.scrollTo(0, 0)}
          >
            <FiChevronUp size={20} className="text-white" />
          </button>
        </div>
      </Scroll.Provider>
    </Theme.Provider>
  )
}

export default App

// export const sections = ["home", "about", "portfolio", "team", "contact"]
export const sections = ["home", "about", "team", "contact"]

export const useTheme = () => useContext(Theme)
export const useScroll = () => useContext(Scroll)
