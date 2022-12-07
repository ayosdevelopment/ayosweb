import { forwardRef, useState } from "react"

import { Title } from "../components"

import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

import Bruno from "../assets/team/bruno.jpg"
import Julio from "../assets/team/julio.jpg"
import Leo from "../assets/team/leo.jpg"
import Pedro from "../assets/team/pedro.jpg"

export const Team = forwardRef((props, ref) => {
  const [index, setIndex] = useState(0)

  const team = [
    { name: "Bruno", position: "CEO", photo: Bruno },
    { name: "Julio", position: "CMO", photo: Julio },
    { name: "Leo", position: "CIO", photo: Leo },
    { name: "Pedro", position: "CTO", photo: Pedro },
  ]

  return (
    <section ref={ref} id="team" className="bg-gray-100 py-20 h-screen">
      <div className="sm:container sm:mx-auto">
        <Title text="Somos uma equipe completa à disposição de seu <span class='text-primary'>objetivo</span>" />
        <div className="w-full flex justify-center">
          <div className="flex flex-row gap-16 mt-16 py-16 justify-center items-center dark:bg-team-shape-dark bg-team-shape bg-contain bg-left bg-no-repeat">
            <img
              src={team[index].photo}
              width={192}
              className="ml-72 mb-6 w-48 h-64 rounded-xl"
            />
            <div className="max-w-lg flex flex-col">
              <h3 className="font-extrabold text-4xl text-primary mb-12">
                Nossa equipe
              </h3>
              <p className="text-sm dark:text-white text-bg100 font-semibold mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                quis gravida sem, euismod vehicula magna. Suspendisse nisl
                libero, dapibus ac turpis non, porta bibendum augue. Nam
                sollicitudin ligula tortor, eu mattis ante rhoncus eget. Etiam
                vehicula sem mi, in sodales erat accumsan nec. Etiam ultricies
                felis sapien, et faucibus nisi elementum at
              </p>
              <h4 className="font-bold text-lg text-primary mb-1">
                {team[index].name}
              </h4>
              <h5 className="font-medium text-lg dark:text-white text-bg100 mb-2">
                {team[index].position}
              </h5>
              <div className="self-end flex flex-row gap-4">
                <button className="rounded-full flex flex-wrap w-10 h-10 justify-center content-center border-2 border-solid border-white">
                  <FiChevronLeft
                    size={20}
                    className="text-white"
                    onClick={() =>
                      setIndex(index - 1 >= 0 ? index - 1 : team.length - 1)
                    }
                  />
                </button>
                <button className="rounded-full flex flex-wrap w-10 h-10 justify-center content-center border-2 border-solid border-white">
                  <FiChevronRight
                    size={20}
                    className="text-white"
                    onClick={() =>
                      setIndex(index + 1 > team.length - 1 ? 0 : index + 1)
                    }
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})
