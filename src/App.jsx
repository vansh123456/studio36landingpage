import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Canvas from './canvas'
import data from './data';
import "./index.css"
import LocomotiveScroll from 'locomotive-scroll'

function App() {

  useEffect(() => {
      const locomotiveScroll = new LocomotiveScroll();
  },[])
  return (
    <>
    
      <div className="w-full relative min-h-screen font-[Helvetica_Now_Display] overflow-x-hidden">
            {data[0].map((canvasdets,index) => (
              <Canvas details={canvasdets}/>
        ))}
      <div className="w-full h-screen text-white text-2xl relative z-[1]" data-scroll-section>
        <nav className="w-full px-20 py-8 flex justify-between items-center">
          <div className="logo">
            <h1 className="text-white text-5xl font-bold">thirtysixstudios</h1>
          </div>
          <div className="links flex gap-10">
            {["Home", "About", "Projects", "Contact"].map((link) => (
              <a key={link} className="text-white text-md hover:opacity-50 transition-all" href={`#${link.toLowerCase()}`}>
                {link}
              </a>
            ))}
          </div>
        </nav>
        <div className="textcontainer  w-full px-[30%]">
            <div className="text w-[50%]">
              <h3 className="text-4xl leading-[1.2] text-bold">
                At Thirtysixstudio, we build immersive digital experiences for
                brands with a purpose.
              </h3>
              <p className="text-xl w-[80%] mt-10 font-normal">
                We are a team of designers, developers, and strategists who are
                passionate about creating digital experiences that are both
                beautiful and functional.
              </p>
              <p className="text-md mt-10">scroll</p>
            </div>
          </div>
          <div className="w-full absolute bottom-0 left-0">
            <h1
              className="text-[17rem] font-normal tracking-tight leading-none pl-5"
            >
              Thirtysixstudios
            </h1>
          </div>
        </div>
        </div>
        <div className="w-full relative h-screen  mt-32 px-10">
        {data[1].map((canvasdets,index) => (
              <Canvas details={canvasdets}/>
        ))}
        <h1 className="text-12xl tracking-tighter text-white">about the brand</h1>
        <p className="text-4xl leading-[1.8] w-[80%] mt-10 font-light text-white">
          we are a team of designers, developers, and strategists who are
          passionate about creating digital experiences that are both beautiful
          and functional, we are a team of designers, developers, and
          strategists who are passionate about creating digital experiences that
          are both beautiful and functional.
        </p>
        <img
          className="w-[80%] mt-10"
          src="https://directus.funkhaus.io/assets/b3b5697d-95a0-4af5-ba59-b1d423411b1c?withoutEnlargement=true&fit=outside&width=1400&height=1400"
          alt=""
        />
        </div>
    </>
  );
}

export default App
