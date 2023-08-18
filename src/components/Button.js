import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--md", "btn--lg"];

function Button({ children, type, onClick, buttonStyle, buttonSize }) {
  const checkButtomStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <>
      <Link to="/sign-up" className="btn--mobile">
        <button
          className={`btn ${checkButtomStyle} ${checkButtonSize}`}
          onClick={onClick}
          type={type}
        >
          {children}
        </button>
      </Link>
    </>
  );
}

export default Button;
