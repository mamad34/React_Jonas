import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello World</h1>;
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
// React.render(<App/>, document.getElementById("root"))
