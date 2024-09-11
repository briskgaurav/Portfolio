import { animate, motion, stagger } from "framer-motion";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import music from "../assets/Music.mp3";
import { MdMusicNote, MdEditDocument, MdMusicOff } from "react-icons/md";

function Hero({scrollToSection,refa,refdid,refskill,refcontact,refwork}) {

  const [playing, setplay] = useState(false);
  const audioRef = useRef(null);

  function handlePlay() {
    if (playing) audioRef.current.pause();
    else audioRef.current.play();
    setplay(!playing);
  }

  useGSAP(() => {
    gsap.to(".boxred", {
      rotate: 360,
      scale: 0.5,
      yoyo: true,
      duration: 4,
      delay: 12,
      repeat: -1,
      repeatDelay: 1,
      ease: "bounce.inOut",
    });
  });
  return (
    <div  className="h-screen relative w-full px-6 lg:px-44 py-10">
      <div className="mt-32 mb-10  overflow-hidden ">
        {["My name is Gaurav..", "and I make", "websites"].map(
          (elem, index) => (
            <div key={index} className="heading ">
              <h1
                className={`${
                  index === 0
                    ? " font-[tinyt] text-[5vw] mb-2 lg:mb-0"
                    : "font-[heady]  text-[16vw]"
                } leading-none lg:text-[6vw] text-[#333333]`}
              >
                {elem}
              </h1>
            </div>
          )
        )}
      </div>

      <div className="px-5">
     
            <h3 onClick={()=>scrollToSection(scrollToSection(refa))} className="links relative font-[tiny] hover:text-amber-800 hover:pl-10 text-md lg:text-lg">
              What I do
            </h3>
            <h3 onClick={()=>scrollToSection(refdid)} className="links relative font-[tiny] hover:text-amber-800 hover:pl-10 text-md lg:text-lg">
              What I did
            </h3>
            <h3 onClick={()=>scrollToSection(refskill)} className="links relative font-[tiny] hover:text-amber-800 hover:pl-10 text-md lg:text-lg">
              Skills
            </h3>
            <h3 onClick={()=>scrollToSection(refwork)} className="links relative font-[tiny] hover:text-amber-800 hover:pl-10 text-md lg:text-lg">
             Works
            </h3>
            <h3 onClick={()=>scrollToSection(refcontact)} className="links relative font-[tiny] hover:text-amber-800 hover:pl-10 text-md lg:text-lg">
              Contact
            </h3>
           
       
      </div>
      <div className="flex lg:top-[90%] top-[90%] mx-auto left-[15%] lg:left-[80%] absolute lg:gap-2 gap-5">
        <motion.a whileHover={{
          scale: 1.05,
        }}
        whileTap={{ scale: 0.9 }} href="https://drive.google.com/file/d/1dzHCpOTiLB0iANj4CKr67cnxAM3XApew/view?usp=drive_link" className="font-[chill] rounded-lg text-[#e8cbb5] py-2 px-5 buttons  bg-[#333333] text-lg lg:text-base flex items-center justify-center gap-2 border-[1px] border-[#e8cbb5]">
          Resume <MdEditDocument />
        </motion.a>
        <motion.button whileHover={{
          scale: 1.05,
        }}
        whileTap={{ scale: 0.9 }}
         onClick={handlePlay} className="font-[chill] buttons cursor-none rounded-lg text-[#e8cbb5] py-2 px-5  bg-[#333333]  text-lg lg:text-base flex items-center justify-center gap-2 border-[1px] border-[#e8cbb5]">
          Music {playing ?  <MdMusicNote /> : <MdMusicOff/>  }
        </motion.button>
        <audio volume=".5" loop ref={audioRef} src={music}></audio>
      </div>

      <div className=" boxred absolute bg-[#ABAA92] h-20 top-[20%] left-[65%] w-20 lg:h-36 lg:w-36 lg:left-[80%] lg:bottom-[70%]"></div>
    </div>
  );
}

export default Hero;
