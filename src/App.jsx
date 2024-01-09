import About from "./layouts/About"
import Feetback from "./layouts/Feetback"
import Footer from "./layouts/Footer"
import Header from "./layouts/Header"
import Home from "./layouts/Home"
import Projects from "./layouts/Projects"
import Services from "./layouts/Services"
import Team from "./layouts/Team"
import './global.css'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <About />
        <Team />
        <Services />
        <Projects />
        <Feetback />
      </main>
      <Footer />
    </div>
  )
}

export default App
