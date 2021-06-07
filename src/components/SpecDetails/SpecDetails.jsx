import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './SpecDetails.css'
import { Card, CardActionArea, CardContent, CardActions, Grid, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import globalUseStyle from '../GlobalImplementation/globalUseStyles';
import ClientHeaderComponent from '../GlobalImplementation/ClientHeaderComponent'
import { Button } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader'
import Container from '@material-ui/core/Container';
import { teal } from '@material-ui/core/colors';


function SpecsPage() {
    // STYLES
    const globalStyle = globalUseStyle();
    const specThemes = createMuiTheme({
        palette: {
            primary: {
              main: '#bbdefb',
            },
            secondary: {
              main: '#00bfa5',
            },
                     
    }})

    const {id} = useParams();

    // REDUCER
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
            <CssBaseline />
<ThemeProvider theme={specThemes}>
            {/* START HEADER */}
            <Grid container justify='center'>
                <ClientHeaderComponent globalStyle={globalStyle} />
            </Grid>
            <Container maxWidth="sm" component="main" className={globalStyle.pageHeader}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Selected Form
                </Typography>
            </Container>
            {/* END HEADER */}

            {/* BEGIN RENDERING SELECTED DATA */}
            {specReducer.map((spec) => {

                return (

                    <Container maxWidth="md" justify="center" component="main">

                     
                            <div key={spec.id} >
                                <Container maxWidth="sm" component="main" className={globalStyle.pageSubHeader}>
                                    <Typography variant="h2" component="h2">{spec.date_submitted}</Typography>
                                    <Typography variant="h3" component="h4">STATS OVERVIEW</Typography>
                                </Container>
                                <br />

                                <Grid container spacing={5}  justify="center" alignItems="flex-end">

                                    {/* START PHQ CARD */}
                                    <Grid item xs={12} sm={6} md={4} className={globalStyle.card}>
                                        <Card>
                                            <CardHeader
                                                title='PHQ-9 SCORE'
                                                titleTypographyProps={{ align: 'center' }}
                                                subheaderTypographyProps={{ align: 'center' }}
                                                className={globalStyle.cardHeader}
                                            />
                                            <CardContent style={{backgroundColor: '#0dd0d3'}}>
                                                <div className={globalStyle.cardBody}>
                                                    <Typography component="h2" variant="h6" color="textPrimary">
                                                        Score Interpretation
                                                    </Typography>
                                                </div>
                                                <ul className={globalStyle.ul}>
                                                    <Typography component="li" variant="subtitle1" align="center" >
                                                        0–4: Minimal Depression
                                                    </Typography>
                                                    <Typography component="li" variant="subtitle1" align="center" >
                                                        5-9: Mild Depression
                                                    </Typography>
                                                    <Typography component="li" variant="subtitle1" align="center" >
                                                        15-19: Moderate Depression
                                                    </Typography>
                                                    <Typography component="li" variant="subtitle1" align="center" >
                                                        20-27: Severe Depression
                                                    </Typography>
                                                </ul>
                                                <div>
                                                    <Typography component="h2" variant="h6" color="textPrimary">
                                                        Your Score
                                                    </Typography>
                                                </div>
                                                <div className={globalStyle.cardBody}>
                                                    <Typography component="h2" variant="subtitle1" color="textPrimary">
                                                        {spec.phq_form_score}
                                                    </Typography>
                                                </div>
                                            </CardContent>
                                            <CardActions style={{backgroundColor: '#0dd0d3'}}>
                                                <Button fullWidth variant='contained' color="primary" >
                                                    EDIT PHQ FORM
                                                 </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                    {/* END PHQ CARD */}

                                    {/* START GAD CARD */}
                                    <Grid item xs={12} sm={6} md={4} className={globalStyle.card}>
                                        <Card >
                                            <CardHeader
                                                title='GAD-7 SCORE'
                                                titleTypographyProps={{ align: 'center' }}
                                                subheaderTypographyProps={{ align: 'center' }}
                                                className={globalStyle.cardHeader}
                                            />
                                            <CardContent style={{backgroundColor: '#0dd0d3'}}>
                                                <div className={globalStyle.cardBody}>
                                                    <Typography component="h2" variant="h6" color="textPrimary">
                                                        Score Interpretation
                                                    </Typography>
                                                </div>
                                                <ul className={globalStyle.ul}>
                                                    <Typography component="li" variant="subtitle1" align="center" >
                                                        0–4: Minimal Anxiety
                                                    </Typography>
                                                    <Typography component="li" variant="subtitle1" align="center" >
                                                        5-9: Mild Anxiety
                                                    </Typography>
                                                    <Typography component="li" variant="subtitle1" align="center" >
                                                        10–14: Moderate Anxiety
                                                    </Typography>
                                                    <Typography component="li" variant="subtitle1" align="center" >
                                                        15–21: Severe Anxiety
                                                    </Typography>
                                                </ul>
                                                <div>
                                                    <Typography component="h2" variant="h6" color="textPrimary">
                                                        Your Score
                                                    </Typography>
                                                </div>
                                                <div className={globalStyle.cardBody}>
                                                    <Typography component="h2" variant="subtitle1" color="textPrimary">
                                                        {spec.gad_form_score}
                                                    </Typography>
                                                </div>
                                            </CardContent>
                                            <CardActions style={{backgroundColor: '#0dd0d3'}}>
                                                <Button fullWidth variant='contained' color="primary">
                                                    EDIT GAD FORM
                                                 </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                    {/* END GAD CARD */}

                                    {/* START REFLECTION CARD */}
                                    <Grid item xs={12} sm={6} md={6} className={globalStyle.card}>
                                        <Card >
                                            <CardHeader
                                                title='REFLECTION'
                                                titleTypographyProps={{ align: 'center' }}
                                                subheaderTypographyProps={{ align: 'center' }}
                                                className={globalStyle.cardHeader}
                                            />
                                            <CardContent style={{backgroundColor: '#0dd0d3'}}>
                                           
                                                <div>
                                                    <Container>
                                                        <Typography component="p" variant="subtitle1" align="center" >
                                                            {spec.reflections}
                                                        </Typography>
                                                    </Container>
                                                </div>
                                            </CardContent>
                                            <CardActions style={{backgroundColor: '#0dd0d3'}}>
                                                <Button fullWidth variant='contained' color="primary" >
                                                    EDIT REFLECTION
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                    {/* END REFLECTION CARD */}

                                </Grid>
                            </div>
                        
                    </Container>
                );
            })}
            </ThemeProvider >

        </div>
    )
}

export default SpecsPage;





