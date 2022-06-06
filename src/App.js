import "./index.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="App">
      <h1>My todos</h1>
      {/* input form  */}
      <AddTodo />
      {/* List to hold all the new Todos */}
      <TodoList />
    </div>
  );
};

export default App;
