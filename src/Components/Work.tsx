import { useState } from 'react';
import img1 from '../images/canva-design-movie.png';
import img2 from '../images/Untitled design.png';
import video from "../video/km_20230907_2160p_60f_20230907_190448.mp4";
import video2 from "../video/movie-app-yeh.mp4";
import {MdClose} from "react-icons/md"
const projectData = [
  {id:"1", image: img1, teckStack: ["HTML", "CSS", "BOOTSTRAP", "JAVASCRIPT", "TYPESCRIPT", "REACT.JS",], title: "Yeh Movie Web App", video: video2, anchor:'https://movie-app-yeh.netlify.app/', github: 'https://github.com/vedantnaik1008/react-movie-search-app'},
  {id:"2", image: img2, teckStack: ["HTML", "CSS", "TAILWIND", "JAVASCRIPT", "TYPESCRIPT", "REACT.JS", "NEXT.JS", "MY SQL", "ZUSTAND, STRIPE"], title: "Ai Genius", video: video, anchor:'nothing', github: 'https://github.com/vedantnaik1008/my-app'}
]

const Work = () => {
  const [isClicked, setIsClicked] = useState("")
  return (
    <>
    <section className="section-two" id="work">
      <div className="container mx-auto">
        <h2 className="h2 leading-tight text-center text-[#0F1419] mt-6">My Latest Projects</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>

          {projectData.map((project) => (
            <div key={project.id} className="group relative overflow-hidden border-2 border-white/50 rounded-xl mt-6">
              <div onClick={() => setIsClicked(project.id)} className="group-hover:bg-black/70 w-full h-full absolute z-30 transition-all duration-100"></div>
                <img className='group-hover:scale-125 transition-all duration-500 w-[100%] h-[400px] object-cover'  src={project.image} alt="project-img" />
              <div className="absolute -top-[50%] left-[40%] group-hover:top-[50%] transition-all duration-500 z-50">
                  <span className="text-3xl text-white text-gradient">Click</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {isClicked && projectData.map((Modal) => Modal.id === isClicked && (<div key={Modal.id} className='fixed inset-0 z-50 bg-transparent backdrop-blur-xl h-[100%] w-[100%] text-white m-auto flex items-center'>
        <div className="relative bg-[black] min-[320px]:w-[90%]   md:h-[70%] md:w-[75%] text-white mx-auto rounded-lg p-4">
        <button onClick={() => setIsClicked('')}  className='drop-shadow-2xl rounded-full w-[40px] h-[40px] bg-black text-xl absolute min-[320px]:right-[45%]  min-[320px]:-top-12 md:-right-20 md:-top-10 flex items-center justify-center'><MdClose size="28px" color="white"/></button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-full">
          <div className="">
            <video src={Modal.video} className="w-[100%] h-full" controls></video>
          </div>
          <div className="w-[100%] h-full">
            <h1 className="text-center text-white text-2xl underline underline-offset-8">{Modal.title}</h1>
            <div className="mt-[40px]">
              <p className="mb-[10px]">Tools used: <span className='text-white  font-cursi font-bold'>{Modal.teckStack.join(", ")}</span></p>
              <p className="">Project: <a href={Modal.anchor} className='text-white hover:underline font-cursi font-bold'>Watch live</a></p>
              <p className="">Code: <a href={Modal.github} className='text-white hover:underline font-cursi font-bold'>Visit</a></p>
            </div>
          </div>
        </div>
        </div>
       
      </div>))}
    </section>
</>
  )
}

export default Work
