import { motion } from "framer-motion";
import React, { useRef } from "react";
import { PiGithubLogoFill } from "react-icons/pi";
import { RiLinkedinFill } from "react-icons/ri";

function Nav() {



  return (
    <div className="fixed mt-5 m-4 flex items-center lg:gap-[1px] justify-center z-[999] ">
      <motion.a
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{ scale: 0.9 }}
        className=" icon font-[chill] text-[#e8cbb5] py-2 px-3  bg-[#333333] border-[1px] border-[#e8cbb5]"
        href="https://www.linkedin.com/in/gaurav-verma-98b9aa239/"
      >
        <div className="lg:text-2xl text-xl bg-">
          <RiLinkedinFill />
        </div>
      </motion.a>
      <motion.a
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{ scale: 0.9 }}
        className=" icon font-[chill] text-[#e8cbb5] py-2 px-5  bg-[#333333] text-xs lg:text-base flex items-center justify-center gap-2 border-[1px] border-[#e8cbb5]"
        href="https://github.com/briskgaurav"
      >
        <div className="text-xl bg-">
          <PiGithubLogoFill />
        </div>
        Check out Repo!{" "}
      </motion.a>
    </div>
  );
}

export default Nav;
