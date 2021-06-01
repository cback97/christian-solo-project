
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxHeight: 345,
    maxWidth: 345

  },
});
function UserPage() {
  const user = useSelector((store) => store.user);
  const classes = useStyles();


  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };
  const Statistics = (event) => {
    history.push('/stats');
  };
  const Assessment = (event) => {
    history.push('/checkin');
  };
  const PersonalInfo = (event) => {
    history.push('/personal');
  };
  // this component doesn't do much to start, just renders some user reducer info to the DOM

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />
      <div className="container">
        <h2>Welcome, {user.first_name} {user.last_name}</h2>



        {/* CARD TEMPLATE */}
        <Grid container justify='center'  >
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <CardActionArea onClick={Assessment}>
              <Card style={{ height: 250 }}>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Weekly Check-in
        </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    In this section, you will be filling out three forms.
      <br /><br />
     - PHQ 9 Questionnaire
      <br />
     - GAD 7 Questionnaire
     <br />
     - Weekly Reflection (max of 500char.)
        </Typography>
                </CardContent>

              </Card>
            </CardActionArea>
          </Grid>
          {/* END Patient Check-in Card */}

          {/* START Patient Information Card */}
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4} >
            <CardActionArea onClick={PersonalInfo}>
              <Card style={{ height: 250 }}>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Personal Information
        </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    In this section, you will be able to edit your contact and login information
        </Typography>
                </CardContent>

              </Card>
            </CardActionArea>
          </Grid>
          {/* END Patient Information Card */}
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            {/* Patient Statistics Card */}
            <CardActionArea onClick={Statistics}>
              <Card style={{ height: 250 }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Patient Statistics
        </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    In this section, you will be able to select all of your weekly check-in's and,
                    edit or delete your submissions
        </Typography>
                </CardContent>

              </Card>
            </CardActionArea>
            {/* END Patient Statistics Card */}
          </Grid>
        </Grid>

      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
