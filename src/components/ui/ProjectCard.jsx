import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { SiGsap } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const ProjectCard = ({ title, description, images, githubUrl, liveUrl }) => {
  return (
    <div className="min-h-100 card w-80 p-4 flex justify-between flex-col gap-3 border-2 rounded-2xl hover:shadow-xl shadow-gray-400 transition-all ease-in-out">
      <div className="rounded-xl overflow-hidden shadow-2xs shadow-olive-500 hover:shadow-2xl hover:scale-05 transition-all duration-300">
        <img src={images} />
      </div>
      <h3 className="font-fredoka font-semibold text-xl ">{title}</h3>
      <p>{description}</p>

      {/* <div className="stack flex justify-around gap-1 border-2 p-2 rounded-2xl">
        <SiGsap size={30} />
        <IoLogoJavascript size={30} />
        <FaReact size={30} />
        <SiTailwindcss size={30} />
      </div> */}
      <div className="buttons flex justify-between">
        <button className="p-2 border-2 px-4 rounded-b-lg hover:text-slate-600 font-exo font-bold flex justify-center items-center gap-1">
          <a href={githubUrl}>GitHub</a>
          <FaGithub />
        </button>
        <button className="border-2 px-4 rounded-b-lg hover:text-red-600 font-exo font-bold flex justify-center items-center gap-1">
          <a href={liveUrl}>Live</a>
          <MdLiveTv />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
