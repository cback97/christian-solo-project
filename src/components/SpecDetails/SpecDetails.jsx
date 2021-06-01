import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './SpecDetails.css'
import { Card, CardActionArea, CardContent, FormControlLabel } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
function SpecsPage() {
    const history = useHistory();
    const specReducer = useSelector(store => store.specFormReducer)

    // const dispatch = useDispatch();


    const homeRoute = () => {
        history.push('/user')
    }
    return (
        <div className="overall">
            <Grid container justify='center'>
                {/* BACK TO HOME PAGE */}
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <CardActionArea >
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
            <header>
                <h1>Selected FORM </h1>
            </header>
            {specReducer.map((spec, i) => {
                return (
                    <div key={i} >
                        <h2>{spec.date_submitted}</h2>
                        <h3>STATS OVERVIEW</h3>
                        <br />
                        <h3>GAD-7 SCORE</h3>
                        Interpreting GAD-7 Scores 
                        <p>0–4: minimal anxiety</p>
                        <p>5–9: mild anxiety</p>
                        <p>10–14: moderate anxiety</p>
                        <p>15–21: severe anxiety </p>
                        <h4>Your Score</h4>
                        <p>{spec.gad_form_score}</p>
                        <h3>PHQ-9 SCORE</h3>
                        Interpreting PHQ-9 Scores 
                        <p>0-4: Minimal depression</p> 
                        <p>5-9: Mild depression</p>
                        <p>10-14: Moderate depression</p>
                        <p>15-19: Moderately severe depression</p> 
                        <p>20-27: Severe depression</p> 
                        <h4>Your Score</h4>
                        <p>{spec.phq_form_score}</p>
                        <h3>REFLECTIONS</h3>
                        <p>{spec.reflections}</p>
                    </div>
                );
            })}

        </div>
    )
}

export default SpecsPage;

