import { useDispatch, useSelector } from "react-redux";

import { fetchTodos } from "./listSlice";
import ListItem from "./ListItem";
import Loader from "../../ui/Loader/Loader";
import Button from "../../ui/Button/Button";

function List() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.list.isLoading);
  const data = useSelector((state) => state.list.data);

  //fetch todo from API
  function handleTodo() {
    dispatch(fetchTodos());
  }

  //Add loader while data fetching
  if (isLoading) return <Loader />;

  return (
    <ul className="flex flex-col gap-6 m-12 ">
      {data.length ? null : (
        <div className="flex flex-col items-center gap-16">
          <Button onClick={() => handleTodo()}>Fetch some todo&apos;s</Button>
          <p className="text-4xl">Or create new 😉</p>
        </div>
      )}
      {data?.map((todo) => (
        <ListItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default List;
