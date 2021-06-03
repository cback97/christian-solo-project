import { combineReducers } from 'redux';


const patientProfileReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_PATIENTS':
      return action.payload;
  }
  return state;
};



// make one object that has keys loginMessage, registrationMessage
// these will be on the redux state at:
// state.errors.loginMessage and state.errors.registrationMessage
export default patientProfileReducer;
