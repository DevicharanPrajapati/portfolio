import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { SiGsap } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const ProjectSection = () => {
  useGSAP(() => {
    gsap.from(".project-line", {
      width: 0,
      duration: 0.5,
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".project-line",
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <div>
      <div className="project-section w-full h-screen">
        <h2 className="text-center p-2 text-3xl font-fredoka font-bold ">
          Projects
        </h2>
        <div className="project-line border-2 rounded-2xl w-25 m-auto"></div>
        <div className="project-cardRow flex justify-around gap-10 p-4">
          <div className="card w-80 p-4 flex justify-between flex-col gap-3 shadow-2xl shadow-amber-500 rounded-2xl">
            <div className="rounded-2xl overflow-hidden shadow-2xs shadow-olive-500">
              <img src="https://png.pngtree.com/thumb_back/fh260/background/20240610/pngtree-computer-of-a-programmer-with-lines-code-of-software-image_15746003.jpg" />
            </div>
            <h3 className="font-fredoka font-semibold text-2xl">Portfolio Website</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quaerat nam, odio in sequi provident ex! Iusto,</p>
            <div className="buttons flex justify-between">
              <button className="p-2 border-2 px-4 rounded-b-lg hover:text-slate-600 font-exo font-bold flex justify-center items-center gap-1">GitHub<FaGithub /></button>
              <button className="border-2 px-4 rounded-b-lg hover:text-red-600 font-exo font-bold flex justify-center items-center gap-1">Live<MdLiveTv /></button>
            </div>
          </div>

           <div className="card w-80 p-4 flex justify-between flex-col gap-3 shadow-2xl shadow-amber-500 rounded-2xl">
            <div className="rounded-2xl overflow-hidden shadow-2xs shadow-olive-500">
              <img src="https://png.pngtree.com/thumb_back/fh260/background/20240610/pngtree-computer-of-a-programmer-with-lines-code-of-software-image_15746003.jpg" />
            </div>
            <h3 className="font-fredoka font-semibold text-2xl">Portfolio Website</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quaerat nam, odio in sequi provident ex! Iusto</p>

            <div className="stack flex justify-around gap-1 border-2 p-2 rounded-2xl">
             <SiGsap size={30} />
             <IoLogoJavascript size={30}/>
             <FaReact size={30}/>
             <SiTailwindcss size={30}/>
            </div>
             <div className="buttons flex justify-between">
              <button className="p-2 border-2 px-4 rounded-b-lg hover:text-slate-600 font-exo font-bold flex justify-center items-center gap-1">GitHub<FaGithub /></button>
              <button className="border-2 px-4 rounded-b-lg hover:text-red-600 font-exo font-bold flex justify-center items-center gap-1">Live<MdLiveTv /></button>
            </div>
          </div>


           <div className="card w-80 p-4 flex justify-between flex-col gap-3 shadow-2xl shadow-amber-500 rounded-2xl">
            <div className="rounded-2xl overflow-hidden shadow-2xs shadow-olive-500">
              <img src="https://png.pngtree.com/thumb_back/fh260/background/20240610/pngtree-computer-of-a-programmer-with-lines-code-of-software-image_15746003.jpg" />
            </div>
            <h3 className="font-fredoka font-semibold text-2xl">Portfolio Website</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quaerat nam, odio in sequi provident ex! Iusto, debitis fugiat libero, labore necessitatibus ut non aliquam id ad modi voluptatem nihil?</p>
             <div className="buttons flex justify-between">
              <button className="p-2 border-2 px-4 rounded-b-lg hover:text-slate-600 font-exo font-bold flex justify-center items-center gap-1">GitHub<FaGithub /></button>
              <button className="border-2 px-4 rounded-b-lg hover:text-red-600 font-exo font-bold flex justify-center items-center gap-1">Live<MdLiveTv /></button>
            </div>
          </div>


           <div className="card w-80 p-4 flex justify-between flex-col gap-3 shadow-2xl shadow-amber-500 rounded-2xl">
            <div className="rounded-2xl overflow-hidden shadow-2xs shadow-olive-500">
              <img src="https://png.pngtree.com/thumb_back/fh260/background/20240610/pngtree-computer-of-a-programmer-with-lines-code-of-software-image_15746003.jpg" />
            </div>
            <h3 className="font-fredoka font-semibold text-2xl">Portfolio Website</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quaerat nam, odio in sequi provident ex! Iusto, debitis fugiat libero, labore necessitatibus ut non aliquam id ad modi voluptatem nihil?</p>
             <div className="buttons flex justify-between">
              <button className="p-2 border-2 px-4 rounded-b-lg hover:text-slate-600 font-exo font-bold flex justify-center items-center gap-1">GitHub<FaGithub /></button>
              <button className="border-2 px-4 rounded-b-lg hover:text-red-600 font-exo font-bold flex justify-center items-center gap-1">Live<MdLiveTv /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
