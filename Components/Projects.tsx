import Image from "next/image";
import React from "react";
import Link from "next/link"; // Import Link from Next.js for navigation

const Projects = () => {
  return (
    <div id="project" className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
      <h1 className="heading">
        Pro<span className="text-yellow-400">Jects</span>
      </h1>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">

        <div data-aos="fade-up">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
            <Image
              src="/images/deputys-dilemma.png"
              alt="Deputy's Dilemma"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white">
              <p>Deputy&apos;s Dilemma: Wild West Whodunit - a thrilling detective game built using Next.js, Tailwind CSS, and TypeScript.</p>
              <Link href="https://webd5015-project-cowboys.vercel.app/" legacyBehavior passHref>
                <a className="text-yellow-400 underline" target="_blank" rel="noopener noreferrer">
                  Learn more
                </a>
              </Link>
            </div>
          </div>
        </div>

        
        {/* Current Project */}
        <div data-aos="fade-up" data-aos-delay="300">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
            <Image
              src="/images/zx.jpg"
              alt="ZX Construction Management Web Portal"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white">
              <p>ZX Construction Management Web Portal: Spearheading the development of comprehensive web solutions, focusing on high-quality user interfaces and robust functionalities.</p>
            </div>
          </div>
        </div>

        {/* Placeholder for Mobile App Project */}
        <div data-aos="fade-up" data-aos-delay="600">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
            <Image
              src="/images/zxmobile.jpg" 
              alt="ZX Mobile App"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white">
              <p>Mobile Application for ZX Construction: Enhancing business operations and user experience through a mobile platform developed using React Native and Expo.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};


export default Projects; 

