import About from './Components/About'
import Banner from './Components/Banner'
import Contact from './Components/Contact'
import Header from './Components/Header'
import Nav from './Components/Nav'
import Work from './Components/Work'


const App = () => {
  return (
    <div className=" bg-site bg-no-repeat bg-cover overflow-hidden">
        <Header />
        <Banner />
        <Nav />
        <About />
        <Work />
        <Contact />
    </div>
  )
}

export default App
