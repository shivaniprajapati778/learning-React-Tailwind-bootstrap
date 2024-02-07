import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import Error from "./Error ";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
function App() {
  // let foodItems = ["Dal", "Vegetables", "Milk", "Roti", "Ghee"];

  // let textStateArr = useState("Food Item Entered by user");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];
  // console.log(`Current value of textState:${textToShow}`);

  // let [textToShow, setTextState] = useState();
  // console.log(`Current value of textState:${textToShow}`);
  let [foodItems, setFoodItems] = useState(["Sabzi", "Vegetables", "Milk"]);
  
  const onKeyDown = (event) => {
    if (event.Key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      console.log("food value entered is" + newFoodItem);
    }
    // console.log(event);
    // setTextState(event.target.value);
  };
  // let foodItems = [];
  // if (foodItems.length === 0) {
  //   return <h3> I am still hungry</h3>;
  // }
  // let emptyMessage =
  //   foodItems.length === 0 ? <h3> I am still hungry</h3> : null;
  return (
    <>
      <Container>
        {/* {foodItems.length === 0 ? <h3> I am still hungry</h3> : null}; */}
        {/* {emptyMessage} */}
        {/* {foodItems.length === 0 && <h3> I am still hungry</h3>} */}
        <h1 className="food-heading">Healthy food</h1>
        <FoodItems items={foodItems}></FoodItems>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <Error items={foodItems}></Error>
        {/* <p>{textToShow}</p> */}
      </Container>
    </>
  );
}

export default App;
