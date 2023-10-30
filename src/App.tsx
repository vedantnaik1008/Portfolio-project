import { lazy } from 'react'
import About from './Components/About'
import Banner from './Components/Banner'
const Contact = lazy(() => import('./Components/Contact.tsx'));
import Header from './Components/Header'
const Skills = lazy(() => import('./Components/Skills.tsx'));
const Work = lazy(() => import('./Components/Work.tsx'));

const App = () => {
  return (
    <div className="bg-[#131313]  overflow-hidden">
      <Header />
      <Banner />
      <Skills />
      <About />
      <Work />
      <Contact />
    </div>
  )
}

export default App
