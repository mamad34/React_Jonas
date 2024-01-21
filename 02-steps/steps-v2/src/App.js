import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <StepMessage step={1}>
        <p>Pass in content</p>
        <p>😍</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>Read choldren prop</p>
        <p>😍</p>
      </StepMessage>
      {/* <Steps /> */}
    </div>
  );
}

function Steps() {
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

          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                bgColor="#e7e7e7"
                textColor="#333"
                onClick={() => alert("Hello")}
              >
                Click Me
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>⏮️</span>Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>⏭️</span>
              {/* between opening and closing tag called childern prop */}
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
      {/* children is reserved word */}
    </button>
  );
}
