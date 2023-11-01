import Header from './Components/Header'
import About from './Components/About.tsx'
import Banner from './Components/Banner.tsx'
import Contact from './Components/Contact.tsx'
import Skills from './Components/Skills.tsx'
import Work from './Components/Work.tsx'
import { LazyMotion, domAnimation } from 'framer-motion';

const App = () => {
  return (
    <div className="bg-[#131313]  overflow-hidden">
      <Header />
      <LazyMotion features={domAnimation}>
        <Banner />
        <Skills />
        <About />
        <Work />
        <Contact />
      </LazyMotion>
    </div>
  )
}

export default App
