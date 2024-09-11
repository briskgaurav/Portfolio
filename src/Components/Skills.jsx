import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";

function Skills({ forwardRef }) {
  const constraintsRef = useRef(null);

  return (
    <div
      ref={forwardRef}
      className="py-32 w-full px-6 lg:px-72 px-auto overflow-hidden"
    >
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "backInOut" }}
        className=" font-[heady] text-[#333333] text-[10vw] lg:text-[7.5vw]"
      >
        Skills
      </motion.h1>
      <div className="flex items-center gap-12">
        <motion.p
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="font-[tiny] text-black text-md lg:text-lg w-full lg:w-[70%]"
        >
          Swipe these bottom boxes ^_____^
        </motion.p>
      </div>
      <div className="flex items-center mt-4 gap-12 text-[#333333]">
        <motion.div
          ref={constraintsRef}
          className=" flex gap-3 lg:gap-2 mt-10 items-center flex-wrap p-4 justify-center w-full relative bg-[#333333]/10 rounded-xl"
        >
          {[
            "HTML5",
            "CSS",
            "Tailwind CSS",
            "Blender",
            "GSAP",
            "Framer Motion",
            "Blender 3D",
            "JavaScript",
            "React.js",
            "Figma",
            "UI/UX",
          ].map((elem, index) => (
            <>
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3, ease: "backInOut" }}
                className={`flex items-center p-4 text-center flex-wrap justify-center h-[10vh] w-[30%] lg:w-[15%] bg-[#333333]/10  rounded-xl`}
              >
                <motion.div
                  drag="x"
                  whileHover={{
                    scale: 1.05,
                    background: "#FFF1E9",
                    fontSize: "1vw",
                    color: "#333333",
                  }}
                  dragConstraints={constraintsRef}
                  dragElastic={0.8}
                  className="jaadu h-[10vh] lg:w-[15%] w-[30%]  bg-[#444444] text-white flex justify-center items-center text-xs lg:text-base font-[tiny] absolute rounded-xl "
                >
                  Swipe Me 😭
                </motion.div>
                <h1 className="lg:text-xs text-[3vw] font-[chill] font-bold">
                  {elem}
                </h1>
              </motion.div>
            </>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
