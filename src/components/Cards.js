import React from "react";
import Carditem from "./Carditem";
import "./Cards.css";
function Cards() {
  return (
    <div className="cards">
      <h1>Check out this Epic locations</h1>
      <div className="cards_container"></div>
      <div className="cards_wrapper">
        <ul className="cards_items">
          <Carditem
            src="images/img-3.jpg"
            text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
            label="Mystery"
            path="/services"
          />
          <Carditem
            src="images/img-4.jpg"
            text="Experience Football on Top of the Himilayan Mountains"
            label="Adventure"
            path="/products"
          />
          <Carditem
            src="images/img-8.jpg"
            text="Ride through the Sahara Desert on a guided camel tour"
            label="Adrenaline"
            path="/sign-up"
          />
        </ul>
      </div>
    </div>
  );
}

export default Cards;
