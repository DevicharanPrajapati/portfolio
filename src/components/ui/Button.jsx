
const Button = ({btnName}) => {
  return (
    <button className="hidden md:block text-lg font-semibold px-6 py-1 rounded border-2 hover:text-indigo-600  cursor-pointer active:bg-amber-300">
      {btnName}
    </button>
  );
};

export default Button;
