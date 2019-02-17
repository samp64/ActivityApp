import React from "react";

import "./ConfirmationField.css";

const ConfirmationField = ({ label, value }) => (
  <div className="confirmationField">
    <span className="confirmationFieldName">{label}:</span>
    <span className="confirmationFieldLabel">{value}</span>
  </div>
);

export default ConfirmationField;