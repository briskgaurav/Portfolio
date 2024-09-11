import React, { useRef } from 'react'
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import Bg from './Components/Bg'
import Ido from './Components/Ido'
import Idid from './Components/Idid'
import Skills from './Components/Skills'
import ShowCase from './Components/ShowCase'
import Contact from './Components/Contact'
import LocomotiveScroll from 'locomotive-scroll';
import Loading from './Components/Loading'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Follower from './Components/Follower'

function App() {



  const whatido = useRef(null);
  const whatidid = useRef(null);
  const skills = useRef(null);
  const work = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    });
  };


  // GSAP CODE

  useGSAP(()=>{
    let t1=gsap.timeline();

    t1.to(".boxInner",{
        scale:0,
        rotate:360,
        duration:1,
        stagger:{
          each:.1,
          from:"start",
          repeat:4,
          
        },
    })

    t1.to(".loader",{
        opacity:0,
        display:"none",

    })

    t1.from(".boxred",{
      y:-300,
      opacity:0,
      duration:.8,
      rotate:90,
    })
    t1.from(".icon",{
      opacity:0,
      duration:1,
      
    })
    t1.from(".heading",{
      y:300,
      x:100,
      duration:.8,
      stagger:.2,
    })
    t1.from(".links",{
       x:-500,
       opacity:0,
       duration:.7,
       ease:"expo",
       stagger:{
        each:.2,
        from:"center"
       }
    })
    t1.from(".buttons",{
      opacity:0,
      duration:.2,

    })
    t1.from(".boxes",{
      display:"none",
     opacity:0,
    })

});

  
 // CODE LOCOMOTIVES
 const locomotiveScroll = new LocomotiveScroll();


  // IMPORT COMPONENTS
  return (
    <div className= ' bg-[#FFF1E6]'>
      <Follower />
      <Loading />
      <Bg />
     <Nav />
     <Hero scrollToSection={scrollToSection} refa={whatido} refdid={whatidid} refwork={work} refskill={skills} refcontact={contact} />
     < Ido  forwardRef={whatido} />
     <Idid forwardRef={whatidid} />
     <Skills forwardRef={skills}/>
     <ShowCase forwardRef={work} />
     <Contact forwardRef={contact} />
    </div>
  )
}

export default App