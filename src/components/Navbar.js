import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Button from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setbutton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setbutton(false);
    } else {
      setbutton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  const handleclick = () => {
    setClick(!click);
  };
  const closeMoblieMenu = () => setClick(false);
  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container"></div>
        <Link to="/" className="navbar-logo" onClick={closeMoblieMenu}>
          TRVL
          <i className="fab fa-typo3" />
        </Link>
        <div className="menu-icon" onClick={handleclick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMoblieMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Services"
              className="nav-links"
              onClick={closeMoblieMenu}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/products"
              className="nav-links"
              onClick={closeMoblieMenu}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMoblieMenu}
            >
              sign-up
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
      </nav>
    </>
  );
}

export default Navbar;
