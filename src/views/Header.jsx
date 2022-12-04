import { FiArrowDown, FiMoon, FiSun } from "react-icons/fi";
import Proto from "../assets/header-proto.svg";
import Logo from "../assets/logotype.svg";

export const Header = () => {
  return (
    <header className="home bg-header-wave bg-no-repeat bg-cover pb-24">
      <div className="sm:container sm:mx-auto px-6">
        <nav className="sticky top-0 flex flex-row py-7 content-center justify-between">
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
        </nav>
        <section className="columns-lg xl:columns-2 gap-48 justify-center mt-24">
          <div className="py-8">
            <h1 className="font-bold text-5xl">
              Seu projeto fora do papel em{" "}
              <span className="underline underline-offset-4">semanas</span>
            </h1>
            <p className="text-lg mt-10 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button class="outline outline-3 outline-white rounded-xl py-4 px-9 bg-transparent font-extrabold text-lg">
              Começar
            </button>
          </div>
          <img src={Proto} alt="Screen Prototype" />
        </section>
        <button class="flex rounded-full flex-wrap w-12 h-12 bg-white justify-center content-center">
          <FiArrowDown size={20} color="black" />
        </button>
      </div>
    </header>
  );
};
