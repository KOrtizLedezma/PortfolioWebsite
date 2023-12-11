"use client";

import React, { useState }from 'react';
import GithubIcon from '../../public/Images/github-icon.svg';
import LinkedinIcon from '../../public/Images/linkedin-icon.svg';
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
                <h5 className="text-xl font-bold text-white my-2 ">
                    Let&apos;s Connect
                </h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {" "}
                    Hello there! I&apos;m thrilled to connect with you. My passion for coding is not just a career choice; 
                    it&apos;s a journey of constant growth and learning. Currently on the lookout for exciting new opportunities 
                    to further sharpen my coding skills, I am eager to explore fresh challenges that will propel me to new heights. 
                    Whether it&apos;s collaborating on innovative projects or contributing to a dynamic team, 
                    I am ready to embrace the next chapter of my coding adventure. Feel free to reach out—I&apos;m always open to new connections 
                    and opportunities. Let&apos;s create something extraordinary together
                </p>

                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/KOrtizLedezma">
                        <Image src={GithubIcon} alt="Github Icon"/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/kenet-ortiz-67a4a421b/">
                        <Image src={LinkedinIcon} alt="Linkedin Icon"/>
                    </Link>
                </div>
            </div>
        
        
            <div>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="email" className="text-white block text-sm font-medium mb-2"> 
                            Your Email 
                        </label>
                        <input  name = "email"
                                type="email" 
                                id="email" 
                                required 
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="example@example.com"/>
                    </div>
                
                    <div className="mb-6">
                        <label htmlFor="subject" className="text-white block text-sm font-medium mb-2"> 
                            Subject 
                        </label>
                        <input  name="subject"
                                type="text" 
                                id="subject" 
                                required 
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Just saying hi"/>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className="text-white block text-sm font-medium mb-2"> 
                            Message 
                        </label>
                        <textarea name="message"
                                    id="message"
                                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                    placeholder="Let's talk about..."/>
                    </div>


                    <button
                        type="submit"
                        className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full bg-gradient-to-br from-[#C33764] to-[#1D2671]">
                            Send Message
                    </button>
                    {
                        emailSubmitted && (
                            <p className="text-white text-sm mt-2">
                                Email sent succesfully!
                            </p>
                        )
                    }

                </form>
            </div>
        </section>
    );
}

export default EmailSection