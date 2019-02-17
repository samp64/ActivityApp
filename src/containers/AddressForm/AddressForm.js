import React, { Component } from "react";
import Input from "../../components/Input/Input";

import { connect } from 'react-redux'
import { inputChange, loadAddresses } from '../../redux/reducer';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { camelCase } from 'lodash';
import validator from 'validator';
import Postcode from 'postcode';

const fieldNames = [
  'Place Name',
  'Postcode',
  'Building Unit',
  'Building Name',
  'Street Number',
  'Street Name',
  'Town'
]

class AddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: {}
    }
  }

  async componentDidMount() {
    const { loadAddresses } = this.props;
    loadAddresses()
  }

  componentDidUpdate() {
    // fieldNames.forEach(field => this.validateField(field))
    // this.validateFieldMount(fieldNames)
  }

  handleChange = e => {
    const { inputChange } = this.props;
    inputChange(e.target.name, e.target.value)
  }

  validateField = e => {
  const { target: { name, value } } = e;
    switch(name) {
      case 'Place Name': {
        return value.length > 0
      }
      case 'postcode': {
        const postcode = new Postcode(value)
        this.setState({ postcodeValid: postcode.valid() } ) 
      }
      default: 
      this.setState({ [`${name}Valid`]: true } ) 
    }
  }


  render() {
    const {
      errorMessage
    } = this.props;
    console.log(this.state)

    return (
      <React.Fragment>
        <span className="title">Add the address</span>
        {errorMessage && <ErrorMessage message={errorMessage}/>}
        {fieldNames.map(name => (
          <Input
            key={name}
            name={camelCase(name)}
            label={name}
            onChange={this.handleChange}
            value={this.props[camelCase(name)]}
            inValid={!this.state[`${camelCase(name)}Valid`]}
            onBlur={this.validateField}
          />
        ))
      }
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
  errorMessage
}) => ({
  placeName,
  postcode,
  buildingUnit, 
  buildingName,
  streetNumber,
  streetName,
  town,
  errorMessage
})

const mapDispatchToProps = {
  inputChange,
  loadAddresses
}


const ConnectedAddressForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressForm)

export default ConnectedAddressForm;







        {/* <Input
          name="placeName"
          label="Place Name"
          onChange={this.handleChange}
          value={placeName}
        />
        <Input
          name="postcode"
          label="Postcode"
          onChange={this.handleChange}
          value={postcode}
          halfWidth
        />
        <Input
          name="buildingUnit"
          label="Building Unit"
          onChange={this.handleChange}
          value={buildingUnit}
          halfWidth
        />
        <Input
          name="buildingName"
          label="Building Name"
          onChange={this.handleChange}
          value={buildingName}
        />
        <Input
          name="streetNumber"
          label="Street Number"
          onChange={this.handleChange}
          value={streetNumber}
        />
        <Input
          name="streetName"
          label="Street Name"
          onChange={this.handleChange}
          value={streetName}
        />
        <Input
          name="town"
          label="Town"
          onChange={this.handleChange}
          value={town}
        /> */}