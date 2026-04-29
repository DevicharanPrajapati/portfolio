
import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { SiGsap } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
const ProjectCard = ({ title, description}) => {
 
  return (
      <div className="card w-80 p-4 flex justify-between flex-col gap-3 border-1 rounded-2xl hover:shadow-xl shadow-gray-400 transition-all ease-in-out">
        <div className="rounded-2xl overflow-hidden shadow-2xs shadow-olive-500">
          <img src="https://png.pngtree.com/thumb_back/fh260/background/20240610/pngtree-computer-of-a-programmer-with-lines-code-of-software-image_15746003.jpg" />
        </div>
        <h3 className="font-fredoka font-semibold text-xl">
          {title}
        </h3>
        <p>
          {description}
        </p>

        <div className="stack flex justify-around gap-1 border-2 p-2 rounded-2xl">
          <SiGsap size={30} />
          <IoLogoJavascript size={30} />
          <FaReact size={30} />
          <SiTailwindcss size={30} />
        </div>
        <div className="buttons flex justify-between">
          <button className="p-2 border-2 px-4 rounded-b-lg hover:text-slate-600 font-exo font-bold flex justify-center items-center gap-1">
            GitHub
            <FaGithub />
          </button>
          <button className="border-2 px-4 rounded-b-lg hover:text-red-600 font-exo font-bold flex justify-center items-center gap-1">
            Live
            <MdLiveTv />
          </button>
        </div>
      </div>
  
  );
};

export default ProjectCard;
