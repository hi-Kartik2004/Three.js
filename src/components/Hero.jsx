import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { smoothstep } from "three/src/math/MathUtils";

const Hero = () => {
  return (
    <section className="w-full h-screen mx-auto relative">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row gap-5 items-start`}
      >
        <div className=" flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff] " />

          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="absolute ml-8 z-10">
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#915eff]">Kartikeya</span>
          </h1>
          <p className={`${styles.heroSubText}`}>
            I develop 3D visuals, <br className="sm: none block" /> user
            interfaces and web Applications.
          </p>
        </div>
      </div>
      <div className="w-full h-full">
        <ComputersCanvas />
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-end  -ml-10 items-center">
          <a href="#about" className="flex items-center justify-center flex-col">
            <div className="h-[30px] w-[5px] bg-white opacity-[75%]"/>
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white opacity-75 flex  justify-center align-start p-2">
              <motion.dev
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  // smoothstep: {}
                }}
                className="w-3 h-3 rounded-full bg-white opacity-100 mb-1"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
