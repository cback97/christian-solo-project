import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SpecDetails.css'
import { Card, CardActionArea, CardContent, FormControlLabel } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import globalUseStyle from '../GlobalImplementation/globalUseStyles';
import ClientHeaderComponent from '../GlobalImplementation/ClientHeaderComponent'
import { Button } from '@material-ui/core';

function SpecsPage() {
    const globalStyle = globalUseStyle();
    const specReducer = useSelector(store => store.specFormReducer)


    // STATE OF EDIT
    const [phqEditMode, setPhqEditMode] = useState(false);
    const [gadEditMode, setGadEditMode] = useState(false);
    const [reflectEditMode, setReflectEditMode] = useState(false);


    // PUSH US SOMEWHERE
    const history = useHistory();

    const dispatch = useDispatch();



    const editReflection = () => {

        history.push('/reflection')
    }

    const editGAD = () => {

        history.push('/gad')
    }

    const editPHQ = () => {

        history.push('/phq')
    }


    return (
        <div className="overall">
            <Grid container justify='center'>


                <ClientHeaderComponent globalStyle={globalStyle} />

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
                        <Button variant='contained' size='large' onClick={editGAD}>EDIT PHQ SCORE</Button>
                        <h3>PHQ-9 SCORE</h3>
                        Interpreting PHQ-9 Scores
                        <p>0-4: Minimal depression</p>
                        <p>5-9: Mild depression</p>
                        <p>10-14: Moderate depression</p>
                        <p>15-19: Moderately severe depression</p>
                        <p>20-27: Severe depression</p>
                        <h4>Your Score</h4>
                        <p>{spec.phq_form_score}</p>
                        <Button variant='contained' size='large' onClick={editPHQ}>EDIT GAD SCORE</Button>
                        <h3>REFLECTIONS</h3>
                        <p>{spec.reflections}</p>
                        <Button variant='contained' size='large' onClick={editReflection}>EDIT REFLECTION</Button>
                    </div>
                );
            })}

        </div>
    )
}

export default SpecsPage;

