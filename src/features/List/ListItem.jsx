import { BsFillTrashFill, BsPencilFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useState } from "react";

import { completeTodo, deleteTodo, editTodo } from "./listSlice";
import Button from "../../ui/Button/Button";

function ListItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false); //State for show input
  const [changedTodo, setChangedTodo] = useState(""); //State for form

  const dispatch = useDispatch();

  //Delete todo func.
  function handleDelete() {
    dispatch(deleteTodo(todo.id));
  }

  //Change todo status
  function toggleCompleted() {
    dispatch(completeTodo(todo.id));
  }

  //Edit  todo func.
  function handleSubmit(e) {
    e.preventDefault();
    if (!changedTodo) return;
    dispatch(editTodo({ id: todo.id, value: changedTodo })); //Create 2 actions.payload
    setChangedTodo(""); //Clear edit form
    setIsEditing(false); //Hide edit form
  }

  return (
    <>
      <li
        className={`${
          todo.completed
            ? "bg-green-400 line-through hover:bg-green-500 transition-all"
            : "bg-indigo-400"
        } p-6  rounded-lg flex justify-between text-gray-50 font-semibold text-xl hover:bg-indigo-500 transition-all`}
      >
        <p>
          <button onClick={toggleCompleted}>
            {todo.completed ? "✅" : "❌"}
          </button>
          {todo.title}
        </p>

        <div className="flex gap-3">
          <button onClick={() => setIsEditing((e) => !e)}>
            <BsPencilFill className="cursor-pointer text-2xl" />
          </button>
          <button onClick={handleDelete}>
            <BsFillTrashFill className="cursor-pointer text-2xl" />
          </button>
        </div>
      </li>
      {isEditing && (
        <form className="flex gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            className="py-2 w-4/6 rounded-lg border-2 border-solid focus:outline-none border-indigo-200 focus:border-indigo-500 focus:ring-1 transition-all ease-in-out active:border-indigo-500 placeholder:pl-1 text-lg"
            placeholder="👆 Edit your todo"
            value={changedTodo}
            onChange={(e) => setChangedTodo(e.target.value)}
          />
          {<Button>Edit</Button>}
        </form>
      )}
    </>
  );
}

export default ListItem;
