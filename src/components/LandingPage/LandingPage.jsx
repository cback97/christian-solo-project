import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';


const useStyles = makeStyles({
  root: {
    maxHeight: 345,
    maxWidth: 345

  },
});

function LandingPage() {
  const classes = useStyles();

  const [heading, setHeading] = useState('Welcome');
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

  return (
    <div className="container">
    <h2>{heading}</h2>

    <div className="grid">
  
    </div>

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
  );
}

export default LandingPage;