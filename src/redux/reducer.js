import { put, takeEvery } from "redux-saga/effects";
import validateField from "../Utils/validateField";
import { API } from "aws-amplify";

const NEXT_PAGE = "NEXT_PAGE";
const BACK_PAGE = "BACK_PAGE";

const INPUT_CHANGE = "INPUT_CHANGE";
const FETCH_ADDRESSES = "FETCH_ADDRESSES";
const FETCH_ADDRESSES_SUCCESS = "FETCH_ADDRESSES_SUCCESS";
const FETCH_ADDRESSES_FAILED = "FETCH_ADDRESSES_FAILED";

const VALIDATE_ACTIVITY_FIELD = "VALIDATE_ACTIVITY_FIELD";
const VALIDATE_ADDRESS_FIELD = "VALIDATE_ADDRESS_FIELD";

const NEXT_ADDRESS = "NEXT_ADDRESS";

export default (state = {
  page: 1,
  addressLoaded: false,
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
  errorMessage: "",
  activityFormValidities: {
    ageFrom: false,
    ageTo: false,
    activityName: false,
    activityWebpage: false,
  },
  addressFormValidities: {
    placeName: false,
    postcode: false,
    buildingUnit: false, 
    buildingName:  false,
    streetNumber: false,
    streetName: false,
    town:  false,
  },
  address: 0
},
action = {}
) => {
  switch (action.type) {
  case NEXT_PAGE: 
    return {
      ...state,
      page: state.page + 1
    };
  case BACK_PAGE: 
    return {
      ...state,
      page: state.page - 1
    };
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
    Object.keys(action.addresses[0]).forEach(key => {
      state.addressFormValidities[key] = validateField(action.name, action.value);
    });
    return {
      ...state,
      isLoading: false,
      addressLoaded: true,
      placeName: "",
      addresses: action.addresses,
      postcode: action.addresses[0].postcode,
      buildingUnit: action.addresses[0].buildingUnit, 
      buildingName:  action.addresses[0].buildingName,
      streetNumber: action.addresses[0].streetNumber,
      streetName: action.addresses[0].streetName,
      town: action.addresses[0].town,
      addressFormValidities: {
        ...state.addressFormValidities,
      },
      address: state.address + 1
    };
  case NEXT_ADDRESS:
    Object.keys(state.addresses).forEach(key => {
      state.addressFormValidities[key] = validateField(action.name, action.value);
    });

    return {
      ...state,
      isLoading: false,
      placeName: "",
      postcode: state.addresses[state.address].postcode || "",
      buildingUnit: state.addresses[state.address].buildingUnit || "", 
      buildingName:  state.addresses[state.address].buildingName || "",
      streetNumber: state.addresses[state.address].streetNumber || "",
      streetName: state.addresses[state.address].streetName || "",
      town: state.addresses[state.address].town || "",
      addressFormValidities: {
        ...state.addressFormValidities,
      },
      address: (state.address === Object.keys(state.addresses).length -1)
        ? 0
        : state.address + 1
    };
  case FETCH_ADDRESSES_FAILED:
    return {
      ...state,
      isLoading: false,
      errorMessage: "Failed to load addresses."
    };
  case VALIDATE_ACTIVITY_FIELD:
    return {
      ...state,
      activityFormValidities: {
        ...state.activityFormValidities,
        [action.name]: validateField(action.name, action.value)
      }
    };
  case VALIDATE_ADDRESS_FIELD:
    return {
      ...state,
      addressFormValidities: {
        ...state.addressFormValidities,
        [action.name]: validateField(action.name, action.value)
      }
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

export function nextPage() {
  return {
    type: NEXT_PAGE
  };
}

export function backPage() {
  return {
    type: BACK_PAGE
  };
}

export function loadAddresses() {
  return {
    type: FETCH_ADDRESSES
  };
}

export function validateActivityField(name, value) {
  return {
    type: VALIDATE_ACTIVITY_FIELD,
    name,
    value
  };
}

export function validateAddressField(name, value) {
  return {
    type: VALIDATE_ADDRESS_FIELD,
    name,
    value
  };
}

export function nextAddress() {
  return {
    type: NEXT_ADDRESS
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