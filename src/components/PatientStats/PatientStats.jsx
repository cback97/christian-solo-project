import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './PatientStats.css'
import globalUseStyle from '../GlobalImplementation/globalUseStyles';
import { Button } from '@material-ui/core';
import swal from 'sweetalert';

// MATERIAL UI COMPONENTS
import {Typography,CssBaseline,Grid} from '@material-ui/core';


import ClientHeaderComponent from '../GlobalImplementation/ClientHeaderComponent'
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#bbdefb',
    },
    secondary: {
      main: '#00bfa5',
    },
  typography: {
    fontFamily: 'Work Sans'
  }
  }})
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
        swal({
            title: "Form Successfully Deleted",
            icon: "success",
            button: "OK",
          });
        dispatch({ type: 'GET_FORM' });

    }

    return (
        <div>
            <ThemeProvider theme={theme}>
             <CssBaseline />
            <Grid container justify='center'>
            <ClientHeaderComponent globalStyle={globalStyle}/>

                <Grid container justify='center'>
                    <Typography justify="center" variant="h2" className={globalStyle.headerArea}>{firstName}`s Form Data</Typography>
                </Grid>


                <table className="hoverTable" >
                    <thead className="hoverTable"><tr id="tHeader" className="hoverTable"><th className="hoverTable" colSpan="2">SELECT A FORM TO VIEW</th></tr></thead>
                    <tbody className="hoverTable">
                        {clientItem.map(
                            (item) => <tr className="hoverTable" key={item.id} onClick={(event) => formSelector(item.id)}>
                                <td className="hoverTable" onClick={specsRoute} >{item.date_submitted}</td>
                                <td className="hoverTable"><Button variant='contained' key={item.id} onClick={(event) => deleteSelector(item.id)}>DELETE</Button></td></tr>)}
                    </tbody>
                </table>
            </Grid>
            </ThemeProvider>
        </div>


    )
}

export default PatientStats;