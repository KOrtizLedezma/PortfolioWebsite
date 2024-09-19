import React from "react";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ imgUrl, title, description, gitUrl, demoUrl }) => {
  return (
    <div className="flex flex-col justify-between p-4 border-2 rounded-lg h-full" style={{ borderColor: 'var(--color-primary)' }}>
      <div>
        <img src={imgUrl} alt={title} className="w-full h-48 object-cover rounded-md" />
        <div className="p-4">
          <h5 className="project_title_style mb-2 text-xl font-semibold">{title}</h5>
          <p className="project_paragraph_text text-justify mb-4">{description}</p>
        </div>
      </div>
      <div className={`flex ${demoUrl ? "justify-center gap-4" : "justify-center"} mt-auto`}>
        <Link href={gitUrl} passHref>
            <button
              className="border-2 py-2 px-4 rounded text-primary transition-transform duration-300 ease-in-out hover:scale-105 flex items-center justify-center"
              style={{ borderColor: 'var(--color-primary)', backgroundColor: 'transparent'}}
            >
            <FaGithub size={20} />
          </button>
        </Link>
        {demoUrl && (
          <Link href={demoUrl} passHref>
            <button
              className="border-2 py-2 px-4 rounded text-primary transition-transform duration-300 ease-in-out hover:scale-105 flex items-center justify-center"
              style={{ borderColor: 'var(--color-primary)', backgroundColor: 'transparent'}}
            >
              <FaExternalLinkAlt size={20} />
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
