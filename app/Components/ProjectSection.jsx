"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Racing Cars Game",
    description: "Classic Arcade game where the player needs to avoid the incoming traffic and get the highest score possible, allows local multiplayer",
    image: "/images/Projects/Racing.png",
    tag: ["All", "Java"],
    gitUrl: "https://github.com/KOrtizLedezma/COP2800-FinalProject.git",
  },
  {
    id: 2,
    title: "Sudoku",
    description: "Classic Sudoku Game, This project showcases my proficiency in Python programming, offering players a delightful experience with various difficulty levels—Easy, Medium, and Hard.",
    image: "/images/Projects/Sudoku.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/KOrtizLedezma/Sudoku-Project-4.git",
  },
  {
    id: 3,
    title: "Minesweeper",
    description: "Minesweeper, a classic game with a strategic twist, stands as a testament to my programming skills and passion for game development. In this project, implemented using C++, players embark on an adventure to uncover hidden mines on a grid while avoiding detonation.",
    image: "/images/Projects/Minesweeper.png",
    tag: ["All", "C++"],
    gitUrl: "https://github.com/KOrtizLedezma/Minesweeper.git",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-white mt-4 mb-8 md:mb-12 font-extrabold text-4xl sm:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#C33764] to-[#1D2671]">
          My Projects
        </span>
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Python"
          isSelected={tag === "Python"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="C++"
          isSelected={tag === "C++"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Java"
          isSelected={tag === "Java"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;