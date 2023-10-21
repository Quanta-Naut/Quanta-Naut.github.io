"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import ProjectTag from "./ProjectTag";

const ProjectsData = [
  {
    id: 1,
    title: "Flight Computer",
    description: "Designed and developed a custom flight computer system for rockets, enabling precise control and monitoring during flight.",
    image: "./images/FlightComp.jpeg",
    tag: ["All", "Rocketry", "Iot"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Telemetry",
    description: "Engineered a specialized telemetry system for rockets, significantly improving data collection and transmission capabilities for enhanced flight monitoring.",
    image: "./images/Telemetry.jpeg",
    tag: ["All", "Rocketry", "Iot"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Automated Curtains",
    description: "Created an innovative IoT project during my 12th-grade year, focusing on automating curtain control for enhanced convenience",
    image: "./images/AutoCurt.jpeg",
    tag: ["All", "Iot"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "My Portfolio",
    description: "Currently Viewing",
    image: "./images/pot.jpg",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "ML model to detect garbage in rivers",
    description: "Developed a machine learning model capable of identifying and tracking floating plastic debris in river ecosystems, contributing to environmental conservation efforts.",
    image: "./images/MLGarb.jpg",
    tag: ["All", "ML Dev"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "ML spam classifier",
    description: "Designed an effective machine learning model for detecting SMS spam, enhancing messaging security and user experience.",
    image: "./images/Spam.png",
    tag: ["All", "ML Dev"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Cubes",
    description: "",
    image: "./images/Cube.png",
    tag: ["Blender"],
    gitUrl: "https://www.instagram.com/p/CtE44qrvqpZ/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Peace",
    description: "",
    image: "./images/bridge.png",
    tag: ["Blender"],
    gitUrl: "https://www.instagram.com/p/CsLnnM3PVKx/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Cave",
    description: "",
    image: "./images/Cave.png",
    tag: ["Blender"],
    gitUrl: "https://www.instagram.com/p/Cv9YbcuRwVc/",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Time",
    description: "",
    image: "./images/Time.png",
    tag: ["Blender"],
    gitUrl: "https://www.instagram.com/p/Cr-hzBxPDhu/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = ProjectsData.filter((project) =>
    project.tag.includes(tag)
  );
  let blenderInstagramCardDisplayed = false;
  let idCounter = 0;
  let instagramProfileCard = null;

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-16 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row flex-wrap justify-center items-center gap-2 py-2 mb-10">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="ML Dev"
          isSelected={tag === "ML Dev"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Rocketry"
          isSelected={tag === "Rocketry"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Iot"
          isSelected={tag === "Iot"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Blender"
          isSelected={tag === "Blender"}
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
              previewUrl={project.previewUrl}
              tag={project.tag}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
export default ProjectsSection;
