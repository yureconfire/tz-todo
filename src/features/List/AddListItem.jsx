import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "./listSlice";
import Button from "../../ui/Button/Button";
import generateRandomId from "../../utils/generateRandomId";

function AddListItem() {
  const [todoForm, setTodoForm] = useState(""); //Form state
  const dispatch = useDispatch();

  //Add new todo
  const handleSubmit = function (e) {
    e.preventDefault(); //Disable page update
    if (!todoForm) return; //Protect if form is empty

    //Create new todo object
    const newTodo = {
      userId: 1,
      id: generateRandomId(),
      title: todoForm,
      completed: false,
    };

    dispatch(addTodo(newTodo)); //Add new todo object to array
    setTodoForm(""); //Clear form
  };

  return (
    <form
      className="flex gap-4 items-center justify-center mt-8 ml-2 mr-2 sm:mt-12"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="py-2 w-4/6 rounded-lg border-2 border-solid focus:outline-none border-indigo-200 focus:border-indigo-500 focus:ring-1 transition-all ease-in-out active:border-indigo-500 placeholder:pl-1 text-lg"
        placeholder="Add new todo"
        value={todoForm}
        onChange={(e) => setTodoForm(e.target.value)}
      />
      {todoForm ? (
        <Button>
          <span className="">Add new todo</span>
        </Button>
      ) : (
        ""
      )}
    </form>
  );
}

export default AddListItem;
