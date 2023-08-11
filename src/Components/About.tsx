import Countup from 'react-countup'
import {useInView} from 'react-intersection-observer'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import img from '../images/10-Skill-yang-Harus-Dimiliki-Front-End-Developer.jpg'
import { Link } from 'react-scroll'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  const birthdate = new Date('2002-01-25');
  const currentDate = new Date();
  const age = currentDate.getFullYear() - birthdate.getFullYear();

  return (
    <section className="section pb-[50%] md:pb-[50%] lg:pb-[0]" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: true, amount: 0.3}}  className="flex-1 bg-contain bg-no-repeat  bg-top">
            <img src={img} alt="img" />
          </motion.div>
          <motion.div variants={fadeIn('left', 0.5)} initial='hidden' whileInView={'show'} viewport={{once: true, amount: 0.3}} className="flex-1">
            <h2 className="h2 text-[#0F1419]">About me.</h2>
            <h3 className="h3 mb-4 text-[#0F1419]">I'm Self taught frontend developer</h3>
            <p className="mb-6 text-[#0F1419] font-medium">My name is vedant naik <br />I am {age} years old <br />I have only completed my higher secondary education<br />I am from Goa, India</p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div className="">
                <div className="text-[40px] font-tertiary text-[#0F1419] mb-2">
                  {inView ? <Countup start={0} end={0} duration={3}/> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px] text-[#0F1419]">Years of <br/>Experience</div>
              </div>
              <div className="">
                <div className="text-[40px] font-tertiary text-[#0F1419] mb-2">
                  {inView ? <Countup start={0} end={50} duration={3}/>: null}+
                </div>
                <div className="font-primary text-sm tracking-[2px] text-[#0F1419]">Projects<br/>Completed</div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <Link to='contact' offset={-40} smooth={true}
                    spy={true}><button className='btn-tweet bg-[#1d9bf0] btn-lg hover:opacity-70 transition-all duration-100'>Contact Me</button></Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
