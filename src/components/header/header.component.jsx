import React from "react";
import { Link } from "react-router-dom";
import "./header.style.scss";
import { auth } from "../firebase/firebase-utils";
import { connect } from "react-redux";

const Hearder = ({ currentUser }) => {
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
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            {" "}
            SIGN OUT{" "}
          </div>
        ) : (
          <Link className="option" to="/signin">
            {" "}
            SIGN IN{" "}
          </Link>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Hearder);
