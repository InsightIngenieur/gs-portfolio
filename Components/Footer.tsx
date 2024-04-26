import React from "react";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { FaLinkedin, FaGithub } from "react-icons/fa";

interface Props {
  toggleContactForm: () => void;  // Function to toggle the contact form
}

const Footer = ({ toggleContactForm }: Props) => {
  return (
    <div className="pt-[8rem] pb-[4rem] bg-[#02050a]">
      <div className="grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]">
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5] hover:scale-110 transition-transform duration-300">
            <a href="https://www.linkedin.com/in/stackba" target="_blank" rel="noopener noreferrer" aria-label="Visit my LinkedIn profile">
              <FaLinkedin className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
            </a>
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">
              LinkedIn
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
              Visit my LinkedIn profile
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5] hover:scale-110 transition-transform duration-300">
            <a href="https://github.com/InsightIngenieur" target="_blank" rel="noopener noreferrer" aria-label="Check out my GitHub">
              <FaGithub className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
            </a>
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">
              GitHub
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
              Check out my GitHub
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5] hover:scale-110 transition-transform duration-300 cursor-pointer" onClick={toggleContactForm}>
            <EnvelopeIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">
              Contact Me
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
              Click icon to contact
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between">
        <div className="text-[16px] mb-[2rem] md:mb-0 text-white opacity-20">
          FullStack Analyst 2024 | All Rights Reserved
        </div>
        <div className="flex items-center space-x-10">
          <p className="text-[16px] text-white opacity-20">Terms & Condition</p>
          <p className="text-[16px] text-white opacity-20">Privacy Policy</p>
          <p className="text-[16px] text-white opacity-20">Sitemap</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;