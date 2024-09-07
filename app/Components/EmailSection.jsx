"use client";

import React, { useState }from 'react';
import GithubIcon from '../../public/Images/github-icon.svg';
import LinkedinIcon from '../../public/Images/linkedin-icon.svg';
import MailIcon from '../../public/Images/mail-icon.svg';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import Image from "next/image";

const EmailSection = () => {

    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }
    

        const JSONdata = JSON.stringify(data);
        const endpoint = "/api"

        const options = {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSONdata, 
        }

        const response = await fetch(endpoint, options);
        const resData = await response.json();

        if(response.status === 200){
            console.log('Message sent.');
            setEmailSubmitted(true);
        }
    }

    return (
        <section id="contact" className="flex flex-col md:grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
            <div className="mb-8 md:mb-0">
                <h5 className="email_subheading text-2xl md:text-3xl font-bold mb-4">
                    Let&apos;s Connect
                </h5>
                <p className="email_custom_text_style text-sm md:text-base">
                    Hello there! I&apos;m thrilled to connect with you. My passion for 
                    coding is not just a career choice; it&apos;s a journey of constant 
                    growth and learning. Currently on the lookout for exciting new 
                    opportunities to further sharpen my coding skills, I am eager to 
                    explore fresh challenges that will propel me to new heights. 
                    Whether it&apos;s collaborating on innovative projects or 
                    contributing to a dynamic team, I am ready to embrace the 
                    next chapter of my coding adventure. Feel free to reach out 
                    I&apos;m always open to new connections and opportunities. 
                    Let&apos;s create something extraordinary together!
                </p>    
            </div>
        
            <div className="flex items-center justify-center">
                <div className="socials flex flex-row md:flex-col items-center justify-center gap-4 md:gap-8">
                    <Link href="https://github.com/KOrtizLedezma">
                        <FaGithub className="w-12 h-12 md:w-20 md:h-20" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/kenetortizledezma/">
                        <FaLinkedin className="w-12 h-12 md:w-20 md:h-20" />
                    </Link>
                    <Link href="mailto:kenet2016@icloud.com">
                        <FaEnvelope className="w-12 h-12 md:w-20 md:h-20" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default EmailSection