import "./App.css";
import style from "./App.module.css";
import Display from "./Display";
import Buttonscontainer from "./Buttonscontainer";
import { useState } from "react";
function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonclick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result=eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <>
      <div className={style.calculator}>
        <Display displayValue={calVal}></Display>
        <Buttonscontainer onButtonclick={onButtonclick}></Buttonscontainer>
      </div>
    </>
  );
}

export default App;
