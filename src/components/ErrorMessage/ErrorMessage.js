import React from "react";
import { string } from "prop-types";
import "./ErrorMessage.css";

const ErrorMessage = ({ message }) => (
  <div className="errorMessage">
    {message}
  </div>
);

ErrorMessage.propTypes = {
  message: string
};

export default ErrorMessage;