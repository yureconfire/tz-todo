import { BsPlusCircle } from "react-icons/bs";

function Button() {
  return (
    <button className=" bg-indigo-400 py-2 px-2 rounded-lg text-white flex items-center gap-2 justify-center text-lg hover:bg-indigo-500 transition-all ease-in-out">
      <BsPlusCircle />
      <span>Add new todo</span>
    </button>
  );
}

export default Button;
