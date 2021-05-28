const specFormReducer = (state = [], action) => {
    if(action.type === 'FETCH_SPEC_FORM') {
      return action.payload;
  
      console.log(action.payload);
    }
      return state;
    };

    export default specFormReducer;