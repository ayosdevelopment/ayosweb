import { forwardRef } from "react"

export const Team = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="team" className="bg-gray-100 py-20 h-screen">
      <div className="sm:container sm:mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl max-w-3xl leading-tight font-bold text-bg100 dark:text-white text-center">
            Somos uma equipe completa à disposição de seu{" "}
            <span className="text-primary">objetivo</span>
          </h2>
        </div>
      </div>
    </section>
  )
})
