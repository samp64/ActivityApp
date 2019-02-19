import React, { Component } from "react";
import ReactDOM from "react-dom";
import Amplify from "aws-amplify";
import { Provider } from "react-redux";

import store from "./redux/store";

import NavBanner from "./components/NavBanner/NavBanner";
import FormContainer from "./containers/FormContainer/FormContainer";

import "./css/App.css";

Amplify.configure({
  API: {
    endpoints: [
      {
        name: "address",
        endpoint: "http://localhost:3000",
      }
    ]
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <React.Fragment>
            {/* <Header /> */}
            <FormContainer>
            </FormContainer>
            <NavBanner />
          </React.Fragment>
        </Provider>
      </div>
    );
  }
}


const mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
