"use client";

import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

const ConnectSection = () => {
  return (
    <section id="contact" className="flex flex-col items-center justify-center my-8 py-12 gap-4 relative">
      <div className="text-center">
        <h5 className="title_plain_color text-2xl md:text-3xl font-bold mb-1">
          Let&apos;s Connect
        </h5>
        <p className="text_plain_color text-sm md:text-base mb-1">
          Feel free to connect with me
        </p>

        <div className="flex flex-row justify-center gap-8 mt-8">
          <Link href="https://github.com/KOrtizLedezma">
            <FaGithub className="w-12 h-12 md:w-20 md:h-20 connect-icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/kenetortizledezma/">
            <FaLinkedin className="w-12 h-12 md:w-20 md:h-20 connect-icon" />
          </Link>
          <Link href="mailto:kenet2016@icloud.com">
            <FaEnvelope className="w-12 h-12 md:w-20 md:h-20 connect-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ConnectSection;
