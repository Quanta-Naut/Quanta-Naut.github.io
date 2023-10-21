"use client";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SkillDisplay from "./components/SkillDisplay";
import Education from "./components/Education";
import FloatingWidget from "./components/FloatingWidget";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Fotter";
import EmailSection from "./components/Email";
import { ToastContainer, toast } from "react-toastify";
import Acheivements from "./components/Acheivements";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-r from-[#170109] to-black">
      <Navbar />
      <div class="container mt-24 mx-auto px-16 lg:px-36 py-4">
        <HeroSection />
        {/* <AboutSection /> */}
        <SkillDisplay  />
        <Education />
        <ProjectsSection />
        <FloatingWidget/>
        <Acheivements/>
        <EmailSection />
        <Footer />
      </div>
    </main>
  );
}
