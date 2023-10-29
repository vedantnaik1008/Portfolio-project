import Image from '../images/web-programming-languages.webp'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import { Link } from 'react-scroll'

const Banner = () => {
  return (
    <section className="min-h-[85vh] md:min-h-[75vh] flex items-center mt-28 container-1" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: true, amount: 0.7}} className='text-[55px] text-white font-bold leading-[0.8] lg:text-[110px] mt-8'>Hi there, welcome</motion.h1>
         
            <motion.p variants={fadeIn('right', 0.5)} initial='hidden' whileInView={'show'} viewport={{once: true, amount: 0.7}} className='my-8 max-w-lg mx-auto lg:mx-[0px] text-white font-medium'>I am a frontend developer with no degree, but I have skills. If you are interested in my skills, please contact me or message me on Twitter.</motion.p>
            <motion.div variants={fadeIn('right', 0.6)} initial='hidden' whileInView={'show'} viewport={{once: true, amount: 0.7}} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <Link to='contact' offset={-40} smooth={true}
                    spy={true}><button className='btn-tweet hover:scale-105 bg-[#FFFFFF] shadow-[inset_0_-4px_0_0_rgba(0,0,0,.25)]  btn-lg  transition-all duration-300 ease-out'>Contact me</button></Link>
            </motion.div>
          </div>

          <motion.div variants={fadeIn('left', 0.5)} initial='hidden' whileInView={'show'} viewport={{once: true}} className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={Image} alt="person-img" className='rounded-full'/>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Banner
