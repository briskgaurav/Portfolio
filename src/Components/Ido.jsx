import { motion } from "framer-motion";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Ido({ forwardRef }) {
  useGSAP(() => {
    gsap.from(".whatido", {
      y: "-100%",
      opacity: 1,
      duration: 0.5,
      ease: "power1.in",
      stagger: 0.1,
    });
  });

  return (
    <div
      ref={forwardRef}
      className="overflow-hidden w-full px-6  lg:px-72 px-auto py-32"
    >
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "backInOut" }}
        className="whatido font-[heady] text-[#333333] text-[10vw] lg:text-[7.5vw]"
      >
        What I do
        <motion.span
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
            transition={{ ease: "linear" }}
            className="h-32 w-32 border-2 border-[#ABAA92]"
          ></motion.div>
        </div>

        <motion.p
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.5 }}
          className="font-[tiny] text-black lg:text-lg text-normal w-full lg:w-[70%]"
        >
          I create dynamic, modern websites that seamlessly blend sleek
          animations with intuitive design for a truly exceptional user
          experience. Whether through freelancing or integrating 3D assets, I
          transform your vision into captivating digital realities. Share your
          ideas, and let me handle the rest.
        </motion.p>
      </div>
    </div>
  );
}

export default Ido;
