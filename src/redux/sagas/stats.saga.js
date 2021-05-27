import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "LOGIN" actions
function* getForm() {
    try {
        const forms = yield axios.get('/api/forms');
        yield put({ type: 'FETCH_FORM', payload: movies.data });
        console.log(forms.data);

    } catch (error) {
        alert(' sorry adding a form is not working at the moment. Try again later');
        console.log('error adding form', error);
    }
}


function* getFormSaga() {
  yield takeLatest('GET_FORM', getForm);
  
}

export default getFormSaga;