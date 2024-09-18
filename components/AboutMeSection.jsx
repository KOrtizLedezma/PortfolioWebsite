"use client";
import Image from "next/image";


const AboutMeSection = () => {

    return (
        <section className="text-white" id="about">   
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-1 px-4 xl:gap-16 sm:py-12 xl:px-16">
                <div className="text-left flex flex-col h-full" alt="about-image">
                    <h2 className="text-center text-white mb-4 md:mb-12 font-extrabold text-2xl sm:text-3xl lg:text-4xl">
                        <span className="title_plain_color">
                            Who am I?
                        </span>
                    </h2>
                    <ul className="list-disc pl-5 text-justify">
                        <li>
                            Hi Everyone, I am <span style={{ color: '#C33764' }}>Kenet Ortiz</span> and I was born in 
                            <span style={{ color: '#C33764' }}> Cochabamba, Bolivia</span>.
                        </li>
                        <br></br>
                        <li>
                            I&apos;m a <span style={{ color: '#C33764' }}>Computer Science Major at the University of Florida</span>.
                        </li>
                        <br></br>
                        <li>
                            I&apos;m interested in <span style={{ color: '#C33764' }}>Fullstack development, Cloud Development, and Game development</span>.
                        </li>
                        <br></br>
                        <li>
                            Apart from coding, some other activities I love to do are <span style={{ color: '#C33764' }}>Playing video games and listening to music</span>.
                        </li>
                        <br></br>
                    </ul>
                </div>

                <div className="flex justify-center md:justify-end">
                    <Image
                        src="/Images/Hero-About.png"
                        alt="Kenet Ortiz"
                        className="rounded-lg"
                        width={350}
                        height={350}
                    />
                </div>
            </div>
        </section>
  );
};

export default AboutMeSection;



