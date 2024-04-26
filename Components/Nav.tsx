import React from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import Link from "next/link";  // Import Link from Next.js

interface Props {
  openNav: () => void;
  toggleContactForm: () => void;
}

const Nav = ({ openNav, toggleContactForm }: Props) => {
  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        {/* Wrap the title in a Link to make it clickable, applying styles directly to Link */}
        <Link href="#home" className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          FullStack<span className="text-yellow-300">Analyst</span>
        </Link>
        <Link href="#home" className="nav-link">HOME</Link>
        <Link href="#services" className="nav-link">SERVICES</Link>
        <Link href="#about" className="nav-link">ABOUT</Link>
        <Link href="#project" className="nav-link">PROJECT</Link>
        <Link href="#skills" className="nav-link">SKILLS</Link>
        <button onClick={toggleContactForm} className="nav-link text-white">CONTACT</button>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Nav;