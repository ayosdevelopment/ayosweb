import { forwardRef } from "react"
import { Title } from "../components"

export const About = forwardRef((props, ref) => {
  return (
    <main ref={ref} id="about" className="h-screen">
      <Title text="Por que escolher a Ayos?" />
    </main>
  )
})
