import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";


import React from "react";

const Education = () => {
  return (
    <ol className="border-l border-neutral-300 dark:border-neutral-500 lg:mx-52">
      <li>
        <div className="flex-start flex items-center pt-3 ">
          <div className="-ml-2.5 mr-3 h-5 w-5 rounded-full bg-neutral-300 dark:bg-purple-500"><FontAwesomeIcon icon={faGraduationCap} size="sm" className="mb-0.5 ml-0.5"/></div>
        </div>
        <div className="border border-gray-300 dark:border-purple-700 ml-12 pt-4 rounded-xl p-4 shadow-lg transition-all duration-700 hover:scale-110 ">
          <p className="text-sm text-neutral-500 dark:text-neutral-300 ml-4">
            June 2011 - March 2020
          </p>
          <div className="mb-6 ml-4 mt-2">
            <h4 className="mb-1.5 text-xl font-semibold">
              Amara Jyothi Public School, Bangalore
            </h4>
            <p className="text-sm text-neutral-500 dark:text-neutral-300">
              CBSE(X), Science
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-300">
              Grade: 8.7
            </p>
            <p className="mb-3 text-neutral-500 dark:text-neutral-300 lg:mr-16">
            "I hold a strong 87% in my 10th boards in Science stream. With a solid foundation in scientific principles and problem-solving, I'm excited to take on new challenges. Explore my portfolio to learn more!"
            </p>
          </div>
        </div>
      </li>

      <li>
        <div className="flex-start flex items-center pt-2 ">
        <div className="-ml-2.5 mr-3 h-5 w-5 rounded-full bg-neutral-300 dark:bg-purple-500"><FontAwesomeIcon icon={faGraduationCap} size="sm" className="mb-0.5 ml-0.5"/></div>
        </div>
        <div className="border border-gray-300 dark:border-purple-700 ml-12 rounded-xl pt-4 p-4 transition-all duration-700 hover:scale-110 ">
          <p className="text-sm text-neutral-500 dark:text-neutral-300 ml-4">
            June 2020 - June 2022
          </p>
          <div className="mb-6 ml-4 mt-2">
            <h4 className="mb-1.5 text-xl font-semibold">
              Amara Jyothi Public School, Bangalore
            </h4>
            <p className="text-sm text-neutral-500 dark:text-neutral-300">
              CBSE(XII), PCMC
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-300">
              Grade: 9.0
            </p>
            <p className="mb-3 text-neutral-500 dark:text-neutral-300">
            "I completed my CBSE 12th grade with a solid 90% score in PCMC (Physics, Chemistry, Mathematics, and Computer Science). Equipped with a strong foundation in science and mathematics, I'm eager to take on new challenges. Explore my portfolio to learn more!"
            </p>
          </div>
        </div>
      </li>

      <li>
        <div class="flex-start flex items-center pt-2">
        <div className="-ml-2.5 mr-3 h-5 w-5 rounded-full bg-neutral-300 dark:bg-purple-500"><FontAwesomeIcon icon={faGraduationCap} size="sm" className="mb-0.5 ml-0.5"/></div>
        </div>
        <div className="border border-gray-300 dark:border-purple-700 ml-12 rounded-xl pt-4 pr-4 p-4 shadow-lg transition-all duration-700 hover:scale-110 bg-transparant bg-opacity-80">
          <p className="text-sm text-neutral-500 dark:text-neutral-300 ml-4">
            Nov 2022 - Present
          </p>
          <div class="ml-4 mt-2 pb-5">
            <h4 class="mb-1.5 text-xl font-semibold">REVA University</h4>
            <p className="text-sm text-neutral-500 dark:text-neutral-300">
              CSE, AI-ML(Artificail Intelligence & Machine Learning.!!!!)
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-300">
              Grade: 9.35
            </p>
            <p class="mb-3 text-neutral-500 dark:text-neutral-300">
            "I'm currently pursuing a B.Tech in AI and ML with an outstanding CGPA of 9.35. My academic journey has been driven by a passion for technology and data-driven solutions. I'm excited to apply my knowledge to real-world projects."
            </p>
          </div>
        </div>
      </li>
    </ol>
  );
};

const YourComponent = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-28">
        <h2 className="text-4xl font-bold">Education</h2>
      </div>
      <div className="flex flex-col items-center justify-center md:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-12">
        <Education />
      </div>
    </div>
  );
};

export default YourComponent;
