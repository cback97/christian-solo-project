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



function* editSaga() {
    yield takeLatest('EDIT_USER', editGadScore);
    yield takeLatest('EDIT_GAD', editUser);
    yield takeLatest('EDIT_PHQ', editPhqScore);
    yield takeLatest('EDIT_REFLECTION', editReflection);
  }
export default editSaga;