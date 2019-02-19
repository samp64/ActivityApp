import React from "react";
import classnames from "classnames";
import "./button.css"; 

const Button = ({ children, orange, blue, onClick, isDisabled }) => (
  <button onClick={onClick} disabled={isDisabled} className={classnames("button", { orange, blue, isDisabled })}>
    {children}
  </button>
); 

export default Button; 