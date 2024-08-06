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
    image: "/Images/Projects/Racing_adj.png",
    tag: ["All", "Java"],
    gitUrl: "https://github.com/KOrtizLedezma/COP2800-FinalProject.git",
  },
  {
    id: 2,
    title: "Sudoku",
    description: "Classic Sudoku Game, This project showcases my proficiency in Python programming, offering players a delightful experience with various difficulty levels—Easy, Medium, and Hard.",
    image: "/Images/Projects/Sudoku_adj.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/KOrtizLedezma/Sudoku-Project-4.git",
  },
  {
    id: 3,
    title: "Minesweeper",
    description: "Minesweeper, a classic game with a strategic twist, stands as a testament to my programming skills and passion for game development. In this project, implemented using C++, players embark on an adventure to uncover hidden mines on a grid while avoiding detonation.",
    image: "/Images/Projects/Minesweeper_adj.png",
    tag: ["All", "C++"],
    gitUrl: "https://github.com/KOrtizLedezma/Minesweeper.git",
  },
  {
    id: 4,
    title: "Invoker Trainer",
    description: "Embark on a thrilling journey to master the arcane arts of Invoker, the iconic hero in Dota 2, with our compact and engaging skill improvement game. Designed for both novice and seasoned players, the Invoker Mastery Challenge offers a unique and entertaining experience to enhance your proficiency with this powerful hero.",
    image: "/Images/Projects/Dota2_adj.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/KOrtizLedezma/InvokerTrainer",
  },
  {
    id: 5,
    title: "Random Mail Gift Mod",
    description: "Introducing the \"Random Mail Gift\" mod, a delightful addition to Stardew Valley that adds an element of surprise to your daily routine. This mod is designed to bring joy to players by sending carefully curated gifts each day, tailored to your in-game luck. Say goodbye to mundane routines and hello to daily surprises that will brighten your virtual farm life",
    image: "/Images/Projects/StardewValleyMod_adj.png",
    tag: ["All", "C#"],
    gitUrl: "https://github.com/KOrtizLedezma/RandomMailGiftMod", 
  },
  {
    id: 6,
    title: "To-Do List App - Desktop Version",
    description: "A simple and efficient To-Do List Manager using C# that allows users to organize their tasks temporarily without the need for permanent storage. This lightweight application provides a user-friendly interface.",
    image: "/Images/Projects/To-Do-List_adj.png",
    tag: ["All", "C#"],
    gitUrl: "https://github.com/KOrtizLedezma/To-Do-List.git", 
  },
  {
    id: 7,
    title: "Portfolio Website",
    description: "Welcome to the heart of my digital journey - an immersive showcase that unveils the code powering my portfolio website. Dive into the intricacies of web development and witness firsthand the craftsmanship behind the design and functionality of my online presence.",
    image: "/Images/Projects/PortfolioWebsite_adj.png",
    tag: ["All", "JavaScript"],
    gitUrl: "https://github.com/KOrtizLedezma/PortfolioWebsite.git", 
  },
  {
    id: 8,
    title: "Wordle",
    description: "Dynamic Wordle game project featuring JavaScript with Node.js, boasting authentication, Firebase API integration, and Wordnik API for an immersive gaming experience.",
    image: "/Images/Projects/Wordle_adj.png",
    tag: ["All", "JavaScript"],
    gitUrl: "https://github.com/KOrtizLedezma/Wordle", 
  },
  {
    id: 9,
    title: "To-Do List Web App",
    description: "A simple and responsive to-do list application built with CSS (Tailwind CSS), and JavaScript.",
    image: "/Images/Projects/To-Do-List-Web.png",
    tag: ["All", "JavaScript"],
    gitUrl: "https://github.com/KOrtizLedezma/To-Do-List-Webpage", 
  },
  {
    id: 9,
    title: "Song Association Helper",
    description: "A simple and responsive app that suggest songs according to a word.",
    image: "/Images/Projects/SongAssociation_adj.png",
    tag: ["All", "JavaScript"],
    gitUrl: "https://github.com/KOrtizLedezma/Project3COP3530SAH.git", 
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
        <span className="gradient_text">
          My Projects
        </span>
      </h2>
      <div className="tag_section">
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
        <ProjectTag
          onClick={handleTagChange}
          name="C#"
          isSelected={tag === "C#"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="JavaScript"
          isSelected={tag === "JavaScript"}
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