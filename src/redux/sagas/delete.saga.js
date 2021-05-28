import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "LOGIN" actions
function* deleteSaga(action) {

    try {
        yield axios.delete(`/api/forms/${action.payload}`);
        

    } catch (error) {
        alert(' sorry adding a form is not working at the moment. Try again later');
        console.log('Error getting form data', error);
    }
}

function* removeSaga() {
    yield takeLatest('DELETE_ENTRY', deleteSaga);
    
  }
 export default removeSaga;