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

      tlHero.current = gsap
        .timeline()
        .from("img", {
          y: 50,
          opacity: 0,
          duration: 0.5,
          ease: "expo.out",
        })
        .from(split.chars, {
          y: -40,
          opacity: 0,
          duration: 0.3,
          stagger: 0.1,
          ease: "expo.out",
        });
    }, heroRef);

    // ✅ CLEANUP (VERY IMPORTANT)
    return () => ctx.revert();
  }, []);

  return (
    <div
      className="hero-main w-full md:px-10 px-6 min-h-[80vh] md:min-h-screen items-center"
      ref={heroRef}
      id="home"
    >
      <div className="w-full flex items-center  flex-col mt-10 " ref={tlHero} >
        <div className="hero-image bg-amber-500  rounded-full overflow-hidden rotate-2 shadow-olive-500 shadow-xl border-2">
          <img src={myImage} className="md:w-40 md:h-40 w-32 h-32 " />
        </div>
        <div className="hero-text w-full flex  justify-center items-center flex-col md:gap-4">
          <h2 className="intro font-orbitron text-2xl sm:text-6xl md:text-8xl font-bold tracking-[.5rem] md:pt-10 pt-5  ">
            DEVICHARAN
          </h2>

          <h2 className="font-fredoka flex text-xl sm:text-4xl md:text-5xl md:flex-row gap-3 font-bold tracking-wide text-gray-700">
            <span className="text-indigo-600">FULL-STACK</span>
            <span className="text-indigo-600">DEVELOPER</span>
          </h2>
          <div className="disc flex flex-col gap-5 justify-center items-center">
            <p className="font-space text-md md:text-md text-gray-700 max-w-2xl mx-auto text-center ">
              I'm a Full-Stack MERN Developer passionate about building modern,
              responsive, and secure web applications with clean UI and
              efficient backend solutions.
            </p>
            <div className="flex gap-6">
              <button className=" text-black bg-indigo-400 px-2 py-2 md:px-6 md:py-3 rounded-lg border-2 border-black font-bold w-max hover:bg-indigo-500  transition duration-300 cursor-pointer">
                <a href="#projects">Explore My Work</a>
              </button>

              <button className=" text-black px-2 py-2 md:px-6 md:py-3 rounded-lg border-2 border-black font-bold w-max hover:bg-indigo-400 transition duration-300 cursor-pointer">
                <a href="#contact">Contact Me</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
