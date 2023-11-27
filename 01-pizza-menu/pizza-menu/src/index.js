import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <h1>
      Hello bitch
      <Dick />
    </h1>
  );
}

function Dick() {
  return <h1>kir to in net </h1>;
}

// React V18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* strictMode is a mode for development */}
    <App />
  </React.StrictMode>
);

// React Before 18
// React.render(<App/>)
