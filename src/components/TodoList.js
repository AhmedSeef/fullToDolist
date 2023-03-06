import BookShow from "./TodoShow";

function TodoList({ toDoListData, onDelete, onEdit }) {
  const handleBooks = toDoListData.map((item, index) => {
    return (
      <BookShow item={item} key={item.id} onDelete={onDelete} onEdit={onEdit} />
    );
  });
  return <div className="item-list">{handleBooks}</div>;
}

export default TodoList;
