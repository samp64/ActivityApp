import React, { useState } from "react";
import classnames from "classnames";
import { func, string, bool } from "prop-types";

import "./Input.css";

const Input = ({ value, onChange, onBlur, name, label, halfWidth, inValid, optional, helpText, className }) => {
  const [isTouched, setTouched] = useState();
  return (
    <div className={classnames("inputWrapper", { [className]: className, halfWidth })}>
      <label>{label}</label>
      {helpText && <span className="helpText">{helpText}</span>}
      {optional && <span className="optional">Optional</span>}
      <input
        onBlur={onBlur}
        onChange={onChange}
        onFocus={() => setTouched(true)}
        className={classnames("input", { inValid: isTouched && inValid })}
        value={value} name={name}
      />
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
  onBlur: func,
  optional: bool,
  helpText: string,
  className: string
};

export default Input;