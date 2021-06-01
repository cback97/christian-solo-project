import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './PatientStats.css'

// MATERIAL UI COMPONENTS
import { Card, CardActionArea, CardContent } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { ButtonGroup } from '@material-ui/core';

function PatientStats() {

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
                {/* BACK TO HOME PAGE */}
                <Grid item item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <CardActionArea >
                        <Card onClick={homeRoute} style={{ height: 125, textAlign: 'center' }}>
                            <CardContent>
                                <Typography variant='caption'> Back To Home Page </Typography>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Grid >
                {/* END BACK TO HOME PAGE  */}

                {/*  PROVIDER CONTACT INFO  */}
                <Grid item item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <CardActionArea>
                        <Card style={{ height: 125, textAlign: 'center' }}>
                            <CardContent>
                                <Typography variant='caption'>  Dr. Sandman <br />Email: therapist@help.com<br />Phone: 777-777-7777 </Typography>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Grid >
                {/* END PROVIDER CONTACT INFO  */}

                {/*  EMERGENCY CONTACT INFO  */}
                <Grid item item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <CardActionArea>
                        <Card style={{ height: 125, textAlign: 'center' }}>
                            <CardContent>
                                <Typography variant='caption'>  EMERGENCY LIFE LINE PHONE <br /> Phone: 777-777-7777 </Typography>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Grid >
                {/*  END EMERGENCY CONTACT INFO  */}

            </Grid>

            <Grid container justify='center'>
                <Typography justify="center" variant="h2">This is {firstName}`s Form Stats</Typography>
            </Grid>


            <table className="hoverTable">
                <thead><tr className="hoverTable"> SELECT A FORM TO VIEW</tr></thead>
                <tbody>
                    {clientItem.map(
                        (item) => <tr className="hoverTable" key={item.id} onClick={(event) => formSelector(item.id)}>
                            <td onClick={specsRoute} className="hoverTable">{item.date_submitted} | {item.gad_form_score} | {item.phq_form_score} | {item.reflections}</td>
                            <td id="hoverButton"><button key={item.id} onClick={(event) => deleteSelector(item.id)}>DELETE</button></td></tr>)}
                </tbody>
            </table>
        </div>






    )
}

export default PatientStats;