import { sections } from "../App"

import { AiFillInstagram } from "react-icons/ai"
import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa"
import Logo from "../assets/images/logotype.svg"

import i18n from "../i18n"

export const Footer = () => {
  const social = [
    { icon: FaYoutube, uri: "http://ayos.dev" },
    { icon: AiFillInstagram, uri: "http://ayos.dev" },
    { icon: FaFacebook, uri: "http://ayos.dev" },
    { icon: FaGithub, uri: "http://ayos.dev" },
  ]

  return (
    <footer>
      <div className="container py-7 mx-auto divide-y divide-solid divide-white">
        <div className="flex flex-row items-center justify-between mb-4">
          <a href="/">
            <img src={Logo} alt="Ayos Logo" className="w-36" />
          </a>

          <ul className="flex flex-row justify-center list-none gap-3 font-medium">
            {sections.map((s) => (
              <li key={s}>
                <a href={`#${s}`} className="block p-2">
                  {i18n.t(s)}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex flex-row justify-center list-none gap-3 w-36">
            {social.map((s, i) => (
              <li key={`${i}-${s.uri}`} className="rounded-full bg-secondary">
                <a href={s.uri} className="block p-1.5">
                  <s.icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center py-4">
          <span className="font-bold text-base">
            &copy; 2022 Ayos Development
          </span>
        </div>
      </div>
    </footer>
  )
}
