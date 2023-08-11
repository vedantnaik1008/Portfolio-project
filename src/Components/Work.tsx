import img1 from '../images/cards.png'

const Work = () => {
  
  return (
    <section className="section-two" id="work">
      <div className="container mx-auto">
        <h2 className="h2 leading-tight text-center text-[#0F1419] mt-6">My Latest Projects</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                  <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl mt-6">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-30 transition-all duration-100"></div>
                  <img className='group-hover:scale-125 transition-all duration-500 w-[100%] h-[400px] object-cover'  src={img1} alt="project-img" />
                <div className="absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-500 z-50">
                  <a href="https://movie-app-yeh.netlify.app/" className='underline-none'>
                    <span className="text-3xl text-white text-gradient">YEH Movie Web App</span>
                  </a>
                </div>
              </div>
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl mt-6">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-30 transition-all duration-100"></div>
                  <img className='group-hover:scale-125 transition-all duration-500 w-[100%] h-[400px] object-cover'  src={img1} alt="project-img" />
                <div className="absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-500 z-50">
                  <a href="https://movie-app-yeh.netlify.app/" className='underline-none'>
                    <span className="text-3xl text-white text-gradient">YEH Movie Web App</span>
                  </a>
                </div>
              </div>
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl mt-6">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-30 transition-all duration-100"></div>
                  <img className='group-hover:scale-125 transition-all duration-500 w-[100%] h-[400px] object-cover'  src={img1} alt="project-img" />
                <div className="absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-500 z-50">
                  <a href="https://movie-app-yeh.netlify.app/" className='underline-none'>
                    <span className="text-3xl text-white text-gradient">YEH Movie Web App</span>
                  </a>
                </div>
              </div>
        </div>
      
      </div>
    </section>
  )
}

export default Work
