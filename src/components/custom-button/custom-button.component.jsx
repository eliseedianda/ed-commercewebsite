import React from "react";
import "./custom-bottom.style.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      class={`${isGoogleSignIn ? "google-sign-in" : " "}custom-button`}
      {...otherProps}
    >
      {children}{" "}
    </button>
  );
};

export default CustomButton;
