import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  let [step, setStep] = useState(1);
  const [test, setTest] = useState({ name: "Mamad" });
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    // if (step > 1) setStep((step -= 1));
    // equal to step - 1
    if (step > 1) setStep((currentStep) => currentStep - 1);
  }
  function handleNext() {
    if (step < 3) {
      // setStep(++step);
      // setStep(++step);
      // jump two steps

      setStep((currentStep) => currentStep + 1);
      // setStep((currentStep) => currentStep + 1);
      // jump two steps better to use callback function for it to always have te current step

      // setStep(step + 1 );
      // setStep(step + 1);
      //jump only one step
    }
    // equal to step + 1
    // step = step + 1; Wrong
    // -------------------------
    // BAD PRACTICE but WORKS
    // test.name = "Fred";
    setTest({ name: "Fred" });
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step === 1 ? "active" : ""}>1</div>
            <div className={step === 2 ? "active" : ""}>2</div>
            <div className={step === 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step} {messages[step - 1]}
            {test.name}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
              // onMouseEnter={() => {
              //   alert("kos mikham");
              // }}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
