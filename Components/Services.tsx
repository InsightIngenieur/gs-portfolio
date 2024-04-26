import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const Services = () => {
  return (
    <div id="services" className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]">
      <p className="heading">
        My <span className="text-yellow-400">Services</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        <div data-aos="fade-right">
          <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Frontend
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              Specializing in creating responsive and dynamic user interfaces, I leverage technologies like HTML, CSS, JavaScript, React, and Next.js. My approach ensures seamless, aesthetically pleasing, and functional web experiences that engage and convert.
            </p>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-delay="300">
          <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]">
            <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Backend
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              <p className="text-[15px] text-[#d3d2d2] font-normal">
                Proficient in building robust backend systems using the MERN stack (MongoDB, Express, React, Node.js), I ensure that applications are scalable, secure, and efficient. My expertise extends to working with both SQL and NoSQL databases, alongside implementing RESTful APIs.
              </p>
            </p>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="500">
          <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Business Analysis
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              As a seasoned Business Analyst, I excel in transforming complex business requirements into actionable strategies and technical solutions. My expertise spans across requirements gathering, process improvement, and stakeholder management, ensuring alignment with business goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
