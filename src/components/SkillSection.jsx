import { useRef } from "react";
import SkillCard from "./ui/SkillCard";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaCss } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { FaPython } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const SkillSection = () => {
const skillsData = [
  {
    title: "Frontend Core Skills",
    className: "skill-core",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "hover:text-orange-600" },
      { name: "CSS3", icon: FaCss, color: "hover:text-indigo-600" },
      { name: "Tailwind", icon: SiTailwindcss, color: "hover:text-indigo-400" },
      { name: "JavaScript", icon: IoLogoJavascript, color: "hover:text-yellow-500" },
      { name: "React", icon: FaReact, color: "hover:text-blue-500" },
      { name: "GitHub", icon: FaGithub, color: "hover:text-gray-800" },
    ],
  },
  {
    title: "Other Skills",
    className: "skill-other",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "hover:text-lime-600" },
      { name: "Java", icon: FaJava, color: "hover:text-indigo-600" },
      { name: "MySQL", icon: GrMysql, color: "hover:text-sky-800" },
      { name: "Python", icon: FaPython, color: "hover:text-cyan-800" },
    ],
  },
];

  const lineRef = useRef();
  useGSAP(() => {
    gsap.from(lineRef.current, {
      width: 0,
      duration: 0.7,
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
      }
    })

    // 1️⃣ First animation
    tl.from(".skill-core", {
      y: 50,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
    })

      // 2️⃣ Automatically wait karega, then run hoga
      .from(".skill-other", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.7,
        ease: "power3.out",
      });
  });


return (
  <div className="Skill-main min-h[80vh] md:min-h-screen w-full px-4 sm:px-6 md:px-10 mt-2 sm:mt-7 mb-10">
    
    <h2 className="text-center p-2 text-2xl sm:text-3xl font-fredoka font-bold">
      My Skills
    </h2>

    {/* Line (separate, not inside map) */}
    <div
      ref={lineRef}
      className="h-1 border-2 rounded-2xl w-24 m-auto"
    ></div>

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
)
};
export default SkillSection;
