import { useEffect } from "react"
import { Header, Team, About } from "./views/_index"

function App() {
  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  return (
    <div className="bg-white dark:bg-gradient-to-r from-bg100 to-bg200 dark:text-white scroll-smooth">
      <Header />
      <Team />
      <About />
    </div>
  )
}

export default App
