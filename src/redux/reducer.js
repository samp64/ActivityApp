import { put, takeEvery } from "redux-saga/effects";
import validator from "validator";
import { API } from "aws-amplify";
import Postcode from "postcode";

const INPUT_CHANGE = "INPUT_CHANGE";
const FETCH_ADDRESSES = "FETCH_ADDRESSES";
const FETCH_ADDRESSES_SUCCESS = "FETCH_ADDRESSES_SUCCESS";
const FETCH_ADDRESSES_FAILED = "FETCH_ADDRESSES_FAILED";

export default (state = {
  ageFrom: "",
  ageTo: "",
  activityName: "",
  activityWebpage: "",
  placeName: "",
  postcode: "",
  buildingUnit: "", 
  buildingName: "",
  streetNumber: "",
  streetName: "",
  town: "",
  errorMessage: ""
},
action = {}
) => {
  switch (action.type) {
  case INPUT_CHANGE:
    return {
      ...state,
      [action.name]: action.value
    };
  case FETCH_ADDRESSES:
    return {
      ...state,
      isLoading: true,
    };
  case FETCH_ADDRESSES_SUCCESS:
    return {
      ...state,
      isLoading: false,
      placeName: "",
      postcode: action.addresses[0].postcode,
      buildingUnit: action.addresses[0].buildingUnit, 
      buildingName:  action.addresses[0].buildingName,
      streetNumber: action.addresses[0].streetNumber,
      streetName: action.addresses[0].streetName,
      town: action.addresses[0].town,

    };
  case FETCH_ADDRESSES_FAILED:
    return {
      ...state,
      isLoading: false,
      errorMessage: "Failed to load addresses."
    };
  default:
    return state;
  }
};  
 
export function inputChange(name, value) {
  return {
    type: INPUT_CHANGE,
    name,
    value
  };
}

export function loadAddresses() {
  return {
    type: FETCH_ADDRESSES
  };
}
 
export function* addressesSaga() {
  yield takeEvery(FETCH_ADDRESSES, fetchAddresses); 
}

function* fetchAddresses() {
  try {
    const addresses = yield  API.get("address", "/address");
    return yield put({ type: FETCH_ADDRESSES_SUCCESS, addresses });
  } catch(e) {
    yield put({ type: FETCH_ADDRESSES_FAILED });
    return e;
  }
}