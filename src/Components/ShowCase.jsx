import React, { useState } from "react";
import { easeIn, motion } from "framer-motion";
import db from '../assets/videos/Db.mp4'
import ochi from '../assets/videos/ochi.mp4'
import refokus from '../assets/videos/refokus.mp4'
import bubble from '../assets/videos/bubble.mp4'
import obys from '../assets/videos/obys.mp4'

const Products = [
  {
    name: "OCHI DESIGN",
    Description:
      "Ochi Design, where innovative aesthetics meet functionality. This project showcases modern website that exemplifies my commitment to creating user-friendly experiences.",
    source: "https://github.com/briskgaurav/OCHI",
    site: "https://ochhi.netlify.app/",
  },
  {
    name: "OBYS AGENCY",
    Description:
      "View Obys Agency, a polished website I crafted to demonstrate my ability to build clean, effective digital solutions with a focus on user experience and style.",
    source: "https://github.com/briskgaurav/ObysAgency",
    site: "https://briskgaurav.github.io/ObysAgency/",
  },
  {
    name: "MANGA AKA-DB",
    Description:
      "A Manga website I designed to deliver an engaging experience for manga enthusiasts. It is not currently optimized for responsive design.",
    source: "https://comics-db.netlify.app/",
    site: "https://comics-db.netlify.app/",
  },
  {
    name: "REFOKUS",
    Description:
      "Refokus, a clean and modern website designed to offer a streamlined user experience. This project highlights my focus on delivering a polished, functional interface with a aesthetic.",
    source: "https://github.com/briskgaurav/Refokus",
    site: "https://refokkus.netlify.app/",
  },
  {
    name: "BUBBLY-HITS",
    Description:
      "A fun and interactive game built using JavaScript, CSS, and HTML. This project showcases my ability to create engaging, browser-based games smooth gameplay.",
    source: "https://github.com/briskgaurav/BubbleGame",
    site: "https://bubbly-hits.netlify.app/",
  },
];

const data=[{
  vid:ochi,
},
{vid:obys},
{vid:db},
{vid:refokus},
{vid:bubble},
]

function ShowCase({forwardRef}) {
  const [pos, setpos] = useState(0);

  function mover(val) {
    setpos(val * 41);
  }

  return (
    <div ref={forwardRef} className="overflow-hidden  mx-auto pb-10">
      <div className="pt-32 pb-20 px-6  lg:px-72 w-full px-auto">
        <motion.h1 initial={{x:-100,opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:.5, ease:"backInOut"}} className=" font-[heady] text-[#333333] text-[7.5vw]">Works</motion.h1>
        <div className="flex flex-col lg:flex-row items-center mt-2 gap-12">
        <div className="relative">
          <motion.div
            initial={{ x: "-22vw", rotate: 0, opacity: 0 }}
            whileInView={{ x: "0", rotate: 180, opacity: 1 }}
            transition={{duration:.4, ease: "linear" }}
            className="h-32 w-32 border-2 border-[#ABAA92]"
          ></motion.div>

          <motion.div
            initial={{ x: "-22vw", rotate: 0, opacity: 0 }}
            whileInView={{ x: "0", rotate: 180, opacity: 1 }}
            transition={{ duration: 0.6, ease: "linear" }}
            className="absolute top-[10%] left-[-10%] h-32 w-32 border-2 border-[#ABAA92]"
          ></motion.div>
          <motion.div
            initial={{ x: "-22vw", rotate: 0, opacity: 0 }}
            whileInView={{ x: "0", rotate: 180, opacity: 1 }}
            transition={{ duration: .8, ease: "linear" }}
            className="absolute top-[20%] left-[-20%] h-32 w-32 border-2 border-[#ABAA92]"
          ></motion.div>
        </div>
          <motion.p 
           initial={{ x: 200, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           transition={{ duration: 0.2, delay: 0.5 }}
          className="font-[tiny] text-black lg:text-lg text-normal w-full lg:w-[70%]">
            Browse my some works to see a range of projects, from web design to
            development, showcasing my skills and results.
          </motion.p>
        </div>
      </div>
      <div className="relative">
        {Products.map((elem, index) => (
          <div key={index}
            onMouseEnter={() => {
              mover(index);
            }}
            className="w-full hover:bg-[#ABAA92] py-5 lg:border-none border-b-[1px] border-[#333333]/40 lg:py-0 ease-linear duration-100 lg:h-[41vh] h-fit lg:px-32 flex-col lg:flex-row flex items-center justify-between"
          >
            <h1 className="text-4xl lg:p-0 pb-8 pt-4 font-[chill] text-[#333333] leading-none">
              {elem.name}
            </h1>
            <div className="lg:w-1/3 w-full text-center lg:text-justify px-5 lg:px-0 font-[tiny]">
              <p>{elem.Description}</p>
              <div className="flex lg:justify-normal justify-around lg:gap-5 mt-5">
                <a
                  href={elem.site}
                  className="px-10 hover:bg-[#FFF1E6] hover:text-[#333333]  py-2 bg-[#333333] rounded-full text-sm text-white"
                >
                  Check site 
                </a>
                <a
                  href={elem.site}
                  className="px-10 py-2 hover:bg-[#FFF1E6] hover:text-[#333333] bg-[#333333] rounded-full text-sm text-white"
                >
                  Source code
                </a>
              </div>
            </div>
          </div>
        ))}
        <div className="h-full w-full absolute pointer-events-none bottom-0">
          <motion.div
            initial={{ y: pos }}
            animate={{ y: pos + "vh" }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
            className="window absolute h-[50vh] lg:h-[41vh] opacity-20 lg:opacity-100  top-[-2%] lg:top-0  lg:left-[32%] lg:w-[26vw] w-full overflow-hidden"
          >
           {data.map((elem,index)=>(
            <div key={index}>
             <motion.div  animate={{ y: -pos + "vh" }} transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }} className="lg:flex hidden items-center card h-[41vh] lg:w-[26vw] w-full" >
             <video className="lg:border-[2px] py-8 lg:py-0 lg:border-[#FFF1E6] h-[40%] lg:h-[90%] w-full absolute object-cover rounded-md lg:rounded-3xl" autoPlay muted loop src={elem.vid}></video>
           </motion.div>
            
           </div>
           ))}
          </motion.div>
        </div>
        
      </div>
      
    </div>
  );
}

export default ShowCase;
