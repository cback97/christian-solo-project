import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './AdminHome.css'
import { Card, CardActionArea, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function AdminHome() {
const history = useHistory();
const adminClients = useSelector(store => store.user)
const dispatch = useDispatch();

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  const classes = useStyles();
    return (
        <div>
        <Grid container direction='column' justify='center' alignContent='center'>
            {/* <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                <Typography variant='h2'> Admin Home </Typography>
                <Link className='link' onClick={() => dispatch({ type: 'LOGOUT' })}>Log Out</Link>
            </Grid> */}
            <Grid item >
            <Typography variant='h2'> Admin Home </Typography>
            </Grid>
            <br />
            
            <Grid item item xs={2} sm={2} md={2} lg={2} xl={2}>
                    <CardActionArea>
                        <Card style={{ textAlign: 'center' }}>
                            <CardContent>
                                <Typography onClick={() => dispatch({ type: 'LOGOUT' })} variant='button'> Log Out </Typography>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Grid >
        </Grid>
        <TableContainer component={Paper}>
      <Table className={classes.table} >
        <TableHead>
          <TableRow>
            
            <TableCell align="center">Patient Name</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {adminClients.map((patient, i) => (
            <TableRow key={i}>
              <TableCell align="center" component="th" scope="row" align>
                {patient.last_name}, {patient.first_name}
              </TableCell>
         
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )

}

export default AdminHome;