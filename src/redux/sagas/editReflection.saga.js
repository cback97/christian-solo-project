import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* editReflection( action ) {
    console.log('In edit sage', action.payload);
    try {
        yield axios.put('/api/forms', action.payload);
        yield put( { type: 'GET_FORM_DATA' } ); 
    } catch (error) {
        alert(`Sorry. Editing your reflection is not working.. Try again later`);
        console.log('Error Editing Reflection', error);
    }
}



function* editReflectionSaga() {
    yield takeLatest('EDIT_REFLECTION', editReflection);
  }
  
export default editReflectionSaga;