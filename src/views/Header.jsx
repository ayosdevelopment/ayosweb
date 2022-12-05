import { useState } from "react"

import Logo from "../assets/images/logotype.svg"

import { FiMoon, FiSun } from "react-icons/fi"
import { Hero } from "./Hero"

export const Header = () => {
  const [theme, setTheme] = useState(false)

  const handleTheme = () => {
    if (localStorage.theme === "light") {
      document.documentElement.classList.add("dark")
      localStorage.theme = "dark"
      setTheme(true)
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.theme = "light"
      setTheme(false)
    }
  }

  return (
    <header className="home bg-header-wave bg-no-repeat bg-cover pb-24">
      <div className="sm:container sm:mx-auto px-6">
        <nav className="sticky top-0 flex flex-row py-7 content-center justify-between text-white">
          <a href="">
            <img src={Logo} alt="Ayos Logo" />
          </a>
          <ul className="flex flex-row list-none gap-6 font-medium">
            <li className="">
              <a href="#home">Início</a>
            </li>
            <li className="">
              <a href="#about">Sobre</a>
            </li>
            <li className="">
              <a href="#portfolio">Portfólio</a>
            </li>
            <li className="">
              <a href="#contact">Contato</a>
            </li>
          </ul>
          <div className="cursor-pointer">
            {!theme ? (
              <FiMoon onClick={handleTheme} size={25} />
            ) : (
              <FiSun onClick={handleTheme} size={25} />
            )}
          </div>
        </nav>
        <Hero />
      </div>
    </header>
  )
}
