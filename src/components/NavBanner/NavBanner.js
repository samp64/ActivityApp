import React from "react";
import { func, shape, number } from "prop-types";
import { connect } from "react-redux";
import { backPage, nextPage } from "../../redux";
import Button from "../Button/Button";

import "./NavBanner.css";

const NavBanner = ({
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

NavBanner.propTypes = {
  backPage: func.isRequired,
  nextPage : func.isRequired,
  page: number.isRequired,
  activityFormValidities: shape(),
  addressFormValidities: shape()
};

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


const ConnectedNavBanner = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBanner);

export default ConnectedNavBanner;
