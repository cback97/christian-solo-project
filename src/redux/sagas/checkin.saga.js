import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "LOGIN" actions
function* addForm(action) {
    try {
        yield axios.post('/api/forms', action.payload);
        console.log(action.payload);

    } catch (error) {
        alert(' sorry adding a form is not working at the moment. Try again later');
        console.log('error adding form', error);
    }
}


function* checkinSaga() {
  yield takeLatest('ADD_FORM', addForm);
  
}

export default checkinSaga;