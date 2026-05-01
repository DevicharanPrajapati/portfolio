import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import "./Header.css";
import { GiFallingStar } from "react-icons/gi";
import { CiSaveDown2 } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io";
import ProfileCard from "../ui/ProfileCard";
gsap.registerPlugin(useGSAP);

const Header = () => {
  const navRef = useRef();
  const tl = useRef();
  const menuRef = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from("p", {
        x: -10,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      })

        .from(
          "li",
          {
            opacity: 0,
            duration: 0.3,
            ease: "power3.out",
            stagger: 0.2,
          },
          "-=0.2",
        );
    },
    { scope: navRef },
  );

  const menuOnClick = () => {
    tl.current.reversed(!tl.current.reversed());
  };
  useGSAP(() => {
    tl.current = gsap
      .timeline()
      .to(menuRef.current, {
        x: "0%",
        duration: 0.5,
        ease: "power3.out",
      })
      .from(".mobile-menu li", {
        y: -20,
        opacity: 0,
        stagger: 0.2,
      })
      .from(
        ".mobile-menu button",
        {
          y: -20,
          opacity: 0,
        },
        "-=0.3",
      )
      .from(
        ".mobile-menu .close-menu",
        {
          x: 20,
          opacity: 0,
        },
        "-=0.5",
      )
      .reverse();
  }, []);
  return (
    <>
      <nav
        className="flex justify-between w-full p-2 px-8 items-center sticky top-0 bg-white/30 backdrop-blur-sm z-50 overflow-x-hidden "
        ref={navRef}
      >
        <p className="flex gap-1 justify-center items-center font-orbitron text-3xl font-bold ">
          <GiFallingStar size={30} color="black" />
          Devicharan
        </p>

        <ul className=" hidden md:flex gap-12 text-md  items-center font-exo">
          <li className="cursor-pointer hover:text-indigo-700 ">Home</li>
          <li className="cursor-pointer  hover:text-indigo-700">Skills</li>
          <li className="cursor-pointer hover:text-indigo-700 ">Projects</li>
          <li className="cursor-pointer hover:text-indigo-700 ">Profile</li>
          <li className="cursor-pointer hover:text-indigo-700 ">Contact</li>
        </ul>
        <button className="flex justify-center gap-2 items-center px-4 py-2 border-2 border-black rounded-md text-bold font-exo text-md">
          <CiSaveDown2 size={20} />
          Resume
        </button>
        <button
          onClick={menuOnClick}
          className=" text-3xl hover:text-indigo-600 font-bold cursor-pointer md:hidden"
        >
          ☰
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className="mobile-menu fixed top-0 right-0 w-[70%] h-screen bg-white z-50 translate-x-full backdrop:blur-sm p-5"
        ref={menuRef}
      >
        <IoIosCloseCircle
          size={40}
          className="close-menu absolute top-4 right-5 cursor-pointer"
          onClick={menuOnClick}
        />
        <div className="flex flex-col gap-10">
          <ul className="flex flex-col gap-8 text-xl pl-10 font-exo mt-10 cursor-pointer">
            <li>Home</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
          <button className="flex justify-center gap-2 items-center px-4 py-2 border-2 border-black rounded-md text-bold font-exo text-md cursor-pointer">
            <CiSaveDown2 size={20} />
            Resume
          </button>
        </div>
      </div>
      {/* <ProfileCard /> */}
    </>
  );
};

export default Header;
