import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useRef } from "react"; 

const ContactSection = () => {
  const lineRef = useRef();
  useGSAP(() => {
    gsap.from(lineRef.current, {
      width: 0,
      duration: 0.7,
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: lineRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  });
  return (
    <div className="w-full min-h-screen px-10">
      <h2 className="text-center text-3xl font-fredoka font-semibold">
        Contact
      </h2>
      <div ref={lineRef} className="line border-2 rounded-2xl w-25 m-auto mb-10"></div>

      <div className="container flex justify-around gap-20 items-center">
        <div className="text w-[40%]">
          <h3 className="font-exo text-3xl font-bold">Let's Create Some Cool Things  Together</h3>
          <p className="font-space text-xl">
            We build cool stufs that create impact on real lifes, Contact me to
            create some Enginerring !
          </p>
        </div>

        <div className="conFrom  p-2 flex flex-col w-[50%] gap-2">
          <h3 className="font-bold font-exo text-2xl text-center">Let's Connect With Me</h3>
          <form className="p-2 flex flex-col gap-5">

            <div className="flex flex-col">
              <label htmlFor="name" className="font-space font-semibold">Full Name</label>
              <input type="text" name="name" className="py-2 rounded-md shadow-md outline-none border-1 shadow-amber-300" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="font-space font-semibold">Email</label>
              <input type="email" name="email" className="py-2 rounded-md shadow-md outline-none border-1 shadow-amber-300" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="num" className="font-space font-semibold">Mobile Number</label>
              <input type="number" name="num" className="py-2 rounded-md shadow-md outline-none border-1 shadow-amber-300"/>
            </div>

             <div className="flex flex-col">
              <label htmlFor="feedback" className="font-space font-semibold">Feedback</label>
              <textarea name="feedback" rows={2} className="py-2 rounded-md shadow-md outline-none border-1 shadow-amber-300"></textarea>
            </div>
            
            
             <div className="flex flex-col items-center">
              <button type="submit" className="border-2 font-space font-semibold py-2 px-4 w-[30%] rounded-md hover:bg-sky-400 transition-all ease-in-out">Send Message</button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
