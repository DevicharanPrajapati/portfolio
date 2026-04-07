
const Button = ({btnName}) => {
  return (
    <button className="hidden md:block text-md font-semibold px-6 py-2 rounded-lg border-2   hover:bg-black hover:text-white  cursor-pointer transition">
      {btnName}
    </button>
  );
};

export default Button;
