import { forwardRef } from "react"
import laptop from "../assets/icons/laptop.svg"
import profile from "../assets/icons/profile.svg"
import target from "../assets/icons/target.svg"
import { Card, Title } from "../components"

export const About = forwardRef((props, ref) => {
  return (
    <main ref={ref} id="about" className="py-20">
      <div className="container mx-auto">
        <Title text="Por que escolher a Ayos?" />
        <div className="px-32">
          <div className="flex gap-32 columns-2 mt-28">
            <h3 className="basis-1/2 font-bold text-3xl dark:text-white text-bg100">
              Método planejado para acelerar seu negócio
            </h3>
            <h4
              className="basis-1/2 font-bold text-xl dark:text-white text-bg100 pt-6
                         before:absolute before:w-14 before:h-0.5 before:dark:bg-white before:bg-bg100 before:-mt-6"
            >
              Combinamos 3 pilares para você conquistar os resultados esperados
            </h4>
          </div>
          <div className="columns-3 mt-20 gap-8 flex">
            <Card
              icon={<img src={profile} width={80} height={80} />}
              title="Perfil"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis gravida sem, euismod vehicula magna."
            />
            <Card
              icon={<img src={laptop} width={80} height={80} />}
              title="Código"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis gravida sem, euismod vehicula magna."
            />
            <Card
              icon={<img src={target} width={80} height={80} />}
              title="Prazo & Meta"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis gravida sem, euismod vehicula magna."
            />
          </div>
        </div>
      </div>
    </main>
  )
})
