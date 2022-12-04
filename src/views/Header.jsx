import Logo from "../assets/logotype.svg";

export const Header = () => {
  return (
    <header className="home bg-header-wave bg-no-repeat bg-cover">
      <div className="sm:container sm:mx-auto">
        <nav className="sticky top-0 flex flex-row py-7 justify-between">
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
        </nav>
      </div>
    </header>
  );
};
