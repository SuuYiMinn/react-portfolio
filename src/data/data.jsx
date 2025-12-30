import React, { useState, useEffect } from "react";
import phpecom from "../assets/phpecom.png"
import uiux from "../assets/uiux.png"
//import AnimatedRoleTitles from "./AnimatedRoleTitles";
import {
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { BsTwitter, BsWhatsapp } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { ImInstagram } from "react-icons/im";
import { MdEmail, MdOutlineSettingsApplications } from "react-icons/md";
import { PiPhone } from "react-icons/pi";
import { CiLocationArrow1 } from "react-icons/ci";
import {
  SiC,
  SiCplusplus,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNetlify,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiRedux,
  SiSpring,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
} from "react-icons/si";
//import { motion } from "framer-motion";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  GiMaterialsScience,
  GiNorthStarShuriken,
  GiSandsOfTime,
} from "react-icons/gi";
import { DiDotnet, DiJava, DiMsqlServer, DiPython, DiVisualstudio } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
//import { div } from "framer-motion/client";
import { IoIosStarOutline } from "react-icons/io";
import { FaTools } from "react-icons/fa";
export const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React JS", icon: <FaReact className="text-cyan-400" /> },
      {
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill className="text-teal-400" />,

      },
      { name: "Vue.js", icon: <SiVuedotjs className="text-green-500 text-3xl" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "PHP", icon: <SiPhp className="text-purple-500 text-3xl" /> },
      { name: "Laravel", icon: <SiLaravel className="text-red-500 text-3xl" /> },
      { name: ".NET", icon: <DiDotnet className="text-blue-600 text-3xl" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
      { name: "MSSQL", icon: <DiMsqlServer className="text-red-500" /> },

     
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: <DiJava className="text-red-600" /> },
      { name: "C#", icon: <TbBrandCSharp className="text-purple-400" /> },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
      { name: "PHP", icon: <SiPhp className="text-purple-500 text-3xl" /> },
      
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <SiGit className="text-orange-500" /> },
      { name: "GitHub", icon: <SiGithub className="text-white" /> },
      { name: "VS Code", icon: <DiVisualstudio className="text-blue-500" /> },
      { name: "Visual Studio", icon: <FaTools className="text-blue-700 text-2xl" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
      { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
      { 
      name: "SSMS",
      icon: <DiMsqlServer className="text-red-500 text-2xl" />
    },
    ],
  },
];

// Navigation data
export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

// Portfolio data
export const portfolioItems = [
  {
    title: "PHP E-commerce Website",
    category: "Web Development",
    image:
      phpecom,
  },
  {
    title: "PHP E-commerce Website",
    category: "UI/UX Design",
    image:
      uiux,
  },
  {
    title: "Laravel School Management System",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
  },
];
export const experiences = [
  {
    id: 1,
    company: "Electricity Supply Enterprise",
    logo: <GiSandsOfTime />, // replace with actual logo
    title: "Staff Officer",
    period: "May 2018-2020",
    description:
      "HR Software Implementation, Training and Development (ICT), Computers and Network Maintenance",
    skills: [
      "ICT",
    ],
  },
  {
    id: 2,
    company: "Shwe Digit Co.,Ltd",
    logo: <IoIosStarOutline />, // replace with actual logo
    title: "Junior Web Developer",
    period: "March 2024 - Present",
    description:
      "Developed and maintained web applications using React.js, ASP.NET MVC and Microsoft SQL Server",
    skills: ["React JS", ".Net", "MSSQL", "SSMS"],
  },
];