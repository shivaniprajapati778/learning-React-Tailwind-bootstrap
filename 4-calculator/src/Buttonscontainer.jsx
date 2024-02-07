import style from "./Buttonsconatiner.module.css";
const Buttonscontainer = ({ onButtonclick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className={style.buttonscontainer}>
        {buttonNames.map((buttonName) => (
          <button
            className={style.button}
            onClick={() => onButtonclick(buttonName)}>
            {buttonName}
          </button>
        ))}
      </div>
    </>
  );
};
export default Buttonscontainer;
