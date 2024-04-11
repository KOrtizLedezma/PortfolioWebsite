import React, { useState } from "react";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={gitUrl} passHref>
      <div>
        <div
          className="h-52 mt-20 md:h-72 rounded-xl relative group flex justify-center items-center overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={imgUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          {isHovered && (
            <div className="overlay_content">
              <div className="mx-4"> {}
                <h5 className="project_title_style">{title}</h5>
                <p className="project_paragraph_text">{description}</p>
              </div>
            </div>
          )}
        </div>
        <h5 className="project_title_style">{title}</h5>
      </div>
    </Link>
  );
};

export default ProjectCard;
