import { useEffect } from "react"
import { Header, Team } from "./views"

function App() {
  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  return (
    <div className="bg-white text-white">
      <Header />
      <Team />
    </div>
  )
}

export default App
