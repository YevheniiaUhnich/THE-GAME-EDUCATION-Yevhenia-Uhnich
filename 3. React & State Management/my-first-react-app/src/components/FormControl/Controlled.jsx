import { useState } from "react";
import s from "./Uncontrolled.module.css";

const Controlled = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Type here" className={s.input} />
      <p className={s.text}>You type: {value}</p>
    </>
  )
}
export default Controlled;