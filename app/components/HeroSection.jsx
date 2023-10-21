"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import "animate.css";

export const HeroSection = () => {
  return (
    <section className="lg:py-16 lg:px-13">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left ">
          <h3 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm
            </span>
            <p style={{ lineHeight: "1" }}>Tarun.</p>
          </h3>
          <div className="mt-10">
            <span className="text-2xl sm:text-3xl lg:text-5xl font-extrabold ">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
                I'm a{" "}
              </span>
              <TypeAnimation
                sequence={[
                  "ML Developer",
                  2000,
                  "Rocket Hobbyist",
                  2000,
                  "3D Artist",
                  2000,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                style={{
                  fontWeight: "800",
                  // Set font weight to extra bold
                }}
              />
            </span>
          </div>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl mt-6">
            As someone deeply passionate about rockets, I am a motivated and
            versatile individual. Always excited to embrace new challenges, I am
            dedicated to delivering high-quality results. With a positive
            attitude and a growth mindset, I am prepared to make a meaningful
            contribution and achieve great things...
          </p>
          <div>
            <a href="https://www.linkedin.com/in/tarun-kumar-s-676a74267/" target="_blank">
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">LinkedIn
            </button>
            </a>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white border mt-3 ">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"> 
                <a>Download CV</a>
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/astro.png"
              alt="astronaut"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
