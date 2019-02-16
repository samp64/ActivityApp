import React, { Component } from "react";
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";

import { connect } from 'react-redux'
import { inputChange } from '../../redux/reducer';

const ages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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

  render() {
    const { inputChange, ageFrom, ageTo, activityName, activityWebpage } = this.props;
    return (
      <React.Fragment>
        <span className="title">About your activity</span>
        <Input
          name="activityName"
          label="Activity Name"
          onChange={this.handleChange}
          value={activityName}
        />
        <Input
          name="activityWebpage"
          label="Activity Webpage"
          onChange={this.handleChange}
          value={activityWebpage}
        />

        <div style={{display: 'flex'}}>
        <Select
          label="Recommended Age"
          onClick={val => inputChange('ageFrom', val)}
          options={ages}
          placeholder="From"
          value={ageFrom}
        />
        <Select
          onClick={val => inputChange('ageTo', val)}
          options={ages}
          placeholder="To"
          value={ageTo}
        />
        </div>
        <Input
          name="activityPhoneNumber"
          label="Activity Phone Number"
          onChange={this.handleChange}
          value={this.props.value}
          halfWidth
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ageFrom: state.ageFrom,
  ageTo: state.ageTo,
  activityWebpage: state.activityWebpage,
  activityName: state.activityName
})

const mapDispatchToProps = {
  inputChange
}


const ConnectedActivityForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityForm)

export default ConnectedActivityForm;
