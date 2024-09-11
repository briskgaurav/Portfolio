import React from 'react'
import { motion } from "framer-motion"

function Bg() {

  return (
    <div className='h-screen absolute overflow-hidden w-full'>
        <div className='boxes'>
            <motion.div initial={{opacity:1,scale:0,translateY:0,rotate:"0deg"}} animate={{opacity:0,scale:1.3,translateY:"-90px",rotate:"360deg"}} transition={{duration:15, ease:'linear', repeat:Infinity , delay:.1}} className='top-[12%] left-[42%] h-[60px] w-[60px] bg-transparent border-4 border-[#ABAA92] absolute'></motion.div>
           
            <motion.div initial={{opacity:1,scale:0,translateY:0,rotate:"0deg"}} animate={{opacity:0,scale:1.3,translateY:"-90px",rotate:"360deg"}} transition={{duration:5, ease:'linear', repeat:Infinity, delay:1}} className='top-[30%] left-[20%] h-[80px] w-[80px] bg-transparent border-4 border-[#ABAA92] absolute'></motion.div>
           
            <motion.div initial={{opacity:1,scale:0,translateY:0,rotate:"0deg"}} animate={{opacity:0,scale:1.3,translateY:"-90px",rotate:"360deg"}} transition={{duration:7, ease:'linear', repeat:Infinity,  delay:.5}} className='top-[62%] left-[5%] h-[100px] w-[100px] bg-transparent border-4 border-[#ABAA92] absolute'></motion.div>
           
            <motion.div initial={{opacity:1,scale:0,translateY:0,rotate:"0deg"}} animate={{opacity:0,scale:1.3,translateY:"-90px",rotate:"360deg"}} transition={{duration:6, ease:'linear', repeat:Infinity}} className='top-[66%] left-[77%] h-[60px] w-[60px] bg-transparent border-4 border-[#ABAA92] absolute'></motion.div>
           
            <motion.div initial={{opacity:1,scale:0,translateY:0,rotate:"0deg"}} animate={{opacity:0,scale:1.3,translateY:"-90px",rotate:"360deg"}} transition={{duration:8, ease:'linear', repeat:Infinity}} className='top-[53%] left-[54%] h-[60px] w-[60px] bg-transparent border-4 border-[#ABAA92] absolute'></motion.div>
           
            <motion.div initial={{opacity:1,scale:0,translateY:0,rotate:"0deg"}} animate={{opacity:0,scale:1.3,translateY:"-90px",rotate:"360deg"}} transition={{duration:4, ease:'linear', repeat:Infinity, delay:.5}} className='top-[66%] left-[47%] h-[60px] w-[60px] bg-transparent border-4 border-[#ABAA92] absolute'></motion.div>
           
            <motion.div initial={{opacity:1,scale:0,translateY:0,rotate:"0deg"}} animate={{opacity:0,scale:1.3,translateY:"-90px",rotate:"360deg"}} transition={{duration:6, ease:'linear', repeat:Infinity, delay:.2}} className='top-[88%] left-[20%] h-[80px] w-[80px] bg-transparent border-4 border-[#ABAA92] absolute'></motion.div>
           
            <motion.div initial={{opacity:1,scale:0,translateY:0,rotate:"0deg"}} animate={{opacity:0,scale:1.3,translateY:"-90px",rotate:"360deg"}} transition={{duration:10, ease:'linear', repeat:Infinity, delay:1}} className='top-[38%] left-[65%] h-[100px] w-[100px] bg-transparent border-4 border-[#ABAA92] absolute'></motion.div>

            <motion.div initial={{opacity:1,scale:0,translateY:0,rotate:"0deg"}} animate={{opacity:0,scale:1.3,translateY:"-90px",rotate:"360deg"}} transition={{duration:8, ease:'linear', repeat:Infinity, delay:1}} className='top-[90%] left-[70%] h-[100px] w-[100px] bg-transparent border-4 border-[#ABAA92] absolute'></motion.div>
           
            
        </div>

    </div>
  )
}

export default Bg