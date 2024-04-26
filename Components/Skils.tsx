import React from "react";
import SkilsItem from "./SkilsItem";

const Skils = () => {
  return (
    <div id="skills" className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        My <span className="text-yellow-400">Skills</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
          <SkilsItem title="Business Analysis" icon="analysis" />
          <SkilsItem title="Full Stack Development" icon="fullstack" />
          <SkilsItem title="HTML/CSS" icon="htmlcss" />
          <SkilsItem title="JavaScript" icon="javascript" />
          <SkilsItem title="React" icon="react" />
        </div>
        <div>
          <SkilsItem title="Backend Development" icon="backend" />
          <SkilsItem title="Database Management" icon="database" />
          <SkilsItem title="Node.js/Express" icon="nodejs" />
          <SkilsItem title="MongoDB/SQL" icon="mongodb" />
          <SkilsItem title="REST APIs" icon="api" />
        </div>
      </div>
    </div>
  );
};

export default Skils;