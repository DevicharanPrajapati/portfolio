import React from "react";
import myImage from "../assets/images/Devicharan-removebg-preview.png";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-main w-full px-10 h-screen">
      <div className="w-full flex items-center  flex-col-reverse mt-10">
        <div className="hero-text w-full flex  justify-center items-center flex-col md:gap-4">
          <h2 className="intro font-orbitron text-6xl md:text-8xl font-bold tracking-[0.5rem] pt-10 ">
            DEVICHARAN
          </h2>

          <h2 className="font-fredoka flex text-4xl md:text-5xl md:flex-row gap-3 font-bold tracking-wide text-gray-700">
            <span>FRONTEND</span>
            <span>DEVELOPER</span>
          </h2>
          <div className="disc flex flex-col gap-5 justify-center items-center">
            <p className="font-space text-xs md:text-xl text-gray-700 w-0.5/2">
              Hey there! I'm Devicharan, a passionate frontend developer. <br /> I love
              creating beautiful and functional web applications.
            </p>
            <button className=" text-black px-6 py-3 rounded-lg border-2 border-black font-bold w-max hover:bg-gray-700 hover:text-white transition duration-300">
              Get In Touch
            </button>
          </div>
        </div>

        <div className="hero-image bg-amber-500  rounded-full overflow-hidden rotate-2 shadow-olive-500 shadow-xl border-2">
          <img src={myImage} alt="Devicharan" className="w-50 h-50 object-cover" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
