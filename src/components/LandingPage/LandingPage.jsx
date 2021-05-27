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
    maxWidth: 345,
  },
});

function LandingPage() {
  const classes = useStyles();

  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
            Dr. Sandman <br />Email: therapist@help.com<br />
 Phone: 777-777-7777
          </p>

        </div>
        <div className="grid-col grid-col_4">


          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>

      {/* CARD TEMPLATE */}
      <Grid container>
      <Card className={classes.root}>
        <CardActionArea>

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Daily Check-in
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              In this section, you will be filling out three forms.
        <br /><br />
       - PHQ 9 Questionare
        <br />
       - GAD 7 Questionare
       <br />
       - Weekly Reflection (max of 500char.)
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Open
        </Button>
        </CardActions>
      </Card>
     {/* END Patient Check-in Card */}
     {/* START Patient Information Card */}
      <Card className={classes.root}>
        <CardActionArea>

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Daily Check-in
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              In this section, you will be able to edit your contact and login information
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Open
        </Button>
        </CardActions>
      </Card>
      {/* END Patient Information Card */}

      {/* Patient Statistics Card */}
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Patient Statistics
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              In this section, you will be able to select all of your weekly check-in's and,
              edit or delete your submissions
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Open
        </Button>
        </CardActions>
      </Card>
      {/* END Patient Statistics Card */}
      </Grid>

    </div>
  );
}

export default LandingPage;
