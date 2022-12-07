import { forwardRef, useState } from "react"

import { Title } from "../components"

import Bruno from "../assets/team/bruno.jpg"
import Julio from "../assets/team/julio.jpg"
import Leo from "../assets/team/leo.jpg"
import Pedro from "../assets/team/pedro.jpg"

export const Team = forwardRef((props, ref) => {
  const [index, setIndex] = useState(0)
  console.log(index)

  const team = [Bruno, Julio, Leo, Pedro]

  return (
    <section ref={ref} id="team" className="bg-gray-100 py-20 h-screen">
      <div className="sm:container sm:mx-auto">
        <Title text="Somos uma equipe completa à disposição de seu <span class='text-primary'>objetivo</span>" />
        <div
          onClick={() => setIndex(index + 1 > team.length - 1 ? 0 : index + 1)}
        >
          <img src={team[index]} width={200} height={265} />
        </div>
      </div>
    </section>
  )
})
