import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';

// Material-UI components


import { FormControlLabel } from '@material-ui/core';
import { TextField } from '@material-ui/core';

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blueGrey, orange, yellow } from '@material-ui/core/colors';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


function LoginForm() {
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
    <form className="formPanel" onSubmit={login}>
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
    </form>
    <Grid container>
        <Grid item sm={12} md={6} lg={3} xl={1}>
           <Paper>
             <TextField
             color="primary"
             label="username"
             variant="outlined"
             type="username">
             </TextField>
             <TextField
             color="primary"
             label="username"
             variant="outlined"
             type="username">
             </TextField>
           </Paper>
        </Grid>
    </Grid>
    </>
  );
}

export default LoginForm;
