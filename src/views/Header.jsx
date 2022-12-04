import { FiMoon, FiSun } from "react-icons/fi";
import Logo from "../assets/logotype.svg";

export const Header = () => {
  return (
    <header>
      <nav className="absolute top-0 left-0 right-0 w-full">
        <div className="sm:container sm:mx-auto flex flex-row px-6 py-7 content-center justify-between">
          <a href="">
            <img src={Logo} alt="Ayos Logo" />
          </a>
          <ul className="flex flex-row list-none gap-6">
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
          <FiSun className="cursor-pointer" size={25} />
        </div>
      </nav>
    </header>
  );
};
