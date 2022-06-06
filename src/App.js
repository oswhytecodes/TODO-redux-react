import "./index.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Another Todo</h1>
      </header>
      <section>
        {/* input form  */}
        <AddTodo />
        {/* List to hold all the new Todos */}
        <TodoList />
      </section>
    </div>
  );
};

export default App;
