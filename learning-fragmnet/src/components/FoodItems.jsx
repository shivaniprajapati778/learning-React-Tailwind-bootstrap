import { useState } from "react";
import Items from "../Items";
const FoodItems = ({ items }) => {
  let [activeItems, setActiveitems] = useState([]);
  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveitems(newItems);
  };
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Items
            key={item}
            foodItems={item}
            bougth={activeItems.includes(item)}
            // handleBuyButton={() => console.log(`${item} Bougth`)}></Items>
            handleBuyButton={(event) => onBuyButton(item)}></Items>
        ))}
      </ul>
    </>
  );
};
export default FoodItems;
