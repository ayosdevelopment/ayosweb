import { FiArrowDown } from "react-icons/fi";
import Proto from "../assets/hero-proto.svg";

export const Hero = () => {
  return (
    <section className="home bg-header-wave bg-no-repeat bg-cover pb-24">
      <div className="sm:container sm:mx-auto px-6 pt-24">
        <div className="columns-lg xl:columns-2 gap-48 justify-center mt-20">
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
        </div>
        <button class="flex rounded-full flex-wrap w-12 h-12 bg-white justify-center content-center">
          <FiArrowDown size={20} color="black" />
        </button>
      </div>
    </section>
  );
};
