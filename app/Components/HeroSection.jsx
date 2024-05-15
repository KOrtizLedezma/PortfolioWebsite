"use client";
import React, { useTransition } from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const HeroSection = () => {
  
  const handleHireMeClick = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCVClick = () => {
    const existingFileUrl = 'Kenet Ortiz CV.pdf';

    const a = document.createElement('a');

    a.download = 'Kenet-Ortiz-CV.txt';
    a.href = existingFileUrl;

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);
  };

  return (
    <section className="lg-py-16 mb-20">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div initial={{ opacity: 0, scale: 0.5}} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 1.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="hero_heading">
            <span className="hero_gradient_text_effect">Hello, I&apos;m </span>
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
          <p className="hero_quote_text_style">
            If you can imagine it, you can code it.
          </p>
          <div>
            <button
              onClick={handleHireMeClick}
              className="hire_me_button"
              >
              Hire me
            </button>
            <button 
              onClick={handleDownloadCVClick}
              className="download_button">
              <span className="button_content">Download CV</span>
              
            </button>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.5}} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1.5 }}
          className="col-span-4 place-self-center mt-4 mb-6 lg:mt-20"
          >
          <div className="circle_container">
            <Image
              src="/Images/hero-image.png"
              alt=""
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={250}
              height={250}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
