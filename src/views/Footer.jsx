import { sections } from "../App"

import { AiFillInstagram } from "react-icons/ai"
import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa"
import Logo from "../assets/images/logotype.svg"

import i18n from "../i18n"

export const Footer = () => {
  const social = [
    { icon: FaYoutube, uri: "https://www.youtube.com/@ayosdev" },
    { icon: AiFillInstagram, uri: "https://www.instagram.com/ayosdev/" },
    { icon: FaFacebook, uri: "https://www.facebook.com/ayosdev" },
    { icon: FaGithub, uri: "https://github.com/ayosdevelopment" },
  ]

  return (
    <footer className="dark:bg-footer-wave-dark bg-footer-wave bg-no-repeat bg-cover bg-center h-[500px] flex items-end text-white">
      <div className="container py-7 mx-auto divide-y divide-solid divide-white md:px-0 px-12">
        <div className="flex flex-row items-center justify-between mb-4">
          <div className="w-36">
            <a href="/">
              <img src={Logo} alt="Ayos Logo" className="w-24" />
            </a>
          </div>

          <ul className="flex flex-row justify-center list-none gap-3 font-medium">
            {sections.map((s) => (
              <li key={s}>
                <a href={`#${s}`} className="md:block p-2 hidden">
                  {i18n.t(s)}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex flex-row justify-center list-none gap-3 w-36">
            {social.map((s, i) => (
              <li
                key={`${i}-${s.uri}`}
                className="rounded-full bg-primary dark:bg-indigo-900"
              >
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
