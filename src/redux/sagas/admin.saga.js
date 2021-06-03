import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* fetchPatientSaga() {
  try {
    const patients = yield axios.get(`/api/admin`);
    yield put({ type: 'GET_PATIENTS', payload: patients.data });
    console.log('HERE ARE THE PATIENTS',patients.data);

  } catch (error) {

    console.log('Error with getting patients:', error);
   
  }
}

function* patientSaga() {
  yield takeLatest('FETCH_PATIENTS', fetchPatientSaga);
}

export default patientSaga;