import Button from "../ui/Button";

const Footer = () => {
  const footerBtn = "Hire Me";
  return (
    <footer className="block md:flex justify-between items-center h-auto w-full gap-20 px-4">
      <div>
        <div className="inline-block hover:bg-yellow-400 px-4 py-2 border-4 cursor-pointer border-black shadow-[6px_6px_0px_black]">
          <p className="text-xl font-bold">Devicharan</p>
        </div>
        <p className="mt-4 text-md">
          I am a frontend developer who loves <br />
          building clean, responsive, and user-friendly websites. <br />I focus
          on simple design and smooth user experience.
        </p>
      </div>

      <div>
        <p className="font-bold border-b-2 mb-2">Quick Links</p>
        <ul>
          <li>Home</li>
          <li>About</li>
          {/* <li>Skills</li> */}
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <p className="font-bold border-b-2 mb-2">Contact</p>
        <ul className="mb-2">
          <li>devicharan2724@gmail.com</li>
          <li>+7880860971</li>
          <li>Banda, Utter Pradesh</li>
        </ul>
        <Button btnName={footerBtn} />
      </div>
    </footer>
  );
};

export default Footer;
