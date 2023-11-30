import { useDispatch, useSelector } from "react-redux";

import { clearList, fetchTodos } from "./listSlice";
import ListItem from "./ListItem";
import Loader from "../../ui/Loader/Loader";
import Button from "../../ui/Button/Button";
import { BsPlusCircle } from "react-icons/bs";
import Pagination from "../Pagination/Pagination";

function List() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.list.data);
  const isLoading = useSelector((state) => state.list.isLoading);
  const dataPerPage = useSelector((state) => state.list.dataPerPage);
  const currentPage = useSelector((state) => state.list.currentPage);

  //For pagination
  const totalPages = Math.ceil(data.length / dataPerPage);
  const pages = [...Array(totalPages + 1).keys()].slice(1);
  const indexOfLastPage = currentPage * dataPerPage;
  const indexOfFirstPage = indexOfLastPage - dataPerPage;
  const visibleTodos = data.slice(indexOfFirstPage, indexOfLastPage);

  //fetch todo from API
  function handleTodo() {
    dispatch(fetchTodos());
  }

  function clearTodoList() {
    dispatch(clearList());
  }

  //Add loader while data fetching
  if (isLoading) return <Loader />;

  return (
    <>
      <ul className="flex flex-col gap-6 m-6 sm:m-12 ">
        {data.length ? (
          <div className="flex flex-col items-center gap-16">
            <Button onClick={() => clearTodoList()}>Clear list</Button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-16">
            <Button onClick={() => handleTodo()}>
              <span className="flex items-center gap-2">
                <BsPlusCircle /> Fetch some todo&apos;s
              </span>
            </Button>
            <p className="sm:text-4xl text-2xl">Or create new 😉</p>
          </div>
        )}

        {visibleTodos?.map((todo) => (
          <ListItem list={data} todo={todo} key={todo.id} />
        ))}
      </ul>
      {data.length > 0 && (
        <Pagination
          pages={pages}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}
    </>
  );
}

export default List;
