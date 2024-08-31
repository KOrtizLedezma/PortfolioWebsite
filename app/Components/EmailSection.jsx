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
        <section id="contact" className="grid md:grid-cols-2 my-12 md-my-12 py-24 gap-4 relative">

            <div>
                <h5 className="email_subheading">
                    Let&apos;s Connect
                </h5>
                <p className="email_custom_text_style">
                    {" "}
                    Hello there! I&apos;m thrilled to connect with you. My passion for <br /> 
                    coding is not just a career choice; it&apos;s a journey of constant <br />
                    growth and learning. Currently on the lookout for exciting new <br /> 
                    opportunities to further sharpen my coding skills, I am eager to <br />
                    explore fresh challenges that will propel me to new heights. <br />
                    Whether it&apos;s collaborating on innovative projects or <br />
                    contributing to a dynamic team, I am ready to embrace the <br /> 
                    next chapter of my coding adventure. Feel free to reach out <br /> 
                    I&apos;m always open to new connections and opportunities. <br /> 
                    Let&apos;s create something extraordinary together
                </p>    
            </div>
        
        
            <div className="flex items-center justify-center">
                <div className="socials flex items-center justify-center gap-4">
                    <Link href="https://github.com/KOrtizLedezma">
                        <FaGithub size={128} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/kenetortizledezma/">
                        <FaLinkedin size={128} />
                    </Link>
                    <Link href="mailto:kenet2016@icloud.com">
                        <FaEnvelope size={128} />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default EmailSection