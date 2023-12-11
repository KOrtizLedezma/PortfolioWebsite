"use client";
import React, { useTransition } from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";


const HeroSection = () => {
  return (
    <section className="lg-py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div initial={{ opacity: 0, scale: 0.5}} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 1.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mt-10 mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#C33764] to-[#1D2671]">Hello, I&apos;m </span>
            <br></br>
            <TypeAnimation
              sequence={[
                'Kenet Ortiz',
                1000,
                'Software Developer',
                1000
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            If you can imagine it, you can code it.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#C33764] to-[#1D2671] hover:bg-slate-200 text-white">
              Hire me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#C33764] to-[#1D2671] hover:bg-slate-800 text-white mt-4">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
              
            </button>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.5}} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1.5 }}
          className="col-span-4 place-self-center mt-4 mb-6 lg:mt-20"
          >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] relative">
            <Image
              src={"/images/hero-image.png"}
              alt="hero-image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={200}
              height={200}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
