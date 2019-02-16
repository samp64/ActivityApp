import React, { Component } from "react";
import Input from "../../components/Input/Input";
import { connect } from 'react-redux'
import { inputChange, loadAddresses } from '../../redux/reducer';

class AddressForm extends Component {
  async componentDidMount() {
    const { loadAddresses } = this.props;
   await loadAddresses()
  }

  handleChange = e => {
    const { inputChange } = this.props;
    inputChange(e.target.name, e.target.value)
  }

  render() {
    const {
      placeName,
      postcode,
      buildingUnit, 
      buildingName,
      streetNumber,
      streetName,
      town
    } = this.props;

    return (
      <React.Fragment>
        <span className="title">Add the address</span>
        <Input
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
  town
}) => ({
  placeName,
  postcode,
  buildingUnit, 
  buildingName,
  streetNumber,
  streetName,
  town
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
