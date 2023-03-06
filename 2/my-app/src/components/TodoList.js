import { useState } from "react";

const IsEditTo = ({ todo, deleteTodo, editTodo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editableText, setEditableText] = useState("");

  const isEditTemplate = isEdit ? (
    <input
      value={editableText}
      onChange={(e) => setEditableText(e.target.value)}
      placeholder="EDIT"
    />
  ) : (
    <h1 onClick={() => setIsEdit(true)}>{todo.title}</h1>
  );

  return (
    <div key={`todo-${todo.id}`}>
      {isEditTemplate}
      <p>{todo.desc}</p>
      <button onClick={() => deleteTodo(todo.id)}>Удалить</button>
      <button
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
    <div>
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
