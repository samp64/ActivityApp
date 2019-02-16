import React, { Component } from "react";
import ReactDOM from "react-dom";
import Amplify from "aws-amplify";
import { Provider } from "react-redux";
import ActivityForm from "./containers/ActivityForm";
import AddressForm from "./containers/AddressForm";

import store from "./redux/store";

import "./css/App.css";
import NavBanner from "./components/NavBanner/NavBanner";
import FormContainer from "./components/FormContainer/FormContainer";

Amplify.configure({
  API: {
    endpoints: [
      {
        name: "address",
        endpoint: 'http://localhost:3000',
        // region: config.apiGateway.REGION
      }
    ]
  }
});

const screens = [
  <ActivityForm key={198989}/>,
  <AddressForm key={8092}/>,
  // "confirmation"
];

class App extends Component {
  constructor(){
    super();
    this.state = {
      page: 0
    };
  }

  backPage = () => this.setState({ page: this.state.page - 1 });
  nextPage = () => this.setState({ page: this.state.page + 1 });


  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <React.Fragment>
            <FormContainer>
              {screens[this.state.page]}
            </FormContainer>
            <NavBanner back={this.backPage} next={this.nextPage} page={this.state.page}/>
          </React.Fragment>
        </Provider>
      </div>
    );
  }
}


const mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
