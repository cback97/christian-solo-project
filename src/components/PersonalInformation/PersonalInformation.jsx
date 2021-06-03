import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

import globalUseStyle from '../GlobalImplementation/globalUseStyles';
// import EditButton from '../GlobalImplementation/EditButton';
import SaveButton from '../GlobalImplementation/SaveButton';

// MATERIAL UI COMPONENTS
import { Box, Card, CardActionArea, CardContent } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';





function Personal() {
    console.log('IN RENDER.........');
    
    useEffect(() => {
        console.log('IN USE EFFECT');
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

    // USER REDUCER
    const userDeets = useSelector(store => store.user);

    // PUSH US SOMEWHERE
    const history = useHistory();

    const dispatch = useDispatch();

    const handleEdit = (e) => {
        // Turn on edit mode
        setEditMode(true);

        // Set values in state from our user reducer
        setUsername(userDeets.username);
        setFName(userDeets.first_name);
        setLName(userDeets.last_name);
        setPhone(userDeets.phone);
        setEmail(userDeets.email);
        setDob('');
    }

    const saveEdit = () => {

        const updatedUser = {
            username: username,
            first_name: fName,
            last_name: lName,
            phone: phone,
            email: email,
            dob: dob
        }

        console.log('Updated Book Info:', updatedUser);
        dispatch({ type: 'EDIT_USER', payload: updatedUser })

        // turn off edit mode
        setEditMode(false)

        //Navigate back, because this page won't get fresh data from the server
        history.push('/');

    }

    // const [phqAnswers, setPhqAnswers] = useState(initStatePhq);

    // const initStateGad = {
    //     gadAnswer1: 0,
    //     gadAnswer2: 0,
    //     gadAnswer3: 0,
    //     gadAnswer4: 0,
    //     gadAnswer5: 0,
    //     gadAnswer6: 0,
    //     gadAnswer7: 0,
    // };
   // SAMPLE FUNCTION FOR EDIT LATER
    // const handleInputChangeFor = (propertyName) => (e) => {
    //     setPhqAnswers({
    //         ...phqAnswers,
    //         [propertyName]: e.target.value,
    //     });
    // };
 



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
                    <Typography className={globalStyle.fname} justify="center" variant="h2">{userDeets.first_name}'s Details</Typography>
                </Grid>
                {editMode === false && <Button variant='contained' size='large' onClick={()=> handleEdit()}> Edit</Button> }
                {editMode && <Button variant='contained' size='large' onClick={()=> saveEdit()}>Save</Button>}

                {!editMode ?
                    <Grid container justify='center'  >

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

                            </Paper>
                        </Grid>
                    </Grid>

                    // BEGINNING EDIT MODE
                    :
                    <Grid container justify='center'  >
                        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
                            <Box className={globalStyle.btnArea}>
                                <SaveButton onClick={saveEdit} />
                        </Box>

                        </Grid>
                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4} >
                            <Paper style={{ height: 150 }}>
                                <Typography justify="center" variant="h6">PERSONAL INFO</Typography>
                                {/* <p>First Name: {userDeets.first_name}</p>
                                <p>Last Name: {userDeets.last_name}</p>
                                <p>Date of Birth: {userDeets.dob}</p> */}
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
                                    type="date"
                                    required
                                
                                />
                            </Paper>
                        </Grid>

                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                            <Paper style={{ height: 150 }}>
                                <Box>
                                    <Typography justify="center" variant="h6">CONTACT INFO</Typography>

                                    {/* <p>Email: {userDeets.email}</p>
                                    <p>Phone: {userDeets.phone}</p> */}
                            <TextField
                                    value={email}
                                    fullWidth
                                    className={globalStyle.input}
                                    onChange={(e) => setEmail(e.target.value)}
                                    label='Change Email'
                                    type="text"
                                    required
                                
                                /> 
                             <TextField
                                    value={phone}
                                    fullWidth
                                    className={globalStyle.input}
                                    onChange={(e) => setPhone(e.target.value)}
                                    label='Change Phone Number'
                                    type="text"
                                    required
                                
                                />
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                            <Paper style={{ height: 150 }}>
                                <Typography justify="center" variant="h6">LOGIN INFO</Typography>

                                {/* <p>{userDeets.username}</p> */}
                                <TextField
                                    value={username}
                                    fullWidth
                                    className={globalStyle.input}
                                    onChange={(e) => setUsername(e.target.value)}
                                    label='Change Username'
                                    type="text"
                                    required
                                
                                />
                            </Paper>

                        </Grid>
                    </Grid>}
                    
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