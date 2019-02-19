import React from "react";
import { node, bool, func } from "prop-types";
import classnames from "classnames";
import "./button.css"; 

const Button = ({ children, orange, blue, onClick, isDisabled }) => (
  <button onClick={onClick} disabled={isDisabled} className={classnames("button", { orange, blue, isDisabled })}>
    {children}
  </button>
); 

Button.propTypes= {
  children: node.isRequired,
  orange: bool,
  blue: bool,
  onClick: func.isRequired,
  isDisabled: bool
};

export default Button; 