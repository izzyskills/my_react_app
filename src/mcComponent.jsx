import React from "react";

const mcComponent = () => {
  const [name, setName] = React.useState("");
  const [payment, setPayment] = React.useState("");
  const [shipping, setShipping] = React.useState("Delivery");

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }
  function handleShippingChange(event) {
    setShipping(event.target.value);
  }
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        name=""
        id=""
      />
      <p>Name: {name} </p>

      <select name="" value={payment} onChange={handlePaymentChange} id="">
        <option value="">Select Payment Type</option>
        <option value="mastercard">MasterCard</option>
        <option value="visa">Visa</option>
        <option value="paypal">paypal</option>
      </select>
      <br />
      <label>
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={handleShippingChange}
        />
        Pick up
      </label>
      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>
    </div>
  );
};

export default mcComponent;
