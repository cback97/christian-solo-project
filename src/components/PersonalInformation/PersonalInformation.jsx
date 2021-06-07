import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import swal from 'sweetalert';

import globalUseStyle from '../GlobalImplementation/globalUseStyles';
import ClientHeaderComponent from '../GlobalImplementation/ClientHeaderComponent';

// MATERIAL UI COMPONENTS
import { Box } from '@material-ui/core';
import { TextField, CssBaseline, Container, createMuiTheme, ThemeProvider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

//MOMENT JS FOR RENDERING DATE CORRECTLY
import moment from 'moment';




function Personal() {


    useEffect(() => {
        dispatch({ type: 'FETCH_USER' });
    }, []);

    // STATE OF EDIT
    const [editMode, setEditMode] = useState(false);

    // STATE OF DATA BEING EDITED
    const [username, setUsername] = useState('');
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');

    // GLOBAL MAKE STYLES 
    const globalStyle = globalUseStyle();
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#bbdefb',
            },
            secondary: {
                main: '#00bfa5',
            },
                     
    }})

    // USER REDUCER
    const userDetails = useSelector(store => store.user);

    // PUSH US SOMEWHERE
    const history = useHistory();

    const dispatch = useDispatch();

    const handleEdit = (e) => {
        // Turn on edit mode
        setEditMode(true);

        // Set values in state from our user reducer
        setUsername(userDetails.username);
        setFName(userDetails.first_name);
        setLName(userDetails.last_name);
        setPhone(userDetails.phone);
        setEmail(userDetails.email);
        setDob(moment(userDetails.dob).format("MM/DD/YYYY"));
    }

    const saveEdit = () => {

        const updatedUser = {
            username: username,
            first_name: fName,
            last_name: lName,
            phone: phone,
            email: email,
            dob: dob
        };

        console.log('Updated Book Info:', updatedUser);
        dispatch({ type: 'EDIT_USER', payload: updatedUser });

        // turn off edit mode
        setEditMode(false);

        //Navigate back, because this page won't get fresh data from the server
        history.push('/');

        swal({
            title: "Personal Information Successfully Updated",
            icon: "success",
            button: "OK",
          });

    };

    return (
        <div className="PersonalInfo">
<ThemeProvider theme={theme}>
            <CssBaseline />
            <Grid container >
                <ClientHeaderComponent globalStyle={globalStyle} />
            </Grid>
            <Grid container justify='center'>
                <Typography className={globalStyle.fname} justify="center" variant="h2">{userDetails.first_name}'s Details</Typography>
            </Grid>

            <Grid container justify='center'>
                <Box className={globalStyle.editButton}>
                    {editMode === false && <Button variant='contained' size='large' onClick={() => handleEdit()}> Edit</Button>}
                    {editMode && <Button variant='contained' size='large' onClick={() => saveEdit()}>Save</Button>}
                </Box>
            </Grid>

            { ! editMode ?

                <Grid container spacing={5}  justify="center" alignItems="flex-end" style={{textAlign: 'center'}} >

                    <Grid item xs={12} sm={6} md={4} lg={4} xl={4} >
                        <Paper style={{ height: 350, backgroundColor: '#0dd0d3' }}>
                            <Typography justify="center" variant="h6">PERSONAL INFO</Typography>
                            <p>First Name: {userDetails.first_name}</p>
                            <p>Last Name: {userDetails.last_name}</p>
                            <p>Date of Birth: {moment(userDetails.dob).format("MM/DD/YYYY")}</p>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                        <Paper style={{ height: 350, backgroundColor: '#0dd0d3' }}>
                            <Box>
                                <Typography justify="center" variant="h6">CONTACT INFO</Typography>
                                <p>Email: {userDetails.email}</p>
                                <p>Phone: {userDetails.phone}</p>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                        <Paper style={{ height: 350, backgroundColor: '#0dd0d3' }}>
                            <Typography justify="center" variant="h6">LOGIN INFO</Typography>

                            <p>{userDetails.username}</p>

                        </Paper>
                    </Grid>
                </Grid>

                : // BEGINNING EDIT MODE


                <Grid container spacing={5}  justify="center" alignItems="flex-end" style={{textAlign: 'center'}}  >
<>
                    <Grid item xs={4} sm={4} md={4} lg={4} xl={4} >
                        <Paper style={{ height: 375, backgroundColor: '#0dd0d3' }}>
                            <Container style={{marginTop: 25}}>
                            <Typography justify="center" variant="h6">PERSONAL INFO</Typography>

                            <TextField
                                value={fName}
                                fullWidth
                                className={globalStyle.input}
                                onChange={(e) => setFName(e.target.value)}
                                label='Change First Name'
                                type="text"
                                required

                            />
                            <TextField
                                value={lName}
                                fullWidth
                                className={globalStyle.input}
                                onChange={(e) => setLName(e.target.value)}
                                label='Change Last Name'
                                type="text"
                                required

                            />
                            <TextField
                                value={dob}
                                fullWidth
                                className={globalStyle.input}
                                onChange={(e) => setDob(e.target.value)}
                                label='Change Date of Birth'
                                type="text"
                                required
                                InputLabelProps={{ shrink: true }}

                            />
                            </Container>
                        </Paper>
                    </Grid>

                    <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                        <Paper style={{ height: 375, backgroundColor: '#0dd0d3' }}>
                            <Container style={{marginTop: 25}}>
                                <Typography justify="center" variant="h6">CONTACT INFO</Typography>

                                <TextField
                                    value={email}
                                    fullWidth
                                    className={globalStyle.input}
                                    onChange={(e) => setEmail(e.target.value)}
                                    label='Change Email'
                                    type="email"
                                    required

                                />
                                <TextField
                                    value={phone}
                                    fullWidth
                                    className={globalStyle.input}
                                    onChange={(e) => setPhone(e.target.value)}
                                    label='Change Phone Number'
                                    type="tel"
                                    required
                                />

                            </Container>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                        <Paper style={{ height: 375, backgroundColor: '#0dd0d3' }}>
                            <Container style={{marginTop: 25}}>
                            <Typography justify="center" variant="h6">LOGIN INFO</Typography>

                            <TextField
                                value={username}
                                fullWidth
                                className={globalStyle.input}
                                onChange={(e) => setUsername(e.target.value)}
                                label='Change Username'
                                type="text"
                                required

                            />
                            </Container>
                        </Paper>

                    </Grid>
                </>
                </Grid>}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            </ThemeProvider>
        </div>
    )
}





export default Personal;