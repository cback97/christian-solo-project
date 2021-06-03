import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './LoginForm.css'

// Material-UI components
import { TextField } from '@material-ui/core';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blueGrey, orange, blue, } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


// CSS STYLES
const useStyles = makeStyles({
  root: {
     
      background: 'linear-gradient(90deg,#333,#999)',
      border: 0,
      borderRadius: 15,
      color: 'blueGrey',
      padding: '0 30px',
    }
  , headerTabs: {
    backgroundColor: blueGrey[400],
    color: orange[400],
    fontSize: 24,
    paddingTop: 20,
    paddingBottom: 15
  }, field: {
    marginBottom: "4em",

  }, paper: {
    height: 500,
    width: 500,
    alignContent: 'center'
  }, textfield: {
    width: 200,
    marginLeft: 150
  }, colors: {
    backgroundColor: blue[500],
    color: orange[200]
  }


})


function LoginForm() {
  // MAKE STYLES 
  const classes = useStyles();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
        
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <>
    {/* // MATERIAL UI LOGIN */}
    <Grid container direction="column" alignItems="center" justify='center'>
        <Grid item className={classes.colors} lg={5} >
          <Paper elevation={4} className={classes.paper}>
            <form onSubmit={login}>
            
            <Typography justify='center' variant="h5">Login</Typography>
            
            <br />
            <Grid item >
              <TextField
                className={classes.textfield}
                required
                size="small"
                color='orange'
                label="username"
                variant="outlined"
                type="username"
                value={username}
              onChange={(event) => setUsername(event.target.value)}
                >
              </TextField>
            </Grid>
            <br />
            <Grid item>
              <TextField
                className={classes.textfield}
                required
                size="small"
                color='blue'
                label="password"
                variant="outlined"
                type="password"
                value={password}
              onChange={(event) => setPassword(event.target.value)}>
              </TextField>
            
            <br />
            
              <Button type="submit" size="large" color="secondary" style={{ marginLeft: 200, marginTop: 35}}variant="contained"> Log In</Button>
            </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
      {/* // END MATERIAL UI LOGIN */}
      {/* <form className="formPanel" onSubmit={login}>
        <h2>Login</h2>
        {errors.loginMessage && (
          <h3 className="alert" role="alert">
            {errors.loginMessage}
          </h3>
        )}
        <div>
          <label htmlFor="username">
            Username:
          <input
              type="text"
              name="username"
              required
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
          <input
              type="password"
              name="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </div>
        <div>
          <input className="btn" type="submit" name="submit" value="Log In" />
        </div>
      </form> */}

      
    </>
  );
}

export default LoginForm;
