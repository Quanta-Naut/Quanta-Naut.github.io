import React from "react";
import Image from "next/image";

const EducationCard = () => {
  return (
    <div className=" border-[#fc03f4] rounded-2xl max-w-sm transform duration-500 hover:-translate-y-2 cursor-pointer rounded-mdshadow-lg transition ease-in-out hover:shadow-lg dark:hover:shadow-[#fc03f4] px-10 py-10 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
      <div className="px-6  my-4">
        <div className="font-bold text-center mb-2 mt-1 text-2xl mx-1">
          Languages
        </div>
        <div className="text-white text-center mt-8">
          <ul className="list-disc">
            <li>Python</li>
            <li>C++</li>
            <li>C</li>
            <li>Java</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const NewCard = () => {
  return (
    <div className=" border-[#fc03f4] rounded-2xl max-w-sm transform duration-500 hover:-translate-y-2 cursor-pointer rounded-mdshadow-lg transition ease-in-out hover:shadow-lg dark:hover:shadow-[#fc03f4] px-10 py-10 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
      <div className="px-6 py-4">
        <div className="font-bold text-center mb-2 mt-1 text-2xl">
          Technology
        </div>
        <div className="text-white text-center mt-8">
          <ul className="list-disc whitespace-nowrap">
            <li>Machine Learning</li>
            <li className="whitespace-nowrap">Web Development</li>
            <li>Robotics</li>
            <li>Iot</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
const Card = () => {
  return (
    <div className=" border-[#fc03f4] rounded-2xl max-w-sm transform duration-500 hover:-translate-y-2 cursor-pointer rounded-mdshadow-lg transition ease-in-out hover:shadow-lg dark:hover:shadow-[#fc03f4] px-10 py-10 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
      <div className="px-6 py-4">
        <div className="font-bold text-center mb-2 mt-1 text-2xl mx-3">
          Creativity
        </div>
        <div className="text-white text-center mt-8">
          <ul className="list-disc whitespace-nowrap">
            <li>3D Animation</li>
            <li>Video Editing</li>
            <li>3D Printing</li>
            <li>Model Desining</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
const Softwares = () => {
  return (
    <div className=" flex felx-col border-[#fc03f4] rounded-2xl max-w-sm transform duration-500 hover:-translate-y-2 cursor-pointer rounded-mdshadow-lg transition ease-in-out hover:shadow-lg dark:hover:shadow-[#fc03f4] px-10 py-10 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
      <div className="px-6 ">
        <div className="font-bold text-center mb-2 mt-1 text-2xl mx-1">
          Softwares
        </div>
        <div className="text-white text-center mt-8">
          <ul className="list-disc whitespace-nowrap">
            <li>Blender</li>
            <li>FUsion 360</li>
            <li>VS Code</li>
            <li>Git & GitHub</li>
            <li>Arduino</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
const Others = () => {
  return (
    <div className=" flex felx-col border-[#fc03f4] rounded-2xl max-w-sm transform duration-500 hover:-translate-y-2 cursor-pointer rounded-mdshadow-lg transition ease-in-out hover:shadow-lg dark:hover:shadow-[#fc03f4] px-10 py-10 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
      <div className="px-6 my-6">
        <div className="font-bold text-center mb-2 mt-1 text-2xl mx-1">
          Others
        </div>
        <div className="text-white text-center mt-8">
          <ul className="list-disc whitespace-nowrap">
            <li>Rocketry</li>
            <li>Circuit Designing</li>
            <li>PCB Designing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const YourComponent = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mb-12 mt-10 ">
        <h2 className="text-4xl font-bold">Skills</h2>
      </div>
      <div className="flex flex-col items-center justify-center md:flex-row space-y-4 sm:space-y-3 sm:space-x-4">
        <EducationCard />
        <NewCard />
        <Card />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center mt-5 space-y-4 sm:space-y-3 sm:space-x-4">
        <Softwares />
        <Others/>
      </div>
    </div>
  );
};

export default YourComponent;
