import { forwardRef } from "react"

export const Contact = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="contact" className="bg-gray-100 h-screen">
      <div className="sm:container sm:mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="lg:text-4xl sm:text-3xl text-2xl w-full leading-tight font-bold text-bg100 dark:text-white text-center">
            Quer falar com a gente?
          </h1>
        </div>
      </div>
    </section>
  )
})
