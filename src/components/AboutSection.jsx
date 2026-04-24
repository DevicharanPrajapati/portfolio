import React from "react";
import Title from "./ui/Title";
import myImage from "../assets/images/Devicharan.png";

const AboutSection = () => {
    const abtTIitle = "About";
  return (
    <>
      <Title Title = {abtTIitle}/>

      <div className="flex flex-col md:flex-row gap-10 px-6 md:px-20 w-full items-center">
        
        {/* RIGHT (Image) */}
        <div className="bg-indigo-200 ">
            <span className="text-lg relative font-semibold p-2 rounded-2xl text-center rotate-4"><span className="text-2xl font-extrabold absolute top-0 left-0 text-green-500 ">.</span> Available for work</span>
          <div className="bg-amber-200 p-4 rounded-xl">
            <img
              className="w-[300px] h-[300px] object-cover rounded-lg"
              src={myImage}
              alt="profile"
            />
          </div>
        </div>

        {/* LEFT */}
        <div className="max-w-xl">
          <div className="flex flex-col gap-6">
            
            <p className="text-lg text-gray-600">
              I am a frontend developer focused on building responsive and modern 
              web applications. I work with HTML, CSS, JavaScript, and React to 
              create clean and user-friendly interfaces.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-3">
              {["HTML", "Tailwind CSS", "JavaScript", "React.js"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-indigo-500 rounded-lg text-white font-semibold hover:scale-105 transition"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>
        </div>

      </div>
    </>
  );
};

export default AboutSection;