//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDom from "react-dom";
import App from "./App";

ReactDom.render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);
