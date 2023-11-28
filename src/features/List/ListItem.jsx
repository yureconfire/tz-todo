import { BsFillTrashFill, BsPencilFill } from "react-icons/bs";

function ListItem() {
  return (
    <li className="p-6 bg-indigo-400 rounded-lg flex justify-between text-gray-50 font-semibold text-xl">
      <p>TEST</p>
      <div className="flex gap-3">
        <button>
          <BsPencilFill className="cursor-pointer text-2xl" />
        </button>
        <button>
          <BsFillTrashFill className="cursor-pointer text-2xl" />
        </button>
      </div>
    </li>
  );
}

export default ListItem;
