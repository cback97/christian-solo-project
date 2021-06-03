import React, { useState } from 'react'
import globalUseStyle from '../GlobalImplementation/globalUseStyles';
import SubmitButton from '../GlobalImplementation/SubmitButton';
import CancelButton from '../GlobalImplementation/CancelButton';
import { useDispatch } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';




function GAD7Form() {
    const dispatch = useDispatch();
    const globalStyle = globalUseStyle();
    const [gadTotal, setGadTotal] = useState(0);
    const [reflection, setReflection] = useState('');



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


    const totalScore = (initStateGad) => initStateGad.values(initStateGad).reduce((a, b) => a + b);

    const addTotalScore = (scoreObj) => {
        let total = totalScore(scoreObj);
        return total;
    };

 

    const submitScores = (e) => {
        e.preventDefault();
        setGadTotal(addTotalScore(gadAnswers));
        dispatch({
            type: 'ADD_FORM',
            payload: { gad: gadTotal },
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

                        <Typography style={{ fontSize: 40 }} variant='overline'>GAD-7 FORM</Typography>
                        <form onSubmit={(e) => submitScores(e)} noValidate autoComplete='off' className={globalStyle.form}>

                            <TextField
                                value={gadAnswers.gadAnswer1}
                                fullWidth
                                className={globalStyle.input}
                                onChange={(e) => setGadAnswers({ ...gadAnswers, gadAnswer1: e.target.value })}
                                label='Q1: Feeling nervous, anxious or on edge?'
                                type="number"
                                required
                                InputProps={{
                                    inputProps: { min: 0, max: 3 }
                                }}
                            />
                            <TextField
                                value={gadAnswers.gadAnswer2}
                                fullWidth
                                className={globalStyle.input}
                                onChange={(e) => setGadAnswers({ ...gadAnswers, gadAnswer2: e.target.value })}
                                label='Q2: Not being able to stop or control worrying?'
                                type="number"
                                required
                                InputProps={{
                                    inputProps: { min: 0, max: 3 }
                                }}
                            />
                            <TextField
                                value={gadAnswers.gadAnswer3}
                                fullWidth
                                className={globalStyle.input}
                                onChange={(e) => setGadAnswers({ ...gadAnswers, gadAnswer3: e.target.value })}
                                label='Q3: Worrying too much about different things?'
                                type="number"
                                required
                                InputProps={{
                                    inputProps: { min: 0, max: 3 }
                                }}
                            />
                            <TextField
                                value={gadAnswers.gadAnswer4}
                                fullWidth
                                className={globalStyle.input}
                                onChange={(e) => setGadAnswers({ ...gadAnswers, gadAnswer4: e.target.value })}
                                label='Q4: Trouble relaxing?'
                                type="number"
                                required
                                InputProps={{
                                    inputProps: { min: 0, max: 3 }
                                }}
                            />
                            <TextField
                                value={gadAnswers.gadAnswer5}
                                fullWidth
                                className={globalStyle.input}
                                onChange={(e) => setGadAnswers({ ...gadAnswers, gadAnswer5: e.target.value })}
                                label='Q5: Being so restless that it is hard to sit still?'
                                type="number"
                                required
                                InputProps={{
                                    inputProps: { min: 0, max: 3 }
                                }}
                            />
                            <TextField
                                value={gadAnswers.gadAnswer6}
                                fullWidth
                                className={globalStyle.input}
                                onChange={(e) => setGadAnswers({ ...gadAnswers, gadAnswer6: e.target.value })}
                                label='Q6: Becoming easily annoyed or irritable?'
                                type="number"
                                required
                                InputProps={{
                                    inputProps: { min: 0, max: 3 }
                                }}
                            />
                            <TextField
                                value={gadAnswers.gadAnswer7}
                                fullWidth
                                className={globalStyle.input}
                                onChange={(e) => setGadAnswers({ ...gadAnswers, gadAnswer7: e.target.value })}
                                label='Q7: Feeling afraid as if something awful might happen?'
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

export default GAD7Form;

