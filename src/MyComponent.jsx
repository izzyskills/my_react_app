import { useState } from "react";
const myComponent = () => {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(12);
  const [isEmployed, setIsEmployed] = useState(true);

  const updateName = () => {
    setName("Lmao");
  };
  const incrmentAge = () => {
    setAge(age + 1);
  };
  const toogleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  };
  return (
    <div>
      Name: {name}
      <br />
      <button onClick={updateName}>Set Name</button>
      <br />
      <br />
      Age: {age}
      <br />
      <button onClick={incrmentAge}>increase Age</button>
      <br />
      <br />
      Employed: {isEmployed ? "Yes" : "No"}
      <br />
      <button onClick={toogleEmployedStatus}>Toggle Status</button>
      <br />
      <br />
    </div>
  );
};
export default myComponent;
