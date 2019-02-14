import React from "react";
import { func, node, string } from "prop-types";
import "./Select.css";

const Select = ({ onChange, children, label }) => (
  <div className="selectWrapper">
    {<label className="selectLabel">{label}</label>}
    <div className="select">
      <select onChange={onChange}>
        <div className="select-items">
          {children}
        </div>
      </select>
    </div>
  </div>
);

Select.propTypes = {
  onChange: func.isRequired,
  children: node.isRequired,
  label: string
};

export default Select;