"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const FloatingButton = () => {
  // You can replace these icons with your desired icons or content
  return (
    <div className="fixed bottom-4 right-4 space-y-2 block mb-8 mr-2">
      <div className="block space-y-3 mb-10">
        <a
          href="https://www.instagram.com/quantum._naut/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full px-3 pt-3 pb-2.5 block duration-500 hover:scale-110 bg-gradient-to-tl from-rose-400 via-fuchsia-500 to-indigo-500">
          <button>

            <FontAwesomeIcon
              icon={faInstagram}
              className="w-6 h-5 text-black px-auto py-auto items-center "
            />
          </button>
        </a>
        <a
          href="https://github.com/Quanta-Naut"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full px-3 pt-3 pb-2.5 bg-slate-300 duration-500 hover:scale-110 block"
        >
          <button>
            {/* Replace this with your desired icon */}

            <FontAwesomeIcon icon={faGithub} className="text-black w-6 h-5" />
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/tarun-kumar-s-676a74267/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full px-3 pt-3 pb-2.5 bg-blue-500 duration-500 hover:scale-110 block"
        >
          <button>
            {/* Replace this with your desired icon */}

            <FontAwesomeIcon icon={faLinkedin} className="text-black w-6 h-5" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default FloatingButton;
