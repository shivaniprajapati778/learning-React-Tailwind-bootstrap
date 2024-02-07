import TodoItem1 from "./TodoItem1";
import AppTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem2 from "./TodoItem2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AppTodo />
      <div className="items-container">
        <TodoItem1></TodoItem1>
        <TodoItem2></TodoItem2>
      </div>
    </center>
  );
}

export default App;
