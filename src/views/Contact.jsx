import { forwardRef } from "react"
import { FiArrowRight } from "react-icons/fi"

export const Contact = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="contact" className="bg-gray-100 my-20">
      <div className="container sm:mx-auto md:px-0 px-6 whitespace-nowrap">
        <div className="w-full flex md:py-28 py-20 md:px-40 px-0 rounded-3xl justify-between items-center bg-contact-wave dark:bg-contact-wave-dark bg-secondary dark:bg-[#493A9C] bg-center bg-no-repeat bg-cover flex-col lg:flex-row ">
          <h5 className="text-3xl align-middle leading-tight font-bold text-white md:text-left text-center mb-10 lg:mb-0">
            Quer falar com a gente?
          </h5>
          <a
            className=" text-secondary rounded-3xl py-4 px-12 font-bold text-lg flex items-center bg-white justify-center md:mt-0 mt-12"
            href="https://api.whatsapp.com/send?phone=555185930758"
            target={"_blank"}
          >
            Entre em contato
            <FiArrowRight size={24} className="ml-3" />
          </a>
        </div>
      </div>
    </section>
  )
})
