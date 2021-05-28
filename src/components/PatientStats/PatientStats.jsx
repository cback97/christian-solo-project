import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './PatientStats.css'


function PatientStats() {

    const reduxStore = useSelector(store => store.user.first_name);
    const clientItem = useSelector(store => store.formReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'GET_FORM' });
    }, []);

 
    console.log(reduxStore);

    const formSelector = (itemID) => {
        dispatch({ type: 'GET_FORM_DATA', payload: itemID })
    };

    return (

        <div>
            <h1>This is {reduxStore}`s Form Stats</h1>

            <table>
                <thead><tr><th> SELECT A FORM TO VIEW</th></tr></thead>
                <tbody>
                    {clientItem.map(
                        (item) => <tr className="form-rows" key={item.id} onClick={(event) => formSelector(item.id)}>
                    <td>{item.date_submitted}</td>
                    <td>{item.gad_form_score}</td>
                    <td>{item.phq_form_score}</td>
                    <td>{item.reflections}</td></tr>)}
                </tbody>
            </table>
        </div>






    )
}

export default PatientStats;