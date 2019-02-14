import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ActivityForm from "./containers/ActivityForm";
import store from "./redux/store";

import "./css/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <div className="content">
            <ActivityForm />
          </div>
        </Provider>
      </div>
    );
  }
}


const mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);