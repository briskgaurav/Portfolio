import React, { useState } from "react";
import img from "../assets/pic1.png";
import { motion } from "framer-motion";

function Idid({forwardRef}) {

  return (
    <div ref={forwardRef} className=" overflow-hidden py-20 pt-20 w-full px-6  lg:px-72 px-auto">
      <motion.h1 initial={{x:-100,opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:.5, ease:"backInOut"}} className=" font-[heady] text-[#333333] text-[10vw] lg:text-[7.5vw]">
        What I did<motion.span
          className="inline-block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          .
        </motion.span>
      </motion.h1>
      <div className="flex flex-col lg:flex-row items-center mt-16 gap-12">

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
        </div>

        <motion.p 
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.5 }}
        className="font-[tiny] text-black text-md lg:text-lg w-full lg:w-[70%] ">
         I created sleek, animated websites as a frontend developer and graphic designer, bringing creative visions to life online. I also dived into 3D game asset design and texturing, blending creativity with tech. From vibrant visuals to immersive digital experiences, I’ve enjoyed pushing the boundaries of what's possible.
        </motion.p>
      </div>
      <motion.div className="w-full h-[70vh] flex items-end justify-end">
        <motion.div
         initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{delay:.8}}
          className="lg:h-[25vw] relative lg:w-[22vw]"
        >
          <img className="imgshadow" src={img} alt="" />
          <div className="bg-sky-900 w-full h-full lg:h-[91%] top-0 absolute opacity-0 hover:opacity-20 bottom-0"></div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Idid;
