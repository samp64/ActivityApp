import React from "react";
import Button from "../Button/Button";

import "./NavBanner.css";

const SubmitBanner = ({ back, next, page }) => (
  <div className="SubmitBanner">
    <div>
      <Button isDisabled={page === 0} onClick={back}>Back</Button>
      <Button isDisabled={page === 2} onClick={next} orange >Next</Button>
    </div>
  </div>
);

export default SubmitBanner;