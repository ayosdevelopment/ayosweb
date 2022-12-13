import { forwardRef } from "react"
import { useTheme } from "../App"

import laptop from "../assets/icons/laptop.svg"
import laptopDark from "../assets/icons/laptop_dark.svg"
import profile from "../assets/icons/profile.svg"
import profileDark from "../assets/icons/profile_dark.svg"
import target from "../assets/icons/target.svg"
import targetDark from "../assets/icons/target_dark.svg"

import { Card, Title } from "../components"

export const About = forwardRef((props, ref) => {
  const [theme] = useTheme()

  return (
    <main ref={ref} id="about" className="py-20">
      <div className="container mx-auto">
        <Title text="Por que escolher a Ayos?" />
        <div className="md:px-32 px-8">
          <div className="flex gap-32 columns-2 mt-28 xl:flex-row flex-col ">
            <h3 className="basis-1/2 font-bold text-3xl dark:text-white text-bg100">
              Método planejado para acelerar seu negócio
            </h3>
            <h4
              className="basis-1/2 font-base text-xl dark:text-white text-bg100
                         before:absolute before:w-14 before:h-0.5 before:dark:bg-white before:bg-bg100 before:-mt-6 -mt-16 xl:-mt-0"
            >
              Combinamos 3 pilares para você conquistar os resultados esperados
            </h4>
          </div>
          <div className="columns-3 mt-20 gap-6 flex flex-col xl:flex-row">
            <Card
              icon={
                <img
                  src={theme === "dark" ? profileDark : profile}
                  width={80}
                  height={80}
                  className=""
                />
              }
              title="Perfil"
              text="Com uma
                    combinação única de habilidades técnicas e criatividade, esta equipe é capaz de
                    criar soluções inovadoras e de alta qualidade para os desafios enfrentados pelos
                    clientes. Além disso, a equipe também se destaca pelo seu
                    comprometimento e dedicação em entregar projetos dentro do prazo e com o
                    máximo de qualidade possível. Com um time altamente motivado e talentoso, a
                    startup tem se destacado no mercado de desenvolvimento web."
            />
            <Card
              icon={
                <img
                  src={theme === "dark" ? laptopDark : laptop}
                  width={80}
                  height={80}
                />
              }
              title="Código"
              text="Nossa equipe de
                    desenvolvimento utiliza as últimas tecnologias e técnicas para criar soluções
                    robustas e escaláveis que atendem às necessidades dos nossos clientes. Além
                    disso, nosso código é escrito de forma clara e organizada, o que facilita a
                    manutenção e atualização futuras. Com uma arquitetura sólida e eficiente, nossos
                    produtos são capazes de oferecer uma excelente experiência aos usuários e
                    suportar o crescimento da empresa."
            />
            <Card
              icon={
                <img
                  src={theme === "dark" ? targetDark : target}
                  width={80}
                  height={80}
                />
              }
              title="Prazo & Meta"
              text="A nossa empresa se destaca pela eficiência na entrega dos nossos produtos e
                    serviços. Nós nos comprometemos em entregar cada projeto dentro do prazo
                    estabelecido, sem comprometer a qualidade do trabalho realizado. Além disso,
                    nossa equipe é altamente eficiente e capaz de se adaptar rapidamente às
                    mudanças de última hora, garantindo que os produtos entregues estejam sempre
                    de acordo com as expectativas dos nossos clientes. Com uma forte ética de
                    trabalho e uma equipe altamente motivada, nós garantimos a entrega de
                    produtos e serviços de alta qualidade dentro do prazo estipulado."
            />
          </div>
        </div>
      </div>
    </main>
  )
})
