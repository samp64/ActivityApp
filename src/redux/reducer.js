import validateField from "../Utils/validateField";
import {
  NEXT_PAGE,
  BACK_PAGE,
  INPUT_CHANGE, 
  FETCH_ADDRESSES,
  FETCH_ADDRESSES_SUCCESS,
  FETCH_ADDRESSES_FAILED,
  VALIDATE_ACTIVITY_FIELD,
  VALIDATE_ADDRESS_FIELD,
  NEXT_ADDRESS
} from ".";


export default (state = {
  page: 0,
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
