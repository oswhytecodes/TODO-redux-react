import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/todoSlice";

const TodoItem = ({ todo, text }) => {
  const dispatch = useDispatch();
  console.log(todo.text);

  const handleDelete = () => {
    dispatch(deleteTodo({ id: todo.id }));
  };
  return (
    <div className="TodoItem">
      <li>
        <div>{text}</div>
        <button onClick={handleDelete}>
          <i className="fa-solid fa-xmark" />
        </button>
      </li>
    </div>
  );
};
export default TodoItem;
