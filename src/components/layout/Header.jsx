import Button from "../ui/Button";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";

const Header = () => {
  const btnName = "Login";
  const navRef = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from("p", {
        y: -20,
        opacity: 0,
        duration: .7,
        ease: "power3.out",
      })

      .from("li", {
        y: -10,
        opacity: 0, 
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.2,
      }, "-=0.3");


    },
    { scope: navRef },
  );

  return (
    //glassmorphism effect navbar
  
    <nav className="flex justify-between w-full p-2 px-8 items-center sticky top-0 bg-white/30 backdrop-blur-sm z-50 " ref={navRef}>
     
        <p className="text-3xl font-serif font-bold ml-5 text-indigo-400">Devicharan</p>
      
      <ul className=" hidden md:flex gap-12 text-md font-semibold  items-center">
        <li className="cursor-pointer hover:text-indigo-700 ">Home</li>
        <li className="cursor-pointer  hover:text-indigo-700">About</li>
        {/* <li className="cursor-pointer hover:text-indigo-700 ">Skills</li> */}
        <li className="cursor-pointer hover:text-indigo-700 ">Projects</li>
        <li className="cursor-pointer hover:text-indigo-700 ">Contact</li>
        <li>
          {" "}
          <Button btnName={btnName} />
        </li>
      </ul>
      <button className="md:hidden text-3xl hover:text-indigo-600 font-bold">
        ☰
      </button>
    </nav>
  );
};

export default Header;
