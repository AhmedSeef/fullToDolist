import { useState } from "react";

function TodoCreate({ onCreate }) {
  const [title, setTitle] = useState("");
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setTitle(" ");
    onCreate(title);
  };
  return (
    <div className="book-create">
      <h3>Add a item</h3>
      <form onSubmit={handleSubmit}>
        <label>Tittle</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Create</button>
      </form>
    </div>
  );
}

export default TodoCreate;
