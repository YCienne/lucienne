import { BrowserRouter } from 'react-router-dom'
import { Contact, Experience, Tech, Skills, Header, Home, ProjectSection } from './components'


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black text-white">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Header />
          <Home />
        </div>
        <Experience />
        <Tech />
        <Skills />
        <div className="relative z-0">
          < ProjectSection />
          <Contact />
          
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App
