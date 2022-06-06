import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/todoSlice";

const TodoItem = ({ todo, text }) => {
  const dispatch = useDispatch();


  const handleDelete = () => {
    dispatch(deleteTodo({ id: todo.id }));
  };
  return (
    <div className="TodoItem">
      <li>
        <div className="todo">
        <div>{todo.task}</div>
        <button className="close-btn" onClick={handleDelete}>
        <i className="fa-solid fa-xmark" />
        </button></div>
        
      </li>
    </div>
  );
};
export default TodoItem;
