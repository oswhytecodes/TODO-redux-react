import { useDispatch } from "react-redux";
import React, { useState } from "react";
//  import the action creator 'addTodo' from  slice
import { addTodo } from "../redux/todoSlice";

const AddTodo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch the value from the input
    dispatch(addTodo({ value: value }));
    setValue("");
  };

  return (
    //    use an input to add each todo
    <div className="AddTodo">
      
        <input
          onChange={handleChange}
          value={value}
          type="text"
          placeholder="Add todo..."
          className="todo-input"
        />
        <button className="add-btn" onClick={handleSubmit}>
          <i className="fa-solid fa-square-plus"></i>
        </button>
      
    </div>
  );
};
export default AddTodo;
