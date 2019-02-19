import Postcode from "postcode";
import validator from "validator";

const validateField = (name, value) => {
  switch(name) {
  case "activityName": {
    return value.length > 0;
  }
  case "activityWebpage": {
    return validator.isURL(value); 
  }
  case "ageTo": {
    return Boolean(value);
  }
  case "ageFrom": {
    return Boolean(value);
  }
  case "activityPhoneNumber": {
    if(!value) {
      return true;
    }
    return /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(value);
  }
  case "placeName": {
    return Boolean(value);
  }
  case "postcode": {
    const postcode = new Postcode(value);
    return postcode.valid(); 
  }
  case "streetNumber": {
    return !isNaN(value); 
  }
  case "town": {
    return Boolean(value); 
  }
  default: return true;
  }
};

export default validateField;