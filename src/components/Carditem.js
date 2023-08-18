import React from "react";
import { Link } from "react-router-dom";

function Carditem(props) {
  return (
    <>
      <li className="cards_item">
        <Link to={props.path} className="cards_item_link">
          <figure className="cards_item_pic-wrap" data-categor={props.label}>
            <img
              src={props.src}
              alt="Travel Image"
              className="cards_item_img"
            />
            <div className="cards_item_info">
              {props.label}
              <h5 className="cards_item_text">{props.text}</h5>
            </div>
          </figure>
        </Link>
      </li>
    </>
  );
}

export default Carditem;
