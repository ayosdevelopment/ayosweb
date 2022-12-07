import { sections, useScroll, useTheme } from "../App"

import Logo from "../assets/images/logotype.svg"

import { FiMoon, FiSun } from "react-icons/fi"

import i18n from "../i18n"

export const Header = () => {
  const [theme, setTheme] = useTheme()
  const [scrolled, scrolledSection] = useScroll().scrolled

  const handleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  return (
    <header className="absolute">
      <nav
        className={`${
          scrolled ? "scrolled" : ""
        } fixed inset-x-0 top-0 text-white transition-all z-50`}
      >
        <div className="container flex flex-row items-center justify-between py-7 mx-auto">
          <a href="/">
            <img src={Logo} alt="Ayos Logo" className="w-24" />
          </a>

          <ul className="flex flex-row justify-center list-none gap-3 font-medium">
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
          <div className="flex justify-end w-24">
            {theme === "dark" ? (
              <FiMoon
                onClick={handleTheme}
                className="cursor-pointer"
                size={30}
              />
            ) : (
              <FiSun
                onClick={handleTheme}
                className="cursor-pointer"
                size={30}
              />
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}
