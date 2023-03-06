import { useState } from "react";
import TodoEdit from "./TodoEdit";

function TodoShow({ item, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(item.id);
  };

  const handleEditClick = (id, newTitle) => {
    setShowEdit(!showEdit);
    onEdit(id, newTitle);
  };

  let content = <h3>{item.title}</h3>;
  if (showEdit) {
    content = <TodoEdit item={item} onEdit={handleEditClick} />;
  }

  return (
    <div className="book-show">
      <img
        alt="todoItems"
        src={`https://picsum.photos/seed/${item.id}/300/200`}
      />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoShow;
