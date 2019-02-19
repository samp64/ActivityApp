import React from "react";
import { connect } from "react-redux";
import { backPage, nextPage } from "../../redux/reducer";
import Button from "../Button/Button";

import "./NavBanner.css";

const SubmitBanner = ({
  backPage,
  nextPage,
  page,
  activityFormValidities,
  addressFormValidities
}) => {

  const isValid = page === 0
    ? Object.keys(activityFormValidities).every((key) => activityFormValidities[key])
    : Object.keys(addressFormValidities).every((key) => addressFormValidities[key]);

  return (
    <div className="SubmitBanner">
      <div>
        <Button isDisabled={page === 0} onClick={backPage}>Back</Button>
        {page !== 2 && <Button isDisabled={!isValid} onClick={nextPage} orange>Next</Button>}
      </div>
    </div>
  );}
;

const mapStateToProps = ({
  page,
  activityFormValidities,
  addressFormValidities
}) => ({
  page,
  activityFormValidities,
  addressFormValidities
});

const mapDispatchToProps = {
  backPage,
  nextPage
};


const ConnectedSubmitBanner = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitBanner);

export default ConnectedSubmitBanner;
