import style from "./Display.module.css";
const Display=({displayValue})=>{
return(
    <>
      <input className={style.display} type="Text"  value={displayValue} readOnly/>
    </>
)
}
export default Display;