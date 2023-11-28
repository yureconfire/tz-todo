import ListItem from "./ListItem";

function List() {
  return (
    <ul className="flex flex-col gap-6 m-12 ">
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </ul>
  );
}

export default List;
