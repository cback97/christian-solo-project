import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

import globalUseStyle from '../GlobalImplementation/globalUseStyles';
import ClientHeaderComponent from '../GlobalImplementation/ClientHeaderComponent'

// MATERIAL UI COMPONENTS
import { Box } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';





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
        };

        console.log('Updated Book Info:', updatedUser);
        dispatch({ type: 'EDIT_USER', payload: updatedUser });

        // turn off edit mode
        setEditMode(false);

        //Navigate back, because this page won't get fresh data from the server
        history.push('/');

    };

    return (
        <div className="PersonalInfo">

            <Grid container justify='center'>
                <ClientHeaderComponent globalStyle={globalStyle} />
            </Grid>

            <Grid container justify='center'>
                <Typography className={globalStyle.fname} justify="center" variant="h2">{userDeets.first_name}'s Details</Typography>
            </Grid>

            <Grid container justify='center'>
                <Box className={globalStyle.editButton}>
                    {editMode === false && <Button variant='contained' size='large' onClick={() => handleEdit()}> Edit</Button>}
                    {editMode && <Button variant='contained' size='large' onClick={() => saveEdit()}>Save</Button>}
                </Box>
            </Grid>

            { !editMode ?

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

                : // BEGINNING EDIT MODE


                <Grid container justify='center'  >

                    <Grid item xs={4} sm={4} md={4} lg={4} xl={4} >
                        <Paper style={{ height: 150 }}>
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
                                type="date"
                                required
                                InputLabelProps={{ shrink: true }}

                            />
                        </Paper>
                    </Grid>

                    <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                        <Paper style={{ height: 150 }}>
                            <Box>
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





export default Personal;