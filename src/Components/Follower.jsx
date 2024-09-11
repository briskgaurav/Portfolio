// src/Follower.js
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Follower = () => {
  const followerRef = useRef(null);

 useGSAP(()=>{
  gsap.from(".cursor",{
    rotate:360,
    duration:5,
    repeat:-1,
  })
 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      gsap.to(followerRef.current, {
        x: event.clientX-8,
        y: event.clientY-8,
        duration: 0.5,
        ease: 'power3.out'
      });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='hidden lg:flex cursor bg-red-700/70'
      ref={followerRef}
      style={{
        position: 'fixed',
        width: '16px',
        height: '16px',
        pointerEvents: 'none',
        zIndex: 1000
      }}
    />
  );
};

export default Follower;
