import styles from "./Item.module.css";
const Items = ({ foodItems, bougth,handleBuyButton }) => {
  return (
    <>
      <li className={`${styles["kg-item"]} ${bougth && 'active'} list-group-item active`}>
        <span className={`${styles["kg-span"]}`}>{foodItems}</span>
        <button className={`${styles.button} btn btn-info`} onClick={handleBuyButton}
        >
          buy
          </button>
      </li>
    </>
  );
};
export default Items;
