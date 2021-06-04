import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './PatientStats.css'
import globalUseStyle from '../GlobalImplementation/globalUseStyles';
// MATERIAL UI COMPONENTS
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import ClientHeaderComponent from '../GlobalImplementation/ClientHeaderComponent'

function PatientStats() {

    const globalStyle = globalUseStyle();

    const firstName = useSelector(store => store.user.first_name);
    const clientItem = useSelector(store => store.formReducer)
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'GET_FORM' });
    }, []);

    const specsRoute = () => {
        history.push('/specs')
    }

    const homeRoute = () => {
        history.push('/user')
    }

    const formSelector = (itemID) => {
        dispatch({ type: 'GET_FORM_DATA', payload: itemID })
    };

    const deleteSelector = (objectID) => {
        dispatch({ type: 'DELETE_ENTRY', payload: objectID })

        dispatch({ type: 'GET_FORM' });

    }

    return (

        <div>
            <Grid container justify='center'>
                
            <ClientHeaderComponent globalStyle={globalStyle}/>

                <Grid container justify='center'>
                    <Typography justify="center" variant="h2" className={globalStyle.headerArea}>{firstName}`s Form Data</Typography>
                </Grid>


                <table className="hoverTable" >
                    <thead className="hoverTable"><tr className="hoverTable"><th className="hoverTable" colSpan="2">SELECT A FORM TO VIEW</th></tr></thead>
                    <tbody className="hoverTable">
                        {clientItem.map(
                            (item) => <tr className="hoverTable" key={item.id} onClick={(event) => formSelector(item.id)}>
                                <td className="hoverTable" onClick={specsRoute} >{item.date_submitted}</td>
                                <td className="hoverTable"><button key={item.id} onClick={(event) => deleteSelector(item.id)}>DELETE</button></td></tr>)}
                    </tbody>
                </table>
            </Grid>
        </div>






    )
}

export default PatientStats;