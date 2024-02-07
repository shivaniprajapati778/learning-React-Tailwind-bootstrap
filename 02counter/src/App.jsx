import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15)
  // let counter = 15;

  const addvalue = () => {
    counter = counter + 1;
    setCounter(counter)
    // console.log("Clicked", counter);
  };

  const deletevalue = () => {
    counter = counter - 1;
    setCounter(counter)
  };
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value :{counter}</h2>
      <button onClick={addvalue}>Add Value{counter}</button>
      <br />
      <button onClick={deletevalue}>delete value{counter}</button>
      <p>footer:{counter}</p>
    </>
  );
}

export default App;
