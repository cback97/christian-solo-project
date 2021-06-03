import React, { useState } from 'react'
import globalUseStyle from '../GlobalImplementation/globalUseStyles';
import SubmitButton from '../GlobalImplementation/SubmitButton';
import CancelButton from '../GlobalImplementation/CancelButton';
import { useDispatch } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';




function PHQ9Form() {
    const dispatch = useDispatch();

    const globalStyle = globalUseStyle();
    const [phqTotal, setPhqTotal] = useState(0);
    const [gadTotal, setGadTotal] = useState(0);
    const [reflection, setReflection] = useState('');

    

    const initStatePhq = {
        phqAnswer1: 0,
        phqAnswer2: 0,
        phqAnswer3: 0,
        phqAnswer4: 0,
        phqAnswer5: 0,
        phqAnswer6: 0,
        phqAnswer7: 0,
        phqAnswer8: 0,
        phqAnswer9: 0,
    };

    const [phqAnswers, setPhqAnswers] = useState(initStatePhq);

    const initStateGad = {
        gadAnswer1: 0,
        gadAnswer2: 0,
        gadAnswer3: 0,
        gadAnswer4: 0,
        gadAnswer5: 0,
        gadAnswer6: 0,
        gadAnswer7: 0,
    };

    const [gadAnswers, setGadAnswers] = useState(initStateGad);


    const totalScore = (obj) => Object.values(obj).reduce((a, b) => a + b);

    const addTotalScore = (scoreObj) => {
        let total = totalScore(scoreObj);
        return total;
    };

    

    const submitScores = (e) => {
        e.preventDefault();
        setPhqTotal(addTotalScore(phqAnswers));
        setGadTotal(addTotalScore(gadAnswers));
        dispatch({
            type: 'ADD_FORM',
            payload: { gad: gadTotal, phq: phqTotal, reflection: reflection },
        });

        handleCancel();

    };

    
    const handleInputChangeFor = (propertyName) => (e) => {
        setPhqAnswers({
            ...phqAnswers,
            [propertyName]: e.target.value,
        });
    };

    const handleCancel = () => {
        setReflection('');
        setPhqAnswers(initStatePhq);
        setGadAnswers(initStateGad);
    }

    return (

        <Grid container justify='center' alignContent='center'>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Grid container justify='center'>


                    <div className={globalStyle.paper}>

                        <Typography style={{ fontSize: 40 }} variant='overline'>PHQ-9 FORM</Typography>
                        <form onSubmit={(e) => submitScores(e)} noValidate autoComplete='off' className={globalStyle.form}>

                            <TextField
                                value={phqAnswers.phqAnswer1}
                                fullWidth
                                className={globalStyle.input}
                                onChange={(e) => setPhqAnswers({ ...phqAnswers, phqAnswer1: e.target.value })}
                                label='Q1: Little interest or pleasure in doing things?'
                                type="number"
                                required
                                InputProps={{
                                    inputProps: { min: 0, max: 3 }
                                }}
                            />
                            <TextField
                                value={phqAnswers.phqAnswer2}
                                fullWidth
                                className={globalStyle.input}
                                onChange={(e) => setPhqAnswers({ ...phqAnswers, phqAnswer2: e.target.value })}
                                label='Q2: Feeling down, depressed, or hopeless?'
                                type="number"
                                required
                                InputProps={{
                                    inputProps: { min: 0, max: 3 }
                                }}
                            />
                            <TextField
                                value={phqAnswers.phqAnswer3}
                                fullWidth
                                className={globalStyle.input}
                                onChange={(e) => setPhqAnswers({ ...phqAnswers, phqAnswer3: e.target.value })}
                                label='Q3: Trouble falling or staying asleep, or sleeping too much?'
                                type="number"
                                required
                                InputProps={{
                                    inputProps: { min: 0, max: 3 }
                                }}
                            />
                            <TextField
                                value={phqAnswers.phqAnswer4}
                                fullWidth
                                className={globalStyle.input}
                                onChange={(e) => setPhqAnswers({ ...phqAnswers, phqAnswer4: e.target.value })}
                                label='Q4: Feeling tired or having little energy?'
                                type="number"
                                required
                                InputProps={{
                                    inputProps: { min: 0, max: 3 }
                                }}
                            />
                            <TextField
                                value={phqAnswers.phqAnswer5}
                                fullWidth
                                className={globalStyle.input}
                                onChange={(e) => setPhqAnswers({ ...phqAnswers, phqAnswer5: e.target.value })}
                                label='Q5: Poor appetite or overeating?'
                                type="number"
                                required
                                InputProps={{
                                    inputProps: { min: 0, max: 3 }
                                }}
                            />
                            <TextField
                                value={phqAnswers.phqAnswer6}
                                fullWidth
                                className={globalStyle.input}
                                onChange={(e) => setPhqAnswers({ ...phqAnswers, phqAnswer6: e.target.value })}
                                label='Q6: Feeling bad about yourself — or that you are a failure or have let yourself or your family down?'
                                type="number"
                                required
                                InputProps={{
                                    inputProps: { min: 0, max: 3 }
                                }}
                            />
                            <TextField
                                value={phqAnswers.phqAnswer7}
                                fullWidth
                                className={globalStyle.input}
                                onChange={(e) => setPhqAnswers({ ...phqAnswers, phqAnswer7: e.target.value })}
                                label='Q7: Trouble concentrating on things, such as reading the newspaper or watching television?'
                                type="number"
                                required
                                InputProps={{
                                    inputProps: { min: 0, max: 3 }
                                }}
                            />
                            <TextField
                                value={phqAnswers.phqAnswer8}
                                fullWidth
                                className={globalStyle.input}
                                onChange={(e) => setPhqAnswers({ ...phqAnswers, phqAnswer8: e.target.value })}
                                label='Q8: Moving or speaking so slowly that other people could have noticed?'
                                type="number"
                                required
                                InputProps={{
                                    inputProps: { min: 0, max: 3 }
                                }}
                            />
                            <TextField
                                value={phqAnswers.phqAnswer9}
                                fullWidth
                                className={globalStyle.input}
                                onChange={(e) => setPhqAnswers({ ...phqAnswers, phqAnswer9: e.target.value })}
                                label='Q9: Thoughts that you would be better off dead, or thoughts of hurting yourself in some way?'
                                type="number"
                                required
                                InputProps={{
                                    inputProps: { min: 0, max: 3 }
                                }}
                            />
                            {/* just a way to keep things DRY again */}
                            <Box className={globalStyle.btnArea}>
                                <SubmitButton />
                                <CancelButton handleCancel={handleCancel} />
                            </Box>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </Grid>

    )
}
export default PHQ9Form;