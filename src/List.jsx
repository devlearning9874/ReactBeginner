import React from "react";

const list = ["Milk", "Butter", "Cheese", "Souce"];
const Milk =
  "https://socialimages.sakalmediagroup.com/sakaltimes-prod/s3fs-public/styles/generic_xs_100/public/news-story/cover-images/0milk_127.jpg";
const Butter =
  "https://media4.s-nbcnews.com/i/newscms/2020_14/1553611/different-types-of-butter-today-main-200331-final_e48045eed76118b26baa771ecfcb76d3.jpg";
const Cheese =
  "https://www.emborg.com/Admin/Public/getImage.ashx?Image=/Files/Images/Emborg/800x600/800x600_14_Speciality_Cheese.jpg&width=800";
const Sauce =
  "https://image.made-in-china.com/2f0j00snVQJCvhllgW/Delicious-Dark-Soy-Souce-in-1L.jpg";

function List() {
  return (
    <div>
      <img alt="milk" src={Milk} />
      <p>
        <strong>{list[0]}</strong>
      </p>
      <img alt="butter" src={Butter} />
      <p>
        <strong>{list[1]}</strong>
      </p>
      <img alt="cheese" src={Cheese} />
      <p>
        <strong>{list[2]}</strong>
      </p>
      <img alt="souce" src={Sauce} />
      <p>
        <strong>{list[3]}</strong>
      </p>
    </div>
  );
}

export default List;
