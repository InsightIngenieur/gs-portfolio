import About from "@/Components/About";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import MobileNav from "@/Components/MobileNav";
import Nav from "@/Components/Nav";
import Projects from "@/Components/Projects";
import Services from "@/Components/Services";
import Skils from "@/Components/Skils";
import ContactForm from "@/Components/ContactForm"; // Ensure this import is correct
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const [isContactFormOpen, setContactFormOpen] = useState(false); // State to control ContactForm visibility

  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  const toggleContactForm = () => setContactFormOpen(!isContactFormOpen); // Function to toggle contact form

  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 1000,
      easing: "ease",
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <MobileNav nav={nav} closeNav={closeNav} />
      <Nav openNav={openNav} toggleContactForm={toggleContactForm} />
      <Hero />
      <div className="relative z-[30]">
        <About />
        <Services />
        <Skils />
        <Projects />
        <Footer toggleContactForm={toggleContactForm} />
        {isContactFormOpen && <ContactForm onClose={toggleContactForm} />}
      </div>
    </div>
  );
};

export default HomePage;
