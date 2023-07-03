import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import img1 from '../images/portfolio-img1.png'
import img2 from '../images/portfolio-img2.png'
import img3 from '../images/portfolio-img3.png'

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3}} className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            <div className="">
              <h2 className="h2 leading-tight text-accent">My Latest <br />
                Work.
              </h2>
              <p className='max-w-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat natus obcaecati iure nesciunt quaerat magni quis fugit perferendi.</p>
              <button className="btn btn-sm my-5">View all projects</button>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl mt-6">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-100"></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt="project-img" />
              <div className="absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-500 z-50">
                <span className="text-3xl text-white text-gradient">Project Title</span>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeIn('left', 0.2)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3}}  className="flex-1 flex flex-col gap-y-10">
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl ">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-100"></div>
                <img className='group-hover:scale-125 transition-all duration-500' src={img2} alt="project-img" />
                <div className="absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-500 z-50">
                  <span className="text-3xl text-white text-gradient">Project Title</span>
                </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl ">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-100"></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={img3} alt="project-img" />
              <div className="absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-500 z-50">
                <span className="text-3xl text-white text-gradient">Project Title</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Work
