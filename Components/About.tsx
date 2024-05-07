import React, { useState } from "react";
import { ArrowDownTrayIcon, EyeIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import CvModal from "./CvModal";

const About = () => {
  const [isCvVisible, setIsCvVisible] = useState(false);
  const [actionType, setActionType] = useState<string>('view');

  const handleOpenModal = (type: string) => {
    setActionType(type);
    setIsCvVisible(true);
  };
  return (
    <div id="about" className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem]">
            ABOUT ME
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
            Analyzing Needs <span className="text-yellow-400">Building Solutions</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              With a solid foundation as a Business Analyst and a recent graduate of a Full Stack Development program, I specialize in transforming complex business requirements into technical solutions. My journey has equipped me with a unique blend of analytical rigor and coding prowess, enabling me to deliver projects that are not only technically sound but also aligned with business goals.
            </p>
          </div>
          <div className="flex space-x-4">
            <button
              className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2"
              onClick={() => handleOpenModal('download')}
            >
              Download CV
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
            <button
              className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2"
              onClick={() => handleOpenModal('view')}
            >
              View CV
              <EyeIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
          </div>
          {isCvVisible && <CvModal isOpen={isCvVisible} onClose={() => setIsCvVisible(false)} actionType={actionType as "view" | "download"} />}
        </div>
        <div
          data-aos="fade-left"
          className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative"
        >
          <Image
            src="/images/about.png"
            alt="user"
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            className="relative z-[11] w-[100%] h-[100%] object-contain"
          />
          <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e600%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
