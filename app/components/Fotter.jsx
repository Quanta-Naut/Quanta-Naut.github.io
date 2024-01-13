import React from "react";
import { InstagramIcon, GitHubIcon, LinkedInIcon } from "@heroicons/react/outline";
const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white mt-10">
      <div className="container p-12 flex justify-between">
        <span>Astrosa</span>
        <p className="text-slate-600">&#169;2024 | All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
