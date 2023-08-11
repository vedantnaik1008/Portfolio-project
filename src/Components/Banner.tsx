import Image from '../images/web-programming-languages.webp'

import {  FaTwitter } from 'react-icons/fa'


import {motion} from 'framer-motion'

import {fadeIn} from '../variants'
import { Link } from 'react-scroll'

const Banner = () => {
  return (
    <section className="min-h-[85vh] md:min-h-[75vh] flex items-center mt-28 container-1" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: true, amount: 0.7}} className='text-[55px] text-[#0F1419] font-bold leading-[0.8] lg:text-[110px] mt-8'>Hi there, welcome</motion.h1>
         
            <motion.p variants={fadeIn('right', 0.5)} initial='hidden' whileInView={'show'} viewport={{once: true, amount: 0.7}} className='my-8 max-w-lg mx-auto lg:mx-[0px] text-[#0F1419] font-medium'>I am a frontend developer with no degree, but I have skills. If you are interested in my skills, please contact me or message me on Twitter.</motion.p>
            <motion.div variants={fadeIn('right', 0.6)} initial='hidden' whileInView={'show'} viewport={{once: true, amount: 0.7}} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <Link to='contact' offset={-40} smooth={true}
                    spy={true}><button className='btn-tweet bg-[#1d9bf0] btn-lg hover:opacity-70 transition-all duration-100'>Contact me</button></Link>
            </motion.div>
            <motion.div variants={fadeIn('right', 0.7)} initial='hidden' whileInView={'show'} viewport={{once: true, amount: 0.7}} className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">            
              <a href="https://twitter.com/vedantnaik108" className='bg-[#1d9bf0] p-2 rounded-md hover:opacity-70 transition-all duration-100'>
              <FaTwitter />
              </a>
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
