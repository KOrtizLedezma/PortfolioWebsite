"use client";
import Image from "next/image";

const AboutSection = () => {

    return (
        <section className="text_plain_color" id="about">
            <div className="mt-15">
                <h2 className="text-center text_plain_color mt-20 mb-8 md:mb-12 font-extrabold text-4xl sm:text-5xl lg:text-6xl">
                    <span className="title_plain_color">
                        A little about me
                    </span>
                </h2>

                <div className="md:grid md:grid-cols-2 gap-8 items-center py-1 px-4 xl:gap-16 sm:py-12 xl:px-16">
                    <div className="mt-4 md:mt-0 text-left flex flex-col h-full" alt="about-image">
                        <ul className="list-disc pl-5 text-base lg:text-lg">
                            <p>
                                I&apos;ve always been into 
                                <span className="title_plain_color"> tech and video games </span>, 
                                and I guess you could say I&apos;ve picked up a few things along the way.
                            </p>
                            <br />
                            <p>
                                I fell in love with 
                                <span className="title_plain_color"> programming </span>
                                , and I&apos;m always learning something new (at least, I think I am… )
                            </p>
                            <br />
                            <p>
                                Languages? Yeah, I Know a Few &mdash; I&apos;ve worked with 
                                <span className="title_plain_color"> Python, Java, C++, C# and JavaScript </span>
                                , and I&apos;m always trying to get better.
                                </p>
                            <br />
                            <p>
                                When I&apos;m not lost in 
                                <span className="title_plain_color"> code </span>, 
                                I&apos;m usually lost in a 
                                <span className="title_plain_color"> video game </span> 
                                somewhere.
                            </p>
                            <br />
                            <p>
                                I&apos;m passionate about using 
                                <span className="title_plain_color"> tech </span> 
                                to build cool experiences, and I&apos;m excited to see what comes next!
                            </p>
                            <br />
                            <p>
                                I&apos;m bilingual, speaking both
                                <span className="title_plain_color"> English and Spanish </span>
                                    fluently 
                            </p>
                        </ul>
                    </div>

                    <div className="flex justify-center md:justify-end mt-12">
                        <Image
                            src="/Images/Hero-Fun-Fact.png"
                            alt="Kenet Ortiz"
                            className="rounded-lg"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
  );
};

export default AboutSection;



