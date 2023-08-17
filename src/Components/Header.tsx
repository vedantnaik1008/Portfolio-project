import { useEffect, useRef, useState } from "react";
import Nav from "./Nav"
import Vedant from '../images/vedant.jpg'

const Header = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false); 
    }
  };

  const handleClick = () => {
    if(ref.current){
      const offset = 100; 
      const targetPosition = ref.current?.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 80) {
        document.getElementById("navbar")?.classList.add("shad");
      } else {
        document.getElementById("navbar")?.classList.remove("shad");
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);

  }, []);

useEffect(()=>{
  window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
},[])

  return (
    <>
      <div className="py-2 fixed z-50 bg-white w-full" ref={ref} id="navbar"
      >
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <a href="#" className="flex items-center gap-x-1">
              <img src={Vedant} alt="person-img" className="h-10 w-10 rounded-full object-cover"/>
              <h1 className='text-[#1d9bf0] font-bold font-cursi'>Vedant.Dev</h1>
            </a>
            <Nav />
          </div>
        </div>
      </div>
      {isVisible && <button  onClick={handleClick} className="p-4 text-white bg-[#1d9bf0] rounded-full  fixed right-2 bottom-20 z-40 hover:opacity-70 transition-all duration-100">Top</button>}
    </>
  )
}

export default Header
