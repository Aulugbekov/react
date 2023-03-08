import { useState } from "react";

const IsEditTo = ({ todo, deleteTodo, editTodo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editableText, setEditableText] = useState("");

  const isEditTemplate = isEdit ? (
    <input
      className="input"
      value={editableText}
      onChange={(e) => setEditableText(e.target.value)}
      placeholder="EDIT"
    />
  ) : (
    <h1 className="cardTitle" onClick={() => setIsEdit(true)}>
      {todo.title}
    </h1>
  );

  return (
    <div className="listWrapper" key={`todo-${todo.id}`}>
      {isEditTemplate}
      <p>{todo.desc}</p>
      <button className="btnCard" onClick={() => deleteTodo(todo.id)}>
        Удалить
      </button>
      <button
        className="btnCard"
        onClick={() => {
          if (!editableText.trim()) {
            return;
          }
          editTodo(editableText, todo.id);
          setIsEdit(false);
        }}
      >
        Изменить
      </button>
    </div>
  );
};

const TodoList = ({ list, deleteTodo, editTodo }) => {
  return (
    <div className="formWrapper">
      {list.map((todo) => (
        <IsEditTo
          key={`todo-${todo.id}`}
          todo={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
