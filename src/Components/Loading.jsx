import React, { useState } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';





function Loading() {
    useGSAP(()=>{
        gsap.to(".glow2",{
            scale:1.2,
            duration:1,
            opacity:0,
            stagger:{
              each:.1,
              from:"random",
              repeat:4,
              
            },
        })
    })

  
  return (
    <div className="loader overflow-y-hidden h-screen w-screen text-9xl flex flex-col items-center justify-center z-[9999] bg-[#ABAA92] fixed">
        <div className="boxMain grid grid-cols-3 grid-rows-3 gap-1">
        {new Array(9).fill().map((arr,index)=>{
            return <div key={index} className="boxInner h-7 w-7 flex gap-3 bg-[#FFF1E6]"></div>     
        })}
      </div>
      <div className="textAnimation text-[10vw] lg:text-[2vw] mt-10 font-[heady] flex bg-transparent text-[#FFF1E6] ">
        {"lesgoo..".split("").map((arr,index)=>(
             
                 <h1 key={index} className="glow2">{arr}</h1>
        
           
        ))}
       
      </div>
    </div>
  );
}

export default Loading;
