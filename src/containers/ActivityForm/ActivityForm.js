import React, { Component } from "react";
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";

import { connect } from 'react-redux'
import { inputChange } from '../../redux/reducer';

class ActivityForm extends Component {
  handleChange = e => {
    const { inputChange } = this.props;
    inputChange(e.target.name, e.target.value)
  }

  render() {
    return (
      <React.Fragment>
        <span className="title">About your ativity</span>
        <Input
          name="activityName"
          label="Activity Name"
          onChange={this.handleChange}
          value={this.props.value}
        />
        <Input
          name="activityWebpage"
          label="Activity Webpage"
          onChange={this.handleChange}
          value={this.props.value}
        />

        <div style={{display: 'flex'}}>
        <Select onChange={this.handleChange} label="Recomnded Age">
          <option>hey</option>
        </Select>
        <Select onChange={this.handleChange}>
          <option>hey</option>
        </Select>
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

const mapStateToProps = state => !console.log(state) && ({
  value: state.value
})

const mapDispatchToProps = {
  inputChange
}


const ConnectedActivityForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityForm)

export default ConnectedActivityForm;
