import React, { useState } from "react";
import classnames from "classnames";
import { func, string, bool } from "prop-types";

import "./Input.css";

const Input = ({ value, onChange, onBlur, name, label, halfWidth, inValid }) => {
  const [isTouched, setTouched] = useState();
  return (
    <div className={classnames("inputWrapper", { halfWidth })}>
      <label>{label}</label>
      <input onBlur={(e) => /* setTouched(true) && */onBlur(e)} onChange={onChange} className={classnames("input", {  inValid: isTouched && inValid })} value={value} name={name}  />
    </div>
  );
};

Input.propTypes = {
  onChange: func.isRequired,
  value: string,
  name: string,
  label: string,
  halfWidth: bool,
  inValid: bool,
  onBlur: func
};

export default Input;