import { put, takeEvery } from "redux-saga/effects";
import { API } from "aws-amplify";
import { StorageGateway } from "aws-sdk/clients/all";

const INPUT_CHANGE = "INPUT_CHANGE";
const FETCH_ADDRESSES = "FETCH_ADDRESSES";
const FETCH_ADDRESSES_SUCCESS = "FETCH_ADDRESSES";
const FETCH_ADDRESSES_FAILED = "FETCH_ADDRESSES";


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
  town: ""
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
      addresses: action.addresses
    };
  case FETCH_ADDRESSES_FAILED:
    return {
      ...state,
      isLoading: false,
      error: true
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
 
export function* adressesSaga() {
  yield takeEvery(FETCH_ADDRESSES, fetchAddresses);

}

function* fetchAddresses() {
  try {
    const addresses = yield  API.get("address", "/address");
    yield(FETCH_ADDRESSES_SUCCESS);
    return addresses;
  } catch(e) {
    yield(FETCH_ADDRESSES_FAILED);
    return e;
  }
}

