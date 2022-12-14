import { forwardRef } from "react"

import { FiArrowDown } from "react-icons/fi"
import Proto from "../assets/images/hero-proto.svg"

export const Hero = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      id="home"
      className="dark:bg-header-wave-dark bg-header-wave bg-no-repeat bg-cover bg-center h-[850px]"
    >
      <div className="sm:container sm:mx-auto px-6 scroll-smooth flex flex-col h-full pt-28 pb-24 mb-14 lg:pt-36 md:pt-28">
        <div className="columns-lg xl:columns-2 gap-48 justify-center items-center">
          <div className="py-8 text-white">
            <h1 className="font-bold sm:text-5xl text-3xl">
              Seu projeto fora do papel em{" "}
              <span className="underline underline-offset-4">semanas</span>
            </h1>
            <p className="text-lg mt-10 mb-8">
              Automatize seu trabalho manual, deixe de fazer a mão tudo que você
              pode deixar um sistema fazer por você tornando seu negócio mais
              eficaz, harmônico e passível de erros humanos.
            </p>
            <a
              className="outline outline-3 outline-white rounded-full py-4 px-9 bg-transparent font-bold text-md"
              href="https://api.whatsapp.com/send?phone=555185930758"
              target={"_blank"}
              onClick={() => window.scrollTo(0, 700)}
            >
              Começar
            </a>
          </div>
          <div className="w-full flex justify-center">
            <img src={Proto} alt="Screen Prototype" />
          </div>
        </div>
        <button
          className="xl:flex rounded-full flex-wrap w-12 h-12 bg-white justify-center content-center hidden"
          onClick={() => window.scrollTo(0, 700)}
        >
          <FiArrowDown size={20} className="text-primary" />
        </button>
      </div>
    </section>
  )
})
