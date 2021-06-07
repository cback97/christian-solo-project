import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* editGadScore( action ) {
    console.log('In edit Gad', action.payload);
    try {
        yield axios.put('/api/forms', action.payload);
        yield put( { type: 'GET_FORM_DATA' } ); 
    } catch (error) {
        alert(`Sorry. Editing your GAD is not working. Try again later`);
        console.log('Error Editing GAD', error);
    }
}

function* editGadSaga() {
    
    yield takeLatest('EDIT_GAD', editGadScore);
    
  }

  export default editGadSaga;