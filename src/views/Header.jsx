import { useState } from "react"
import { sections, useScroll, useTheme } from "../App"

import Logotype from "../assets/images/logotype.svg"
import Logo from "/logo.svg"

import { FiMoon, FiSun } from "react-icons/fi"
import { VscClose, VscMenu } from "react-icons/vsc"

import i18n from "../i18n"

export const Header = () => {
  const [theme, setTheme] = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, scrolledSection] = useScroll().scrolled

  const handleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  return (
    <header className="absolute">
      <nav
        className={`${
          scrolled ? "scrolled" : "lg:bg-transparent"
        } fixed inset-x-0 top-0 text-white transition-all z-50 ${
          isOpen ? "bg-[#7258FF]" : ""
        }`}
      >
        <div className="container flex flex-row items-center justify-between py-7 mx-auto px-6 md:px-0">
          {/* Logo */}
          <a href="/" className="w-24 justify-left">
            <img src={Logotype} alt="Ayos Logo" className="hidden md:flex" />
            <img src={Logo} alt="Ayos Logo" className="md:hidden h-8" />
          </a>

          {/* Desktop links */}
          <ul
            className={`${
              isOpen ? "" : "hidden"
            } flex-row justify-center list-none gap-3 font-medium transition-all lg:flex hidden`}
          >
            {sections.map((s) => (
              <li
                key={s}
                className={`${
                  scrolledSection === s ? "active" : ""
                } hover:active`}
              >
                <a
                  href={`#${s}`}
                  className="lg:block sm:pb-3 sm:px-2 px-0 pb-0 text-sm"
                >
                  {i18n.t(s)}
                </a>
              </li>
            ))}
          </ul>

          {/* Toggle Theme */}
          <div className="flex justify-center lg:justify-end w-24">
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

          {/* Toggle Hamburguer */}
          <div className="flex justify-end w-24 lg:hidden">
            {!isOpen ? (
              <VscMenu onClick={() => setIsOpen(!isOpen)} size={25} />
            ) : (
              <VscClose onClick={() => setIsOpen(!isOpen)} size={30} />
            )}
          </div>
        </div>

        {/* Mobile links */}
        <ul
          className={`${
            isOpen ? "bg-" : "hidden"
          } container mx-auto flex-col justify-center list-none gap-3 font-medium transition-all flex py-6 pl-6 md:pl-0 lg:hidden`}
        >
          {sections.map((s) => (
            <li
              key={s}
              className={`${
                scrolledSection === s ? "active" : ""
              } hover:active flex flex-row max-w-[60px] py-2 text-center`}
            >
              <a href={`#${s}`} className="lg:block text-sm">
                {i18n.t(s)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
