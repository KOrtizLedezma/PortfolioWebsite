import React from 'react';
import { FaJava, FaPython, FaReact, FaNodeJs, FaGit } from 'react-icons/fa';
import { SiCsharp, SiJavascript, SiCss3, SiHtml5, SiIonic, SiTailwindcss, SiFirebase, SiCplusplus, SiVercel  } from 'react-icons/si';

const SkillShowcase = () => {
  return (
    <div className="flex flex-col items-center p-4">
      {/* Languages */}
      <div className="w-full mb-8">
        <h2 className="title_plain_color text-2xl md:text-3xl font-bold mb-8 text-center">
          My Languages
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-center">
          <div className="flex justify-center">
            <div className="skill-box"><FaJava size={40} /></div>
          </div>
          <div className="flex justify-center">
            <div className="skill-box"><FaPython size={40} /></div>
          </div>
          <div className="flex justify-center">
            <div className="skill-box"><SiCsharp size={40} /></div>
          </div>
          <div className="flex justify-center">
            <div className="skill-box"><SiCplusplus size={40} /></div>
          </div>
          <div className="flex justify-center">
            <div className="skill-box"><SiJavascript size={40} /></div>
          </div>
          <div className="flex justify-center">
            <div className="skill-box"><SiHtml5 size={40} /></div>
          </div>
          <div className="flex justify-center">
            <div className="skill-box"><SiCss3 size={40} /></div>
          </div>
        </div>
      </div>

      {/* Frameworks */}
      <div className="w-full mb-8">
        <h2 className="title_plain_color text-2xl md:text-3xl font-bold mb-8 text-center">
          My Frameworks
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-center">
          <div className="flex justify-center">
            <div className="skill-box"><FaReact size={40} /></div>
          </div>
          <div className="flex justify-center">
            <div className="skill-box"><FaNodeJs size={40} /></div>
          </div>
          <div className="flex justify-center">
            <div className="skill-box"><SiIonic size={40} /></div>
          </div>
          <div className="flex justify-center">
            <div className="skill-box"><SiTailwindcss size={40} /></div>
          </div>
        </div>
      </div>

      {/* Tools */}
      <div className="w-full mb-8">
        <h2 className="title_plain_color text-2xl md:text-3xl font-bold mb-8 text-center">
          My Tools
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-center">
          <div className="flex justify-center">
            <div className="skill-box"><FaGit size={40} /></div>
          </div>
          <div className="flex justify-center">
            <div className="skill-box"><SiFirebase size={40} /></div>
          </div>
          <div className="flex justify-center">
            <div className="skill-box"><SiVercel size={40} /></div> {/* Added Vercel */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillShowcase;
