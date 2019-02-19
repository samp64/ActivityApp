import React, { Component } from "react";

import { connect } from "react-redux";
import ConfirmationField from "../../components/ConfirmationField/ConfirmationField";
import { camelCase } from "lodash";

import "./Confirmation.css";

const activityFields = ["Age from", "Age To", "Activity Webpage", "Activity Name"];
const addressFields = [
  "Place Name",
  "Postcode",
  "Building Unit",
  "Building Name",
  "Street Number",
  "Street Name",
  "Town"
];

class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: {} 
    };
  }

  render() {
    return (
      <React.Fragment> 
        <span className="title">Confirmation</span>

        <div className="confirmation">
          <div className="confirmActivity">
            <div className="confirmationHeading">
              Activity
            </div>
            {activityFields.map(field => 
              this.props[camelCase(field)] && <ConfirmationField key={field} label={field} value={this.props[camelCase(field)]} />
            )}
          </div>

          <div className="confirmAddress">
            <div className="confirmationHeading">
              Address
            </div>
            {addressFields.map(field =>
              this.props[camelCase(field)] && <ConfirmationField key={field} label={field} value={this.props[camelCase(field)]} />
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({
  ageFrom,
  ageTo,
  activityWebpage,
  activityName,
  placeName,
  postcode,
  buildingUnit, 
  buildingName,
  streetNumber,
  streetName,
  town,
  errorMessage
}) => ({
  ageFrom,
  ageTo,
  activityWebpage,
  activityName,
  placeName,
  postcode,
  buildingUnit, 
  buildingName,
  streetNumber,
  streetName,
  town,
  errorMessage
});

const ConnectedConfirmation = connect(
  mapStateToProps,
)(Confirmation);

export default ConnectedConfirmation;
