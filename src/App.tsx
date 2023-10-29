import About from './Components/About'
import Banner from './Components/Banner'
import Contact from './Components/Contact'
import Header from './Components/Header'
import Skills from './Components/Skills'
import Work from './Components/Work'


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
