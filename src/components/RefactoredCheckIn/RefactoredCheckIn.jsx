import React, { useState } from 'react'
import globalUseStyle from '../GlobalImplementation/globalUseStyles';
import SubmitButton from '../GlobalImplementation/SubmitButton';
import CancelButton from '../GlobalImplementation/CancelButton';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';




function RefactoredCheckIn() {
    const dispatch = useDispatch();
    const history = useHistory();
    const globalStyle = globalUseStyle();
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


    const GadAdd = (obj) => Object.values(obj).reduce((a, b) => a + b);
    const PhqAdd = (obj) => Object.values(obj).reduce((a, b) => a + b);

    const PhqScore = PhqAdd(phqAnswers);
    const GadScore = GadAdd(gadAnswers);
    let today = new Date().toLocaleDateString()


    const submitScores = (e) => {
        e.preventDefault();
        // SEND DISPATCH TO POST into DB
        dispatch({
            type: 'ADD_FORM',
            payload: { gad: GadScore, phq: PhqScore, reflection: reflection, dateSubmitted: today },
        });
        // SEND DISPATCH TO RENDER DATA ON USER STATS PAGE
        dispatch({ type: 'GET_FORM' })


        // PUSH TO USER HOME PAGE
        history.push('/user')
        // EMPTY STATES
        setReflection('');
        setPhqAnswers(initStatePhq);
        setGadAnswers(initStateGad);
    };

    // SAMPLE FUNCTION FOR EDIT LATER
    // const handleInputChangeFor = (propertyName) => (e) => {
    //     setPhqAnswers({
    //         ...phqAnswers,
    //         [propertyName]: e.target.value,
    //     });
    // };

    const handleCancel = () => {
        setReflection('');
        setPhqAnswers(initStatePhq);
        setGadAnswers(initStateGad);
        // history.push('/user')
    }

    return (

        <Grid container justify='center' alignContent='center'>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Grid container justify='center'>


                    <div className={globalStyle.paper}>
                        {/* PHQ FORM QUESTIONS */}
                        <Typography style={{ fontSize: 40 }} variant='overline'>PHQ-9 FORM</Typography>
                        <form onSubmit={(e) => submitScores(e)} noValidate autoComplete='off' className={globalStyle.form}>

                            <TextField
                                value={phqAnswers.phqAnswer1}
                                fullWidth
                                className={globalStyle.input}
                                onChange={(e) => setPhqAnswers({ ...phqAnswers, phqAnswer1: +e.target.value })}
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
                                onChange={(e) => setPhqAnswers({ ...phqAnswers, phqAnswer2: +e.target.value })}
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
                                onChange={(e) => setPhqAnswers({ ...phqAnswers, phqAnswer3: +e.target.value })}
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
                                onChange={(e) => setPhqAnswers({ ...phqAnswers, phqAnswer4: +e.target.value })}
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
                                onChange={(e) => setPhqAnswers({ ...phqAnswers, phqAnswer5: +e.target.value })}
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
                                onChange={(e) => setPhqAnswers({ ...phqAnswers, phqAnswer6: +e.target.value })}
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
                                onChange={(e) => setPhqAnswers({ ...phqAnswers, phqAnswer7: +e.target.value })}
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
                                onChange={(e) => setPhqAnswers({ ...phqAnswers, phqAnswer8: +e.target.value })}
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
                                onChange={(e) => setPhqAnswers({ ...phqAnswers, phqAnswer9: +e.target.value })}
                                label='Q9: Thoughts that you would be better off dead, or thoughts of hurting yourself in some way?'
                                type="number"
                                required
                                InputProps={{
                                    inputProps: { min: 0, max: 3 }
                                }}
                            />
                            {/* END PHQ FORM QUESTIONS */}

                            {/* START GAD FORM QUESTIONS */}
                            <Grid container justify='center'>
                                <Typography style={{ fontSize: 40 }} variant='overline'>GAD-7 FORM</Typography>


                                <TextField
                                    value={gadAnswers.gadAnswer1}
                                    fullWidth
                                    className={globalStyle.input}
                                    onChange={(e) => setGadAnswers({ ...gadAnswers, gadAnswer1: +e.target.value })}
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
                                    onChange={(e) => setGadAnswers({ ...gadAnswers, gadAnswer2: +e.target.value })}
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
                                    onChange={(e) => setGadAnswers({ ...gadAnswers, gadAnswer3: +e.target.value })}
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
                                    onChange={(e) => setGadAnswers({ ...gadAnswers, gadAnswer4: +e.target.value })}
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
                                    onChange={(e) => setGadAnswers({ ...gadAnswers, gadAnswer5: +e.target.value })}
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
                                    onChange={(e) => setGadAnswers({ ...gadAnswers, gadAnswer6: +e.target.value })}
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
                                    onChange={(e) => setGadAnswers({ ...gadAnswers, gadAnswer7: +e.target.value })}
                                    label='Q7: Feeling afraid as if something awful might happen?'
                                    type="number"
                                    required
                                    InputProps={{
                                        inputProps: { min: 0, max: 3 }
                                    }}
                                />
                            </Grid>
                            {/* END GAD FORM QUESTIONS */}

                            {/* START REFLECTIONS */}
                            <Grid container justify='center'>
                                <Typography style={{ fontSize: 40 }} variant='overline'>REFLECTIONS</Typography>
                                <TextField
                                    variant="outlined"
                                    value={reflection}
                                    multiline
                                    rows="10"
                                    cols="10"
                                    fullWidth
                                    className={globalStyle.reflection}
                                    onChange={(e) => setReflection(e.target.value)}
                                    label='your reflection goes here'
                                    required

                                />
                            </Grid>

                            {/* END REFLECTIONS */}

                            <Box className={globalStyle.btnArea}>
                                <SubmitButton onSubmit={submitScores} />
                                <CancelButton handleCancel={handleCancel} />
                            </Box>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </Grid>


    )
}

export default RefactoredCheckIn;