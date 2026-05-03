import React from "react";
import myImage from "../assets/images/Devicharan-removebg-preview.png";
import "./HeroSection.css";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import SplitText from "gsap/SplitText";
gsap.registerPlugin(SplitText, useGSAP);



const HeroSection = () => {
  const tlHero = useRef();
  const heroRef = useRef();
  useGSAP(() => {
    // ✅ scope everything to this component
    const ctx = gsap.context(() => {

      const split = new SplitText(".intro", {
        type: "words, chars",
      });

      tlHero.current = gsap.timeline()
        .from("img", {
          y: 50,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        })
        .from(split.chars, {
          y: -40,
          opacity: 0,
          duration:.3,
          stagger: 0.1,
          ease: "expo.out",
        });

    }, heroRef);

    // ✅ CLEANUP (VERY IMPORTANT)
    return () => ctx.revert();
  }, []);

   

  return (
    <div className="hero-main w-full md:px-10 px-6 min-h-[80vh] md:min-h-screen" ref={heroRef}>
      <div className="w-full flex items-center  flex-col mt-20" ref={tlHero}>
        <div className="hero-image bg-amber-500  rounded-full overflow-hidden rotate-2 shadow-olive-500 shadow-xl border-2">
          <img src={myImage} className="md:w-40 md:h-40 w-30 h-30" />
        </div>
        <div className="hero-text w-full flex  justify-center items-center flex-col md:gap-4">
          <h2 className="intro font-orbitron text-2xl sm:text-6xl md:text-8xl font-bold tracking-[.5rem] md:pt-10 pt-5  ">
            DEVICHARAN
          </h2>

          <h2 className="font-fredoka flex text-xl sm:text-4xl md:text-5xl md:flex-row gap-3 font-bold tracking-wide text-gray-700">
            <span>FRONTEND</span>
            <span>DEVELOPER</span>
          </h2>
          <div className="disc flex flex-col gap-5 justify-center items-center">
            <p className="font-space text-xs md:text-xl text-gray-700 w-0.5/2 text-center">
              Hey there! I'm Devicharan, a passionate frontend developer.I love creating beautiful and functional web applications.
            </p>
            <button className=" text-black px-2 py-2 md:px-6 md:py-3 rounded-lg border-2 border-black font-bold w-max hover:bg-gray-700 hover:text-white transition duration-300 cursor-pointer">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
