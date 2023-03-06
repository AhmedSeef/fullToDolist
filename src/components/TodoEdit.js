import { useState } from "react";

function TodoEdit({ item, onEdit }) {
  const [title, setTitle] = useState(item.title);
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onEdit(item.id, title);
    setTitle(" ");
  };
  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Tittle</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button">Update</button>
    </form>
  );
}

export default TodoEdit;
