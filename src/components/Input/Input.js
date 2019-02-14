import React from "react";
import classnames from "classnames";
import { func, string, bool } from "prop-types";

import "./Input.css";

const Input = ({ value, onChange, name, label, halfWidth }) => (
  <div className={classnames("inputWrapper", { halfWidth })}>
    <label>{label}</label>
    <input onChange={onChange} className="input" value={value} name={name}  />
  </div>
);

Input.propTypes = {
  onChange: func.isRequired,
  value: string,
  name: string,
  label: string,
  halfWidth: bool
};

export default Input;