import { motion } from "framer-motion";
import React from "react";


function Contact({forwardRef}) {



  return (
    <div ref={forwardRef} className="py-20 pt-20 w-full overflow-hidden px-6  lg:px-72 px-auto">
          <motion.h1 initial={{x:-100,opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:.5, ease:"backInOut"}} className=" font-[heady] text-[#333333] text-[7.5vw]">Contact.
          </motion.h1>

      <div className="flex flex-col lg:flex-row items-center my-16 gap-12">
        
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
          <motion.div
            initial={{ x: "-22vw", rotate: 0, opacity: 0 }}
            whileInView={{ x: "0", rotate: 180, opacity: 1 }}
            transition={{ duration: 1, ease: "linear" }}
            className="absolute top-[30%] left-[-30%] h-32 w-32 border-2 border-[#ABAA92]"
          ></motion.div>
        </div>



        <motion.p 
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.5 }}
        className="font-[tiny] lg:pt-0 pt-10 text-black text-md lg:text-lg w-full lg:w-[60%] ">
          Hit me up if you're interested in working together.
          briskgaurav@gmail.com <br /> <motion.a initial={{opacity:0}} animate={{opacity:1}} transition={{ease:"linear",duration:1 , repeat:Infinity}}  className="font-[chill] hover:text-lg text-sm hover:text-zinc-500 " href="https://calendly.com/briskgaurav/30minutemeet"> Click here to book!</motion.a>
        </motion.p>
      </div>
      
      <motion.div initial={{y:200, opacity:0}} whileInView={{y:0 , opacity:1}} transition={{duration:.5}} className="h-full w-full  gap-5 flex mr-10  items-center justify-end"> 
        <div className="h-32 w-32 bg-[#ABAA92]"></div>
        <div className="h-32 w-32 text-[#333333] flex items-start justify-center flex-col">
            <h1 className="text-xl font-[tiny]">Gaurav Verma</h1>
            <h1  className="text-xl font-[tiny]">2024</h1>
        <motion.a whileHover={{backgroundColor:"#ABAA92",scale:.9,color:"white"}} transition={{duration:.2, ease:"circInOut"}} className="px-8 py-2 bg-transparent border-[1px] border-[#333333] mt-5 rounded-md text-xs" href="https://calendly.com/briskgaurav/30minutemeet"> Book Now!</motion.a>

        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
