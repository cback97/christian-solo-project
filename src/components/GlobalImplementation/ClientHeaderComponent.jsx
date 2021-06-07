import { useHistory } from 'react-router-dom';
import { Card, CardActionArea, CardContent, Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


function ClientHeaderComponent({globalStyle}) {

    const history = useHistory();

    const homeRoute = () => {
        history.push('/user')
    }

    return (
        <Grid container justify='center'>
            {/* BACK TO HOME PAGE */}
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <CardActionArea >
                    <Card onClick={homeRoute} style={{ height: 125, textAlign: 'center' }}>
                        <CardContent justify='center'>
                            <Container>
                            <Typography className={globalStyle.navCard} variant='body1'> Back To Home Page </Typography>
                            </Container>
                        </CardContent>
                    </Card>
                </CardActionArea>
            </Grid >
            {/* END BACK TO HOME PAGE  */}

            {/*  PROVIDER CONTACT INFO  */}
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <CardActionArea>
                    <Card style={{ height: 125, textAlign: 'center' }}>
                        <CardContent>
                            <Typography className={globalStyle.midNavCard} variant='body1'>  Dr. Sandman <br />Email: therapist@help.com<br />Phone: 777-777-7777 </Typography>
                        </CardContent>
                    </Card>
                </CardActionArea>
            </Grid >
            {/* END PROVIDER CONTACT INFO  */}

            {/*  EMERGENCY CONTACT INFO  */}
            <Grid xs={12} sm={6} md={4} lg={4} xl={4}>
                <CardActionArea>
                    <Card style={{ height: 125, textAlign: 'center' }}>
                        <CardContent>
                            <Typography className={globalStyle.navCard} variant='body1'>  EMERGENCY LIFE LINE PHONE <br /> Phone: 800-273-8255 </Typography>
                        </CardContent>
                    </Card>
                </CardActionArea>
            </Grid >
            {/* END EMERGENCY CONTACT INFO  */}
        </Grid>
    )
}

export default ClientHeaderComponent;