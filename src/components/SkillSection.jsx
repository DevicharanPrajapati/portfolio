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
import { useRef } from "react";

const SkillSection = () => {
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
    <div>
      <div className="Skill-main min-h-screen w-full px-10  mt-7">
        <h2 className="text-center p-2 text-3xl font-fredoka font-bold ">
          My Skills
        </h2>
        <div ref={lineRef} className=" h-1 border-2 rounded-2xl w-25 m-auto"></div>

        <h3 className="skill-core text-center text-2xl mt-10 font-semibold font-fredoka">
          Frontend Core Skills
        </h3>
        <div className="skill-core flex justify-center gap-10 mt-5">
          <div>
            <FaHtml5
              size={80}
              className="html5 border-2 p-2 hover:text-orange-600 transition-colors ease-in-out"
            />
            <p className="text-center font-fredoka font-semibold">HTML5</p>
          </div>

          <div>
            <FaCss
              size={80}
              className="border-2 p-2  hover:text-indigo-600 transition-colors ease-in-out"
            />
            <p className="text-center font-fredoka font-semibold">CSS3</p>
          </div>

          <div>
            <SiTailwindcss
              size={80}
              className="border-2 p-2  hover:text-indigo-400 transition-colors ease-in-out"
            />
            <p className="text-center font-fredoka font-semibold">
              Tailwind CSS
            </p>
          </div>
          <div>
            <IoLogoJavascript
              size={80}
              className="border-2 p-2  hover:text-yellow-500 transition-colors ease-in-out"
            />
            <p className="text-center font-fredoka font-semibold ">
              JavaScript
            </p>
          </div>

          <div>
            <FaReact
              size={80}
              className="border-2 p-2  hover:text-blue-500 transition-colors ease-in-out"
            />
            <p className="text-center font-fredoka font-semibold ">React</p>
          </div>

          <div>
            <FaGithub
              size={80}
              className="border-2 p-2  hover:text-gray-800 transition-colors ease-in-out"
            />
            <p className="text-center font-fredoka font-semibold">GitHub</p>
          </div>
        </div>

        <h3 className="skill-other text-center text-2xl mt-8 font-fredoka font-semibold">
          Other Skills
        </h3>
        <div className="skill-other flex justify-center gap-10 mt-5 ">
          <div>
            <FaNodeJs
              size={80}
              className="border-2 p-2  hover:text-lime-600 transition-colors ease-in-out"
             
            />
            <p className="text-center font-fredoka font-semibold">Node.js</p>
          </div>
          <div>
            <FaJava
              size={80}
              className="border-2 p-2  hover:text-indigo-600 transition-colors ease-in-out"
            />
            <p className="text-center font-fredoka font-semibold ">Java</p>
          </div>
          <div>
            <GrMysql
              size={80}
              className="border-2 p-2  hover:text-sky-800 transition-colors ease-in-out"
            />
            <p className="text-center font-fredoka font-semibold">MySQL</p>
          </div>
          <div>
            <FaPython
              size={80}
              className="border-2 p-2  hover:text-cyan-800 transition-colors ease-in-out"
            />
            <p className="text-center font-fredoka font-semibold">Python</p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default SkillSection;
