import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, tag }) => {
  return (
    <div className="hover:scale-110 transition-all duration-500">
      <div
        className=" md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        {/* <img src={imgUrl}></img> */}
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 "></div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
        <a href={gitUrl} className="text-[#dc8fef]">
          Source
        </a>
        
      </div>
    </div>
  );
};

export default ProjectCard;
