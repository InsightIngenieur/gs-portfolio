
 
import React from "react";
import { IconType } from "react-icons";
import { FaChartBar, FaCode, FaDatabase, FaHtml5, FaJsSquare, FaNodeJs, FaReact, FaNetworkWired } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

interface Props {
  title: string;
  icon: string;
}

const iconMap: Record<string, IconType> = {
  analysis: FaChartBar,
  fullstack: FaCode,
  htmlcss: FaHtml5,
  javascript: FaJsSquare,
  react: FaReact,
  backend: FaNodeJs,
  database: FaDatabase,
  nodejs: FaNodeJs,
  mongodb: SiMongodb,
  api: FaNetworkWired,
  express: SiExpress
};

const SkilsItem = ({ title, icon }: Props) => {
  const IconComponent = iconMap[icon] || FaCode;

  return (
    <div className="mb-16 md:mb-32 flex items-center animate-fadeInUp">
      <IconComponent className="text-emerald-400 text-4xl mr-4 transition-transform duration-300 hover:scale-110 hover:text-yellow-300" />
      <div>
        <h1 className="uppercase font-semibold mb-4 text-2xl sm:text-3xl md:text-4xl text-white">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default SkilsItem;