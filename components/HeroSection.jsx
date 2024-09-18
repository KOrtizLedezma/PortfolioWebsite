"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5}} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-center sm:justify-self-start"
        >
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="hero_heading">Hi there</h1>
            <h1 className="hero_heading">
              <span className="title_plain_color">I&apos;m Kenet Ortiz</span>
            </h1>
            <h1 className="hero_text_animation">
              <br />
              <TypeAnimation
                sequence={[
                  'Software Developer',
                  1000,
                  'Open Source \n Contributor',
                  1000
                ]}
                wrapper="span"
                speed={30}
                repeat={Infinity}
                className="title_plain_color"
              />
            </h1>
          </div>
          <p className="hero_quote_text_style text-center sm:text-left">
            If you can imagine it, you can code it.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.5}} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1.5 }}
          className="col-span-4 place-self-center mt-4 mb-6 lg:mt-20"
        >
          <div className="image_container">
            <Image
                src="/Images/Hero.png"
                alt="Kenet Ortiz"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={300}
                height={300}
              />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;