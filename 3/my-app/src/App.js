import "./App.css";
import Input from "./components/Input";
import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(list));
    console.log(localStorage.getItem("toString"));
  }, [list]);

  const addTodo = (todo) => {
    const newList = [...list, { ...todo, id: Date.now() }];
    setList(newList);
  };

  const deleteTodo = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    localStorage.setItem("todoList", list);
  };

  const editTodo = (todo, id) => {
    const idx = list.findIndex((el) => el.id === id);
    const before = list.slice(0, idx);
    const after = list.slice(idx + 1);
    const item = list[idx];
    const newList = [...before, { ...item, title: todo }, ...after];
    setList(newList);
  };

  return (
    <div className="App">
      <Input addTodo={addTodo} />
      <TodoList list={list} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
}

export default App;
