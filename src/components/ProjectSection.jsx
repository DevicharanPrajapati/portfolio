gsap.registerPlugin(ScrollTrigger);
import ProjectCard from "./ui/ProjectCard";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useRef } from "react";
import portfolioImg from "../assets/images/portfolio-image.png";
import ExpenseTrackerImg from "../assets/images/ExpenseTracker-Project.png";

const ProjectSection = () => {
  const lineRef = useRef();

  const projectCartData = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A modern and responsive personal portfolio showcasing my skills, projects, and web development journey.",
      imageUrl: `${portfolioImg}`,
      githubUrl: "https://github.com/DevicharanPrajapati/portfolio",
      liveUrl: "https://devicharan-portfolio.netlify.app/",
    },
    {
      id: 2,
      title: "ExpenseTracker",
      description:
        "A full-stack MERN expense tracker with JWT authentication, bcrypt password hashing, secure transaction management, and interactive analytics.",
      imageUrl: `${ExpenseTrackerImg}`,
      githubUrl: "https://github.com/DevicharanPrajapati/Expense-Tracker",
      liveUrl: "https://expense-tracker-eight-zeta-12.vercel.app/",
    },
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
    <div id="projects" className="scroll-mt-15">
      <div className="project-section  w-fullh-screen px-6 ">
        <h2 className="text-center p-2 text-3xl font-fredoka font-bold ">
          Projects
        </h2>
        <div
          ref={lineRef}
          className=" border-2 rounded-2xl w-25 m-auto mb-10"
        ></div>
        <div className="project-cardRow flex flex-wrap justify-center gap-8 p-6">
          {projectCartData.map((item) => (
            <ProjectCard
              key={item.id}
              title={item.title}
              description={item.description}
              images={item.imageUrl}
              githubUrl={item.githubUrl}
              liveUrl={item.liveUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
