import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';

// MATERIAL UI COMPONENTS
import { Box, Card, CardActionArea, CardContent, FormControlLabel } from '@material-ui/core';
import { TextField } from '@material-ui/core';

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blueGrey, orange, yellow, blue, red, } from '@material-ui/core/colors';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import { ButtonGroup } from '@material-ui/core';
import { useHistory } from 'react-router';





function Personal() {

    const userDeets = useSelector(store => store.user);
    const history = useHistory();

    const YourDetails = () => {

        const homeRoute = () => {
            history.push('/user')
        }

        return (
            <div className="PersonalInfo">

                <Grid container justify='center'>
                    {/* BACK TO HOME PAGE */}
                    <Grid item item xs={4} sm={4} md={4} lg={4} xl={4}>
                        <CardActionArea>
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
                    <Typography justify="center" variant="h2">{userDeets.first_name}'s Details</Typography>
                </Grid>
                <Grid container   >

                    <Grid item xs={4} sm={4} md={4} lg={4} xl={4} >
                        <Paper style={{ height: 150 }}>
                            <Typography justify="center" variant="h6">PERSONAL INFO</Typography>
                            <p>First Name: {userDeets.first_name}</p>
                            <p>Last Name: {userDeets.last_name}</p>
                            <p>Date of Birth: {userDeets.dob}</p>
                        </Paper>
                    </Grid>

                    <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                        <Paper style={{ height: 150 }}>
                            <Box>
                                <Typography justify="center" variant="h6">CONTACT INFO</Typography>

                                <p>Email: {userDeets.email}</p>
                                <p>Phone: {userDeets.phone}</p>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                        <Paper style={{ height: 150 }}>
                            <Typography justify="center" variant="h6">LOGIN INFO</Typography>

                            <p>{userDeets.username}</p>
                            <p>{userDeets.password}</p>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }

    return (
        <div justify='center'>
            <YourDetails />
        </div>
    )

}

export default Personal;