import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    // adds a new todo
    addTodo: (state, action) => {
      const newTodo = {
        id: uuidv4(),
        // action.payload will be the value being inputted
        task: action.payload.value,
        isComplete: false
      };
      state.push(newTodo);
    },
    //  deletes a todo
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

// selector
export const selectTodos = (state) => state.todos;
//  export action creators
//  these are what get dispatched when an action takes place in the UI
export const { addTodo, deleteTodo } = todoSlice.actions;
// export the slice reducer
export default todoSlice.reducer;
