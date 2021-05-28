import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react'

// MATERIAL UI IMPORTS
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';




function CheckIn() {
    // Call to SAGA()
    const dispatch = useDispatch();

    //Local States for capturing the form data 
    // const [phq9, setPhq9] = useState(0);
    // const [gad7, setGad7] = useState(0);
    const [reflection, setReflection] = useState('');

    // PHQ-9 SCORE STATES
    const [phq1, setPHQ1] = useState(0);
    const [phq2, setPHQ2] = useState(0);
    const [phq3, setPHQ3] = useState(0);
    const [phq4, setPHQ4] = useState(0);
    const [phq5, setPHQ5] = useState(0);
    const [phq6, setPHQ6] = useState(0);
    const [phq7, setPHQ7] = useState(0);
    const [phq8, setPHQ8] = useState(0);
    const [phqq9, setPHQ9] = useState(0);

    // GAD-7 SCORE STATES
    const [gad1, setGAD1] = useState(0);
    const [gad2, setGAD2] = useState(0);
    const [gad3, setGAD3] = useState(0);
    const [gad4, setGAD4] = useState(0);
    const [gad5, setGAD5] = useState(0);
    const [gad6, setGAD6] = useState(0);
    const [gadd7, setGAD7] = useState(0);


    function addThemTogether(event) {
        
        event.preventDefault();

        let totalPhq9= phq1 + phq2 + phq3 + phq4 + phq5 + phq6 + phq7 + phq8 + phqq9;
        let totalGad7= gad1 + gad2 + gad3 + gad4 + gad5 + gad6 + gadd7;
        
        let today = new Date().toLocaleDateString()

        console.log(today)

        dispatch({ type: 'ADD_FORM', payload: {gad: totalGad7, phq: totalPhq9, reflection: reflection, dateSubmitted: today }})
        dispatch({type: 'GET_FORM'})
        // clear input fields
        setReflection('');

        // PHQ-9 SCORE STATES
        setPHQ1(0);
        setPHQ2(0);
        setPHQ3(0);
        setPHQ4(0);
        setPHQ5(0);
        setPHQ6(0);
        setPHQ7(0);
        setPHQ8(0);
        setPHQ9(0);

        // GAD-7 SCORE STATES
        setGAD1(0);
        setGAD2(0);
        setGAD3(0);
        setGAD4(0);
        setGAD5(0);
        setGAD6(0);
        setGAD7(0);
    }


    return (
        <>
            <form onSubmit={addThemTogether}>
                {/* START PHQ9 */}
                <header><h3>PHQ-9 FORM</h3></header>
                <div>
                    <p>
                        Q1: Little interest or pleasure in doing things?
                </p>
                    <input required type="number" min="0" max="3" value={phq1} onChange={(event) => setPHQ1(+event.target.value)} />
                    <p>
                        Q2: Feeling down, depressed, or hopeless?
                </p>
                    <input required type="number" min="0" max="3" value={phq2} onChange={(event) => setPHQ2(+event.target.value)} />
                    <p>
                        Q3: Trouble falling or staying asleep, or sleeping too much?
                </p>
                    <input required type="number" min="0" max="3" value={phq3} onChange={(event) => setPHQ3(+event.target.value)} />
                    <p>
                        Q4: Feeling tired or having little energy?
                </p>
                    <input required type="number" min="0" max="3" value={phq4} onChange={(event) => setPHQ4(+event.target.value)} />
                    <p>
                        Q5: Poor appetite or overeating?
                </p>
                    <input required type="number" min="0" max="3" value={phq5} onChange={(event) => setPHQ5(+event.target.value)} />
                    <p>
                        Q6: Feeling bad about yourself — or that you are a failure or have let yourself or your family down?
                </p>
                    <input required type="number" min="0" max="3" value={phq6} onChange={(event) => setPHQ6(+event.target.value)} />
                    <p>
                        Q7: Trouble concentrating on things, such as reading the newspaper or watching television?
                </p>
                    <input required type="number" min="0" max="3" value={phq7} onChange={(event) => setPHQ7(+event.target.value)} />
                    <p>
                        Q8: Moving or speaking so slowly that other people could have noticed? Or so fidgety or restless that you have been moving a lot more than usual?
                </p>
                    <input required type="number" min="0" max="3" value={phq8} onChange={(event) => setPHQ8(+event.target.value)} />
                    <p>
                        Q9: Thoughts that you would be better off dead, or thoughts of hurting yourself in some way?
                </p>
                    <input required type="number" min="0" max="3" value={phqq9} onChange={(event) => setPHQ9(+event.target.value)} />
                    <br />


                </div>
                {/* END PHQ9 */}


                {/* START GAD 7 */}
                <header><h4>GAD-7 FORM</h4></header>
                <div>
                    <p>
                        Q1: Feeling nervous, anxious or on edge?
                </p>
                    <input required type="number" min="0" max="3" value={gad1} onChange={(event) => setGAD1(+event.target.value)} />
                    <p>
                        Q2: Not being able to stop or control worrying?
                </p>
                    <input required type="number" min="0" max="3" value={gad2} onChange={(event) => setGAD2(+event.target.value)} />
                    <p>
                        Q3: Worrying too much about different things?
                </p>
                    <input required type="number" min="0" max="3" value={gad3} onChange={(event) => setGAD3(+event.target.value)} />
                    <p>
                        Q4: Trouble relaxing?
                </p>
                    <input required type="number" min="0" max="3" value={gad4} onChange={(event) => setGAD4(+event.target.value)} />
                    <p>
                        Q5: Being so restless that it is hard to sit still?
                </p>
                    <input required type="number" min="0" max="3" value={gad5} onChange={(event) => setGAD5(+event.target.value)} />
                    <p>
                        Q6: Becoming easily annoyed or irritable?
                </p>
                    <input required type="number" min="0" max="3" value={gad6} onChange={(event) => setGAD6(+event.target.value)} />
                    <p>
                        Q7: Feeling afraid as if something awful might happen?
                </p>
                    <input required type="number" min="0" max="3" value={gadd7} onChange={(event) => setGAD7(+event.target.value)} />
                </div>
                {/* END START GAD 7 */}

                {/* START Reflections */}
                <div>
                    <TextField
                        id="outlined-multiline-static"
                        label="Reflections"
                        multiline
                        rows={7}
                        variant="outlined"
                        value={reflection} onChange={(event) => setReflection(event.target.value)}
                    />
                </div>

                {/* END Reflections */}
                <Button type="submit" variant='contained'> Submit Form Entries</Button>
            </form>

        </>
    )
}

export default CheckIn;