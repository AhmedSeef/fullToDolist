import { useState } from "react";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

function App() {
  const [toDoItem, setToDoItems] = useState([]);

  const editTodoById = (id, newTitle) => {
    console.log("App");
    const updatedToDoItems = toDoItem.map((item) => {
      if (item.id === id) {
        return { ...item, title: newTitle };
      }

      return item;
    });

    setToDoItems(updatedToDoItems);
  };

  const deleteTodoById = (id) => {
    const updatedToDoItems = toDoItem.filter((item) => {
      return item.id !== id;
    });
    setToDoItems(updatedToDoItems);
  };

  const handleCreateTodo = (title) => {
    const updatedToDoItems = [
      ...toDoItem,
      {
        id: Math.round(Math.random() * 9999),
        title,
      },
    ];
    setToDoItems(updatedToDoItems);
  };

  return (
    <div>
      <TodoList
        className="app"
        onEdit={editTodoById}
        toDoListData={toDoItem}
        onDelete={deleteTodoById}
      />
      <TodoCreate onCreate={handleCreateTodo} />
    </div>
  );
}

export default App;
