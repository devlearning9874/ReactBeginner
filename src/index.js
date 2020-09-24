//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDom from "react-dom";

const List = ["Milk", "Butter", "Cheese", "Souce"];
ReactDom.render(
  <div>
    <h1>Purchase List</h1>
    <ul>
      <li>{List[0]} </li>
      <li>{List[1]}</li>
      <li>{List[2]}</li>
      <li>{List[3]}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
