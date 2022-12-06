import { forwardRef } from "react"

export const Team = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="team" className="bg-gray-100 my-20 h-screen">
      <div className="sm:container sm:mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="lg:text-4xl sm:text-3xl text-2xl w-full leading-tight font-bold text-bg100 dark:text-white text-center">
            Somos uma equipe completa
            <br />à disposição de seu{" "}
            <span className="text-primary">objetivo</span>
          </h2>
        </div>
      </div>
    </section>
  )
})
