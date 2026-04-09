import Logo from "../ui/Logo";
import Button from "../ui/Button";

const Header = () => {
  const btnName = "Login";

  return (
    <nav className="flex justify-between  w-full p-4 items-center">
      <Logo />
        <ul className=" hidden md:flex gap-12 text-md font-semibold  items-center">
          <li className="cursor-pointer hover:text-indigo-700 ">Home</li>
          <li className="cursor-pointer  hover:text-indigo-700">About</li>
          {/* <li className="cursor-pointer hover:text-indigo-700 ">Skills</li> */}
          <li className="cursor-pointer hover:text-indigo-700 ">Projects</li>
          <li className="cursor-pointer hover:text-indigo-700 ">Contact</li>
          <li> <Button btnName = {btnName} /></li>
        </ul>
        <button className="md:hidden text-3xl hover:text-indigo-600 font-bold">☰</button>
      </nav>
  
  );
};

export default Header;
