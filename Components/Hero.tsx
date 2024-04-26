import React, { useState } from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon, EyeIcon } from "@heroicons/react/20/solid";
import CvModal from "./CvModal"; // Make sure this is the separated component

const Hero = () => {
  const [isCvVisible, setIsCvVisible] = useState(false);
  const [actionType, setActionType] = useState<'view' | 'download'>('view'); // Track the action type

  const handleOpenModal = (type: 'view' | 'download') => {
    setActionType(type); // Set the action type based on which button is clicked
    setIsCvVisible(true); // Open the modal
  };

  return (
    <div id="home" className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            HI, I&apos;M <span className="text-yellow-400">Gaurav!</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
            While I deeply cherish my roots as a Business Analyst, my recent foray into Full Stack Development has sparked a new passion for building and innovating with technology.
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button
              className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2"
              onClick={() => handleOpenModal('download')}
            >
              Download CV
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
            <button
              className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2 ml-4"
              onClick={() => handleOpenModal('view')}
            >
              View CV
              <EyeIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
          </div>
          {isCvVisible && <CvModal isOpen={isCvVisible} onClose={() => setIsCvVisible(false)} actionType={actionType} />}
        </div>
        <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
          <Image
            src="/images/u1.jpg"
            alt="user"
            fill
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;