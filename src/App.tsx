import { lazy } from 'react'
const About = lazy(() => import('./Components/About.tsx'));
const Banner = lazy(() => import('./Components/Banner.tsx'));
const Contact = lazy(() => import('./Components/Contact.tsx'));
import Header from './Components/Header'
const Skills = lazy(() => import('./Components/Skills.tsx'));
const Work = lazy(() => import('./Components/Work.tsx'));
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
