
import React from "react";
import { number } from "prop-types";
import { connect } from "react-redux";
import { backPage, nextPage } from "../../redux/reducer";

import ActivityForm from "../ActivityForm";
import AddressForm from "../AddressForm";
import Confirmation from "../Confirmation/Confirmation";
import Header from "../../components/Header/Header";

import "./FormContainer.css";

const screens = [
  <ActivityForm key={1}/>,
  <AddressForm key={2}/>,
  <Confirmation key={3} />
];


const FormContainer = ({ page }) => (
  <div className="FormContainer"> 
    <Header />
    <div className="form">
      {screens[page]}
    </div>
  </div>
);

FormContainer.propTypes = {
  page: number
};

const mapStateToProps = ({ page }) => ({
  page
});

const mapDispatchToProps = {
  backPage,
  nextPage
};


const connectedFormContainer = connect(mapStateToProps, mapDispatchToProps)(FormContainer);

export default connectedFormContainer;

