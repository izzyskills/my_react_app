import React, { useState } from "react";

const mzcomponent = () => {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });
  function handleYearChange(event) {
    setCar((c) => ({ ...c, year: event.target.value }));
  }
  function handleMakeChange(event) {
    setCar((c) => ({ ...c, make: event.target.value }));
  }

  function handleModelChange(event) {
    setCar((c) => ({ ...c, model: event.target.value }));
  }
  return (
    <div>
      <p>
        Your favourite car is: {car.year} {car.make} {car.model}
      </p>
      <input
        type="number"
        value={car.year}
        onChange={handleYearChange}
        name=""
        id=""
      />
      <input
        type="text"
        value={car.make}
        onChange={handleMakeChange}
        name=""
        id=""
      />
      <input
        type="text"
        value={car.model}
        onChange={handleModelChange}
        name=""
        id=""
      />
    </div>
  );
};

export default mzcomponent;