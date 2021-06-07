import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* editUser( action ) {
    console.log('In edit sage', action.payload);
    try {
        yield axios.put('/api/user', action.payload);
        yield put( { type: 'FETCH_USER' } ); 
    } catch (error) {
        alert(`Sorry. Things aren't working at the moment. Try again later`);
        console.log('Error Editing User', error);
    }
}




function* editSaga() {
    yield takeLatest('EDIT_USER', editUser);
  
  }
export default editSaga;