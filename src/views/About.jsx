import { forwardRef } from "react"

export const About = forwardRef((props, ref) => {
  return (
    <main ref={ref} id="about" className="h-screen">
      <h1>Por que escolher a Ayos?</h1>
    </main>
  )
})
