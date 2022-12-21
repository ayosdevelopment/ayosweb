import { forwardRef, useState } from "react"

import { Title } from "../components"

import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

import Bruno from "../assets/team/bruno.png"
import Julio from "../assets/team/julio.png"
import Leo from "../assets/team/leo.png"
import Pedro from "../assets/team/pedro.png"
import desc from "../assets/team/descriptions.json"

export const Team = forwardRef((props, ref) => {
  const [index, setIndex] = useState(0)

  const team = [
    {
      name: "Bruno",
      position: "CEO",
      photo: Bruno,
      description: desc.about[0],
    },
    {
      name: "Julio",
      position: "CMO",
      photo: Julio,
      description: desc.about[1],
    },
    {
      name: "Leo",
      position: "CIO",
      photo: Leo,
      description: desc.about[2],
    },
    {
      name: "Pedro",
      position: "CTO",
      photo: Pedro,
      description: desc.about[3],
    },
  ]

  return (
    <section ref={ref} id="team" className="bg-gray-100 py-20 px-10">
      <div className="sm:container sm:mx-auto">
        <Title text="Somos uma equipe completa à disposição de seu <span class='text-primary'>objetivo</span>" />
        <div className="flex justify-center">
          <div className="md:w-auto w-full flex flex-col lg:flex-row gap-16 mt-16 py-16 justify-around items-center">
            <div className="flex justify-center items-center w-full dark:bg-team-shape-dark bg-team-shape bg-contain bg-center bg-no-repeat h-[400px]">
              <img
                src={team[index].photo}
                sizes="(max-width: 640px) 100vw, 640px"
                className="ml-48 mb-6 w-40 h-64 rounded-xl bg-cover"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="max-w-lg flex flex-col">
                <h3 className="font-extrabold text-4xl text-primary mb-12">
                  Nossa equipe
                </h3>
                <p className="text-sm dark:text-white text-bg100 font-medium mb-6 w-full overflow-auto max-h-56 text-justify pr-6">
                  {team[index].description
                    ? team[index].description
                    : `Sem descrição ${index}`}
                </p>
                <div className="flex flex-row justify-between items-center w-full">
                  <div className="flex flex-col">
                    <h4 className="font-bold text-lg text-primary mb-1">
                      {team[index].name}
                    </h4>
                    <h5 className="font-medium text-lg dark:text-white text-bg100 mb-2">
                      {team[index].position}
                    </h5>
                  </div>
                  <div className="flex flex-row gap-4">
                    <button
                      className="rounded-full flex flex-wrap w-10 h-10 justify-center content-center border-2 border-solid dark:border-white border-bg100"
                      onClick={() =>
                        setIndex(index - 1 >= 0 ? index - 1 : team.length - 1)
                      }
                    >
                      <FiChevronLeft
                        size={20}
                        className="dark:text-white text-bg100"
                      />
                    </button>
                    <button
                      className="rounded-full flex flex-wrap w-10 h-10 justify-center content-center border-2 border-solid dark:border-white border-bg100"
                      onClick={() =>
                        setIndex(index + 1 > team.length - 1 ? 0 : index + 1)
                      }
                    >
                      <FiChevronRight
                        size={20}
                        className="dark:text-white text-bg100"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})
