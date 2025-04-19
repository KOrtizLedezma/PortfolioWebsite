import React from 'react';
import { FaJava, FaPython, FaReact, FaNodeJs, FaGit} from 'react-icons/fa';
import {  SiCsharp, SiJavascript, SiCss3, SiHtml5, SiIonic, SiTailwindcss, SiFirebase, SiCplusplus, 
          SiVercel, SiGodotengine, SiMongodb, SiPostgresql, SiMariadb, SiNpm, SiPostman, SiC, SiDocker,
          SiVisualstudiocode, SiVisualstudio, SiPycharm, SiClion, SiIntellijidea, SiEclipseide, SiApachenetbeanside,
          SiMysql, SiFlask, SiExpress,
          SiTypescript} from 'react-icons/si';

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
            <div className="skill-box"><SiC size={40} /></div>
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
          <div className="flex justify-center">
            <div className="skill-box"><SiTypescript size={40} /></div>
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
          <div className="flex justify-center">
            <div className="skill-box"><SiGodotengine size={40} /></div>
          </div>
          <div className="flex justify-center">
            <div className="skill-box"><SiFlask size={40} /></div>
          </div>
          <div className="flex justify-center">
            <div className="skill-box"><SiExpress size={40} /></div>
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
            <div className="skill-box"><SiVercel size={40} /></div>
          </div>
          <div className="flex justify-center">
            <div className="skill-box"><SiNpm size={40} /></div>
          </div>
          <div className="flex justify-center">
            <div className="skill-box"><SiDocker size={40} /></div>
          </div>
          <div className="flex justify-center">
            <div className="skill-box"><SiVisualstudiocode size={40} /></div>
          </div>
          <div className="flex justify-center">
            <div className="skill-box"><SiVisualstudio size={40} /></div>
          </div>
          <div className="flex justify-center">
            <div className="skill-box"><SiPycharm size={40} /></div>
          </div>
          <div className="flex justify-center">
            <div className="skill-box"><SiClion size={40} /></div>
          </div>
          <div className="flex justify-center">
            <div className="skill-box"><SiIntellijidea size={40} /></div>
          </div>
          <div className="flex justify-center">
            <div className="skill-box"><SiEclipseide size={40} /></div>
          </div>
          <div className="flex justify-center">
            <div className="skill-box"><SiApachenetbeanside size={40} /></div>
          </div>
        </div>
      </div>

      {/* Databes */}
      <div className="w-full mb-8">
        <h2 className="title_plain_color text-2xl md:text-3xl font-bold mb-8 text-center">
          Databases & Libraries
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-center">
          <div className="flex justify-center">
          <div className="skill-box"><SiFirebase size={40} /></div>
          </div>
          <div className="flex justify-center">
            <div className="skill-box"><SiMongodb size={40} /></div>
          </div>
          <div className="flex justify-center">
            <div className="skill-box"><SiPostgresql size={40} /></div>
          </div>
          <div className="flex justify-center">
            <div className="skill-box"><SiMariadb size={40} /></div>
          </div>
          <div className="flex justify-center">
            <div className="skill-box"><SiPostman size={40} /></div>
          </div>
          <div className="flex justify-center">
            <div className="skill-box"><SiMysql size={40} /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillShowcase;
