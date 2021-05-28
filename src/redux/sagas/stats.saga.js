import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "LOGIN" actions
function* fetchFormSaga() {

    try {
        const forms = yield axios.get(`/api/forms/`);
        yield put({ type: 'FETCH_FORM', payload: forms.data });
        console.log('HEY YOU PAL',forms.data);

    } catch (error) {
        alert(' sorry adding a form is not working at the moment. Try again later');
        console.log('Error getting form data', error);
    }
}

function* fetchIndividualData(action) {

    try {
        console.log(action.payload);
        const specs = yield axios.get(`/api/specs/${action.payload}`);
        yield put({ type: 'FETCH_SPEC_FORM', payload: specs.data });
        console.log(specs.data);

    } catch (error) {
        alert(' sorry adding a spec is not working at the moment. Try again later');
        console.log('Error getting form data', error);
    }
}

function* getFormSaga() {
  yield takeLatest('GET_FORM', fetchFormSaga);
  yield takeLatest('GET_FORM_DATA', fetchIndividualData);
}

export default getFormSaga;