import React, { Component } from "react";
import { connect } from 'react-redux'

import Flex from '../../components/Flex/Flex';
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";

import { inputChange, validateActivityField } from '../../redux';

const ages = [
  '1 year',
  '2 years',
  '3 years',
  '4 years',
  '5 years',
  '6 years',
  '7 years', 
  '8 years',
  '9 years',
  '10 years',
  '11 years'
];

class ActivityForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectOpen: false
    }
  }

  handleChange = e => {
    const { inputChange } = this.props;
    inputChange(e.target.name, e.target.value)
  }

  validateField = e => {
    const { validateActivityField } = this.props;
    validateActivityField(e.target.name, e.target.value)
  }

  handleSelectChange = (name, value) => {
    const { inputChange, validateActivityField } = this.props;
    inputChange(name, value)
    validateActivityField(name, value)
  }

    render() {
    const {
      ageFrom,
      ageTo,
      activityName,
      activityWebpage,
      activityFormValidities
    } = this.props;
    return (
      <React.Fragment>
        <span className="title">About your activity</span>
        <Input
          name="activityName"
          label="Activity Name"
          onChange={this.handleChange}
          value={activityName}
          onBlur={this.validateField}
          inValid={!activityFormValidities.activityName}
        />
        <Flex wrap>
          <Select
            name="ageFrom"
            label="Recommended Age"
            onClick={val => this.handleSelectChange('ageFrom', val)}
            options={ages}
            placeholder="From"
            value={ageFrom}
            inValid={!activityFormValidities.ageFrom}
          />
          <Select
            name="ageTo"
            onClick={val => this.handleSelectChange('ageTo', val)}
            options={ages}
            placeholder="To"
            value={ageTo}
            onChange={this.validateField}
            inValid={!activityFormValidities.ageTo}
          />
        </Flex>
        <Input
          name="activityWebpage"
          label="Activity Webpage"
          onChange={this.handleChange}
          value={activityWebpage}
          onBlur={this.validateField}
          className="activityWebpage"
          inValid={!activityFormValidities.activityWebpage}
          helpText="Use a specific page if possible. Try to avoid homepage links."
        />
        <Input
          name="activityPhoneNumber"
          label="Activity Phone Number"
          onChange={this.handleChange}
          value={this.props.value}
          halfWidth
          optional
          onBlur={this.validateField}
          inValid={!activityFormValidities.activityPhoneNumber}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({
  ageFrom,
  ageTo,
  activityWebpage,
  activityName,
  activityFormValidities
}) => ({
  ageFrom,
  ageTo,
  activityWebpage,
  activityName,
  activityFormValidities
})

const mapDispatchToProps = {
  inputChange,
  validateActivityField
}


const ConnectedActivityForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityForm)

export default ConnectedActivityForm;
