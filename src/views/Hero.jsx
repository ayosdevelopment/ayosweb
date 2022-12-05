import { FiArrowDown } from "react-icons/fi"
import Proto from "../assets/images/hero-proto.svg"

export const Hero = () => {
  return (
    <section id="home" className="bg-header-wave bg-no-repeat bg-cover pb-32">
      <div className="sm:container sm:mx-auto px-6 pt-44">
        <div className="columns-lg xl:columns-2 gap-48 justify-center">
          <div className="py-8 text-white">
            <h1 className="font-bold text-5xl">
              Seu projeto fora do papel em{" "}
              <span className="underline underline-offset-4">semanas</span>
            </h1>
            <p className="text-lg mt-10 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="outline outline-3 outline-white rounded-full py-4 px-9 bg-transparent font-bold text-md">
              Começar
            </button>
          </div>
          <img src={Proto} alt="Screen Prototype" />
        </div>
        <button className="flex rounded-full flex-wrap w-12 h-12 bg-white justify-center content-center animate-bounce">
          <FiArrowDown size={20} className="text-primary" />
        </button>
      </div>
    </section>
  )
}
