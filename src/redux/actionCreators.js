import { 
  NEXT_PAGE,
  BACK_PAGE,
  INPUT_CHANGE, 
  FETCH_ADDRESSES,
  VALIDATE_ACTIVITY_FIELD,
  VALIDATE_ADDRESS_FIELD,
  NEXT_ADDRESS
} from ".";

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