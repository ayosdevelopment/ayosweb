import { forwardRef } from "react"
import { FiArrowRight } from "react-icons/fi"

export const Portfolio = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="portfolio" className="bg-gray-100 h-screen">
      <div className="sm:container sm:mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="lg:text-4xl sm:text-3xl text-2xl w-full leading-tight font-bold text-bg100 dark:text-white text-center">
            Explore nossos últimos
            <br /> projetos
          </h1>
        </div>
        <div className="grid grid-flow-row-dense grid-cols-1 grid-rows-4 sm:grid-cols-3 sm:grid-rows-2 h-[60vh] mt-[10vh] align-middle gap-10 mx-10 sm:mx-0">
          <div className="sm:col-span-2 border p-2 rounded-lg">Projeto 01</div>
          <div className="sm:col-span-1 sm:row-span-2 border p-2 rounded-lg">
            Projeto 02
          </div>
          <div className="border p-2 rounded-lg">Projeto 03</div>
          <div className="border p-2 rounded-lg">Projeto 04</div>
        </div>
        <div className="flex justify-center mt-10">
          <button className="bg-secondary rounded-full py-4 px-12 font-bold text-sm flex items-center">
            Ver mais projetos
            <FiArrowRight size={24} className="ml-3" />
          </button>
        </div>
      </div>
    </section>
  )
})
