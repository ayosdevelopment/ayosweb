import { forwardRef } from "react"
import { FiArrowRight } from "react-icons/fi"

export const Contact = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="contact" className="bg-gray-100 my-20">
      <div className="sm:container sm:mx-auto">
        <div className="flex py-32 px-40 rounded-3xl justify-between content-center bg-contact-wave bg-secondary bg-center bg-no-repeat bg-cover">
          <h5 className="text-3xl align-middle leading-tight font-bold text-white">
            Quer falar com a gente?
          </h5>
          <button className="text-secondary rounded-3xl py-4 px-12 font-bold text-lg flex items-center bg-white">
            Entre em contato
            <FiArrowRight size={24} className="ml-3" />
          </button>
        </div>
      </div>
    </section>
  )
})
