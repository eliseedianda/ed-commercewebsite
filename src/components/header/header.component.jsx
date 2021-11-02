import React from "react";
import { Link } from "react-router-dom";
import "./header.style.scss";
const Hearder = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <h2 className="logo">ED-COMMERCE</h2>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Hearder;
