import React, { Component } from "react";
import Input from "../../components/Input/Input";

import { connect } from 'react-redux'
import { inputChange, validateAddressField, loadAddresses, nextAddress } from '../../redux/reducer';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Button from "../../components/Button/Button";

class AddressForm extends Component {
  handleChange = e => {
    const { inputChange } = this.props;
    inputChange(e.target.name, e.target.value)
  }

  validateField = e => {
    const { validateAddressField } = this.props;
    validateAddressField(e.target.name, e.target.value)
  }

  render() {
    const {
      placeName,
      postcode,
      buildingUnit, 
      buildingName,
      streetNumber,
      streetName,
      town,
      errorMessage,
      addressFormValidities,
      loadAddresses,
      nextAddress,
      addressLoaded
    } = this.props;

    return (
      <React.Fragment>
        <span className="title">Add the address</span>
        <Button onClick={addressLoaded ? nextAddress : loadAddresses} blue>
        {addressLoaded ? "Next Address" : "Copy from existing activity"}
        </Button>

        {errorMessage && <ErrorMessage message={errorMessage}/>}
          <Input
            name="placeName"
            label="Place Name"
            onChange={this.handleChange}
            value={placeName}
            inValid={!addressFormValidities.placeName}
            onBlur={this.validateField}
          />
          <Input
            name="postcode"
            label="Postcode"
            onChange={this.handleChange}
            value={postcode}
            inValid={!addressFormValidities.postcode}
            onBlur={this.validateField}
            halfWidth
          />
          <Input
            name="buildingUnit"
            label="Building Unit"
            onChange={this.handleChange}
            value={buildingUnit}
            inValid={!addressFormValidities.buildingUnit}
            onBlur={this.validateField}
            optional
            halfWidth
          />
          <Input
            name="buildingName"
            label="Building Name"
            onChange={this.handleChange}
            value={buildingName}
            inValid={!addressFormValidities.buildingName}
            onBlur={this.validateField}
            optional
          />
          <Input
            name="streetNumber"
            label="Street Number"
            onChange={this.handleChange}
            value={streetNumber}
            inValid={!addressFormValidities.streetNumber}
            onBlur={this.validateField}
            optional
          />
          <Input
            name="streetName"
            label="Street Name"
            onChange={this.handleChange}
            value={streetName}
            inValid={!addressFormValidities.streetName}
            onBlur={this.validateField}
          />
          <Input
            name="town"
            label="Town"
            onChange={this.handleChange}
            value={town}
            inValid={!addressFormValidities.town}
            onBlur={this.validateField}
          />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({
  placeName,
  postcode,
  buildingUnit, 
  buildingName,
  streetNumber,
  streetName,
  town,
  errorMessage,
  addressFormValidities,
  addressLoaded
}) => ({
  placeName,
  postcode,
  buildingUnit, 
  buildingName,
  streetNumber,
  streetName,
  town,
  errorMessage,
  addressFormValidities,
  addressLoaded
})

const mapDispatchToProps = {
  inputChange,
  validateAddressField,
  loadAddresses,
  nextAddress
}


const ConnectedAddressForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressForm)

export default ConnectedAddressForm;
