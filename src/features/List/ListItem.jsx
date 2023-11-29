import { BsFillTrashFill, BsPencilFill } from "react-icons/bs";
import { useDispatch } from "react-redux";

import { deleteTodo } from "./listSlice";

function ListItem({ todo }) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteTodo(todo.id));
  }

  return (
    <li className="p-6 bg-indigo-400 rounded-lg flex justify-between text-gray-50 font-semibold text-xl">
      <p>{todo.title}</p>

      <div className="flex gap-3">
        <button>
          <BsPencilFill className="cursor-pointer text-2xl" />
        </button>
        <button onClick={handleDelete}>
          <BsFillTrashFill className="cursor-pointer text-2xl" />
        </button>
      </div>
    </li>
  );
}

export default ListItem;
