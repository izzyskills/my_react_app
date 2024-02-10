import styles from "./Button.module.css";
const Button = () => {
  let count = 0;
  // const handleClick = () => {
  //   console.log("ouch");
  // };
  const handleClick2 = (name) => {
    if (count < 3) {
      count++;
      console.log(`Hey ${name}, you have pressed this button ${count} times`);
    } else {
      console.log(`ouch how is this baddie ${name}`);
    }
  };

  return (
    <button onClick={() => handleClick2("brodi")} className={styles.button}>
      Click Me
    </button>
  );
};

export default Button;
