import img1 from '../images/cards.png'
import img2 from '../images/screencapture-game-store-app-netlify-app-2023-07-23-18_00_45.png'
import img3 from '../images/portfolio-img3.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Work = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,  
  };
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <h2 className="h2 leading-tight text-center text-[#0F1419] mt-6">My Latest Projects</h2>
        <Slider {...settings} className='w-[90%] mx-auto lg:w-[100%]'>

              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl mt-6">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-100"></div>
                  <img className='group-hover:scale-125 transition-all duration-500 w-[100%] h-[400px] object-cover bg-no-repeat'  src={img1} alt="project-img" />
                <div className="absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-500 z-50">
                  <a href="https://movie-app-yeh.netlify.app/" className='underline-none'>
                    <span className="text-3xl text-white text-gradient">YEH Movie Web App</span>
                  </a>
                </div>
              </div>
              
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl mt-6">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-100"></div>
                  <img className='group-hover:scale-125 transition-all duration-500 w-[100%] h-[400px] object-cover'  src={img1} alt="project-img" />
                <div className="absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-500 z-50">
                  <a href="https://movie-app-yeh.netlify.app/" className='underline-none'>
                    <span className="text-3xl text-white text-gradient">YEH Movie Web App</span>
                  </a>
                </div>
              </div>
              
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl mt-6">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-100"></div>
                  <img className='group-hover:scale-125 transition-all duration-500 w-[100%] h-[400px] object-cover'  src={img1} alt="project-img" />
                <div className="absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-500 z-50">
                  <a href="https://movie-app-yeh.netlify.app/" className='underline-none'>
                    <span className="text-3xl text-white text-gradient">YEH Movie Web App</span>
                  </a>
                </div>
              </div>
            
        </Slider>
          
          
      
      </div>
    </section>
  )
}

export default Work
