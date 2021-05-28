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

    const deleteSelector =(objectID) => {
        dispatch({type: 'DELETE_ENTRY', payload: objectID})
        
            dispatch({ type: 'GET_FORM' });
        
    }

    return (

        <div>
            <h1>This is {reduxStore}`s Form Stats</h1>

            <table className="hoverTable">
                <thead><tr className="hoverTable"> SELECT A FORM TO VIEW</tr></thead>
                <tbody>
                    {clientItem.map(
                        (item) => <tr className="hoverTable" key={item.id} onClick={(event) => formSelector(item.id)}>
                    <td className="hoverTable">{item.date_submitted} | {item.gad_form_score} | {item.phq_form_score} | {item.reflections}</td>
                    <td id="hoverButton"><button key={item.id} onClick={(event) => deleteSelector(item.id)}>DELETE</button></td></tr>)}
                </tbody>
            </table>
        </div>






    )
}

export default PatientStats;