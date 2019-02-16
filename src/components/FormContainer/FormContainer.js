
import React from "react";
import { node } from "prop-types";
import "./FormContainer.css";

const FormContainer = ({ children }) => (
  <div className="FormContainer">
    <div>
      {children}
    </div>
  </div>
);

FormContainer.propTypes = {
  children: node
};

export default FormContainer;

