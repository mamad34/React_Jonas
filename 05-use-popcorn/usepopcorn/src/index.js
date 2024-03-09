import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";

import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />;
      <p>This Movies Was Rated {movieRating} Stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <Test />
    <StarRating size={24} className="test" defaultRating={3} />
  </React.StrictMode>
);
