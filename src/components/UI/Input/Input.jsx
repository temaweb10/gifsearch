import React from "react";
import styles from "../Input/Input.module.css";
function Input(props) {
  return <input className={styles.input} type="search" {...props} />;
}

export default Input;
