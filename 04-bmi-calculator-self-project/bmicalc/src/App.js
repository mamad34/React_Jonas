import React, { useState } from "react";
function App() {
  return (
    <div>
      <BmiCalculator />
    </div>
  );
}

function BmiCalculator() {
  const [weight, setWeight] = useState(50);
  const [height, setHeight] = useState(50);
  const bmi = weight / Math.pow(height / 100, 2);

  function weightHandler(e) {
    setWeight(e.target.value);
  }
  function heightHandler(e) {
    console.log(e.target.value);
    setHeight(e.target.value);
  }
  return (
    <div>
      <h1>BMI Calculator</h1>
      <label>Weight: {weight}</label>
      <input
        type="range"
        min="10"
        max="300"
        step={1}
        onChange={weightHandler}
      ></input>
      <label>height: {height}</label>
      <input
        type="range"
        min="10"
        max="300"
        step={1}
        onChange={heightHandler}
      ></input>
      <p>Your BMI is : {bmi} </p>
    </div>
  );
}

export default App;
