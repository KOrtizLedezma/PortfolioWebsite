import React, { useState } from "react";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={gitUrl} passHref>
      <div>
        <div
          className="h-52 mt-20 md:h-72 rounded-t-xl relative group flex justify-center items-center overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={imgUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          {isHovered && (
            <div className="absolute bg-[#181818] bg-opacity-80 w-full h-full text-center flex flex-col justify-center items-center rounded-t-xl">
              <div className="mx-4"> {}
                <h5 className="text-xl font-semibold mb-2 text-white">{title}</h5>
                <p className="text-[#ADB7BE] text-center">{description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
