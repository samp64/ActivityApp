import React from "react";
import classnames from "classnames";
import "./button.css"; 

const Button = ({ children, type, orange, onClick, isDisabled }) => (
  <button onClick={onClick} disabled={isDisabled} className={classnames("button", { orange, isDisabled })}>
    {children}
  </button>
);

export default Button; 