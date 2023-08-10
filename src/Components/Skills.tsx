import HTML from '../images/html-5.png'
import CSS from '../images/css-3.png'
import chakra from '../images/download (1).jpeg'
import tailwind from '../images/tailwind-css-icon.png'
import JS from '../images/js.png'
import TS from '../images/typescript.png'
import react from '../images/react-js-icon.png'
import nextjs from '../images/nextjs.png'

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="container mx-auto">
        <h2 className="h2 leading-tight text-center text-[#0F1419]">My Skills</h2>
        <div className="flex flex-wrap gap-8 justify-center mt-[50px]">
          
          <div className="rounded-xl border bg-black border-black p-8 hover:bg-white transition duration-1500 ease-in">
            <img src={HTML} alt="html" className='h-[100px]' />
          </div>

          <div className="rounded-xl border bg-black  border-black p-8 hover:bg-white transition duration-1500 ease-in">
            <img src={CSS} alt="css" className='h-[100px]' />
          </div>

          <div className="rounded-xl border bg-black border-black p-8 hover:bg-white transition duration-1500 ease-in flex items-center">
            <img src={tailwind} alt="tailwind" className='h-[60px]' />
          </div>

          <div className="rounded-xl border bg-black border-black p-8 hover:bg-white transition duration-1500 ease-in">
          <img src={chakra} alt="chakra ui" className='h-[100px] rounded-full' />
          </div>

          <div className="rounded-xl border bg-black border-black p-8 hover:bg-white transition duration-1500 ease-in">
            <img src={JS} alt="javascript" className='h-[100px]' />
          </div>

          <div className="rounded-xl border bg-black border-black p-8 hover:bg-white transition duration-1500 ease-in">
            <img src={TS} alt="typescript" className='h-[100px]' />
          </div>

          <div className="rounded-xl border bg-black border-black p-8 hover:bg-white transition duration-1500 ease-in">
            <img src={react} alt="react" className='h-[100px]' />
          </div>

          <div className="rounded-xl border bg-black border-black p-8 hover:bg-white transition duration-1500 ease-in">
            <img src={nextjs} alt="next.js" className='h-[100px] rounded-full' />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills
