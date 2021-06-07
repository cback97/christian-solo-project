import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* editPhqScore( action ) {
    console.log('In edit sage', action.payload);
    try {
        yield axios.put('/api/forms', action.payload);
        yield put( { type: 'GET_FORM_DATA' } ); 
    } catch (error) {
        alert(`Sorry. Editing your PHQ is not working.. Try again later`);
        console.log('Error Editing PHQ', error);
    }
}




function* editPhqSaga() {
  
    yield takeLatest('EDIT_PHQ', editPhqScore);
  }
export default editPhqSaga;