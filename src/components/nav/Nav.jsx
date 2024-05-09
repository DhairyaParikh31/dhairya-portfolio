import React, { useState, useEffect } from 'react';
import './nav.css';
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa6";
import { BiMessageSquareDetail } from "react-icons/bi";

const Nav = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.id;
        }
      });

      setActiveTab(currentSection || 'home');
    };

    window.addEventListener("scroll", handleScroll);
    
    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <a href="#" className={activeTab === "home" ? 'active' : ''} onClick={() => handleTabClick("home")}><AiOutlineHome/></a>
      <a href="#about" className={activeTab === "about" ? 'active' : ''} onClick={() => handleTabClick("about")}><AiOutlineUser/></a>
      <a href="#experience" className={activeTab === "experience" ? 'active' : ''} onClick={() => handleTabClick("experience")}><BiBook/></a>
      <a href="#services" className={activeTab === "services" ? 'active' : ''} onClick={() => handleTabClick("services")}><FaLaptopCode/></a>
      <a href="#contact" className={activeTab === "contact" ? 'active' : ''} onClick={() => handleTabClick("contact")}><BiMessageSquareDetail/></a>
    </nav>
  );
};

export default Nav;