"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
    title: "Skills",
    id: "skills",
    content: (
        <ul className="list-disc pl-2">
            <li>C++, C#, Java, Python</li>
            <li>JavaScript, Ionic 4</li>
            <li>VHDL</li>
        </ul>
    ),
    },
    {
    title: "Education",
    id: "education",
    content: (
        <ul className="list-disc pl-2">
            <li>Miami Dade College, Miami</li>
            <li>University of Florida, Gainesville</li>
        </ul>
    ),
    },
];

const AboutSection = () => {
const [tab, setTab] = useState("skills");
const [isPending, startTransition] = useTransition();

const handleTabChange = (id) => {
    startTransition(() => {
        setTab(id);
    });
};

    return (
        <section className="text-white" id="about">
            <div className="mt-20">
                <h2 className="text-center text-white mt-20 mb-8 md:mb-12 font-extrabold text-4xl sm:text-5xl lg:text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#C33764] to-[#1D2671]">
                    About Me
                </span>
            </h2>

            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/Images/about-image.png" width={500} height={500} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full" alt="about-image">
                    <p className="text-base lg:text-lg">
                        Hey there! I&apos;m a Bolivian guy with a passion for technology and video games. I kick-started my college 
                        journey at Miami Dade College, and now I&apos;m diving deep into the world of Computer Science at the University of Florida. 
                        Coding is not just a skill for me; it&apos;s a source of joy. 
                        I&apos;m well-versed in languages like Python, Java, C++, C#, and JavaScript. I love the creative process that comes 
                        with coding. When I&apos;m not immersed in lines of code, you can probably find me exploring the virtual realms 
                        of my favorite video games. I believe in the power of technology to create amazing experiences, 
                        and I&apos;m excited to be a part of shaping the future in the world of Computer Science.

                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                        {" "}
                        Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                        {" "}
                        Education{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
            </div>
            
        </section>
  );
};

export default AboutSection;



