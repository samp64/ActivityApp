import React, { useState } from "react";
import { func, string, arrayOf, number, oneOfType } from "prop-types";
import "./Select.css";

const Select = ({ label, onClick, options, value, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  Select.handleClickOutside = () => setIsOpen(false);
  return (
    <div className="selectWrapper">
      {<label className="selectLabel">{label}</label>}

      <div className="select" onClick={toggle} >
        <div className="placeholder">{value || placeholder}</div>
        {
          isOpen && 
          <div className="options">
            {options.map(option => 
              <div value={option} id="option" key={option} onMouseDown={() => onClick(option)}>
                <span onClick={onClick}>{option}</span>
              </div> 
            )}
          </div>
        }
      </div>
    </div>
  );
};

Select.propTypes = {
  onClick: func.isRequired,
  label: string,
  value: oneOfType(
    [string, number]
  ),
  options: arrayOf(
    oneOfType( 
      [string, number]
    )
  ),
  placeholder: string,
};


export default Select;
