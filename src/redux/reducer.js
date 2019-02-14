
const INPUT_CHANGE = "activities/INPUT_CHANGE";

export default (state = {}, action) => {
  switch (action.type) {
  case INPUT_CHANGE:
    return {
      ...state,
      [action.name]: action.value
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