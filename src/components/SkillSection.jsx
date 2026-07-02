import { useRef } from "react";
import SkillCard from "./ui/SkillCard";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

import { FaJava } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";

import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { SiPostman } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiRender } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { FaLock } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const SkillSection = () => {
  const skillsData = [
    {
      title: "Frontend Development",
      className: "skill-core",
      skills: [
        {
          name: "HTML5",
          icon: FaHtml5,
          color: "text-gray-700 hover:text-orange-600",
        },
        {
          name: "CSS3",
          icon: FaCss3Alt,
          color: "text-gray-700 hover:text-blue-600",
        },
        {
          name: "JavaScript",
          icon: IoLogoJavascript,
          color: "text-gray-700 hover:text-yellow-400",
        },
        {
          name: "React",
          icon: FaReact,
          color: "text-gray-700 hover:text-cyan-500",
        },
        {
          name: "Tailwind CSS",
          icon: SiTailwindcss,
          color: "text-gray-700 hover:text-sky-400",
        },
      ],
    },
    {
      title: "Backend Development",
      className: "skill-backend",
      skills: [
        {
          name: "Node.js",
          icon: FaNodeJs,
          color: "text-gray-700 hover:text-green-600",
        },
        {
          name: "Express.js",
          icon: SiExpress,
          color: "text-gray-700 hover:text-gray-900",
        },
        {
          name: "MongoDB",
          icon: SiMongodb,
          color: "text-gray-700 hover:text-green-500",
        },
        {
          name: "Mongoose",
          icon: SiMongoose,
          color: "text-gray-700 hover:text-red-500",
        },
        {
          name: "JWT",
          icon: SiJsonwebtokens,
          color: "text-gray-700 hover:text-pink-500",
        },
        {
          name: "bcrypt",
          icon: FaLock,
          color: "text-gray-700 hover:text-amber-500",
        },
      ],
    },
    {
      title: "Programming & Tools",
      className: "skill-tools",
      skills: [
        {
          name: "Java",
          icon: FaJava,
          color: "text-gray-700 hover:text-red-600",
        },
        {
          name: "Python",
          icon: FaPython,
          color: "text-gray-700 hover:text-blue-500",
        },
        {
          name: "MySQL",
          icon: GrMysql,
          color: "text-gray-700 hover:text-sky-700",
        },
        {
          name: "Git",
          icon: FaGitAlt,
          color: "text-gray-700 hover:text-orange-600",
        },
        {
          name: "GitHub",
          icon: FaGithub,
          color: "text-gray-700 hover:text-black",
        },
        {
          name: "Postman",
          icon: SiPostman,
          color: "text-gray-700 hover:text-orange-500",
        },
        {
          name: "Vercel",
          icon: SiVercel,
          color: "text-gray-700 hover:text-black",
        },
        {
          name: "Render",
          icon: SiRender,
          color: "text-gray-700 hover:text-indigo-600",
        },
      ],
    },
  ];
  const lineRef = useRef();
  useGSAP(() => {
    gsap.from(lineRef.current, {
      width: 0,
      duration: 0.5,
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: lineRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  });

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".Skill-main",
        start: "top 80%",
      },
    });

    // 1️⃣ First animation
    tl.from(".skill-core", {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    })

      // 2️⃣ Automatically wait karega, then run hoga
      .from(".skill-other", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.5,
        ease: "power3.out",
      });
  });

  return (
    <div className="Skill-main min-h-[80vh] md:min-h-screen w-full px-4 sm:px-6 md:px-10 mt-2 sm:mt-7 mb-10" id="skills">
      <h2 className="text-center p-2 text-2xl sm:text-3xl font-fredoka font-bold">
        My Skills
      </h2>

      {/* Line (separate, not inside map) */}
      <div ref={lineRef} className="h-1 border-2 rounded-2xl w-24 m-auto"></div>

      {skillsData.map((section, index) => (
        <div key={index}>
          <h3 className="text-center text-xl sm:text-2xl mt-10 font-semibold font-fredoka">
            {section.title}
          </h3>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-5">
            {section.skills.map((skill, i) => (
              <SkillCard key={i} skill={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default SkillSection;
