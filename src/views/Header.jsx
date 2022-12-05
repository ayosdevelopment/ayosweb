import { useScroll, useTheme } from "../App"

import Logo from "../assets/images/logotype.svg"

import { FiMoon, FiSun } from "react-icons/fi"

import i18n from "../i18n"

export const Header = () => {
  const [theme, setTheme] = useTheme()
  const [scrolled, scrolledSection] = useScroll().scrolled

  const handleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  const sections = ["home", "about", "portfolio", "contact"]

  return (
    <header className="absolute">
      <nav
        className={`${
          scrolled ? "scrolled" : ""
        } fixed inset-x-0 top-0 text-white transition-all z-50`}
      >
        <div className="sm:container sm:mx-auto px-6 flex flex-row py-7 items-center justify-between">
          <a href="">
            <img src={Logo} alt="Ayos Logo" />
          </a>

          <ul className="flex flex-row list-none gap-3 font-medium">
            {sections.map((s) => (
              <li
                key={s}
                className={`${
                  scrolledSection === s ? "active" : ""
                } hover:active`}
              >
                <a href={`#${s}`} className="block pb-3 px-2">
                  {i18n.t(s)}
                </a>
              </li>
            ))}
          </ul>
          <div className="cursor-pointer">
            {theme === "dark" ? (
              <FiMoon onClick={handleTheme} size={25} />
            ) : (
              <FiSun onClick={handleTheme} size={25} />
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}
