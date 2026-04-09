import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import devAnimation from "../assets/dev-animation.json";

const HeroSection = () => {
  const container = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current,
      animationData: devAnimation,
      loop: true,
    });

    return () => anim.destroy(); // cleanup
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center min-h-screen px-20">
      
      {/* LEFT */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">

  {/* SMALL INTRO */}
  <p className="text-sm text-gray-400 uppercase tracking-widest">
    Welcome to my portfolio
  </p>

  {/* MAIN HEADING */}
  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
    Hi, I'm{" "}
    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
      Devicharan
    </span>
  </h1>

  {/* SUBTEXT */}
  <p className="text-gray-500 text-lg max-w-md">
    I build modern, responsive and high-performance web applications 
    using React and JavaScript.
  </p>

  {/* BUTTONS */}
  <div className="flex gap-4 justify-center md:justify-start">
    
    <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
      View Projects
    </button>

    <button className="border border-gray-400 px-6 py-3 rounded-lg hover:bg-gray-100 transition">
      Contact Me
    </button>

  </div>

</div>
      {/* RIGHT */}
      <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
        <div ref={container} className="w-[300px] md:w-[450px]" />
      </div>

    </div>
  );
};

export default HeroSection;