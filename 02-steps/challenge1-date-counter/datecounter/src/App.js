import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <DateCounter />
      <DateCounter />
    </div>
  );
}

function changeDate(count) {
  let date = new Date();
  console.log("khode date", date);
  date.setDate(date.getDate() + count);
  console.log("bade taghir date ", date);
  return date.toISOString();
}

function DateCounter() {
  let [step, setStep] = useState(0);
  let [count, setCount] = useState(0);

  function stepBack() {
    setStep(step - 1);
  }

  function stepForward() {
    setStep(step + 1);
  }

  const countPlus = () => setCount(count + step);
  const countMinus = () => setCount(count - step);

  return (
    <div>
      <div className="container">
        <button className="button" onClick={stepBack}>
          -
        </button>
        <h1>Step: {step}</h1>
        <button className="button" onClick={stepForward}>
          +
        </button>
      </div>
      <div className="container">
        <button className="button" onClick={countMinus}>
          -
        </button>
        <h1>Count: {count}</h1>
        <button className="button" onClick={countPlus}>
          +
        </button>
      </div>

      <h1 className="container">
        {count} days from today is {changeDate(count)}
      </h1>
    </div>
  );
}

export default App;
