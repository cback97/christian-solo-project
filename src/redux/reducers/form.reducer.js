const formReducer = (state = [], action) => {
  if(action.type === 'FETCH_FORM') {
    return action.payload;

    console.log(action.payload);
  }
    return state;
  };

const specFormReducer = (state = [], action) => {
  if(action.type === 'FETCH_SPEC_FORM') {
    return action.payload;

    console.log(action.payload);
  }
    return state;
  };
  
  // user will be on the redux state at:
  // state.user
  export default formReducer;
  
  