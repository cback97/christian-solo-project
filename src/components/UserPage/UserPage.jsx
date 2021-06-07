
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, CardContent, CardActionArea, Grid, Card, Typography, CardHeader } from '@material-ui/core';
import globalUseStyle from '../GlobalImplementation/globalUseStyles';



const useStyles = makeStyles({
  root: {
    maxHeight: 345,
    maxWidth: 345

  },
});
function UserPage() {
  const user = useSelector((store) => store.user);
  const classes = useStyles();
  const globalStyle = globalUseStyle();

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
      <CssBaseline />
      {/* <h2>Welcome, {user.username}!</h2>
      
      <LogOutButton className="btn" /> */}
      <div className="container">
        <h1>Welcome, {user.first_name} {user.last_name}</h1>



        {/* CARD TEMPLATE */}
        <Grid container spacing={5} justify="center" alignItems="flex-end" style={{marginTop: 30}}>
          <Grid item xs={12} sm={6} md={4} className={globalStyle.card}>
            <CardActionArea onClick={Assessment}>
              <Card style={{ height: 250, backgroundColor: '#0dd0d3' }}>
                <CardHeader
                  title='Weekly Check-in'
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={globalStyle.cardHeader}
                />

                <CardContent style={{ backgroundColor: '#0dd0d3' }}>
                  <div className={globalStyle.cardBody}>
                    <Typography variant="subtitle1" color="textSecondary" component="p">
                      In this section, you will be filling out three forms.
                                                    </Typography>
                  </div>
                  <ul className={globalStyle.ul}>
                    <Typography component="li" variant="subtitle1"  color="textSecondary" align="center" >
                      - PHQ 9 Questionnaire
                                                    </Typography>
                    <Typography component="li" variant="subtitle1"  color="textSecondary" align="center" >
                      - GAD 7 Questionnaire
                                                    </Typography>
                    <Typography component="li" variant="subtitle1"  color="textSecondary" align="center" >
                      - Weekly Reflection (max of 500char.)
                                                    </Typography>

                  </ul>

                </CardContent>

              </Card>
            </CardActionArea>
          </Grid>
          {/* END Patient Check-in Card */}

          {/* START Patient Information Card */}
          <Grid item xs={12} sm={6} md={4} className={globalStyle.card}>
            <CardActionArea onClick={PersonalInfo}>
              <Card style={{ height: 250, backgroundColor: '#0dd0d3' }}>
                <CardHeader
                  title='Personal Information'
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={globalStyle.cardHeader}
                />
                <CardContent style={{ backgroundColor: '#0dd0d3' }}>
                  <div className={globalStyle.cardBody}>
                    <Typography variant="subtitle1" color="textSecondary" component="p">
                      In this section, you will be able to edit your contact and login information
                                                    </Typography>
                  </div>
                </CardContent>

              </Card>
            </CardActionArea>
          </Grid>

          {/* END Patient Information Card */}
          <Grid item xs={12} sm={6} md={4} className={globalStyle.card}>
            {/* Patient Statistics Card */}
            <CardActionArea onClick={Statistics}>
              <Card style={{ height: 250, backgroundColor: '#0dd0d3' }}>
              <CardHeader
                  title='Patient Statistics'
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={globalStyle.cardHeader}
                />
                 <CardContent style={{ backgroundColor: '#0dd0d3' }}>
                  <div className={globalStyle.cardBody}>
                    <Typography variant="subtitle1" color="textSecondary" component="p">
                    In this section, you will be able to select all of your weekly check-in's and,
                    edit or delete your submissions
                                                                        </Typography>
                  </div>
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
