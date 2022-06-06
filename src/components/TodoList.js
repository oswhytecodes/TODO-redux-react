import { useSelector } from "react-redux";
import { selectTodos } from "../redux/todoSlice";
import TodoItem from "./TodoItem";

const TodoList = () => {
  // Now that we can add the task we need to display them.
  // For that we can just access the state using useSelector and
  // map over the todo list to display as we want.
  const todos = useSelector(selectTodos);
  console.log(todos)
  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return <TodoItem 
            key={todo.id} 
            todo={todo} 
            text={todo.task} />;
        })}
      </ul>
    </div>
  );
};
export default TodoList;
