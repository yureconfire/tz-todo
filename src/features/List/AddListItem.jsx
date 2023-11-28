import { useState } from "react";
import Button from "../../ui/Button/Button";

function AddListItem() {
  const [todoForm, setTodoForm] = useState("");

  return (
    <form className="flex gap-4 items-center justify-center mt-12">
      <input
        type="text"
        className="py-2 w-4/6 rounded-lg border-2 border-solid focus:outline-none border-indigo-200 focus:border-indigo-500 focus:ring-1 transition-all ease-in-out active:border-indigo-500 placeholder:pl-1 text-lg"
        placeholder="Add new todo"
        value={todoForm}
        onChange={(e) => setTodoForm(e.target.value)}
      />
      {todoForm ? <Button /> : ""}
    </form>
  );
}

export default AddListItem;
