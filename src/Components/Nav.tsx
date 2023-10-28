import { Link } from "react-scroll";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [show, setShow] = useState(false) 
  return (
    <nav className="">
      <div className="min-[320px]:hidden md:block max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-center md:gap-8 md:h-16">
                  <Link to='home' activeClass='active-on'
                    smooth={true}
                    spy={true} offset={-200} className='cursor-pointer active text-black'>
                        Home
                    </Link>
                    <Link to='skills' activeClass='active-on'
                    smooth={true}
                    spy={true} offset={-10} className='cursor-pointer active text-black'>
                        Skills 
                    </Link>
                    <Link to='about'activeClass='active-on'
                    smooth={true}
                    spy={true}  className='cursor-pointer  active text-black'>
                        About
                    </Link>
                    <Link to='work' activeClass='active-on'
                    smooth={true}
                    spy={true} offset={15} className='cursor-pointer  active text-black'>
                        Projects
                    </Link>
                    <Link to='contact' offset={-40} activeClass='active-on'
                    smooth={true}
                    spy={true} className='cursor-pointer  active text-black'>
                        Contact
                    </Link>
        </div>  
      </div>
      <div className="flex flex-col gap-1 min-[320px]-block md:hidden absolute top-5 right-5  " onClick={()=> setShow(!show)}>
        {/* <FaBars /> */}
        <span className="w-[25px] h-[4px] bg-black rounded-sm"></span>
        <span className="w-[18px] h-[4px] ml-auto bg-black rounded-sm"></span>
        <span className="w-[10px] h-[4px] ml-auto bg-black rounded-sm"></span>
      </div>
      {show && (
        <nav className="absolute top-[50px] left-0 h-[100vh] w-[100%] bg-white rounded-sm md:hidden">
          <div className={show ? "min-[320px]:transition-all min-[320px]:duration-500 min-[320px]:translate-x-[0%] md:hidden max-w-7xl mx-auto min-[320px]:p-4" : "min-[320px]:translate-x-[150%] md:hidden max-w-7xl mx-auto px-2 sm:px-6 "}>
          <div className="flex flex-col items-start sm:items-center justify-center gap-4 p-1" onClick={()=> setShow(!show)}>
                    <Link to='home' 
                      smooth={true}
                      spy={true} offset={-200} className='cursor-pointer active text-black'>
                          Home
                      </Link>
                      <Link to='skills' 
                      smooth={true}
                      spy={true} offset={-20} className='cursor-pointer active text-black'>
                          Skills
                      </Link>
                      <Link to='about' 
                      smooth={true}
                      spy={true}  className='cursor-pointer  active text-black'>
                          About
                      </Link>
                      <Link to='work' 
                      smooth={true}
                      spy={true} offset={5} className='cursor-pointer  active text-black'>
                          Projects
                      </Link>
                      <Link to='contact' 
                      smooth={true}
                      spy={true} offset={-10} className='cursor-pointer  active text-black'>
                          Contact
                      </Link>
          </div>  
                </div>
        </nav>)}
    </nav>
  );
};

export default Navbar;