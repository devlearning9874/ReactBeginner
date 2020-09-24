//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDom from "react-dom";

const List = ["Milk", "Butter", "Cheese", "Souce"];
const Milk =
  "https://socialimages.sakalmediagroup.com/sakaltimes-prod/s3fs-public/styles/generic_xs_100/public/news-story/cover-images/0milk_127.jpg";
const Butter =
  "https://media4.s-nbcnews.com/i/newscms/2020_14/1553611/different-types-of-butter-today-main-200331-final_e48045eed76118b26baa771ecfcb76d3.jpg";
const Cheese =
  "https://www.emborg.com/Admin/Public/getImage.ashx?Image=/Files/Images/Emborg/800x600/800x600_14_Speciality_Cheese.jpg&width=800";
const Sauce =
  "https://buonitaly.it/15435-large_default/1000040130-barilla-tomato-souce-gr400.jpg";
ReactDom.render(
  <div>
    <h1 className="heading" contentEditable="true">
      Purchase List
    </h1>
    <div>
      <img alt="milk" src={Milk} />
      <p>
        <strong>{List[0]}</strong>
      </p>
      <img alt="butter" src={Butter} />
      <p>
        <strong>{List[1]}</strong>
      </p>
      <img alt="cheese" src={Cheese} />
      <p>
        <strong>{List[2]}</strong>
      </p>
      <img alt="souce" src={Sauce} />
      <p>
        <strong>{List[3]}</strong>
      </p>
    </div>
  </div>,
  document.getElementById("root")
);
