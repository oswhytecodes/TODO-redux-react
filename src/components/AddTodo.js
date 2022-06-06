import { useDispatch } from "react-redux";
import React, { useState } from "react";
//  import the action creator 'add-task' from your slice
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
    dispatch(addTodo({ text: value }));
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
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
export default AddTodo;
