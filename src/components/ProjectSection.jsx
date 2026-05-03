gsap.registerPlugin(ScrollTrigger);
import ProjectCard from "./ui/ProjectCard";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useRef } from "react";

const ProjectSection = () => {
   const lineRef = useRef();
  const projectCartData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Lorem ipsum..."
  },
  {
    id: 2,
    title: "E-Commerce Website",
    description: "Lorem ipsum..."
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Lorem ipsum..."
  },
  {
    id: 4,
    title: "E-Commerce Website",
    description: "Lorem ipsum..."
  },
  {
    id:5,
    title: "Live Chat",
    description:"skdfnisnfs dfierfwr rgoror"
  }
];
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

  return (
    <div>
      <div className="project-section w-fullh-screen px-6">
        <h2 className="text-center p-2 text-3xl font-fredoka font-bold ">
          Projects
        </h2>
        <div ref={lineRef} className=" border-2 rounded-2xl w-25 m-auto mb-10"></div>
         <div className="project-cardRow flex flex-wrap justify-center gap-8 p-6">
        {projectCartData.map((item)=>(
          <ProjectCard
           key={item.id} 
           title={item.title}
           description={item.description} />
        ))}
        </div>
        
      </div>
    </div>
  );
};

export default ProjectSection;
