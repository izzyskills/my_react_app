import React from "react";
import styles from "./Button.module.css";
const Counter = () => {
  const [count, setCount] = React.useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{count}</h1>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={incrementCount}>
          Increase
        </button>
        <button className={styles.button} onClick={resetCount}>
          Reset
        </button>
        <button className={styles.button} onClick={decrementCount}>
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
