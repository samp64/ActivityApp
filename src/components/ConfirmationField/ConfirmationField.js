import React from "react";
import { string, number, oneOfType } from "prop-types";

import "./ConfirmationField.css";

const ConfirmationField = ({ label, value }) => (
  <div className="confirmationField">
    <span className="confirmationFieldName">{label}:</span>
    <span className="confirmationFieldLabel">{value}</span>
  </div>
);

ConfirmationField.propTypes = {
  label: string.isRequired,
  value: oneOfType([string, number])

};

export default ConfirmationField;